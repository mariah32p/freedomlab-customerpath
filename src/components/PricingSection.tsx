import React from 'react'

const PricingSection: React.FC = () => {
  return (
    <div id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-brand-navy mb-6 font-montserrat">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free, scale as you grow. No setup fees, cancel anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Basic</h3>
              <div className="text-5xl font-black text-brand-navy mb-2">
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
                <span className="text-gray-700">Basic analytics</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-brand-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Export to PNG/PDF</span>
              </div>
            </div>

            <a href="#signup" className="group w-full text-center p-6 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-brand-navy to-blue-800 hover:from-brand-navy/90 hover:to-blue-800/90 text-white flex items-center justify-center space-x-2">
              <span>Start Free Trial</span>
              <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-gradient-to-br from-brand-navy to-blue-900 rounded-3xl p-8 shadow-2xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-brand-teal to-brand-purple text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-5xl font-black mb-2">
                $49<span className="text-xl font-normal text-blue-200">/month</span>
              </div>
              <p className="text-blue-100">For growing teams</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-brand-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-blue-100">Unlimited journey maps</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-brand-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-blue-100">Up to 500 customers tracked</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-brand-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-blue-100">Advanced analytics & insights</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-brand-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-blue-100">CSV import/export</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-brand-teal mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-blue-100">Priority support</span>
              </div>
            </div>

            <a href="#signup" className="group w-full text-center p-6 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-brand-teal to-brand-teal/90 hover:from-brand-teal/90 hover:to-brand-teal text-white flex items-center justify-center space-x-2">
              <span>Start Free Trial</span>
              <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingSection