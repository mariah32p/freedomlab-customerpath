import React from 'react'
import Header from '../components/Header'

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-purple/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-brand-teal/20 text-brand-teal px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-brand-teal/30">
                <span className="w-2 h-2 bg-brand-teal rounded-full mr-2 animate-pulse"></span>
                7-Day Free Trial Available
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Turn Customer Data Into
                <span className="block bg-gradient-to-r from-brand-teal to-cyan-300 bg-clip-text text-transparent">
                  Visual Insights
                </span>
              </h1>
              
              <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Stop guessing where customers drop off. See exactly what's happening at every step of your funnel with beautiful, actionable journey maps.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  Start Free Trial
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all backdrop-blur-sm">
                  See Pricing
                </button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-white/70">
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Cancel anytime
                </div>
              </div>
            </div>

            {/* Right Column - Quick Journey Preview */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-white">E-commerce Funnel</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/80 text-sm font-medium">Live</span>
                  </div>
                </div>
                
                {/* Simplified 3-Step Journey */}
                <div className="space-y-6">
                  {/* Stage 1: Discovery */}
                  <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-bold text-white">Discovery</span>
                        <p className="text-brand-teal text-sm font-semibold">8,247 visitors</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">78%</div>
                    </div>
                  </div>
                  
                  {/* Stage 2: Trial */}
                  <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-bold text-white">Trial</span>
                        <p className="text-brand-teal text-sm font-semibold">3,421 signups</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">41%</div>
                    </div>
                  </div>
                  
                  {/* Stage 3: Conversion */}
                  <div className="flex items-center justify-between bg-white/30 backdrop-blur-sm p-5 rounded-xl border border-white/40 shadow-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-bold text-white">Customers</span>
                        <p className="text-brand-teal text-sm font-semibold">2,289 paid</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-400">$114k</div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Metric */}
                <div className="mt-8 pt-6 border-t border-white/20 text-center">
                  <div className="text-2xl font-bold text-white">27.8%</div>
                  <div className="text-white/70 text-sm">Overall Conversion Rate</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-brand-teal text-white px-6 py-3 rounded-xl shadow-xl text-sm font-bold animate-bounce">
                🔥 Live Data
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Stop Flying Blind With Your Customer Data
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>You know customers are dropping off, but not where or why</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Analytics tools show numbers but not the complete customer story</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Teams waste time debating what to optimize without clear data</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-brand-navy mb-6">Traditional Analytics View</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Page Views</span>
                    <span className="font-bold text-gray-800">12,847</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Bounce Rate</span>
                    <span className="font-bold text-red-600">68%</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Conversions</span>
                    <span className="font-bold text-gray-800">289</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Revenue</span>
                    <span className="font-bold text-gray-800">$23,120</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-red-700 text-sm font-medium">❌ Where are customers dropping off?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Mockup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">CustomerPath Shows You The Complete Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">See exactly where customers engage, hesitate, and convert with visual journey mapping</p>
          </div>

          {/* Dashboard Mockup */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Browser Header */}
              <div className="bg-gray-50 px-6 py-4 border-b flex items-center">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-600 font-medium">
                  app.customerpath.com/dashboard
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-2">E-commerce Customer Journey</h3>
                    <p className="text-gray-600">Updated 3 minutes ago • 12,847 customers tracked</p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Export Report
                    </button>
                    <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium">
                      Share Dashboard
                    </button>
                  </div>
                </div>
                
                {/* Journey Flow */}
                <div className="relative">
                  {/* Connection Lines */}
                  <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 via-brand-teal to-green-400 opacity-30"></div>
                  
                  <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Stage 1: Discovery */}
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-brand-navy">8,247</div>
                          <div className="text-gray-600 text-sm">visitors</div>
                        </div>
                      </div>
                      <h4 className="font-bold text-brand-navy mb-2">Discovery</h4>
                      <p className="text-gray-600 text-sm mb-4">Social media, search, ads</p>
                      <div className="bg-blue-100 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-blue-700 font-semibold text-sm">Top Sources:</span>
                        </div>
                        <div className="space-y-1 text-xs text-blue-600">
                          <div className="flex justify-between">
                            <span>Google Ads</span>
                            <span>42%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Organic Search</span>
                            <span>31%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Social Media</span>
                            <span>27%</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-blue-600 font-semibold">78% → Next Step</span>
                        <div className="w-16 h-2 bg-blue-200 rounded-full overflow-hidden">
                          <div className="w-12 h-full bg-blue-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stage 2: Trial */}
                    <div className="bg-brand-teal/10 p-6 rounded-xl border border-brand-teal/20 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-brand-teal rounded-xl flex items-center justify-center shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                          </svg>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-brand-navy">3,421</div>
                          <div className="text-gray-600 text-sm">trials</div>
                        </div>
                      </div>
                      <h4 className="font-bold text-brand-navy mb-2">Free Trial</h4>
                      <p className="text-gray-600 text-sm mb-4">7-day trial period</p>
                      <div className="bg-brand-teal/20 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-brand-teal font-semibold text-sm">Engagement:</span>
                        </div>
                        <div className="space-y-1 text-xs text-brand-teal">
                          <div className="flex justify-between">
                            <span>Setup Complete</span>
                            <span>89%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>First Journey</span>
                            <span>76%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Daily Active</span>
                            <span>63%</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-brand-teal font-semibold">67% → Paid</span>
                        <div className="w-16 h-2 bg-brand-teal/20 rounded-full overflow-hidden">
                          <div className="w-11 h-full bg-brand-teal rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stage 3: Paid */}
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-brand-navy">2,289</div>
                          <div className="text-gray-600 text-sm">customers</div>
                        </div>
                      </div>
                      <h4 className="font-bold text-brand-navy mb-2">Paid Customer</h4>
                      <p className="text-gray-600 text-sm mb-4">Active subscription</p>
                      <div className="bg-green-100 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-green-700 font-semibold text-sm">Revenue:</span>
                        </div>
                        <div className="space-y-1 text-xs text-green-600">
                          <div className="flex justify-between">
                            <span>Monthly (MRR)</span>
                            <span>$114k</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Avg per User</span>
                            <span>$50</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Retention</span>
                            <span>94%</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-green-600 font-semibold">High LTV</span>
                        <div className="w-16 h-2 bg-green-200 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Key Insights */}
                <div className="mt-8 bg-gradient-to-r from-brand-teal/10 to-blue-50 rounded-xl p-6 border border-brand-teal/20">
                  <h4 className="font-bold text-brand-navy mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    AI-Powered Insights
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/70 p-4 rounded-lg">
                      <p className="font-semibold text-brand-navy mb-1">🎯 Optimization Opportunity</p>
                      <p className="text-gray-600">Improve trial onboarding flow to increase conversion by estimated 12%</p>
                    </div>
                    <div className="bg-white/70 p-4 rounded-lg">
                      <p className="font-semibold text-brand-navy mb-1">📈 Growth Lever</p>
                      <p className="text-gray-600">Focus on Google Ads - highest converting traffic source at 42%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-xl">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              Everything You Need to Optimize Customer Journeys
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools designed specifically for understanding and improving customer experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Visual Journey Builder</h3>
              <p className="text-gray-600 leading-relaxed">Create detailed customer journey maps with our intuitive drag-and-drop interface</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-teal/20 transition-colors">
                <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Real-time Analytics</h3>
              <p className="text-gray-600 leading-relaxed">Track conversion rates and identify bottlenecks with live data visualization</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                <svg className="w-8 h-8 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">AI-Powered Insights</h3>
              <p className="text-gray-600 leading-relaxed">Get automated recommendations to improve conversion rates and customer experience</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Customer Segmentation</h3>
              <p className="text-gray-600 leading-relaxed">Group customers by behavior patterns and optimize journeys for each segment</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Export & Share</h3>
              <p className="text-gray-600 leading-relaxed">Export journey maps as PDFs or share interactive dashboards with your team</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-brand-navy/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-navy/20 transition-colors">
                <svg className="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Integration Ready</h3>
              <p className="text-gray-600 leading-relaxed">Connect with your existing tools via API or import data from CSV files</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
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
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Basic</h3>
                <div className="text-5xl font-bold text-brand-navy mb-2">
                  $29<span className="text-xl font-normal text-gray-500">/month</span>
                </div>
                <p className="text-gray-600">Perfect for small teams</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Up to 3 customer journey maps</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Up to 1,000 customers tracked</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Basic analytics dashboard</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Export to PNG/PDF</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border-2 border-brand-teal">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-teal text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Pro</h3>
                <div className="text-5xl font-bold text-brand-navy mb-2">
                  $79<span className="text-xl font-normal text-gray-500">/month</span>
                </div>
                <p className="text-gray-600">For growing teams</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Unlimited journey maps</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Up to 10,000 customers tracked</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Advanced analytics & AI insights</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">API access & integrations</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              All plans include a 7-day free trial.
            </p>
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
          
          <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl">
            Start Free Trial
          </button>
          
          <p className="text-white/60 mt-6">7-day free trial • Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}

export default LandingPage