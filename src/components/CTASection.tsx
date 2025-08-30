import React from 'react'

const CTASection: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-brand-navy via-brand-navy to-blue-900 text-white relative overflow-hidden">
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width=\\"60\\" height=\\"60\\" viewBox=\\"0 0 60 60\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cg fill=\\"none\\" fill-rule=\\"evenodd\\"%3E%3Cg fill=\\"%23ffffff\\" fill-opacity=\\"0.05\\"%3E%3Ccircle cx=\\"30\\" cy=\\"30\\" r=\\"2\\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30'></div>
      
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight font-montserrat">
          Start Optimizing
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-purple">
            Customer Journeys Today
          </span>
        </h2>
        
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join hundreds of companies using CustomerPath to boost conversions and reduce churn.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <a href="#signup" className="group bg-brand-teal hover:bg-brand-teal/90 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center">
            Start Your Free Trial
            <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
          
          <a href="#pricing" className="group border-2 border-white/30 text-white hover:bg-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all inline-flex items-center justify-center backdrop-blur-sm">
            See Pricing
            <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-blue-200">
          <div className="flex items-center">
            <svg className="h-5 w-5 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>7-day free trial</span>
          </div>
          <div className="flex items-center">
            <svg className="h-5 w-5 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTASection