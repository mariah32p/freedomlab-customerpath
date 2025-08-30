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

            {/* Right Column - Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Browser Header */}
                <div className="bg-gray-50 px-6 py-4 border-b flex items-center">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="bg-gray-100 rounded-md px-4 py-1 text-sm text-gray-600 font-medium">
                    app.customerpath.com
                  </div>
                </div>
                
                {/* Customer Journey Visualization */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-brand-navy">SaaS Onboarding Journey</h3>
                    <div className="flex space-x-2">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">Live</span>
                      <button className="bg-brand-teal text-white px-3 py-1 rounded text-xs font-medium">Export</button>
                    </div>
                  </div>
                  
                  {/* Customer Journey Flow */}
                  <div className="space-y-4">
                    {/* Awareness Stage */}
                    <div className="relative">
                      <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white text-xs font-bold">1</span>
                          </div>
                          <div>
                            <span className="font-semibold text-brand-navy text-sm">Google Search</span>
                            <p className="text-xs text-gray-500">2,847 visitors</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-brand-navy">72%</div>
                          <div className="text-xs text-gray-500">to landing</div>
                        </div>
                      </div>
                      {/* Connection Arrow */}
                      <div className="absolute left-4 top-12 w-0.5 h-4 bg-gray-300"></div>
                    </div>
                    
                    {/* Interest Stage */}
                    <div className="relative">
                      <div className="flex items-center justify-between bg-brand-teal/10 p-4 rounded-lg border border-brand-teal/30">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center mr-3">
                            <span className="text-white text-xs font-bold">2</span>
                          </div>
                          <div>
                            <span className="font-semibold text-brand-navy text-sm">Landing Page</span>
                            <p className="text-xs text-gray-500">2,050 engaged</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-brand-navy">45%</div>
                          <div className="text-xs text-gray-500">to demo</div>
                        </div>
                      </div>
                      <div className="absolute left-4 top-12 w-0.5 h-4 bg-gray-300"></div>
                    </div>
                    
                    {/* Consideration Stage */}
                    <div className="relative">
                      <div className="flex items-center justify-between bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center mr-3">
                            <span className="text-white text-xs font-bold">3</span>
                          </div>
                          <div>
                            <span className="font-semibold text-brand-navy text-sm">Product Demo</span>
                            <p className="text-xs text-gray-500">923 viewers</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-brand-navy">38%</div>
                          <div className="text-xs text-gray-500">to trial</div>
                        </div>
                      </div>
                      <div className="absolute left-4 top-12 w-0.5 h-4 bg-gray-300"></div>
                    </div>
                    
                    {/* Trial Stage */}
                    <div className="relative">
                      <div className="flex items-center justify-between bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white text-xs font-bold">4</span>
                          </div>
                          <div>
                            <span className="font-semibold text-brand-navy text-sm">Free Trial</span>
                            <p className="text-xs text-gray-500">351 signups</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-brand-navy">67%</div>
                          <div className="text-xs text-gray-500">to paid</div>
                        </div>
                      </div>
                      <div className="absolute left-4 top-12 w-0.5 h-4 bg-gray-300"></div>
                    </div>
                    
                    {/* Conversion Stage */}
                    <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-xs font-bold">5</span>
                        </div>
                        <div>
                          <span className="font-semibold text-brand-navy text-sm">Paid Customer</span>
                          <p className="text-xs text-gray-500">235 conversions</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-green-600">$18.8k</div>
                        <div className="text-xs text-gray-500">MRR</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-brand-teal text-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold animate-pulse">
                Live Data
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-lg text-sm text-brand-navy">
                Real-time Updates
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Real-time Analytics</h3>
              <p className="text-gray-600 leading-relaxed">Track conversion rates and identify bottlenecks with live data visualization</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-purple/20 transition-colors">
                <svg className="w-8 h-8 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Customer Segmentation</h3>
              <p className="text-gray-600 leading-relaxed">Group customers by behavior patterns and optimize journeys for each segment</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Automated Insights</h3>
              <p className="text-gray-600 leading-relaxed">Get AI-powered recommendations to improve conversion rates automatically</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Export & Share</h3>
              <p className="text-gray-600 leading-relaxed">Export journey maps as PDFs or share interactive dashboards with your team</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-brand-navy/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-navy/20 transition-colors">
                <svg className="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Integration Ready</h3>
              <p className="text-gray-600 leading-relaxed">Connect with your existing tools via API or import data from CSV files</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
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

              <button className="w-full bg-gray-100 hover:bg-gray-200 text-brand-navy py-4 rounded-xl font-semibold text-lg transition-all border-2 border-gray-200 hover:border-gray-300">
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

              <button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
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
        </div>
      </section>
    </div>
  )
}

export default LandingPage