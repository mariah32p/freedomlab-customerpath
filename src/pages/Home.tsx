import { ProductCard } from '../components/ProductCard'
import { products } from '../stripe-config'
import { CheckIcon, ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline'

export function Home() {
  return (
    <div className="bg-white overflow-hidden font-montserrat">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-navy via-brand-navy to-blue-900 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;)] opacity-20"></div>
        
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
                <a
                  href="/signup"
                  className="group bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="group border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all inline-flex items-center justify-center">
                  <PlayIcon className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start mt-8 text-blue-200 text-sm">
                <CheckIcon className="h-4 w-4 mr-2 text-brand-teal" />
                <span>14-day free trial • No credit card required</span>
              </div>
            </div>

            {/* Hero Tool Mockup */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  {/* Mockup Header */}
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
                  
                  {/* Journey Builder Interface */}
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-brand-navy mb-2">E-commerce Customer Journey</h3>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">Live</span>
                        <span>247 customers tracked</span>
                        <span>•</span>
                        <span>Last updated 2 min ago</span>
                      </div>
                    </div>
                    
                    {/* Journey Flow */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                          <div>
                            <span className="font-semibold text-brand-navy">Awareness</span>
                            <p className="text-xs text-gray-500">Social media, ads, referrals</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-brand-navy">89</span>
                          <p className="text-xs text-gray-500">customers</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between bg-brand-teal/10 p-4 rounded-xl border border-brand-teal/20">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-brand-teal rounded-full mr-3"></div>
                          <div>
                            <span className="font-semibold text-brand-navy">Trial Signup</span>
                            <p className="text-xs text-gray-500">Free trial activation</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-brand-navy">67</span>
                          <p className="text-xs text-gray-500">customers</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between bg-purple-50 p-4 rounded-xl border border-purple-100">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-brand-purple rounded-full mr-3"></div>
                          <div>
                            <span className="font-semibold text-brand-navy">Purchase</span>
                            <p className="text-xs text-gray-500">Subscription conversion</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-brand-navy">34</span>
                          <p className="text-xs text-gray-500">customers</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between bg-green-50 p-4 rounded-xl border border-green-100">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                          <div>
                            <span className="font-semibold text-brand-navy">Active User</span>
                            <p className="text-xs text-gray-500">Onboarding complete</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-brand-navy">28</span>
                          <p className="text-xs text-gray-500">customers</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <div className="bg-gradient-to-r from-brand-teal/10 to-brand-purple/10 p-3 rounded-lg">
                        <div className="text-xs text-gray-600 mb-1">Conversion Rate</div>
                        <div className="text-xl font-bold text-brand-navy">38.2%</div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-600 mb-1">Avg. Journey Time</div>
                        <div className="text-xl font-bold text-brand-navy">12 days</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tool Mockups Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-brand-navy mb-6 font-montserrat">
              Powerful Visual Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to map, track, and optimize customer journeys
            </p>
          </div>

          {/* Journey Builder Mockup */}
          <div className="mb-20">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-brand-navy to-blue-800 px-6 py-4 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Visual Journey Builder</h3>
                  <span className="bg-brand-teal px-3 py-1 rounded-full text-xs font-medium">Drag & Drop</span>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
                <div className="flex items-center justify-center space-x-8">
                  {/* Stage Templates */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-brand-navy text-center mb-4">Stage Templates</h4>
                    <div className="space-y-3">
                      <div className="bg-blue-100 border-2 border-dashed border-blue-300 p-3 rounded-lg cursor-pointer hover:bg-blue-200 transition-colors">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                          <span className="text-sm font-medium text-brand-navy">Awareness</span>
                        </div>
                      </div>
                      <div className="bg-brand-teal/10 border-2 border-dashed border-brand-teal/30 p-3 rounded-lg cursor-pointer hover:bg-brand-teal/20 transition-colors">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-brand-teal rounded-full mr-2"></div>
                          <span className="text-sm font-medium text-brand-navy">Trial</span>
                        </div>
                      </div>
                      <div className="bg-purple-100 border-2 border-dashed border-purple-300 p-3 rounded-lg cursor-pointer hover:bg-purple-200 transition-colors">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-brand-purple rounded-full mr-2"></div>
                          <span className="text-sm font-medium text-brand-navy">Purchase</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ArrowRightIcon className="h-8 w-8 text-gray-400" />

                  {/* Canvas Area */}
                  <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-8 min-h-[200px] flex-1 max-w-md">
                    <div className="text-center text-gray-500 mb-4">
                      <span className="text-sm">Drop stages here to build your journey</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                          <span className="text-sm font-medium">Awareness</span>
                        </div>
                      </div>
                      <ArrowRightIcon className="h-4 w-4 text-gray-400" />
                      <div className="bg-brand-teal/10 p-3 rounded-lg border border-brand-teal/30">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-brand-teal rounded-full mr-2"></div>
                          <span className="text-sm font-medium">Trial</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Dashboard Mockup */}
          <div className="mb-20">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-brand-purple to-purple-600 px-6 py-4 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Analytics Dashboard</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">Real-time</span>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                    <div className="text-3xl font-black text-brand-navy mb-2">247</div>
                    <div className="text-sm text-gray-600">Total Customers</div>
                    <div className="text-xs text-green-600 mt-1">↗ +12% this week</div>
                  </div>
                  <div className="bg-gradient-to-br from-brand-teal/10 to-brand-teal/20 p-6 rounded-xl">
                    <div className="text-3xl font-black text-brand-navy mb-2">38.2%</div>
                    <div className="text-sm text-gray-600">Conversion Rate</div>
                    <div className="text-xs text-green-600 mt-1">↗ +5.3% this month</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                    <div className="text-3xl font-black text-brand-navy mb-2">12d</div>
                    <div className="text-sm text-gray-600">Avg Journey Time</div>
                    <div className="text-xs text-red-600 mt-1">↘ -2d this month</div>
                  </div>
                </div>

                {/* Conversion Funnel */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-brand-navy mb-4">Conversion Funnel</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-24 text-sm font-medium text-gray-600">Awareness</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-4 mx-4">
                        <div className="bg-blue-500 h-4 rounded-full" style={{width: '100%'}}></div>
                      </div>
                      <div className="w-12 text-sm font-bold text-brand-navy">247</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-24 text-sm font-medium text-gray-600">Trial</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-4 mx-4">
                        <div className="bg-brand-teal h-4 rounded-full" style={{width: '75%'}}></div>
                      </div>
                      <div className="w-12 text-sm font-bold text-brand-navy">185</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-24 text-sm font-medium text-gray-600">Purchase</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-4 mx-4">
                        <div className="bg-brand-purple h-4 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <div className="w-12 text-sm font-bold text-brand-navy">112</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-24 text-sm font-medium text-gray-600">Active</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-4 mx-4">
                        <div className="bg-green-500 h-4 rounded-full" style={{width: '38%'}}></div>
                      </div>
                      <div className="w-12 text-sm font-bold text-brand-navy">94</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Tracking Mockup */}
          <div>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-brand-teal to-green-500 px-6 py-4 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Customer Tracking</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">Live Updates</span>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-sm font-bold text-blue-600">JD</span>
                      </div>
                      <div>
                        <div className="font-semibold text-brand-navy">John Doe</div>
                        <div className="text-sm text-gray-500">john@example.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-brand-navy">Trial Stage</div>
                        <div className="text-xs text-gray-500">Day 7 of 14</div>
                      </div>
                      <div className="w-3 h-3 bg-brand-teal rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-sm font-bold text-purple-600">SM</span>
                      </div>
                      <div>
                        <div className="font-semibold text-brand-navy">Sarah Miller</div>
                        <div className="text-sm text-gray-500">sarah@company.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-brand-navy">Purchase Stage</div>
                        <div className="text-xs text-gray-500">Converted 2 days ago</div>
                      </div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-sm font-bold text-green-600">MJ</span>
                      </div>
                      <div>
                        <div className="font-semibold text-brand-navy">Mike Johnson</div>
                        <div className="text-sm text-gray-500">mike@startup.io</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-brand-navy">Active User</div>
                        <div className="text-xs text-gray-500">Onboarded successfully</div>
                      </div>
                      <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-brand-navy mb-6 font-montserrat">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools for customer journey optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Drag & Drop Builder</h3>
              <p className="text-gray-600">Create custom journey maps with intuitive visual tools</p>
            </div>

            <div className="group bg-gradient-to-br from-brand-teal/10 to-brand-teal/20 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-teal rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Real-time Analytics</h3>
              <p className="text-gray-600">Track conversion rates and identify optimization opportunities</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Customer Tracking</h3>
              <p className="text-gray-600">Monitor individual customer progress through each stage</p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Export & Share</h3>
              <p className="text-gray-600">Export journey maps and share insights with your team</p>
            </div>

            <div className="group bg-gradient-to-br from-brand-navy/10 to-brand-navy/20 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Custom Notes</h3>
              <p className="text-gray-600">Add detailed notes and context for each customer interaction</p>
            </div>

            <div className="group bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Automated Insights</h3>
              <p className="text-gray-600">Get AI-powered recommendations for journey optimization</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
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
                  <CheckIcon className="h-5 w-5 text-brand-teal mr-3" />
                  <span className="text-gray-700">1 customer journey map</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-brand-teal mr-3" />
                  <span className="text-gray-700">Up to 100 customers tracked</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-brand-teal mr-3" />
                  <span className="text-gray-700">Basic analytics</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-brand-teal mr-3" />
                  <span className="text-gray-700">Export to PNG/PDF</span>
                </div>
              </div>

              <ProductCard product={products[0]} />
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
                  <CheckIcon className="h-5 w-5 text-brand-teal mr-3" />
                  <span className="text-blue-100">Unlimited journey maps</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-brand-teal mr-3" />
                  <span className="text-blue-100">Up to 500 customers tracked</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-brand-teal mr-3" />
                  <span className="text-blue-100">Advanced analytics & insights</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-brand-teal mr-3" />
                  <span className="text-blue-100">CSV import/export</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-brand-teal mr-3" />
                  <span className="text-blue-100">Priority support</span>
                </div>
              </div>

              <ProductCard product={products[1]} />
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 bg-gradient-to-br from-brand-navy via-brand-navy to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;)] opacity-30"></div>
        
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
            <a
              href="/signup"
              className="group bg-brand-teal hover:bg-brand-teal/90 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
                href="#pricing"
                className="group border-2 border-white/30 text-white hover:bg-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all inline-flex items-center justify-center backdrop-blur-sm"
              >
                See Pricing
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="group border-2 border-white/30 text-white hover:bg-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all inline-flex items-center justify-center backdrop-blur-sm">
              <PlayIcon className="mr-3 h-6 w-6" />
              Watch Demo
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-blue-200">
            <div className="flex items-center">
              <CheckIcon className="h-5 w-5 mr-2 text-brand-teal" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center">
              <CheckIcon className="h-5 w-5 mr-2 text-brand-teal" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <CheckIcon className="h-5 w-5 mr-2 text-brand-teal" />
              <span>7-day free trial • Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}