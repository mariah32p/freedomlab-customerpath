import React from 'react'

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-navy text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Ready to Optimize Your
          <span className="block text-brand-teal">Customer Journeys?</span>
        </h2>
        
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join hundreds of companies using CustomerPath to increase conversions and reduce churn.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-10 py-5 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl">
            Start Your Free Trial
          </button>
          
          <button className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-5 rounded-lg font-semibold text-lg transition-all">
            Schedule Demo
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-blue-200 text-sm">
          <div className="flex items-center">
            <svg className="h-4 w-4 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>7-day free trial</span>
          </div>
          <div className="flex items-center">
            <svg className="h-4 w-4 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center">
            <svg className="h-4 w-4 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection