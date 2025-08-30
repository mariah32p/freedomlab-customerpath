import React from 'react'

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-navy mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with a 7-day free trial. No setup fees, cancel anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Basic</h3>
              <div className="text-5xl font-bold text-brand-navy mb-2">
                $29<span className="text-xl font-normal text-gray-500">/month</span>
              </div>
              <p className="text-gray-600">Perfect for small teams</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-brand-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">1 customer journey map</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-brand-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Up to 100 customers tracked</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-brand-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Basic analytics dashboard</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-brand-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Export to PNG/PDF</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-brand-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Email support</span>
              </div>
            </div>

            <button className="w-full bg-gray-100 hover:bg-gray-200 text-brand-navy py-4 rounded-lg font-semibold text-lg transition-all border-2 border-gray-200 hover:border-gray-300">
              Start Free Trial
            </button>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-brand-teal">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-brand-teal text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Pro</h3>
              <div className="text-5xl font-bold text-brand-navy mb-2">
                $49<span className="text-xl font-normal text-gray-500">/month</span>
              </div>
              <p className="text-gray-600">For growing teams</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-brand-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Unlimited journey maps</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-brand-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Up to 1,000 customers tracked</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-brand-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Advanced analytics & AI insights</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-brand-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">API access & integrations</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-brand-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Priority support & training</span>
              </div>
            </div>

            <button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include a 7-day free trial. No credit card required to start.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PricingSection