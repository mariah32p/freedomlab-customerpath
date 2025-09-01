import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const KeyFeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      id: 'visual-builder',
      title: 'Visual Journey Builder',
      subtitle: 'Drag & Drop Interface',
      description: 'Map out your customer journey from first touch to conversion. See exactly where customers engage, hesitate, and drop off.',
      benefits: [
        'Drag-and-drop journey step creation',
        'Real-time user count tracking',
        'Visual drop-off rate indicators',
        'Editable step names and metrics'
      ],
      mockup: (
        <div className="bg-white rounded-xl border border-gray-200 p-6 h-96 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900">SaaS Customer Journey</h4>
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs">+ Add Step</button>
              <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded text-xs">Save</button>
            </div>
          </div>
          
          <div className="space-y-3">
            {[
              { name: 'Google Search → Landing', users: '5.2k', color: 'bg-blue-500', dropRate: null },
              { name: 'Demo Video Watch', users: '3.4k', color: 'bg-brand-teal', dropRate: 35 },
              { name: 'Free Trial Signup', users: '2.2k', color: 'bg-purple-500', dropRate: 35 },
              { name: 'Paid Subscription', users: '1.3k', color: 'bg-green-500', dropRate: 41 }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${step.color} rounded-lg flex items-center justify-center shadow-sm`}>
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">{step.name}</h5>
                      <p className="text-gray-600 text-sm">{step.users} users</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-right mr-2">
                      <div className="text-lg font-bold text-gray-900">
                        {i === 0 ? '100%' : `${Math.round((parseFloat(step.users.replace('k', '')) / 5.2) * 100)}%`}
                      </div>
                      <div className="text-xs text-gray-500">conversion</div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  </div>
                </div>
                {i < 3 && step.dropRate && (
                  <div className="flex justify-center py-1">
                    <div className="bg-red-100 px-2 py-1 rounded-full">
                      <span className="text-red-600 text-xs font-medium">
                        -{step.dropRate}% drop-off
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-xl font-bold text-green-600">25%</p>
                <p className="text-gray-700 text-sm">Overall Conversion</p>
              </div>
              <div>
                <p className="text-xl font-bold text-blue-600">$64k</p>
                <p className="text-gray-700 text-sm">Monthly Revenue</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'real-time-analytics',
      title: 'Real-time Analytics',
      subtitle: 'Live Data Insights',
      description: 'See your customer data update in real-time. Track conversions, monitor drop-offs, and get instant insights as customers move through your journey.',
      benefits: [
        'Live conversion rate monitoring',
        'Real-time customer activity feed',
        'Instant revenue tracking',
        'Performance trend indicators'
      ],
      mockup: (
        <div className="bg-white rounded-xl border border-gray-200 p-6 h-96 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900">Live Customer Dashboard</h4>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-600 text-sm font-medium">Live</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">25%</div>
              <div className="text-gray-600 text-sm">Conversion Rate</div>
              <div className="text-green-600 text-xs font-medium">+2.1% today</div>
            </div>
            <div className="bg-brand-teal/10 p-4 rounded-lg border border-brand-teal/20">
              <div className="text-2xl font-bold text-brand-teal">$64k</div>
              <div className="text-gray-600 text-sm">Revenue</div>
              <div className="text-green-600 text-xs font-medium">+18% this month</div>
            </div>
          </div>

          <div className="space-y-2">
            <h5 className="font-semibold text-gray-900 text-sm">Recent Activity</h5>
            {[
              { time: '3s ago', event: 'Subscription started', user: 'sarah@techcorp.com', value: '$49' },
              { time: '12s ago', event: 'Demo completed', user: 'mike@startup.io', value: null },
              { time: '28s ago', event: 'Trial signup', user: 'jessica@scale.com', value: null },
              { time: '45s ago', event: 'Landing page visit', user: 'david@growth.co', value: null },
              { time: '1m ago', event: 'Demo video started', user: 'emma@business.net', value: null }
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.value ? 'bg-green-500' : 'bg-blue-500'
                  }`}></div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{activity.event}</p>
                    <p className="text-gray-600 text-xs">{activity.user}</p>
                  </div>
                </div>
                <div className="text-right">
                  {activity.value && (
                    <p className="font-bold text-green-600 text-sm">{activity.value}</p>
                  )}
                  <p className="text-gray-500 text-xs">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'webhook-support',
      title: 'Guided Webhook Setup',
      subtitle: 'Connect Your Tools',
      description: 'Connect CustomerPath to your existing tools using webhooks. We provide step-by-step guides for Zapier, Make.com, and custom integrations.',
      benefits: [
        'Step-by-step webhook configuration',
        'Zapier workflow templates',
        'Zapier and Make.com integration guides',
        'Custom webhook URL generation'
      ],
      mockup: (
        <div className="bg-white rounded-xl border border-gray-200 p-6 h-96 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900">Connected Tools</h4>
            <div className="bg-brand-teal/10 text-brand-teal px-2 py-1 rounded-full text-xs font-medium">
              3 Active
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-700 mb-1">Zapier Integration</h5>
                  <p className="text-blue-600 text-sm mb-2">Auto-sync demo bookings • 89 events today</p>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-medium">
                    Edit Workflow
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-teal/10 to-cyan-50 p-4 rounded-lg border border-brand-teal/20 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-brand-teal mb-1">Make.com Automation</h5>
                  <p className="text-brand-teal text-sm mb-2">Sync trial signups to CRM • 156 events today</p>
                  <button className="bg-brand-teal text-white px-3 py-1 rounded text-xs font-medium">
                    View Scenario
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-200 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-purple-700 mb-1">Stripe Webhook</h5>
                  <p className="text-purple-600 text-sm mb-2">Payment events tracking • 47 events today</p>
                  <button className="bg-purple-500 text-white px-3 py-1 rounded text-xs font-medium">
                    Test Events
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center space-x-2 mb-2">
                <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold text-brand-teal text-sm">Your Webhook URL</span>
                <button className="bg-brand-teal text-white px-2 py-1 rounded text-xs">Copy</button>
              </div>
              <div className="bg-white rounded border border-gray-200 p-3">
                <code className="text-xs text-gray-600 font-mono">
                  https://api.customerpath.com/webhook/usr_abc123xyz
                </code>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Context Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight">
            Map Every Step of Your Customer's Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            A customer journey is the complete path someone takes from first discovering your product to becoming a loyal customer. CustomerPath helps you visualize each touchpoint, measure what's working, and optimize what isn't.
          </p>
          
          {/* Journey Explanation */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Real Example: SaaS Customer Journey</h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-brand-navy mb-2">Discovery</h4>
                  <p className="text-gray-600 text-sm">Google search → Landing page</p>
                  <div className="text-lg font-bold text-blue-600 mt-2">5,247</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-teal rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-brand-navy mb-2">Demo</h4>
                  <p className="text-gray-600 text-sm">Watches product demo video</p>
                  <div className="text-lg font-bold text-brand-teal mt-2">3,421</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-brand-navy mb-2">Trial</h4>
                  <p className="text-gray-600 text-sm">Signs up for free trial</p>
                  <div className="text-lg font-bold text-purple-600 mt-2">2,156</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-brand-navy mb-2">Customer</h4>
                  <p className="text-gray-600 text-sm">Converts to paid plan</p>
                  <div className="text-lg font-bold text-green-600 mt-2">1,289</div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="inline-flex items-center bg-green-100 text-green-700 px-6 py-3 rounded-full font-semibold">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  24.6% Overall Conversion Rate • $64k Monthly Revenue
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-brand-navy mb-4">
            See How Each Feature Works
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the tools that make customer journey optimization simple and effective
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFeature === index
                  ? 'bg-brand-teal text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:text-brand-navy border border-gray-200 hover:border-brand-teal/30'
              }`}
            >
              {feature.title}
            </button>
          ))}
        </div>

        {/* Feature Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Feature Details */}
            <div>
              <div className="mb-6">
                <div className="inline-block bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {features[activeFeature].subtitle}
                </div>
                <h3 className="text-3xl font-bold text-brand-navy mb-4">
                  {features[activeFeature].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {features[activeFeature].description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-brand-navy text-lg">Key Benefits:</h4>
                <div className="space-y-3">
                  {features[activeFeature].benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-6 h-6 bg-brand-teal rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Interactive Mockup */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-2xl p-6 shadow-2xl border border-gray-200"
              >
                {features[activeFeature].mockup}
              </motion.div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-brand-teal text-white px-4 py-2 rounded-xl shadow-lg text-sm font-bold animate-pulse">
                Interactive
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">
              Ready to Transform Your Customer Analytics?
            </h3>
            <p className="text-gray-600 mb-6">
              Start your free trial and see these features in action with your own data
            </p>
            <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
            <p className="text-gray-500 text-sm mt-3">7-day free trial • No credit card required</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KeyFeaturesSection