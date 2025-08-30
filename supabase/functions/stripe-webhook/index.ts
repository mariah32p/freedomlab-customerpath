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
      console.error('Stripe webhook secret not configured')
      throw new Error('Stripe webhook secret not configured')
    }

    // Get the raw body and signature
    const body = await req.text()
    const signature = req.headers.get('stripe-signature')

    if (!signature) {
      console.error('No Stripe signature found')
      throw new Error('No Stripe signature found')
    }

    // Parse the event
    const event = JSON.parse(body)
    console.log('=== WEBHOOK EVENT ===')
    console.log('Event type:', event.type)
    console.log('Event ID:', event.id)

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        const userId = session.metadata?.user_id
        const plan = session.metadata?.plan || 'basic'

        console.log('=== CHECKOUT COMPLETED ===')
        console.log('User ID:', userId)
        console.log('Plan:', plan)
        console.log('Customer ID:', session.customer)
        console.log('Customer Email:', session.customer_email || session.customer_details?.email)

        if (!userId) {
          console.error('No user_id in session metadata')
          break
        }

        // Update profile with customer info and set to incomplete initially
        const profileUpdate = {
          id: userId,
          email: session.customer_email || session.customer_details?.email,
          plan: plan,
          customer_id: session.customer,
          subscription_status: 'incomplete',
          updated_at: new Date().toISOString()
        }

        console.log('Updating profile with:', profileUpdate)

        const { error: profileError } = await supabaseClient
          .from('profiles')
          .upsert(profileUpdate)

        if (profileError) {
          console.error('Error updating profile:', profileError)
        } else {
          console.log('Profile updated successfully')
        }

        // Store in stripe_customers table
        const customerData = {
          user_id: userId,
          customer_id: session.customer,
          updated_at: new Date().toISOString()
        }

        console.log('Storing customer data:', customerData)

        const { error: customerError } = await supabaseClient
          .from('stripe_customers')
          .upsert(customerData)

        if (customerError) {
          console.error('Error storing customer:', customerError)
        } else {
          console.log('Customer stored successfully')
        }

        break
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object
        const customerId = subscription.customer

        console.log('=== SUBSCRIPTION EVENT ===')
        console.log('Event type:', event.type)
        console.log('Customer ID:', customerId)
        console.log('Subscription ID:', subscription.id)
        console.log('Status:', subscription.status)
        console.log('Trial end:', subscription.trial_end)
        console.log('Current period end:', subscription.current_period_end)

        // Find user by customer_id
        const { data: customer, error: customerLookupError } = await supabaseClient
          .from('stripe_customers')
          .select('user_id')
          .eq('customer_id', customerId)
          .single()

        if (customerLookupError || !customer) {
          console.error('Customer not found for ID:', customerId, customerLookupError)
          break
        }

        console.log('Found user ID:', customer.user_id)

        // Calculate dates
        let trialEndsAt = null
        let currentPeriodEnd = null

        if (subscription.trial_end) {
          trialEndsAt = new Date(subscription.trial_end * 1000).toISOString()
          console.log('Trial ends at:', trialEndsAt)
        }

        if (subscription.current_period_end) {
          currentPeriodEnd = new Date(subscription.current_period_end * 1000).toISOString()
          console.log('Current period ends at:', currentPeriodEnd)
        }

        // Update profile with subscription details
        const profileUpdate = {
          subscription_status: subscription.status,
          subscription_id: subscription.id,
          trial_ends_at: trialEndsAt,
          current_period_end: currentPeriodEnd,
          payment_issue_since: null, // Clear any previous payment issues
          updated_at: new Date().toISOString()
        }

        console.log('Updating profile with subscription data:', profileUpdate)

        const { error: profileError } = await supabaseClient
          .from('profiles')
          .update(profileUpdate)
          .eq('id', customer.user_id)

        if (profileError) {
          console.error('Error updating profile subscription:', profileError)
        } else {
          console.log('Profile subscription updated successfully')
        }

        // Store in stripe_subscriptions table
        const subscriptionData = {
          customer_id: customerId,
          subscription_id: subscription.id,
          price_id: subscription.items.data[0]?.price?.id,
          current_period_start: subscription.current_period_start || null,
          current_period_end: subscription.current_period_end || null,
          cancel_at_period_end: subscription.cancel_at_period_end || false,
          status: subscription.status,
          updated_at: new Date().toISOString()
        }

        console.log('Storing subscription data:', subscriptionData)

        const { error: subscriptionError } = await supabaseClient
          .from('stripe_subscriptions')
          .upsert(subscriptionData)

        if (subscriptionError) {
          console.error('Error storing subscription:', subscriptionError)
        } else {
          console.log('Subscription stored successfully')
        }

        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object
        const customerId = invoice.customer

        console.log('=== PAYMENT FAILED ===')
        console.log('Customer ID:', customerId)

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
        } else {
          console.log('Profile updated for payment failure')
        }

        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        const customerId = subscription.customer

        console.log('=== SUBSCRIPTION CANCELED ===')
        console.log('Customer ID:', customerId)

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
        } else {
          console.log('Profile updated for cancellation')
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