import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { useAuth } from '../hooks/useAuth'

const GetStartedPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'pro'>('pro')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleStartTrial = async () => {
    setIsLoading(true)
    
    try {
      // TODO: Create Stripe Checkout Session with trial
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan: selectedPlan,
          trial: true
        })
      })

      const { url } = await response.json()
      
      if (url) {
        // Redirect to Stripe Checkout
        window.location.href = url
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-purple/20 font-montserrat">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Choose Your Plan
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Start your 7-day free trial. Your card will be collected but not charged until the trial ends.
            </p>
          </div>

          {/* Plan Selection */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Basic Plan */}
            <div 
              className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border cursor-pointer transition-all duration-300 ${
                selectedPlan === 'basic' 
                  ? 'border-brand-teal shadow-2xl scale-105' 
                  : 'border-white/20 hover:border-white/40'
              }`}
              onClick={() => setSelectedPlan('basic')}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
                  <div className="text-4xl font-bold text-white">
                    $29<span className="text-lg font-normal text-white/70">/month</span>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedPlan === 'basic' 
                    ? 'border-brand-teal bg-brand-teal' 
                    : 'border-white/40'
                }`}>
                  {selectedPlan === 'basic' && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-white/90">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Up to 3 customer journey maps</span>
                </div>
                <div className="flex items-center text-white/90">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Up to 1,000 customers tracked</span>
                </div>
                <div className="flex items-center text-white/90">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Basic analytics dashboard</span>
                </div>
                <div className="flex items-center text-white/90">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Export to PNG/PDF</span>
                </div>
                <div className="flex items-center text-white/90">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Email support</span>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div 
              className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border cursor-pointer transition-all duration-300 relative ${
                selectedPlan === 'pro' 
                  ? 'border-brand-teal shadow-2xl scale-105' 
                  : 'border-white/20 hover:border-white/40'
              }`}
              onClick={() => setSelectedPlan('pro')}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-teal text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </span>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                  <div className="text-4xl font-bold text-white">
                    $49<span className="text-lg font-normal text-white/70">/month</span>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedPlan === 'pro' 
                    ? 'border-brand-teal bg-brand-teal' 
                    : 'border-white/40'
                }`}>
                  {selectedPlan === 'pro' && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-white/90">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited journey maps</span>
                </div>
                <div className="flex items-center text-white/90">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Up to 10,000 customers tracked</span>
                </div>
                <div className="flex items-center text-white/90">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Advanced analytics & AI insights</span>
                </div>
                <div className="flex items-center text-white/90">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>API access & integrations</span>
                </div>
                <div className="flex items-center text-white/90">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Priority support & training</span>
                </div>
              </div>
            </div>
          </div>

          {/* Start Trial Button */}
          <div className="text-center">
            <button
              onClick={handleStartTrial}
              disabled={isLoading}
              className="bg-brand-teal hover:bg-brand-teal/90 disabled:bg-brand-teal/50 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl disabled:transform-none disabled:cursor-not-allowed"
            >
              {isLoading ? 'Setting up your trial...' : 'Start 7-Day Trial'}
            </button>
            
            <p className="text-white/60 mt-4 text-sm">
              {selectedPlan === 'basic' ? '$29' : '$49'}/month after trial • Cancel anytime
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center space-x-8 text-white/60 text-sm">
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure Payment Processing
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                7-Day Free Trial
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Cancel Anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStartedPage