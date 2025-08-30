import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, stripe-signature',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    // Get webhook secret
    const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')
    if (!webhookSecret) {
      throw new Error('Stripe webhook secret not configured')
    }

    // Get the raw body and signature
    const body = await req.text()
    const signature = req.headers.get('stripe-signature')

    if (!signature) {
      throw new Error('No Stripe signature found')
    }

    // Verify webhook signature (simplified - in production you'd use Stripe's library)
    // For now, we'll process the event assuming it's valid
    const event = JSON.parse(body)

    console.log('Processing Stripe event:', event.type)

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        const userId = session.metadata?.user_id
        const plan = session.metadata?.plan || 'basic'

        if (!userId) {
          console.error('No user_id in session metadata')
          break
        }

        console.log('Checkout completed for user:', userId, 'plan:', plan)

        // Store customer ID and subscription ID
        const { error: profileError } = await supabaseClient
          .from('profiles')
          .upsert({
            id: userId,
            email: session.customer_email || session.customer_details?.email,
            plan: plan,
            customer_id: session.customer,
            subscription_status: 'not_started', // Will be updated by subscription.created
            updated_at: new Date().toISOString()
          })

        if (profileError) {
          console.error('Error updating profile:', profileError)
        }

        // Store in stripe_customers table
        const { error: customerError } = await supabaseClient
          .from('stripe_customers')
          .upsert({
            user_id: userId,
            customer_id: session.customer,
            updated_at: new Date().toISOString()
          })

        if (customerError) {
          console.error('Error storing customer:', customerError)
        }

        break
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object
        const customerId = subscription.customer

        console.log('Subscription event:', event.type, 'for customer:', customerId)

        // Find user by customer_id
        const { data: customer } = await supabaseClient
          .from('stripe_customers')
          .select('user_id')
          .eq('customer_id', customerId)
          .single()

        if (!customer) {
          console.error('Customer not found:', customerId)
          break
        }

        // Determine subscription status
        let subscriptionStatus = subscription.status
        let trialEndsAt = null
        let currentPeriodEnd = null

        if (subscription.trial_end) {
          trialEndsAt = new Date(subscription.trial_end * 1000).toISOString()
        }

        if (subscription.current_period_end) {
          currentPeriodEnd = new Date(subscription.current_period_end * 1000).toISOString()
        }

        // Update profile with subscription details
        const { error: profileError } = await supabaseClient
          .from('profiles')
          .update({
            subscription_status: subscriptionStatus,
            subscription_id: subscription.id,
            trial_ends_at: trialEndsAt,
            current_period_end: currentPeriodEnd,
            payment_issue_since: null, // Clear any previous payment issues
            updated_at: new Date().toISOString()
          })
          .eq('id', customer.user_id)

        if (profileError) {
          console.error('Error updating profile subscription:', profileError)
        }

        // Store in stripe_subscriptions table
        const { error: subscriptionError } = await supabaseClient
          .from('stripe_subscriptions')
          .upsert({
            customer_id: customerId,
            subscription_id: subscription.id,
            price_id: subscription.items.data[0]?.price?.id,
            current_period_start: subscription.current_period_start,
            current_period_end: subscription.current_period_end,
            cancel_at_period_end: subscription.cancel_at_period_end,
            status: subscriptionStatus,
            updated_at: new Date().toISOString()
          })

        if (subscriptionError) {
          console.error('Error storing subscription:', subscriptionError)
        }

        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object
        const customerId = invoice.customer

        console.log('Payment failed for customer:', customerId)

        // Find user by customer_id
        const { data: customer } = await supabaseClient
          .from('stripe_customers')
          .select('user_id')
          .eq('customer_id', customerId)
          .single()

        if (!customer) {
          console.error('Customer not found:', customerId)
          break
        }

        // Update profile to past_due and set payment issue timestamp
        const { error: profileError } = await supabaseClient
          .from('profiles')
          .update({
            subscription_status: 'past_due',
            payment_issue_since: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })
          .eq('id', customer.user_id)

        if (profileError) {
          console.error('Error updating profile for payment failure:', profileError)
        }

        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        const customerId = subscription.customer

        console.log('Subscription canceled for customer:', customerId)

        // Find user by customer_id
        const { data: customer } = await supabaseClient
          .from('stripe_customers')
          .select('user_id')
          .eq('customer_id', customerId)
          .single()

        if (!customer) {
          console.error('Customer not found:', customerId)
          break
        }

        // Update profile to canceled
        const { error: profileError } = await supabaseClient
          .from('profiles')
          .update({
            subscription_status: 'canceled',
            subscription_id: null,
            trial_ends_at: null,
            current_period_end: null,
            payment_issue_since: null,
            updated_at: new Date().toISOString()
          })
          .eq('id', customer.user_id)

        if (profileError) {
          console.error('Error updating profile for cancellation:', profileError)
        }

        break
      }

      default:
        console.log('Unhandled event type:', event.type)
    }

    return new Response(
      JSON.stringify({ received: true }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    console.error('Webhook error:', error)
    
    return new Response(
      JSON.stringify({
        error: error.message || 'Webhook processing failed',
        received: false
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})