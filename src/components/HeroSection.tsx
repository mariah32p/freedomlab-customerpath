import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-brand-navy via-brand-navy to-blue-900 text-white overflow-hidden min-h-screen flex items-center">
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width=\\"60\\" height=\\"60\\" viewBox=\\"0 0 60 60\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cg fill=\\"none\\" fill-rule=\\"evenodd\\"%3E%3Cg fill=\\"%23ffffff\\" fill-opacity=\\"0.03\\"%3E%3Ccircle cx=\\"30\\" cy=\\"30\\" r=\\"2\\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20'></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-brand-teal/10 border border-brand-teal/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-brand-teal rounded-full mr-2 animate-pulse"></span>
              <span className="text-brand-teal text-sm font-medium">Now Available</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight font-montserrat">
              Visualize Every
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-purple">
                Customer Journey
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Track touchpoints, optimize conversions, and map your entire customer lifecycle with visual precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#signup" className="group bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center">
                Start Free Trial
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
              <a href="#pricing" className="group border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all inline-flex items-center justify-center">
                See Pricing
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start mt-8 text-blue-200 text-sm">
              <svg className="h-4 w-4 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>7-day free trial</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-600 font-medium ml-4">CustomerPath Dashboard</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="bg-brand-teal text-white px-3 py-1 rounded text-xs font-medium">Export</button>
                    <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded text-xs font-medium">Share</button>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-brand-navy mb-2">Sample Customer Journey</h3>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">Preview</span>
                      <span>Journey visualization example</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                        <div>
                          <span className="font-semibold text-brand-navy">Awareness</span>
                          <p className="text-xs text-gray-500">Discovery phase</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between bg-brand-teal/10 p-4 rounded-xl border border-brand-teal/20">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-brand-teal rounded-full mr-3"></div>
                        <div>
                          <span className="font-semibold text-brand-navy">Consideration</span>
                          <p className="text-xs text-gray-500">Evaluation phase</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between bg-purple-50 p-4 rounded-xl border border-purple-100">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-brand-purple rounded-full mr-3"></div>
                        <div>
                          <span className="font-semibold text-brand-navy">Decision</span>
                          <p className="text-xs text-gray-500">Purchase phase</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection