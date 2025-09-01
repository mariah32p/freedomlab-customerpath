import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const KeyFeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      id: 'visual-builder',
      title: 'Visual Journey Builder',
      subtitle: 'Drag & Drop Interface',
      description: 'Create detailed customer journey maps with our intuitive visual builder. No technical skills required.',
      benefits: [
        'Drag-and-drop touchpoint creation',
        'Pre-built templates for common journeys',
        'Real-time collaboration with team members',
        'Custom branding and styling options'
      ],
      mockup: (
        <div className="bg-white rounded-xl border border-gray-200 p-6 h-80 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900">E-commerce Journey Builder</h4>
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs">+ Add Step</button>
              <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded text-xs">Save</button>
            </div>
          </div>
          
          <div className="space-y-3">
            {[
              { name: 'Landing Page', users: '8.2k', color: 'bg-blue-500' },
              { name: 'Product Demo', users: '6.4k', color: 'bg-brand-teal' },
              { name: 'Trial Signup', users: '4.0k', color: 'bg-purple-500' },
              { name: 'Payment', users: '1.8k', color: 'bg-green-500' }
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
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-red-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                {i < 3 && (
                  <div className="flex justify-center py-1">
                    <div className="bg-red-100 px-2 py-1 rounded-full">
                      <span className="text-red-600 text-xs font-medium">
                        -{Math.round((1 - (parseInt(step.users.replace('k', '')) / (i === 0 ? 8.2 : i === 1 ? 6.4 : 4.0))) * 100)}% drop
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'real-time-analytics',
      title: 'Real-time Analytics',
      subtitle: 'Live Data Insights',
      description: 'Track customer behavior as it happens with real-time analytics and conversion tracking.',
      benefits: [
        'Live conversion rate monitoring',
        'Real-time drop-off identification',
        'Instant performance alerts',
        'Historical trend analysis'
      ],
      mockup: (
        <div className="bg-white rounded-xl border border-gray-200 p-6 h-80 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900">Live Analytics Dashboard</h4>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-600 text-sm font-medium">Live</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">24.8%</div>
              <div className="text-gray-600 text-sm">Conversion Rate</div>
              <div className="text-green-600 text-xs font-medium">+3.2% today</div>
            </div>
            <div className="bg-brand-teal/10 p-4 rounded-lg border border-brand-teal/20">
              <div className="text-2xl font-bold text-brand-teal">$47.2k</div>
              <div className="text-gray-600 text-sm">Revenue</div>
              <div className="text-green-600 text-xs font-medium">+12% this week</div>
            </div>
          </div>

          <div className="space-y-2">
            <h5 className="font-semibold text-gray-900 text-sm">Recent Activity</h5>
            {[
              { time: '2s ago', event: 'Payment completed', user: 'sarah@company.com', value: '$49' },
              { time: '8s ago', event: 'Trial started', user: 'mike@startup.io', value: null },
              { time: '15s ago', event: 'Demo booked', user: 'jessica@scale.com', value: null },
              { time: '23s ago', event: 'Page visit', user: 'david@growth.co', value: null }
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
      description: 'Connect your existing tools through webhooks with guided setup for platforms like Zapier and Make.',
      benefits: [
        'Step-by-step webhook configuration',
        'Pre-built templates for popular tools',
        'Zapier and Make.com integration guides',
        'Real-time event testing and validation'
      ],
      mockup: (
        <div className="bg-white rounded-xl border border-gray-200 p-6 h-80 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900">Webhook Setup Guide</h4>
            <div className="bg-brand-teal/10 text-brand-teal px-2 py-1 rounded-full text-xs font-medium">
              🔗 Connected
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-700 mb-1">Zapier Integration</h5>
                  <p className="text-blue-600 text-sm mb-2">Connected to 3 workflows • 247 events today</p>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-medium">
                    Configure Triggers
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-teal/10 to-cyan-50 p-4 rounded-lg border border-brand-teal/20">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-brand-teal mb-1">Make.com Automation</h5>
                  <p className="text-brand-teal text-sm mb-2">Auto-sync customer data • 156 events today</p>
                  <button className="bg-brand-teal text-white px-3 py-1 rounded text-xs font-medium">
                    Edit Workflow
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-purple-700 mb-1">Custom Webhook</h5>
                  <p className="text-purple-600 text-sm mb-2">Direct API integration • 89 events today</p>
                  <button className="bg-purple-500 text-white px-3 py-1 rounded text-xs font-medium">
                    View Docs
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <div className="flex items-center space-x-2 mb-2">
                <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7" />
                </svg>
                <span className="font-semibold text-brand-teal text-sm">Your Webhook URL</span>
              </div>
              <div className="bg-white rounded border border-gray-200 p-2">
                <code className="text-xs text-gray-600 font-mono">
                  https://api.customerpath.com/webhook/abc123
                </code>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight">
            Key Features That Drive Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Powerful tools designed specifically for understanding and optimizing customer journeys
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