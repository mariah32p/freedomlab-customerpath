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
  const [currentView, setCurrentView] = useState<'dashboard' | 'create-journey' | 'journey-detail'>('dashboard')
  const [journeySteps, setJourneySteps] = useState<JourneyStep[]>([
    { id: '1', name: 'Landing Page', visitors: 1000, conversions: 850, conversionRate: 85, color: 'blue', icon: '🌐' },
    { id: '2', name: 'Product Demo', visitors: 850, conversions: 680, conversionRate: 80, color: 'teal', icon: '🎥' },
    { id: '3', name: 'Trial Signup', visitors: 680, conversions: 340, conversionRate: 50, color: 'purple', icon: '📝' },
    { id: '4', name: 'Paid Customer', visitors: 340, conversions: 238, conversionRate: 70, color: 'green', icon: '💳' }
  ])
  const [realtimeEvents, setRealtimeEvents] = useState<CustomerEvent[]>([])
  const [showWebhookModal, setShowWebhookModal] = useState(false)
  const [connectedIntegrations, setConnectedIntegrations] = useState<string[]>([])
  const [newJourneyName, setNewJourneyName] = useState('')
  const [selectedTemplate, setSelectedTemplate] = useState('ecommerce')

  const integrations = [
    { name: 'Shopify', icon: '🛍️', color: 'green', events: ['purchase', 'cart_abandon', 'product_view'] },
    { name: 'HubSpot', icon: '🎯', color: 'orange', events: ['contact_created', 'deal_stage_change', 'email_open'] },
    { name: 'Stripe', icon: '💳', color: 'purple', events: ['payment_success', 'subscription_start', 'trial_end'] },
    { name: 'Mailchimp', icon: '📧', color: 'yellow', events: ['email_sent', 'link_click', 'unsubscribe'] }
  ]

  // Simulate real-time events
  useEffect(() => {
    if (currentView !== 'journey-detail') return

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
    }, 3000)

    return () => clearInterval(interval)
  }, [currentView])

  const connectIntegration = (integrationName: string) => {
    setConnectedIntegrations(prev => [...prev, integrationName])
    
    // Simulate connecting with realistic delay
    setTimeout(() => {
      const integration = integrations.find(i => i.name === integrationName)
      if (integration) {
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
    }, 2000)
  }

  const createJourney = () => {
    if (!newJourneyName.trim()) return
    
    // Simulate journey creation
    setTimeout(() => {
      setCurrentView('journey-detail')
      setShowWebhookModal(false)
    }, 1000)
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 font-montserrat">
      <Header />
      
      {/* App Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-brand-navy">CustomerPath</div>
              <nav className="flex items-center space-x-6">
                <button 
                  onClick={() => setCurrentView('dashboard')}
                  className={`font-medium transition-colors ${currentView === 'dashboard' ? 'text-brand-teal' : 'text-gray-600 hover:text-brand-navy'}`}
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => setCurrentView('create-journey')}
                  className={`font-medium transition-colors ${currentView === 'create-journey' ? 'text-brand-teal' : 'text-gray-600 hover:text-brand-navy'}`}
                >
                  Journeys
                </button>
                <button className="text-gray-600 hover:text-brand-navy font-medium transition-colors">
                  Analytics
                </button>
                <button className="text-gray-600 hover:text-brand-navy font-medium transition-colors">
                  Settings
                </button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-green-700 text-sm font-medium">Pro Trial</span>
              </div>
              <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard View */}
      {currentView === 'dashboard' && (
        <div className="pt-24 p-8 animate-fade-in-up">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold text-brand-navy mb-2 animate-slide-in-left">Dashboard</h1>
                <p className="text-gray-600 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>Overview of your customer journeys</p>
              </div>
              <button 
                onClick={() => setCurrentView('create-journey')}
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-110 shadow-xl hover:shadow-2xl flex items-center animate-glow animate-bounce-in"
                style={{ animationDelay: '0.4s' }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Create New Journey
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-8 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Active Journeys</p>
                    <p className="text-3xl font-bold text-brand-navy">3</p>
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Customers Tracked</p>
                    <p className="text-3xl font-bold text-brand-navy">8,247</p>
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-teal to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Avg Conversion</p>
                    <p className="text-3xl font-bold text-brand-navy">27.8%</p>
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Revenue Impact</p>
                    <p className="text-3xl font-bold text-brand-navy">$114k</p>
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-brand-purple rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey List */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-brand-navy">Your Customer Journeys</h2>
                <button 
                  onClick={() => setCurrentView('create-journey')}
                  className="text-brand-teal hover:text-brand-teal/80 font-semibold transition-all transform hover:scale-105"
                >
                  View All →
                </button>
              </div>
              
              <div className="space-y-6">
                <div 
                  onClick={() => setCurrentView('journey-detail')}
                  className="flex items-center justify-between p-8 bg-gradient-to-r from-blue-50 via-teal-50 to-cyan-50 rounded-2xl border border-blue-200 hover:shadow-2xl transition-all duration-500 cursor-pointer group transform hover:scale-105 animate-slide-in-left"
                  style={{ animationDelay: '1s' }}
                >
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <span className="text-white text-2xl">🛍️</span>
                    </div>
                    <div>
                      <p className="font-bold text-brand-navy text-xl mb-1">E-commerce Checkout Flow</p>
                      <p className="text-gray-600 text-lg">4 steps • 8,247 customers tracked</p>
                      <div className="flex items-center mt-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                        <span className="text-green-600 text-sm font-medium">Live tracking</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-brand-navy text-3xl mb-1">27.8%</p>
                    <p className="text-gray-600">conversion rate</p>
                    <div className="w-20 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-slide-in-right"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-in-left" style={{ animationDelay: '1.2s' }}>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl">
                      <span className="text-white text-2xl">📧</span>
                    </div>
                    <div>
                      <p className="font-bold text-brand-navy text-xl mb-1">Email Nurture Campaign</p>
                      <p className="text-gray-600 text-lg">6 steps • 3,421 customers tracked</p>
                      <div className="flex items-center mt-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse mr-2"></div>
                        <span className="text-orange-600 text-sm font-medium">Optimizing</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-brand-navy text-3xl mb-1">18.5%</p>
                    <p className="text-gray-600">conversion rate</p>
                    <div className="w-20 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-8 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border border-orange-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-in-left" style={{ animationDelay: '1.4s' }}>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl">
                      <span className="text-white text-2xl">🎯</span>
                    </div>
                    <div>
                      <p className="font-bold text-brand-navy text-xl mb-1">Lead Generation Funnel</p>
                      <p className="text-gray-600 text-lg">5 steps • 12,089 customers tracked</p>
                      <div className="flex items-center mt-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse mr-2"></div>
                        <span className="text-blue-600 text-sm font-medium">Active</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-brand-navy text-3xl mb-1">31.2%</p>
                    <p className="text-gray-600">conversion rate</p>
                    <div className="w-20 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Journey View */}
      {currentView === 'create-journey' && (
        <div className="pt-24 p-8 animate-fade-in-up">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <button 
                onClick={() => setCurrentView('dashboard')}
                className="flex items-center text-gray-600 hover:text-brand-navy mb-6 transition-all transform hover:scale-105 animate-slide-in-left"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Dashboard
              </button>
              <h1 className="text-4xl font-bold text-brand-navy mb-3 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>Create New Journey</h1>
              <p className="text-xl text-gray-600 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>Set up a new customer journey to track and optimize</p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-10 animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="space-y-10">
                {/* Journey Name */}
                <div>
                  <label className="block text-xl font-bold text-brand-navy mb-4 animate-slide-in-left" style={{ animationDelay: '0.8s' }}>Journey Name</label>
                  <input
                    type="text"
                    value={newJourneyName}
                    onChange={(e) => setNewJourneyName(e.target.value)}
                    placeholder="e.g., SaaS Trial to Paid Conversion"
                    className="w-full px-6 py-5 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-4 focus:ring-brand-teal/20 focus:border-brand-teal transition-all duration-300 shadow-lg animate-slide-in-right"
                    style={{ animationDelay: '1s' }}
                  />
                </div>

                {/* Template Selection */}
                <div>
                  <label className="block text-xl font-bold text-brand-navy mb-6 animate-slide-in-left" style={{ animationDelay: '1.2s' }}>Choose Template</label>
                  <div className="grid md:grid-cols-3 gap-6">
                    <button
                      onClick={() => setSelectedTemplate('ecommerce')}
                      className={`p-8 rounded-2xl border-2 transition-all duration-300 text-left transform hover:scale-110 shadow-lg hover:shadow-2xl animate-bounce-in ${
                        selectedTemplate === 'ecommerce' 
                          ? 'border-brand-teal bg-gradient-to-br from-brand-teal/10 to-cyan-50 shadow-2xl animate-glow' 
                          : 'border-gray-200 hover:border-brand-teal bg-gradient-to-br from-white to-gray-50'
                      }`}
                      style={{ animationDelay: '1.4s' }}
                    >
                      <div className="text-4xl mb-4">🛍️</div>
                      <h3 className="font-bold text-brand-navy mb-3 text-lg">E-commerce</h3>
                      <p className="text-gray-600">Product discovery to purchase</p>
                    </button>

                    <button
                      onClick={() => setSelectedTemplate('saas')}
                      className={`p-8 rounded-2xl border-2 transition-all duration-300 text-left transform hover:scale-110 shadow-lg hover:shadow-2xl animate-bounce-in ${
                        selectedTemplate === 'saas' 
                          ? 'border-brand-teal bg-gradient-to-br from-brand-teal/10 to-cyan-50 shadow-2xl animate-glow' 
                          : 'border-gray-200 hover:border-brand-teal bg-gradient-to-br from-white to-gray-50'
                      }`}
                      style={{ animationDelay: '1.6s' }}
                    >
                      <div className="text-4xl mb-4">💻</div>
                      <h3 className="font-bold text-brand-navy mb-3 text-lg">SaaS</h3>
                      <p className="text-gray-600">Trial to paid subscription</p>
                    </button>

                    <button
                      onClick={() => setSelectedTemplate('leadgen')}
                      className={`p-8 rounded-2xl border-2 transition-all duration-300 text-left transform hover:scale-110 shadow-lg hover:shadow-2xl animate-bounce-in ${
                        selectedTemplate === 'leadgen' 
                          ? 'border-brand-teal bg-gradient-to-br from-brand-teal/10 to-cyan-50 shadow-2xl animate-glow' 
                          : 'border-gray-200 hover:border-brand-teal bg-gradient-to-br from-white to-gray-50'
                      }`}
                      style={{ animationDelay: '1.8s' }}
                    >
                      <div className="text-4xl mb-4">🎯</div>
                      <h3 className="font-bold text-brand-navy mb-3 text-lg">Lead Gen</h3>
                      <p className="text-gray-600">Visitor to qualified lead</p>
                    </button>
                  </div>
                </div>

                {/* Data Sources */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="block text-xl font-bold text-brand-navy animate-slide-in-left" style={{ animationDelay: '2s' }}>Connect Data Sources</label>
                    <button
                      onClick={() => setShowWebhookModal(true)}
                      className="text-brand-teal hover:text-brand-teal/80 font-semibold transition-all transform hover:scale-105 flex items-center animate-slide-in-right"
                      style={{ animationDelay: '2.2s' }}
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      View Webhook Setup
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {integrations.map((integration, index) => (
                      <button
                        key={integration.name}
                        onClick={() => connectIntegration(integration.name)}
                        disabled={connectedIntegrations.includes(integration.name)}
                        className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl animate-bounce-in ${
                          connectedIntegrations.includes(integration.name)
                            ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-300 cursor-default shadow-xl animate-glow'
                            : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-brand-teal'
                        }`}
                        style={{ animationDelay: `${2.4 + index * 0.2}s` }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg ${
                              connectedIntegrations.includes(integration.name)
                                ? 'bg-gradient-to-br from-green-400 to-emerald-500'
                                : 'bg-gradient-to-br from-gray-100 to-gray-200'
                            }`}>
                              <span className="text-xl">{integration.icon}</span>
                            </div>
                            <div className="text-left">
                              <h5 className="font-bold text-brand-navy text-lg">{integration.name}</h5>
                              <p className="text-gray-600">Track {integration.events.length} events</p>
                            </div>
                          </div>
                          {connectedIntegrations.includes(integration.name) ? (
                            <div className="flex items-center text-green-600 animate-scale-in">
                              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="font-bold">Connected</span>
                            </div>
                          ) : (
                            <div className="text-brand-teal font-bold">Connect →</div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Create Button */}
                <div className="pt-8 border-t border-gray-200">
                  <button
                    onClick={createJourney}
                    disabled={!newJourneyName.trim()}
                    className="w-full bg-gradient-to-r from-brand-teal to-cyan-500 hover:from-brand-teal/90 hover:to-cyan-400 disabled:from-gray-300 disabled:to-gray-400 text-white py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl disabled:transform-none disabled:cursor-not-allowed animate-glow animate-bounce-in"
                    style={{ animationDelay: '3.2s' }}
                  >
                    🚀 Create Journey & Start Tracking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Journey Detail View */}
      {currentView === 'journey-detail' && (
        <div className="pt-24 p-8 animate-fade-in-up">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <button 
                onClick={() => setCurrentView('dashboard')}
                className="flex items-center text-gray-600 hover:text-brand-navy mb-6 transition-all transform hover:scale-105 animate-slide-in-left"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Dashboard
              </button>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-brand-navy mb-3 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>E-commerce Checkout Flow</h1>
                  <p className="text-xl text-gray-600 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>Real-time customer journey analytics</p>
                </div>
                <div className="flex items-center space-x-6 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-center bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-3 rounded-xl border border-green-200 shadow-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                    <span className="text-green-700 font-bold">Live Data</span>
                  </div>
                  <button className="bg-gradient-to-r from-brand-teal to-cyan-500 hover:from-brand-teal/90 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl">
                    Export Report
                  </button>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Journey Visualization */}
              <div className="lg:col-span-2 animate-scale-in" style={{ animationDelay: '0.8s' }}>
                <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-200">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-brand-navy">Customer Journey Flow</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-600 font-bold">Live Updates</span>
                    </div>
                  </div>

                  {/* Journey Steps */}
                  <div className="space-y-8">
                    {journeySteps.map((step, index) => (
                      <div key={step.id} className="relative animate-slide-in-left" style={{ animationDelay: `${1 + index * 0.3}s` }}>
                        {/* Connection Line */}
                        {index < journeySteps.length - 1 && (
                          <div className="absolute left-10 top-24 w-1 h-16 bg-gradient-to-b from-brand-teal to-cyan-400 rounded-full shadow-lg animate-slide-in-right" style={{ animationDelay: `${1.2 + index * 0.3}s` }}></div>
                        )}
                        
                        <div className={`bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 border-l-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${getStepColorClasses(step.color)} border-opacity-70`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className={`w-20 h-20 ${getStepColorClasses(step.color).split(' ')[0]} rounded-2xl flex items-center justify-center text-white text-3xl mr-8 shadow-2xl transform hover:rotate-12 transition-all duration-300`}>
                                {step.icon}
                              </div>
                              <div>
                                <h4 className="text-2xl font-bold text-brand-navy mb-2">{step.name}</h4>
                                <p className="text-gray-600 text-lg">
                                  {step.visitors.toLocaleString()} visitors → {step.conversions.toLocaleString()} conversions
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-4xl font-bold text-brand-navy mb-2">
                                {Math.round((step.conversions / step.visitors) * 100)}%
                              </div>
                              <div className="text-gray-500">conversion rate</div>
                            </div>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="mt-6">
                            <div className="bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                              <div 
                                className={`h-full ${getStepColorClasses(step.color).split(' ')[0]} transition-all duration-2000 shadow-lg animate-slide-in-right`}
                                style={{ width: `${(step.conversions / step.visitors) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Overall Metrics */}
                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <div className="grid grid-cols-3 gap-8 text-center">
                      <div className="animate-bounce-in" style={{ animationDelay: '2.5s' }}>
                        <div className="text-3xl font-bold text-brand-navy mb-2">
                          {Math.round((journeySteps[journeySteps.length - 1].conversions / journeySteps[0].visitors) * 100)}%
                        </div>
                        <div className="text-gray-600">Overall Conversion</div>
                      </div>
                      <div className="animate-bounce-in" style={{ animationDelay: '2.7s' }}>
                        <div className="text-3xl font-bold text-brand-navy mb-2">
                          ${(journeySteps[journeySteps.length - 1].conversions * 50).toLocaleString()}
                        </div>
                        <div className="text-gray-600">Revenue Impact</div>
                      </div>
                      <div className="animate-bounce-in" style={{ animationDelay: '2.9s' }}>
                        <div className="text-3xl font-bold text-brand-navy mb-2">
                          {journeySteps[0].visitors.toLocaleString()}
                        </div>
                        <div className="text-gray-600">Total Visitors</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Events Sidebar */}
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
      )}

      {/* Webhook Setup Modal */}
      {showWebhookModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-brand-teal to-cyan-500 text-white p-8 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Webhook Integration Setup</h3>
                  <p className="text-white/90 text-lg">Connect your tools to send customer events to CustomerPath</p>
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
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 mb-8 border border-gray-200">
                <h4 className="text-xl font-bold text-brand-navy mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  Your Webhook Endpoint
                </h4>
                <div className="flex items-center space-x-3">
                  <code className="flex-1 bg-white px-6 py-4 rounded-xl border border-gray-300 text-sm font-mono text-brand-navy shadow-inner">
                    https://api.customerpath.com/webhooks/events/usr_demo123
                  </code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('https://api.customerpath.com/webhooks/events/usr_demo123')
                      // Show copied feedback
                    }}
                    className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy URL
                  </button>
                </div>
                <p className="text-gray-600 text-sm mt-3">Use this URL in Zapier, Make.com, or send POST requests directly</p>
              </div>

              {/* Integration Grid */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-brand-navy mb-6">Connect Your Tools</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {integrations.map(integration => (
                    <div key={integration.name} className="group">
                      <button
                        onClick={() => connectIntegration(integration.name)}
                        disabled={connectedIntegrations.includes(integration.name)}
                        className={`w-full p-6 rounded-2xl border-2 transition-all transform hover:scale-105 ${
                          connectedIntegrations.includes(integration.name)
                            ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 cursor-default shadow-lg'
                            : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-brand-teal hover:shadow-xl'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mr-4 shadow-lg ${
                              connectedIntegrations.includes(integration.name) 
                                ? 'bg-green-500' 
                                : 'bg-gradient-to-br from-gray-100 to-gray-200'
                            }`}>
                              <span className="text-2xl">{integration.icon}</span>
                            </div>
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
                              <span className="font-bold">Connected</span>
                            </div>
                          ) : (
                            <div className="text-brand-teal font-bold">Connect →</div>
                          )}
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Payload */}
              <div className="bg-gradient-to-br from-brand-navy/5 to-purple-50 rounded-2xl p-6 border border-brand-navy/10 mb-8">
                <h4 className="text-lg font-bold text-brand-navy mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Sample Webhook Payload
                </h4>
                <div className="bg-brand-navy rounded-xl p-6 shadow-inner">
                  <pre className="text-green-400 text-sm font-mono overflow-x-auto">
{`{
  "customer_id": "cust_abc123",
  "event": "trial_started",
  "stage": "trial_signup",
  "timestamp": "2025-01-20T21:15:00Z",
  "metadata": {
    "plan": "pro",
    "source": "google_ads",
    "value": 49.00,
    "utm_campaign": "q1_growth"
  }
}`}
                  </pre>
                </div>
              </div>

              {/* Zapier Setup Guide */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                <h4 className="text-lg font-bold text-brand-navy mb-4 flex items-center">
                  <span className="text-2xl mr-3">⚡</span>
                  Quick Zapier Setup
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">1</div>
                      <div>
                        <p className="font-semibold text-brand-navy">Choose Trigger</p>
                        <p className="text-gray-600 text-sm">Select your app (Shopify, HubSpot, etc.)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">2</div>
                      <div>
                        <p className="font-semibold text-brand-navy">Add Webhook Action</p>
                        <p className="text-gray-600 text-sm">Use "Webhooks by Zapier"</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">3</div>
                      <div>
                        <p className="font-semibold text-brand-navy">Paste Webhook URL</p>
                        <p className="text-gray-600 text-sm">Use the URL above</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">4</div>
                      <div>
                        <p className="font-semibold text-brand-navy">Test & Activate</p>
                        <p className="text-gray-600 text-sm">You're done! 🎉</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DemoPage