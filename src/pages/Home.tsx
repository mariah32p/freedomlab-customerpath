import { ProductCard } from '../components/ProductCard'
import { products } from '../stripe-config'
import { CheckIcon, ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline'

export function Home() {
  const basicFeatures = [
    '1 customer journey map',
    'Up to 100 customers tracked',
    'Basic stage definitions (up to 8 stages)',
    'Manual customer stage updates',
    'Simple analytics (conversion rates, stage distribution)',
    'Basic export (PNG, PDF)'
  ]

  const proFeatures = [
    'Everything in Basic, plus:',
    'Unlimited journey maps',
    'Up to 500 customers tracked',
    'Custom stage definitions - Unlimited stages, custom names/colors',
    'Advanced analytics - Time-in-stage, cohort analysis, trends over time',
    'CSV import/export - Bulk customer data management',
    'Priority support'
  ]

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-navy via-brand-navy to-blue-900 text-white overflow-hidden">
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20'></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center bg-brand-teal/10 border border-brand-teal/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-brand-teal rounded-full mr-2 animate-pulse"></span>
                <span className="text-brand-teal text-sm font-medium">Now Available</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Map Every Step of Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-purple block">
                  Customer Journey
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-lg">
                Transform how you understand and optimize customer experiences with our intuitive 
                drag-and-drop journey builder. Track progress, identify drop-offs, and boost conversions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/signup"
                  className="group bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="group border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all inline-flex items-center justify-center">
                  <PlayIcon className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center mt-8 text-blue-200 text-sm">
                <CheckIcon className="h-4 w-4 mr-2 text-brand-teal" />
                <span>14-day free trial • No credit card required</span>
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="relative animate-float">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  {/* Mockup Header */}
                  <div className="bg-gray-50 px-4 py-3 border-b flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-sm text-gray-500 font-medium">CustomerPath Dashboard</span>
                    </div>
                  </div>
                  
                  {/* Mockup Content */}
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-brand-navy mb-2">E-commerce Customer Journey</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span className="bg-brand-teal/10 text-brand-teal px-2 py-1 rounded">Active</span>
                        <span>127 customers tracked</span>
                      </div>
                    </div>
                    
                    {/* Journey Stages Mockup */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                          <span className="font-medium text-brand-navy">Awareness</span>
                        </div>
                        <span className="text-sm text-gray-600">45 customers</span>
                      </div>
                      
                      <div className="flex items-center justify-between bg-brand-teal/10 p-3 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-brand-teal rounded-full mr-3"></div>
                          <span className="font-medium text-brand-navy">Trial</span>
                        </div>
                        <span className="text-sm text-gray-600">32 customers</span>
                      </div>
                      
                      <div className="flex items-center justify-between bg-purple-50 p-3 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-brand-purple rounded-full mr-3"></div>
                          <span className="font-medium text-brand-navy">Purchase</span>
                        </div>
                        <span className="text-sm text-gray-600">18 customers</span>
                      </div>
                      
                      <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                          <span className="font-medium text-brand-navy">Onboarding</span>
                        </div>
                        <span className="text-sm text-gray-600">15 customers</span>
                      </div>
                    </div>
                    
                    {/* Conversion Rate */}
                    <div className="mt-4 p-3 bg-gradient-to-r from-brand-teal/10 to-brand-purple/10 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Overall Conversion Rate</div>
                      <div className="text-2xl font-bold text-brand-navy">33.3%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-brand-teal/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-brand-purple/10 rounded-full blur-xl"></div>
      </div>

      {/* Core Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">
              Everything You Need to Map Customer Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our MVP includes all the essential tools to visualize, track, and optimize your customer journeys with precision and clarity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Visual Journey Builder */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-teal/20">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-teal/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Visual Journey Builder</h3>
              <p className="text-gray-600 leading-relaxed">
                Drag-and-drop interface to create customer journey maps with intuitive stage definitions and visual flow representation.
              </p>
            </div>

            {/* Stage Tracking */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-purple/20">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-purple/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Stage Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Define custom stages like "Awareness → Trial → Purchase → Onboarding" and track customer progress through each phase.
              </p>
            </div>

            {/* Customer Progress */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-teal/20">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-navy/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Customer Progress Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Manually move customers through stages and maintain detailed notes about their journey and interactions.
              </p>
            </div>

            {/* Analytics Dashboard */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-purple/20">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Analytics Dashboard</h3>
              <p className="text-gray-600 leading-relaxed">
                View conversion rates between stages, identify drop-off points, and get insights into customer behavior patterns.
              </p>
            </div>

            {/* Customer Notes */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-teal/20">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Customer Notes</h3>
              <p className="text-gray-600 leading-relaxed">
                Add detailed notes about individual customer progress, interactions, and important milestones in their journey.
              </p>
            </div>

            {/* Simple Export */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-navy/20">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Simple Export</h3>
              <p className="text-gray-600 leading-relaxed">
                Export your journey maps as high-quality images or PDF documents to share with stakeholders and team members.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tool Mockup Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">
              See CustomerPath in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of visual customer journey mapping with our intuitive interface
            </p>
          </div>

          {/* Large Tool Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                {/* Mockup Toolbar */}
                <div className="bg-gray-50 px-6 py-4 border-b flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <h3 className="font-semibold text-brand-navy">SaaS Onboarding Journey</h3>
                    <span className="bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-sm font-medium">Live</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-medium">Export</button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">Share</button>
                  </div>
                </div>

                {/* Journey Flow Mockup */}
                <div className="p-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
                  <div className="flex items-center justify-between mb-8">
                    {/* Stage 1 */}
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-brand-navy mb-1">Awareness</h4>
                      <p className="text-sm text-gray-600">89 customers</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '89%'}}></div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRightIcon className="h-6 w-6 text-gray-400 mx-4" />

                    {/* Stage 2 */}
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-brand-teal to-brand-teal/80 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-brand-navy mb-1">Trial</h4>
                      <p className="text-sm text-gray-600">67 customers</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-brand-teal h-2 rounded-full" style={{width: '67%'}}></div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRightIcon className="h-6 w-6 text-gray-400 mx-4" />

                    {/* Stage 3 */}
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-brand-purple to-purple-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 3H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-brand-navy mb-1">Purchase</h4>
                      <p className="text-sm text-gray-600">34 customers</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-brand-purple h-2 rounded-full" style={{width: '34%'}}></div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRightIcon className="h-6 w-6 text-gray-400 mx-4" />

                    {/* Stage 4 */}
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-brand-navy mb-1">Onboarding</h4>
                      <p className="text-sm text-gray-600">28 customers</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '28%'}}></div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Preview */}
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="bg-white p-4 rounded-xl shadow-sm border">
                      <div className="text-2xl font-bold text-brand-navy">75.3%</div>
                      <div className="text-sm text-gray-600">Awareness → Trial</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border">
                      <div className="text-2xl font-bold text-brand-purple">50.7%</div>
                      <div className="text-sm text-gray-600">Trial → Purchase</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border">
                      <div className="text-2xl font-bold text-brand-teal">82.4%</div>
                      <div className="text-sm text-gray-600">Purchase → Onboarding</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Start with our Basic plan and upgrade as your business grows. Both plans include our core MVP features with no setup fees.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
                  <span className="text-sm font-medium text-gray-700">For Small Teams</span>
                </div>
                <h3 className="text-3xl font-bold text-brand-navy mb-2">Basic Plan</h3>
                <div className="text-5xl font-bold text-brand-navy mb-2">
                  $29<span className="text-xl font-normal text-gray-500">/month</span>
                </div>
                <p className="text-gray-600 leading-relaxed">Perfect for small businesses, consultants, and single product companies</p>
              </div>

              <div className="space-y-4 mb-8">
                {basicFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-5 h-5 bg-brand-teal rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <CheckIcon className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <ProductCard product={products[0]} />
            </div>

            {/* Pro Plan */}
            <div className="relative bg-gradient-to-br from-brand-navy to-blue-900 rounded-3xl p-8 shadow-2xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 right-8 transform -translate-y-1/2">
                <span className="bg-gradient-to-r from-brand-teal to-brand-purple text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                  <span className="text-sm font-medium text-brand-teal">For Growing Teams</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Pro Plan</h3>
                <div className="text-5xl font-bold mb-2">
                  $49<span className="text-xl font-normal text-blue-200">/month</span>
                </div>
                <p className="text-blue-100 leading-relaxed">Perfect for marketing teams, agencies, and multi-product companies</p>
              </div>

              <div className="space-y-4 mb-8">
                {proFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-5 h-5 bg-brand-teal rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <CheckIcon className="h-3 w-3 text-white" />
                    </div>
                    <span className={`text-blue-100 leading-relaxed ${index === 0 ? 'font-semibold text-white' : ''}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <ProductCard product={products[1]} />
            </div>
          </div>

          {/* Enterprise CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Need Something Custom?</h3>
              <p className="text-gray-600 mb-6">
                Looking for enterprise features, custom integrations, or higher limits? Let's talk about a solution that fits your needs.
              </p>
              <button className="bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-3 rounded-xl font-semibold transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">
              How CustomerPath Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simple, powerful, and designed for teams of all sizes. Get started in minutes, not hours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-teal to-brand-teal/80 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-purple rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Build Your Journey</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Use our drag-and-drop builder to create custom journey maps. Define stages like 
                "Awareness → Trial → Purchase → Onboarding" with ease.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-purple to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-teal rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Track Customers</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Add your customers and manually move them through stages. Add notes and track 
                their progress through your defined journey.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-navy to-blue-700 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-purple rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Analyze & Optimize</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                View conversion rates, identify drop-off points, and export your insights. 
                Make data-driven decisions to improve customer experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-24 bg-gradient-to-br from-brand-navy via-brand-navy to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-purple block">
              Customer Experience?
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            Join hundreds of businesses already using CustomerPath to optimize their customer journeys, 
            reduce churn, and boost conversions with data-driven insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="/signup"
              className="group bg-gradient-to-r from-brand-teal to-brand-teal/90 hover:from-brand-teal/90 hover:to-brand-teal text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl inline-flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
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
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-brand-teal/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-brand-purple/10 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>
    </div>
  )
  )
}