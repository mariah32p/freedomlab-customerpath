import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface CheckoutRequest {
  plan: 'basic' | 'pro'
  trial?: boolean
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    // Get the authorization header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      throw new Error('No authorization header')
    }

    // Get the user from the auth header
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser(
      authHeader.replace('Bearer ', '')
    )

    if (authError || !user) {
      throw new Error('Invalid authentication')
    }

    // Parse request body
    const { plan, trial = true }: CheckoutRequest = await req.json()

    // Get Stripe secret key from environment
    const stripeSecretKey = Deno.env.get('STRIPE_SECRET_KEY')
    if (!stripeSecretKey) {
      throw new Error('Stripe secret key not configured')
    }

    // Determine price ID based on plan
    const priceId = plan === 'basic' 
      ? Deno.env.get('STRIPE_BASIC_PRICE_ID') 
      : Deno.env.get('STRIPE_PRO_PRICE_ID')

    if (!priceId) {
      throw new Error(`Price ID not configured for ${plan} plan`)
    }

    // Create Stripe checkout session
    const checkoutData = {
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${Deno.env.get('SUPABASE_URL')}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${Deno.env.get('SUPABASE_URL')}/get-started`,
      customer_email: user.email,
      metadata: {
        user_id: user.id,
        plan: plan,
      },
    }

    // Add trial period if requested
    if (trial) {
      checkoutData.subscription_data = {
        trial_period_days: 7,
        metadata: {
          user_id: user.id,
          plan: plan,
        },
      }
    }

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stripeSecretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(checkoutData).toString(),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Stripe API error: ${errorText}`)
    }

    const session = await response.json()

    return new Response(
      JSON.stringify({
        success: true,
        url: session.url,
        session_id: session.id
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    console.error('Error creating checkout session:', error)
    
    return new Response(
      JSON.stringify({
        error: error.message || 'Failed to create checkout session',
        success: false
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})