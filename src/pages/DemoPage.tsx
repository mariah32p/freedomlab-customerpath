import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

interface JourneyStep {
  id: string
  name: string
  visitors: number
  conversions: number
  conversionRate: number
  color: string
  icon: string
}

interface CustomerEvent {
  id: string
  customerId: string
  event: string
  stage: string
  timestamp: string
  metadata?: any
}

const DemoPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showWebhookModal, setShowWebhookModal] = useState(false)
  const [showAddStepModal, setShowAddStepModal] = useState(false)
  const [connectedIntegrations, setConnectedIntegrations] = useState<string[]>([])
  const [journeySteps, setJourneySteps] = useState<JourneyStep[]>([
    { id: '1', name: 'Landing Page', visitors: 1000, conversions: 850, conversionRate: 85, color: 'blue', icon: '🌐' },
    { id: '2', name: 'Product Demo', visitors: 850, conversions: 680, conversionRate: 80, color: 'teal', icon: '🎥' },
    { id: '3', name: 'Trial Signup', visitors: 680, conversions: 340, conversionRate: 50, color: 'purple', icon: '📝' },
    { id: '4', name: 'Paid Customer', visitors: 340, conversions: 238, conversionRate: 70, color: 'green', icon: '💳' }
  ])
  const [realtimeEvents, setRealtimeEvents] = useState<CustomerEvent[]>([])
  const [newStepName, setNewStepName] = useState('')
  const [selectedColor, setSelectedColor] = useState('indigo')
  const [selectedPosition, setSelectedPosition] = useState(2)

  const demoSteps = [
    {
      title: "Import Your Customer Data",
      description: "Connect your existing tools to start tracking customer journeys",
      duration: 8000
    },
    {
      title: "Build Your Journey Map",
      description: "Create visual representations of your customer touchpoints",
      duration: 10000
    },
    {
      title: "Watch Real-Time Analytics",
      description: "See live customer behavior and conversion metrics",
      duration: 12000
    }
  ]

  const integrations = [
    { name: 'Shopify', icon: '🛍️', color: 'green', events: ['purchase', 'cart_abandon', 'product_view'] },
    { name: 'HubSpot', icon: '🎯', color: 'orange', events: ['contact_created', 'deal_stage_change', 'email_open'] },
    { name: 'Stripe', icon: '💳', color: 'purple', events: ['payment_success', 'subscription_start', 'trial_end'] },
    { name: 'Mailchimp', icon: '📧', color: 'yellow', events: ['email_sent', 'link_click', 'unsubscribe'] },
    { name: 'Google Analytics', icon: '📊', color: 'blue', events: ['goal_complete', 'page_view', 'event_track'] },
    { name: 'Intercom', icon: '💬', color: 'indigo', events: ['message_sent', 'conversation_start', 'user_reply'] }
  ]

  const colors = [
    { name: 'Blue', value: 'blue', bg: 'bg-blue-500' },
    { name: 'Teal', value: 'teal', bg: 'bg-teal-500' },
    { name: 'Purple', value: 'purple', bg: 'bg-purple-500' },
    { name: 'Green', value: 'green', bg: 'bg-green-500' },
    { name: 'Orange', value: 'orange', bg: 'bg-orange-500' },
    { name: 'Pink', value: 'pink', bg: 'bg-pink-500' },
    { name: 'Indigo', value: 'indigo', bg: 'bg-indigo-500' },
    { name: 'Red', value: 'red', bg: 'bg-red-500' }
  ]

  // Auto-play demo
  useEffect(() => {
    if (!isPlaying) return

    const timer = setTimeout(() => {
      if (currentStep < demoSteps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        setIsPlaying(false)
        setCurrentStep(0)
      }
    }, demoSteps[currentStep].duration)

    return () => clearTimeout(timer)
  }, [currentStep, isPlaying])

  // Show modals during specific steps
  useEffect(() => {
    if (!isPlaying) return

    if (currentStep === 1) {
      // Show Add Step modal 3 seconds into journey building
      const timer1 = setTimeout(() => setShowAddStepModal(true), 3000)
      // Show Webhook modal 6 seconds into journey building
      const timer2 = setTimeout(() => {
        setShowAddStepModal(false)
        setShowWebhookModal(true)
      }, 6000)
      
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
      }
    } else {
      setShowAddStepModal(false)
      setShowWebhookModal(false)
    }
  }, [currentStep, isPlaying])

  // Simulate real-time events
  useEffect(() => {
    if (currentStep !== 2 || !isPlaying) return

    const eventTemplates = [
      { event: 'page_view', stage: 'Landing Page', icon: '👀' },
      { event: 'demo_start', stage: 'Product Demo', icon: '▶️' },
      { event: 'trial_signup', stage: 'Trial Signup', icon: '✍️' },
      { event: 'payment_success', stage: 'Paid Customer', icon: '💰' }
    ]

    const interval = setInterval(() => {
      const template = eventTemplates[Math.floor(Math.random() * eventTemplates.length)]
      const newEvent: CustomerEvent = {
        id: Math.random().toString(36).substr(2, 9),
        customerId: `cust_${Math.random().toString(36).substr(2, 6)}`,
        event: template.event,
        stage: template.stage,
        timestamp: new Date().toISOString(),
        metadata: { source: 'webhook', icon: template.icon }
      }

      setRealtimeEvents(prev => [newEvent, ...prev.slice(0, 9)])

      // Update journey metrics
      setJourneySteps(prev => prev.map(step => {
        if (step.name === template.stage) {
          return {
            ...step,
            visitors: step.visitors + 1,
            conversions: template.event === 'payment_success' ? step.conversions + 1 : step.conversions
          }
        }
        return step
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [currentStep, isPlaying])

  const startDemo = () => {
    setIsPlaying(true)
    setCurrentStep(0)
    setRealtimeEvents([])
  }

  const connectIntegration = (integrationName: string) => {
    setConnectedIntegrations(prev => [...prev, integrationName])
    
    // Simulate connecting with a delay
    setTimeout(() => {
      const integration = integrations.find(i => i.name === integrationName)
      if (integration) {
        // Add some sample events for this integration
        const sampleEvents = integration.events.map((event, index) => ({
          id: Math.random().toString(36).substr(2, 9),
          customerId: `cust_${Math.random().toString(36).substr(2, 6)}`,
          event,
          stage: journeySteps[index % journeySteps.length].name,
          timestamp: new Date().toISOString(),
          metadata: { source: integrationName.toLowerCase(), icon: integration.icon }
        }))
        
        setRealtimeEvents(prev => [...sampleEvents, ...prev.slice(0, 6)])
      }
    }, 1500)
  }

  const addNewStep = () => {
    if (!newStepName.trim()) return

    const newStep: JourneyStep = {
      id: Math.random().toString(36).substr(2, 9),
      name: newStepName,
      visitors: Math.floor(Math.random() * 500) + 100,
      conversions: Math.floor(Math.random() * 300) + 50,
      conversionRate: Math.floor(Math.random() * 40) + 30,
      color: selectedColor,
      icon: '⭐'
    }

    const newSteps = [...journeySteps]
    newSteps.splice(selectedPosition, 0, newStep)
    setJourneySteps(newSteps)
    
    setShowAddStepModal(false)
    setNewStepName('')
  }

  const getStepColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-500 border-blue-200',
      teal: 'bg-teal-500 border-teal-200',
      purple: 'bg-purple-500 border-purple-200',
      green: 'bg-green-500 border-green-200',
      orange: 'bg-orange-500 border-orange-200',
      pink: 'bg-pink-500 border-pink-200',
      indigo: 'bg-indigo-500 border-indigo-200',
      red: 'bg-red-500 border-red-200'
    }
    return colorMap[color] || 'bg-gray-500 border-gray-200'
  }

  return (
    <div className="min-h-screen bg-gray-50 font-montserrat">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Demo Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              See CustomerPath in Action
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience how easy it is to visualize and optimize your customer journeys
            </p>
            
            {!isPlaying ? (
              <button
                onClick={startDemo}
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl"
              >
                🚀 Start Interactive Demo
              </button>
            ) : (
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center bg-brand-teal/10 px-6 py-3 rounded-xl border border-brand-teal/20">
                  <div className="w-3 h-3 bg-brand-teal rounded-full animate-pulse mr-3"></div>
                  <span className="text-brand-teal font-semibold">Demo Running</span>
                </div>
                <button
                  onClick={() => setIsPlaying(false)}
                  className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
                >
                  Stop Demo
                </button>
              </div>
            )}
          </div>

          {/* Demo Progress */}
          {isPlaying && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {demoSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                      index <= currentStep 
                        ? 'bg-brand-teal text-white shadow-lg' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {index + 1}
                    </div>
                    {index < demoSteps.length - 1 && (
                      <div className={`w-24 h-1 mx-4 rounded-full transition-all ${
                        index < currentStep ? 'bg-brand-teal' : 'bg-gray-200'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-brand-navy mb-2">
                  {demoSteps[currentStep].title}
                </h3>
                <p className="text-gray-600">{demoSteps[currentStep].description}</p>
              </div>
            </div>
          )}

          {/* Demo Content */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Browser Header */}
            <div className="bg-gray-50 px-6 py-4 border-b flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-600 font-medium flex-1">
                app.customerpath.com/dashboard
              </div>
              <div className="flex items-center ml-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-green-600 text-sm font-medium">Live</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-brand-navy mb-2">Customer Journey Dashboard</h2>
                  <p className="text-gray-600">Real-time insights into your customer experience</p>
                </div>
                <div className="flex items-center space-x-4">
                  {currentStep >= 1 && (
                    <button
                      onClick={() => setShowWebhookModal(true)}
                      className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      Connect Data Sources
                    </button>
                  )}
                  <button
                    onClick={() => setShowAddStepModal(true)}
                    className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Step
                  </button>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Journey Visualization */}
                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-xl font-bold text-brand-navy">E-commerce Customer Journey</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-600 text-sm font-medium">Live Updates</span>
                      </div>
                    </div>

                    {/* Journey Steps */}
                    <div className="space-y-6">
                      {journeySteps.map((step, index) => (
                        <div key={step.id} className="relative">
                          {/* Connection Line */}
                          {index < journeySteps.length - 1 && (
                            <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-gray-300 to-gray-200"></div>
                          )}
                          
                          <div className={`bg-white rounded-xl p-6 border-l-4 shadow-lg hover:shadow-xl transition-all ${getStepColorClasses(step.color)} border-opacity-50`}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className={`w-16 h-16 ${getStepColorClasses(step.color).split(' ')[0]} rounded-xl flex items-center justify-center text-white text-2xl mr-6 shadow-lg`}>
                                  {step.icon}
                                </div>
                                <div>
                                  <h4 className="text-xl font-bold text-brand-navy mb-1">{step.name}</h4>
                                  <p className="text-gray-600">
                                    {step.visitors.toLocaleString()} visitors → {step.conversions.toLocaleString()} conversions
                                  </p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-3xl font-bold text-brand-navy mb-1">
                                  {Math.round((step.conversions / step.visitors) * 100)}%
                                </div>
                                <div className="text-gray-500 text-sm">conversion rate</div>
                              </div>
                            </div>
                            
                            {/* Progress Bar */}
                            <div className="mt-4">
                              <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
                                <div 
                                  className={`h-full ${getStepColorClasses(step.color).split(' ')[0]} transition-all duration-1000`}
                                  style={{ width: `${(step.conversions / step.visitors) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Overall Metrics */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-2xl font-bold text-brand-navy">
                            {Math.round((journeySteps[journeySteps.length - 1].conversions / journeySteps[0].visitors) * 100)}%
                          </div>
                          <div className="text-gray-600 text-sm">Overall Conversion</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-brand-navy">
                            ${(journeySteps[journeySteps.length - 1].conversions * 50).toLocaleString()}
                          </div>
                          <div className="text-gray-600 text-sm">Revenue Impact</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-brand-navy">
                            {journeySteps[0].visitors.toLocaleString()}
                          </div>
                          <div className="text-gray-600 text-sm">Total Visitors</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Real-time Activity */}
                <div className="space-y-6">
                  {/* Connected Integrations */}
                  {connectedIntegrations.length > 0 && (
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                      <h3 className="text-lg font-bold text-brand-navy mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        Connected Sources
                      </h3>
                      <div className="space-y-2">
                        {connectedIntegrations.map(integration => {
                          const integrationData = integrations.find(i => i.name === integration)
                          return (
                            <div key={integration} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                              <div className="flex items-center">
                                <span className="text-lg mr-3">{integrationData?.icon}</span>
                                <span className="font-semibold text-brand-navy">{integration}</span>
                              </div>
                              <div className="flex items-center">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                                <span className="text-green-600 text-sm font-medium">Active</span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Live Events */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                    <h3 className="text-lg font-bold text-brand-navy mb-4 flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                      Live Customer Events
                    </h3>
                    <div className="space-y-3 max-h-80 overflow-y-auto">
                      {realtimeEvents.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                          <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7" />
                          </svg>
                          <p>Waiting for customer events...</p>
                          <p className="text-sm">Connect your data sources to see live activity</p>
                        </div>
                      ) : (
                        realtimeEvents.map(event => (
                          <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 animate-fade-in-up">
                            <div className="flex items-center">
                              <span className="text-lg mr-3">{event.metadata?.icon || '📊'}</span>
                              <div>
                                <p className="font-semibold text-brand-navy text-sm">{event.event.replace('_', ' ')}</p>
                                <p className="text-gray-600 text-xs">{event.stage}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-gray-500 text-xs">
                                {new Date(event.timestamp).toLocaleTimeString()}
                              </p>
                              <p className="text-gray-400 text-xs">{event.customerId}</p>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 bg-gradient-to-r from-brand-navy to-brand-purple rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Customer Journeys?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Start your 7-day free trial and see exactly where your customers are dropping off
            </p>
            <Link 
              to="/signup"
              className="bg-brand-teal hover:bg-brand-teal/90 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl inline-block"
            >
              Start Free Trial
            </Link>
          </div>
        </div>

        {/* Add Step Modal */}
        {showAddStepModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl transform animate-fade-in-up">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-brand-navy">Add Journey Step</h3>
                <button
                  onClick={() => setShowAddStepModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-navy mb-2">Step Name</label>
                  <input
                    type="text"
                    value={newStepName}
                    onChange={(e) => setNewStepName(e.target.value)}
                    placeholder="e.g., Email Nurture Campaign"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-navy mb-2">Insert Position</label>
                  <select
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  >
                    {journeySteps.map((step, index) => (
                      <option key={index} value={index + 1}>
                        After "{step.name}"
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-navy mb-3">Color Theme</label>
                  <div className="grid grid-cols-4 gap-3">
                    {colors.map(color => (
                      <button
                        key={color.value}
                        onClick={() => setSelectedColor(color.value)}
                        className={`w-full h-12 ${color.bg} rounded-xl transition-all transform hover:scale-105 ${
                          selectedColor === color.value ? 'ring-4 ring-brand-teal ring-opacity-50 scale-105' : ''
                        }`}
                      >
                        {selectedColor === color.value && (
                          <svg className="w-6 h-6 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preview */}
                {newStepName && (
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <p className="text-sm font-semibold text-brand-navy mb-3">Preview:</p>
                    <div className={`bg-white rounded-lg p-4 border-l-4 ${getStepColorClasses(selectedColor)} border-opacity-50`}>
                      <div className="flex items-center">
                        <div className={`w-12 h-12 ${getStepColorClasses(selectedColor).split(' ')[0]} rounded-lg flex items-center justify-center text-white text-lg mr-4`}>
                          ⭐
                        </div>
                        <div>
                          <h4 className="font-bold text-brand-navy">{newStepName}</h4>
                          <p className="text-gray-600 text-sm">New journey step</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex space-x-4 mt-8">
                <button
                  onClick={() => setShowAddStepModal(false)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={addNewStep}
                  disabled={!newStepName.trim()}
                  className="flex-1 bg-brand-teal hover:bg-brand-teal/90 disabled:bg-gray-300 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                >
                  Add Step
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Webhook Integration Modal */}
        {showWebhookModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-fade-in-up">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-brand-teal to-cyan-500 text-white p-8 rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Connect Your Data Sources</h3>
                    <p className="text-white/90 text-lg">Send customer events directly to CustomerPath via webhooks</p>
                  </div>
                  <button
                    onClick={() => setShowWebhookModal(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-8">
                {/* Webhook URL */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-200">
                  <h4 className="text-lg font-bold text-brand-navy mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Your Webhook URL
                  </h4>
                  <div className="flex items-center space-x-3">
                    <code className="flex-1 bg-white px-4 py-3 rounded-lg border border-gray-300 text-sm font-mono text-brand-navy">
                      https://api.customerpath.com/webhooks/journey-events/usr_demo123
                    </code>
                    <button
                      onClick={() => navigator.clipboard.writeText('https://api.customerpath.com/webhooks/journey-events/usr_demo123')}
                      className="bg-brand-teal hover:bg-brand-teal/90 text-white px-4 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                    >
                      Copy
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">Use this URL in Zapier, Make.com, or any webhook-enabled platform</p>
                </div>

                {/* Integration Options */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-brand-navy mb-6">Popular Integrations</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {integrations.map(integration => (
                      <div key={integration.name} className="group">
                        <button
                          onClick={() => connectIntegration(integration.name)}
                          disabled={connectedIntegrations.includes(integration.name)}
                          className={`w-full p-6 rounded-2xl border-2 transition-all transform hover:scale-105 ${
                            connectedIntegrations.includes(integration.name)
                              ? 'bg-green-50 border-green-200 cursor-default'
                              : 'bg-white border-gray-200 hover:border-brand-teal hover:shadow-lg'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <span className="text-3xl mr-4">{integration.icon}</span>
                              <div className="text-left">
                                <h5 className="font-bold text-brand-navy text-lg">{integration.name}</h5>
                                <p className="text-gray-600 text-sm">
                                  {integration.events.join(', ').replace(/_/g, ' ')}
                                </p>
                              </div>
                            </div>
                            {connectedIntegrations.includes(integration.name) ? (
                              <div className="flex items-center text-green-600">
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="font-semibold">Connected</span>
                              </div>
                            ) : (
                              <div className="text-brand-teal font-semibold">Connect →</div>
                            )}
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Payload */}
                <div className="bg-brand-navy/5 rounded-2xl p-6 border border-brand-navy/10">
                  <h4 className="text-lg font-bold text-brand-navy mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Sample Webhook Payload
                  </h4>
                  <pre className="bg-brand-navy text-green-400 p-4 rounded-xl text-sm overflow-x-auto font-mono">
{`{
  "customer_id": "cust_abc123",
  "event": "trial_started",
  "stage": "trial_signup",
  "timestamp": "2025-01-20T21:15:00Z",
  "metadata": {
    "plan": "pro",
    "source": "google_ads",
    "value": 49.00
  }
}`}
                  </pre>
                </div>

                {/* Quick Setup Guide */}
                <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <h4 className="text-lg font-bold text-brand-navy mb-4 flex items-center">
                    <span className="text-2xl mr-2">⚡</span>
                    Quick Zapier Setup
                  </h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-brand-teal text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">1</div>
                      <span>Choose your trigger app (Shopify, HubSpot, etc.)</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-brand-teal text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">2</div>
                      <span>Add "Webhooks by Zapier" as the action</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-brand-teal text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">3</div>
                      <span>Paste your webhook URL and map the data fields</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-brand-teal text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">4</div>
                      <span>Test and activate - you're done! 🎉</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 mt-8">
                  <button
                    onClick={() => setShowWebhookModal(false)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                  <Link
                    to="/signup"
                    className="flex-1 bg-brand-teal hover:bg-brand-teal/90 text-white py-4 rounded-xl font-semibold transition-all transform hover:scale-105 text-center"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  export default DemoPage