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
                          <p className="text-brand-teal text-sm font-semibold">8,247 visitors</p>
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
                  
                  {/* Stage 2: Trial Signup */}
                  <div className="relative">
                    <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/30">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-bold text-white text-lg">Trial Signup</span>
                          <p className="text-white/70 text-sm">Free trial registration</p>
                          <p className="text-brand-teal text-sm font-semibold">3,421 signups</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">41%</div>
                        <div className="text-white/70 text-sm">conversion</div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-3">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-white/50 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Stage 3: Paid Conversion */}
                  <div className="flex items-center justify-between bg-white/30 backdrop-blur-sm p-5 rounded-xl border border-white/40 shadow-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-bold text-white text-lg">Paid Customer</span>
                        <p className="text-white/70 text-sm">Subscription conversion</p>
                        <p className="text-brand-teal text-sm font-semibold">2,289 customers</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">$114k</div>
                      <div className="text-white/70 text-sm">MRR</div>
                    </div>
                  </div>
                </div>
                
                {/* Journey Metrics */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">27.8%</div>
                      <div className="text-white/70 text-sm">Overall Conversion</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-teal">$50</div>
                      <div className="text-white/70 text-sm">Avg Customer Value</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">5.2</div>
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

      {/* Dashboard Mockup Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">See CustomerPath in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real dashboard showing how teams track and optimize their customer journeys</p>
          </div>

          {/* Dashboard Mockup */}
          <div className="max-w-5xl mx-auto">
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
                    <h3 className="text-2xl font-bold text-brand-navy mb-2">SaaS Onboarding Journey</h3>
                    <p className="text-gray-600">Last updated: 2 minutes ago</p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-teal/90 transition-colors">
                      Export
                    </button>
                    <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                      Share
                    </button>
                  </div>
                </div>
                
                {/* Journey Visualization */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Stage 1 */}
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-brand-navy">2,847</div>
                        <div className="text-gray-600 text-sm">visitors</div>
                      </div>
                    </div>
                    <h4 className="font-bold text-brand-navy mb-2">Landing Page</h4>
                    <p className="text-gray-600 text-sm mb-3">Organic search, paid ads</p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-semibold">68% → Trial</span>
                      <div className="w-16 h-2 bg-blue-200 rounded-full overflow-hidden">
                        <div className="w-11 h-full bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stage 2 */}
                  <div className="bg-brand-teal/10 p-6 rounded-xl border border-brand-teal/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-brand-teal rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-brand-navy">1,936</div>
                        <div className="text-gray-600 text-sm">trials</div>
                      </div>
                    </div>
                    <h4 className="font-bold text-brand-navy mb-2">Free Trial</h4>
                    <p className="text-gray-600 text-sm mb-3">7-day trial period</p>
                    <div className="flex items-center justify-between">
                      <span className="text-brand-teal font-semibold">72% → Paid</span>
                      <div className="w-16 h-2 bg-brand-teal/20 rounded-full overflow-hidden">
                        <div className="w-12 h-full bg-brand-teal rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stage 3 */}
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-brand-navy">1,394</div>
                        <div className="text-gray-600 text-sm">customers</div>
                      </div>
                    </div>
                    <h4 className="font-bold text-brand-navy mb-2">Paid Customer</h4>
                    <p className="text-gray-600 text-sm mb-3">Active subscription</p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-semibold">$89k MRR</span>
                      <div className="w-16 h-2 bg-green-200 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Metrics */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-brand-navy">48.9%</div>
                      <div className="text-gray-600 text-sm">Trial Conversion</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-teal">$64</div>
                      <div className="text-gray-600 text-sm">Avg Revenue/User</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">3.8</div>
                      <div className="text-gray-600 text-sm">Days to Convert</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">94%</div>
                      <div className="text-gray-600 text-sm">Customer Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-12">
              <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-xl">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
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
            Ready to Optimize Your
            <span className="block text-brand-teal">Customer Journeys?</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            All plans include a 7-day free trial.
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