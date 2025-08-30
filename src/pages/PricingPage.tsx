import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Header />
      
      {/* Pricing Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-purple/20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-brand-teal to-cyan-300 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            Start with a 7-day free trial. Scale as you grow. Cancel anytime.
          </p>
          
          <div className="inline-flex items-center bg-brand-teal/20 text-brand-teal px-6 py-3 rounded-full text-sm font-semibold border border-brand-teal/30">
            <span className="w-2 h-2 bg-brand-teal rounded-full mr-2 animate-pulse"></span>
            All plans include 7-day free trial
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-brand-navy mb-4">Basic</h3>
                <div className="text-6xl font-bold text-brand-navy mb-4">
                  $29<span className="text-2xl font-normal text-gray-500">/month</span>
                </div>
                <p className="text-lg text-gray-600">Perfect for small teams getting started</p>
              </div>

              <div className="space-y-5 mb-10">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Up to 3 customer journey maps</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Up to 1,000 customers tracked</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Basic analytics dashboard</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Export to PNG/PDF</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Email support</span>
                </div>
              </div>

              <button className="w-full bg-gray-100 hover:bg-gray-200 text-brand-navy py-5 rounded-xl font-semibold text-lg transition-all border-2 border-gray-200 hover:border-gray-300">
                Start Free Trial
              </button>
            </div>

            {/* Pro Plan */}
            <div className="relative bg-white p-10 rounded-3xl shadow-2xl border-2 border-brand-teal">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-teal text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-brand-navy mb-4">Pro</h3>
                <div className="text-6xl font-bold text-brand-navy mb-4">
                  $49<span className="text-2xl font-normal text-gray-500">/month</span>
                </div>
                <p className="text-lg text-gray-600">For growing teams that need more power</p>
              </div>

              <div className="space-y-5 mb-10">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Unlimited journey maps</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Up to 10,000 customers tracked</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Advanced analytics & AI insights</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">API access & integrations</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Priority support & training</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-brand-teal mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-lg">Custom integrations & white-label</span>
                </div>
              </div>

              <button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white py-5 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-xl">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to See Where Your
            <span className="block text-brand-teal">Customers Really Go?</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of teams using CustomerPath to boost conversions and reduce churn.
          </p>
          
          <Link to="/signup" className="bg-brand-teal hover:bg-brand-teal/90 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl inline-block">
            Start Free Trial
          </Link>
          
          <p className="text-white/60 mt-6">7-day free trial • Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}

export default PricingPage