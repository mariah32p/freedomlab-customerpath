import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brand-navy via-brand-navy to-brand-purple overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-brand-teal/30">
              <span className="w-2 h-2 bg-brand-teal rounded-full mr-2 animate-pulse"></span>
              Now Available - 7-Day Free Trial
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Visualize Every
              <span className="block bg-gradient-to-r from-brand-teal to-cyan-400 bg-clip-text text-transparent">
                Customer Journey
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Map touchpoints, track conversions, and optimize your entire customer lifecycle with powerful visual tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
                Start Free Trial
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm">
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-blue-200">
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                No credit card required
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Cancel anytime
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Browser Header */}
              <div className="bg-gray-50 px-6 py-4 border-b flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600 font-medium ml-4">app.customerpath.com</span>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-brand-navy">Customer Journey: E-commerce Funnel</h3>
                  <div className="flex space-x-2">
                    <button className="bg-brand-teal text-white px-3 py-1 rounded text-xs font-medium">Export</button>
                    <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded text-xs font-medium">Share</button>
                  </div>
                </div>
                
                {/* Journey Steps */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div>
                        <span className="font-semibold text-brand-navy">Landing Page Visit</span>
                        <p className="text-xs text-gray-500">1,247 visitors</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-brand-navy">85%</div>
                      <div className="text-xs text-gray-500">conversion</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-brand-teal/10 p-4 rounded-lg border border-brand-teal/20">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div>
                        <span className="font-semibold text-brand-navy">Product Demo</span>
                        <p className="text-xs text-gray-500">1,060 viewers</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-brand-navy">62%</div>
                      <div className="text-xs text-gray-500">conversion</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-purple-50 p-4 rounded-lg border border-purple-100">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <div>
                        <span className="font-semibold text-brand-navy">Trial Signup</span>
                        <p className="text-xs text-gray-500">657 signups</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-brand-navy">45%</div>
                      <div className="text-xs text-gray-500">conversion</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg border border-green-100">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">4</span>
                      </div>
                      <div>
                        <span className="font-semibold text-brand-navy">Paid Conversion</span>
                        <p className="text-xs text-gray-500">296 customers</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-600">$47k</div>
                      <div className="text-xs text-gray-500">revenue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-brand-teal text-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold animate-pulse">
              Live Data
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-lg text-sm text-gray-600">
              Real-time Updates
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection