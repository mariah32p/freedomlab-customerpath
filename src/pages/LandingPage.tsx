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
                Now Available - 7-Day Free Trial
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Visualize Every
                <span className="block bg-gradient-to-r from-brand-teal to-cyan-300 bg-clip-text text-transparent">
                  Customer Journey
                </span>
              </h1>
              
              <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Map touchpoints, track conversions, and optimize your entire customer lifecycle with powerful visual tools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  Start Free Trial
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all backdrop-blur-sm">
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-white/70">
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

            {/* Right Column - Customer Journey Visualization */}
            <div className="relative">
              {/* Customer Journey Flow */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-white">E-commerce Customer Journey</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/80 text-sm font-medium">Live Data</span>
                  </div>
                </div>
                
                {/* Journey Flow */}
                <div className="space-y-6">
                  {/* Stage 1: Discovery */}
                  <div className="relative">
                    <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-bold text-white text-lg">Discovery</span>
                          <p className="text-white/70 text-sm">Social media, search, ads</p>
                          <p className="text-brand-teal text-sm font-semibold">12,847 visitors</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">78%</div>
                        <div className="text-white/70 text-sm">engagement</div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-3">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-white/50 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Stage 2: Product Interest */}
                  <div className="relative">
                    <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-bold text-white text-lg">Product View</span>
                          <p className="text-white/70 text-sm">Browse products, read reviews</p>
                          <p className="text-brand-teal text-sm font-semibold">10,021 page views</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">52%</div>
                        <div className="text-white/70 text-sm">add to cart</div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-3">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-white/50 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Stage 3: Shopping Cart */}
                  <div className="relative">
                    <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-bold text-white text-lg">Shopping Cart</span>
                          <p className="text-white/70 text-sm">Review items, apply coupons</p>
                          <p className="text-brand-teal text-sm font-semibold">5,211 carts created</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">68%</div>
                        <div className="text-white/70 text-sm">checkout</div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-3">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-white/50 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Stage 4: Checkout */}
                  <div className="relative">
                    <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-bold text-white text-lg">Checkout</span>
                          <p className="text-white/70 text-sm">Payment & shipping info</p>
                          <p className="text-brand-teal text-sm font-semibold">3,543 attempts</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">84%</div>
                        <div className="text-white/70 text-sm">complete</div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-3">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-white/50 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Stage 5: Purchase Complete */}
                  <div className="flex items-center justify-between bg-white/30 backdrop-blur-sm p-5 rounded-xl border border-white/40 shadow-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-bold text-white text-lg">Purchase Complete</span>
                        <p className="text-white/70 text-sm">Order confirmation & fulfillment</p>
                        <p className="text-brand-teal text-sm font-semibold">2,976 orders</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">$247k</div>
                      <div className="text-white/70 text-sm">revenue</div>
                    </div>
                  </div>
                </div>
                
                {/* Journey Metrics */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">23.2%</div>
                      <div className="text-white/70 text-sm">Overall Conversion</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-teal">$83</div>
                      <div className="text-white/70 text-sm">Avg Order Value</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">4.2</div>
                      <div className="text-white/70 text-sm">Days to Convert</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-brand-teal text-white px-6 py-3 rounded-xl shadow-xl text-sm font-bold animate-bounce">
                🔥 Live Analytics
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-xl text-sm font-bold text-brand-navy">
                📊 Real-time Insights
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              Everything You Need to Understand Your Customers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools to visualize, analyze, and optimize every step of your customer experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Visual Journey Builder</h3>
              <p className="text-gray-600 leading-relaxed">Create detailed customer journey maps with our intuitive drag-and-drop interface</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-teal/20 transition-colors">
                <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Real-time Analytics</h3>
              <p className="text-gray-600 leading-relaxed">Track customer behavior and conversions as they happen with live data streams</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                <svg className="w-8 h-8 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Smart Insights</h3>
              <p className="text-gray-600 leading-relaxed">AI-powered recommendations to optimize touchpoints and improve conversion rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Optimize Your
            <span className="block text-brand-teal">Customer Journeys?</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of companies using CustomerPath to increase conversions and reduce churn.
          </p>
          
          <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  )
}

export default LandingPage