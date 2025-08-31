import React, { useState, useEffect } from 'react'
import { 
  Users, Target, CheckCircle, Clock, TrendingUp, Settings, Plus, Eye, 
  MessageSquare, Star, Trophy, Bell, BarChart3, Zap, ArrowRight,
  Play, Pause, RotateCcw, Activity, Calendar, Award
} from 'lucide-react'

const DemoPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [celebrationVisible, setCelebrationVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState<any>(null)
  const [isTyping, setIsTyping] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [liveEvents, setLiveEvents] = useState<any[]>([])
  const [journeyMetrics, setJourneyMetrics] = useState({
    totalVisitors: 8247,
    activeJourneys: 47,
    conversionRate: 27.8,
    revenue: 114000
  })

  // Auto-advance demo steps
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        const next = (prev + 1) % 6
        // Show modal for certain steps
        if (next === 1) {
          setTimeout(() => showJourneyDetailModal(), 2000)
        } else if (next === 2) {
          setTimeout(() => showBuilderModal(), 2500)
        } else if (next === 4) {
          setTimeout(() => showConversionModal(), 2000)
        }
        return next
      })
    }, 7000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Live events simulation
  useEffect(() => {
    const eventInterval = setInterval(() => {
      const events = [
        { type: 'visitor', stage: 'Landing Page', user: 'Anonymous User', action: 'Page View' },
        { type: 'signup', stage: 'Trial Signup', user: 'john.doe@email.com', action: 'Started Trial' },
        { type: 'conversion', stage: 'Paid Customer', user: 'sarah.m@company.com', action: 'Upgraded to Pro' },
        { type: 'engagement', stage: 'Product Demo', user: 'mike.r@startup.io', action: 'Watched Demo' }
      ]
      
      const randomEvent = events[Math.floor(Math.random() * events.length)]
      const newEvent = {
        ...randomEvent,
        id: Math.random().toString(36).substring(2, 11),
        timestamp: new Date().toLocaleTimeString(),
        value: Math.floor(Math.random() * 500) + 50
      }
      
      setLiveEvents(prev => [newEvent, ...prev.slice(0, 4)])
      
      // Update metrics
      setJourneyMetrics(prev => ({
        ...prev,
        totalVisitors: prev.totalVisitors + Math.floor(Math.random() * 3) + 1,
        conversionRate: 27.8 + (Math.random() - 0.5) * 2,
        revenue: prev.revenue + Math.floor(Math.random() * 200) + 50
      }))
    }, 3000)
    
    return () => clearInterval(eventInterval)
  }, [])

  // Celebration effect
  useEffect(() => {
    if (currentStep === 4) {
      setCelebrationVisible(true)
      const timer = setTimeout(() => setCelebrationVisible(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [currentStep])

  // Typing animation effect
  useEffect(() => {
    if (!isTyping) return
    
    const text = "Just upgraded to Pro! The advanced analytics are exactly what we needed 🚀"
    let index = 0
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(typeInterval)
      }
    }, 50)
    
    return () => clearInterval(typeInterval)
  }, [isTyping])

  const showJourneyDetailModal = () => {
    setModalContent({
      type: 'journey-detail',
      title: 'Analyzing Customer Journey',
      content: 'Watch how we track every touchpoint in real-time. This e-commerce funnel shows exactly where customers engage and where they drop off.'
    })
    setShowModal(true)
    setTimeout(() => setShowModal(false), 4000)
  }

  const showBuilderModal = () => {
    setModalContent({
      type: 'builder',
      title: 'Building New Journey Map',
      content: 'Here\'s how easy it is to create a new customer journey. Just drag and drop touchpoints to map your entire customer experience.'
    })
    setShowModal(true)
    setTimeout(() => setShowModal(false), 4500)
  }

  const showConversionModal = () => {
    setModalContent({
      type: 'conversion',
      title: 'Live Conversion Event!',
      content: 'A customer just upgraded to Pro! Watch how the system automatically updates all metrics and sends celebration notifications.'
    })
    setShowModal(true)
    setIsTyping(true)
    setTypedText('')
    setTimeout(() => setShowModal(false), 6000)
  }

  const steps = [
    'Dashboard Overview',
    'Journey Analytics',
    'Visual Builder',
    'Live Events',
    'Conversion Success',
    'Growth Insights'
  ]

  const mockJourneys = [
    {
      id: 1,
      name: 'E-commerce Checkout Flow',
      visitors: 8247,
      conversions: 2289,
      conversionRate: 27.8,
      revenue: 114000,
      status: 'active',
      lastUpdated: '2 min ago'
    },
    {
      id: 2,
      name: 'SaaS Trial Onboarding',
      visitors: 3421,
      conversions: 1156,
      conversionRate: 33.8,
      revenue: 57800,
      status: 'active',
      lastUpdated: '5 min ago'
    },
    {
      id: 3,
      name: 'Content Marketing Funnel',
      visitors: 12847,
      conversions: 3421,
      conversionRate: 26.6,
      revenue: 85600,
      status: 'optimizing',
      lastUpdated: '1 hour ago'
    }
  ]

  const journeySteps = [
    {
      name: 'Landing Page',
      visitors: journeyMetrics.totalVisitors,
      conversions: Math.floor(journeyMetrics.totalVisitors * 0.78),
      conversionRate: 78,
      stage: 'awareness'
    },
    {
      name: 'Product Demo',
      visitors: Math.floor(journeyMetrics.totalVisitors * 0.78),
      conversions: Math.floor(journeyMetrics.totalVisitors * 0.41),
      conversionRate: 53,
      stage: 'interest'
    },
    {
      name: 'Trial Signup',
      visitors: Math.floor(journeyMetrics.totalVisitors * 0.41),
      conversions: Math.floor(journeyMetrics.totalVisitors * 0.28),
      conversionRate: 68,
      stage: 'consideration'
    },
    {
      name: 'Paid Customer',
      visitors: Math.floor(journeyMetrics.totalVisitors * 0.28),
      conversions: Math.floor(journeyMetrics.totalVisitors * 0.28),
      conversionRate: 100,
      stage: 'conversion'
    }
  ]

  const renderDashboard = () => (
    <div className="space-y-8 animate-fade-in-up">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-brand-navy via-brand-purple to-brand-teal rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32 animate-pulse"></div>
        <div className="relative">
          <h2 className="text-4xl font-bold mb-3">Customer Journey Analytics</h2>
          <p className="text-white/80 text-lg mb-6">Real-time insights into your customer experience</p>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-brand-teal animate-pulse" />
              <span>Live tracking active</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-brand-teal" />
              <span>{journeyMetrics.totalVisitors.toLocaleString()} visitors today</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-slate-800">{journeyMetrics.totalVisitors.toLocaleString()}</div>
              <div className="text-slate-500 text-sm">Total Visitors</div>
            </div>
          </div>
          <div className="text-emerald-600 text-sm font-medium">↗ +12% vs yesterday</div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-brand-teal" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-slate-800">{journeyMetrics.activeJourneys}</div>
              <div className="text-slate-500 text-sm">Active Journeys</div>
            </div>
          </div>
          <div className="text-brand-teal text-sm font-medium">3 optimizing</div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-slate-800">{journeyMetrics.conversionRate.toFixed(1)}%</div>
              <div className="text-slate-500 text-sm">Conversion Rate</div>
            </div>
          </div>
          <div className="text-purple-600 text-sm font-medium">↗ +3.2% this week</div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Trophy className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-slate-800">${(journeyMetrics.revenue / 1000).toFixed(0)}k</div>
              <div className="text-slate-500 text-sm">Revenue Impact</div>
            </div>
          </div>
          <div className="text-emerald-600 text-sm font-medium">↗ +18% this month</div>
        </div>
      </div>

      {/* Active Journeys */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-slate-800">Active Customer Journeys</h3>
            <button className="bg-brand-teal text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-teal/90 transition-colors duration-200 flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Create Journey</span>
            </button>
          </div>
        </div>
        <div className="divide-y divide-slate-100">
          {mockJourneys.map((journey, index) => (
            <div key={journey.id} className="p-6 hover:bg-slate-50 transition-all duration-200 animate-slide-in-right" style={{animationDelay: `${index * 100}ms`}}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    journey.status === 'active' ? 'bg-emerald-100' : 'bg-amber-100'
                  }`}>
                    {journey.status === 'active' ? (
                      <Activity className="w-6 h-6 text-emerald-600 animate-pulse" />
                    ) : (
                      <Zap className="w-6 h-6 text-amber-600" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{journey.name}</h4>
                    <p className="text-slate-600 text-sm">Updated {journey.lastUpdated}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-800">{journey.visitors.toLocaleString()}</div>
                    <div className="text-xs text-slate-500">Visitors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-teal">{journey.conversionRate}%</div>
                    <div className="text-xs text-slate-500">Conversion</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">${(journey.revenue / 1000).toFixed(0)}k</div>
                    <div className="text-xs text-slate-500">Revenue</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderJourneyAnalytics = () => (
    <div className="space-y-8 animate-fade-in-up">
      {/* Journey Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">E-commerce Checkout Flow</h3>
            <p className="text-slate-600">Live customer journey analytics</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-emerald-100 px-3 py-2 rounded-lg">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-700 text-sm font-medium">Live</span>
            </div>
            <button className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
              Export Report
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-800">{journeyMetrics.totalVisitors.toLocaleString()}</div>
            <div className="text-slate-500 text-sm">Total Visitors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-teal">{journeyMetrics.conversionRate.toFixed(1)}%</div>
            <div className="text-slate-500 text-sm">Overall Conversion</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">${(journeyMetrics.revenue / 1000).toFixed(0)}k</div>
            <div className="text-slate-500 text-sm">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">2.3x</div>
            <div className="text-slate-500 text-sm">ROI Improvement</div>
          </div>
        </div>
      </div>

      {/* Journey Flow Visualization */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <h4 className="text-lg font-semibold text-slate-800 mb-6">Customer Flow Visualization</h4>
        
        <div className="relative">
          {/* Connection Lines */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 via-brand-teal to-emerald-400 opacity-50"></div>
          
          <div className="grid md:grid-cols-4 gap-6 relative">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative z-10 animate-scale-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className={`bg-gradient-to-br p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                  step.stage === 'awareness' ? 'from-blue-50 to-blue-100 border-blue-200' :
                  step.stage === 'interest' ? 'from-brand-teal/10 to-cyan-100 border-brand-teal/20' :
                  step.stage === 'consideration' ? 'from-purple-50 to-purple-100 border-purple-200' :
                  'from-emerald-50 to-emerald-100 border-emerald-200'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                      step.stage === 'awareness' ? 'bg-blue-500' :
                      step.stage === 'interest' ? 'bg-brand-teal' :
                      step.stage === 'consideration' ? 'bg-purple-500' :
                      'bg-emerald-500'
                    }`}>
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-800">{step.visitors > 0 ? Math.round(step.conversionRate) : 0}%</div>
                      <div className="text-slate-500 text-xs">conversion</div>
                    </div>
                  </div>
                  
                  <h5 className="font-bold text-slate-800 mb-2">{step.name}</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Visitors:</span>
                      <span className="font-semibold text-slate-800">{step.visitors.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Conversions:</span>
                      <span className="font-semibold text-slate-800">{step.conversions.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className={`w-full rounded-full h-2 ${
                      step.stage === 'awareness' ? 'bg-blue-200' :
                      step.stage === 'interest' ? 'bg-brand-teal/20' :
                      step.stage === 'consideration' ? 'bg-purple-200' :
                      'bg-emerald-200'
                    }`}>
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          step.stage === 'awareness' ? 'bg-blue-500' :
                          step.stage === 'interest' ? 'bg-brand-teal' :
                          step.stage === 'consideration' ? 'bg-purple-500' :
                          'bg-emerald-500'
                        }`}
                        style={{width: `${step.conversionRate}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Events Feed */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-semibold text-slate-800">Live Customer Events</h4>
          <div className="flex items-center space-x-2 text-emerald-600">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Real-time</span>
          </div>
        </div>
        
        <div className="space-y-3 max-h-64 overflow-hidden">
          {liveEvents.map((event, index) => (
            <div key={event.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg animate-slide-in-left" style={{animationDelay: `${index * 100}ms`}}>
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  event.type === 'conversion' ? 'bg-emerald-500' :
                  event.type === 'signup' ? 'bg-brand-teal' :
                  event.type === 'engagement' ? 'bg-purple-500' :
                  'bg-blue-500'
                }`}>
                  {event.type === 'conversion' ? (
                    <Trophy className="w-4 h-4 text-white" />
                  ) : event.type === 'signup' ? (
                    <Users className="w-4 h-4 text-white" />
                  ) : event.type === 'engagement' ? (
                    <Eye className="w-4 h-4 text-white" />
                  ) : (
                    <Activity className="w-4 h-4 text-white" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-slate-800 text-sm">{event.action}</p>
                  <p className="text-slate-500 text-xs">{event.user} • {event.stage}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-slate-800">${event.value}</div>
                <div className="text-xs text-slate-500">{event.timestamp}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderVisualBuilder = () => (
    <div className="space-y-8 animate-fade-in-up">
      {/* Builder Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">Visual Journey Builder</h3>
            <p className="text-slate-600">Drag and drop to create your customer journey map</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
              Save Template
            </button>
            <button className="bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-teal/90 transition-colors">
              Publish Journey
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Journey Name</label>
            <input 
              type="text" 
              value="SaaS Product Demo Flow"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Data Source</label>
            <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal">
              <option>Google Analytics 4</option>
              <option>Mixpanel</option>
              <option>Custom API</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Update Frequency</label>
            <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal">
              <option>Real-time</option>
              <option>Hourly</option>
              <option>Daily</option>
            </select>
          </div>
        </div>
      </div>

      {/* Touchpoint Builder */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <h4 className="text-lg font-semibold text-slate-800 mb-6">Build Your Customer Touchpoints</h4>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Available Components */}
          <div>
            <h5 className="font-medium text-slate-700 mb-4">Available Components</h5>
            <div className="space-y-3">
              {[
                { name: 'Landing Page', icon: '🏠', category: 'Awareness' },
                { name: 'Product Demo', icon: '▶️', category: 'Interest' },
                { name: 'Pricing Page', icon: '💰', category: 'Consideration' },
                { name: 'Trial Signup', icon: '📝', category: 'Trial' },
                { name: 'Onboarding', icon: '🎯', category: 'Activation' },
                { name: 'Payment', icon: '💳', category: 'Conversion' }
              ].map((component, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200 hover:border-brand-teal hover:bg-brand-teal/5 transition-all duration-200 cursor-grab animate-bounce-in" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{component.icon}</span>
                    <div>
                      <span className="font-medium text-slate-800">{component.name}</span>
                      <div className="text-xs text-slate-500">{component.category}</div>
                    </div>
                  </div>
                  <Plus className="w-4 h-4 text-slate-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Journey Canvas */}
          <div>
            <h5 className="font-medium text-slate-700 mb-4">Your Journey Map</h5>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border-2 border-dashed border-slate-300 min-h-96">
              <div className="space-y-4">
                {[
                  { name: 'Landing Page', visitors: 8247, conversions: 6432, color: 'blue' },
                  { name: 'Product Demo', visitors: 6432, conversions: 3421, color: 'teal' },
                  { name: 'Trial Signup', visitors: 3421, conversions: 2289, color: 'purple' },
                  { name: 'Paid Customer', visitors: 2289, conversions: 2289, color: 'emerald' }
                ].map((step, index) => (
                  <div key={index} className="relative animate-slide-in-right" style={{animationDelay: `${index * 300}ms`}}>
                    {index < 3 && (
                      <div className="absolute left-6 top-12 w-0.5 h-8 bg-gradient-to-b from-brand-teal to-emerald-500 opacity-60"></div>
                    )}
                    <div className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      step.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                      step.color === 'teal' ? 'bg-brand-teal/10 border-brand-teal/20' :
                      step.color === 'purple' ? 'bg-purple-50 border-purple-200' :
                      'bg-emerald-50 border-emerald-200'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-lg ${
                            step.color === 'blue' ? 'bg-blue-500' :
                            step.color === 'teal' ? 'bg-brand-teal' :
                            step.color === 'purple' ? 'bg-purple-500' :
                            'bg-emerald-500'
                          }`}>
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>
                          <div>
                            <h6 className="font-semibold text-slate-800">{step.name}</h6>
                            <p className="text-slate-600 text-xs">{step.visitors.toLocaleString()} visitors</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-slate-800">
                            {step.visitors > 0 ? Math.round((step.conversions / step.visitors) * 100) : 0}%
                          </div>
                          <div className="text-xs text-slate-500">convert</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderLiveEvents = () => (
    <div className="space-y-8 animate-fade-in-up">
      {/* Real-time Dashboard */}
      <div className="bg-gradient-to-r from-brand-navy to-brand-purple rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 animate-pulse"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Live Customer Activity</h2>
              <p className="text-white/80">Watch customers move through your journey in real-time</p>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
              <div className="w-2 h-2 bg-brand-teal rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Live</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">{liveEvents.length}</div>
              <div className="text-white/80 text-sm">Events last 5 min</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">47</div>
              <div className="text-white/80 text-sm">Active sessions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">$2.4k</div>
              <div className="text-white/80 text-sm">Revenue today</div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Stream */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-6">Customer Event Stream</h4>
          
          <div className="space-y-3 max-h-96 overflow-hidden">
            {liveEvents.map((event, index) => (
              <div key={event.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg animate-slide-in-left border-l-4 border-brand-teal" style={{animationDelay: `${index * 100}ms`}}>
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    event.type === 'conversion' ? 'bg-emerald-500' :
                    event.type === 'signup' ? 'bg-brand-teal' :
                    event.type === 'engagement' ? 'bg-purple-500' :
                    'bg-blue-500'
                  }`}>
                    {event.type === 'conversion' ? (
                      <Trophy className="w-4 h-4 text-white" />
                    ) : event.type === 'signup' ? (
                      <Users className="w-4 h-4 text-white" />
                    ) : event.type === 'engagement' ? (
                      <Eye className="w-4 h-4 text-white" />
                    ) : (
                      <Activity className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 text-sm">{event.action}</p>
                    <p className="text-slate-500 text-xs">{event.user}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-slate-800">${event.value}</div>
                  <div className="text-xs text-slate-500">{event.timestamp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Performance */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-6">Journey Performance</h4>
          
          <div className="space-y-6">
            {journeySteps.map((step, index) => (
              <div key={index} className="animate-scale-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-slate-800">{step.name}</span>
                  <span className="text-sm text-slate-600">{step.visitors > 0 ? Math.round((step.conversions / step.visitors) * 100) : 0}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ${
                      index === 0 ? 'bg-blue-500' :
                      index === 1 ? 'bg-brand-teal' :
                      index === 2 ? 'bg-purple-500' :
                      'bg-emerald-500'
                    }`}
                    style={{width: `${step.visitors > 0 ? (step.conversions / step.visitors) * 100 : 0}%`}}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>{step.conversions.toLocaleString()} conversions</span>
                  <span>{step.visitors.toLocaleString()} visitors</span>
                </div>
              </div>
            ))}
          </div>

          {/* AI Insights */}
          <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
            <div className="flex items-center space-x-2 mb-3">
              <Zap className="w-5 h-5 text-purple-600" />
              <h5 className="font-semibold text-purple-800">AI Optimization Suggestions</h5>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <span className="text-purple-700">Improve demo completion rate by adding progress indicators</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <span className="text-purple-700">A/B test pricing page layout for 15% conversion boost</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderConversionSuccess = () => (
    <div className="space-y-8 animate-fade-in-up">
      {/* Celebration Header */}
      <div className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
        {celebrationVisible && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-yellow-300 rounded-full animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random()}s`
                }}
              ></div>
            ))}
          </div>
        )}
        <div className="relative text-center">
          <Trophy className="w-20 h-20 text-yellow-300 mx-auto mb-4 animate-pulse" />
          <h2 className="text-4xl font-bold mb-3">🎉 Conversion Milestone!</h2>
          <p className="text-white/90 text-xl">Customer just upgraded to Pro plan!</p>
          <div className="mt-4 inline-flex items-center bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
            <span className="text-lg font-bold">+$49 MRR</span>
          </div>
        </div>
      </div>

      {/* Conversion Details */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-6">Conversion Event Details</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-800">Customer Profile</h4>
                  <p className="text-emerald-600 text-sm">sarah.martinez@techcorp.com</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-emerald-700">Company:</span>
                  <span className="font-medium text-emerald-800">TechCorp Solutions</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-700">Trial Started:</span>
                  <span className="font-medium text-emerald-800">7 days ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-700">Engagement Score:</span>
                  <span className="font-medium text-emerald-800">94/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-700">Plan Selected:</span>
                  <span className="font-medium text-emerald-800">Pro ($49/month)</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h5 className="font-semibold text-blue-800 mb-3">Journey Path Taken</h5>
              <div className="space-y-2">
                {[
                  { step: 'Google Ads Click', time: '7 days ago' },
                  { step: 'Landing Page View', time: '7 days ago' },
                  { step: 'Demo Video (100%)', time: '7 days ago' },
                  { step: 'Trial Signup', time: '7 days ago' },
                  { step: 'Feature Usage (High)', time: '6 days ago' },
                  { step: 'Upgrade to Pro', time: 'Just now' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-blue-700">{item.step}</span>
                    <span className="text-blue-600">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h5 className="font-semibold text-purple-800 mb-4">Customer Feedback</h5>
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <div className="flex items-start space-x-3">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                    alt="Customer"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    {isTyping ? (
                      <p className="text-slate-700 text-sm">{typedText}<span className="animate-pulse">|</span></p>
                    ) : (
                      <p className="text-slate-700 text-sm">Just upgraded to Pro! The advanced analytics are exactly what we needed 🚀</p>
                    )}
                    <p className="text-slate-500 text-xs mt-1">Sarah Martinez • Just now</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <h5 className="font-semibold text-yellow-800 mb-4">Revenue Impact</h5>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-yellow-700">Monthly Recurring Revenue:</span>
                  <span className="text-2xl font-bold text-yellow-800">+$49</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-700">Annual Value:</span>
                  <span className="text-xl font-bold text-yellow-800">+$588</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-700">Customer LTV:</span>
                  <span className="text-xl font-bold text-yellow-800">$1,764</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h5 className="font-semibold text-slate-800 mb-4">Next Actions</h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-slate-700 text-sm">Send welcome email sequence</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-slate-700 text-sm">Schedule onboarding call</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span className="text-slate-700 text-sm">Add to Pro customer segment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderGrowthInsights = () => (
    <div className="space-y-8 animate-fade-in-up">
      {/* Growth Overview */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-slate-800">Growth Analytics</h3>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium">Last 30 days</button>
            <button className="px-4 py-2 bg-brand-teal text-white rounded-lg text-sm font-medium">This quarter</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl">
            <div className="text-3xl font-bold text-emerald-600 mb-1">+127%</div>
            <div className="text-slate-600 text-sm">Conversion Growth</div>
            <div className="text-xs text-emerald-600 mt-1">vs last quarter</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-1">$47k</div>
            <div className="text-slate-600 text-sm">Revenue Added</div>
            <div className="text-xs text-blue-600 mt-1">this month</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-1">89%</div>
            <div className="text-slate-600 text-sm">Customer Satisfaction</div>
            <div className="text-xs text-purple-600 mt-1">↗ +12% improvement</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl">
            <div className="text-3xl font-bold text-amber-600 mb-1">2.3x</div>
            <div className="text-slate-600 text-sm">ROI Improvement</div>
            <div className="text-xs text-amber-600 mt-1">since optimization</div>
          </div>
        </div>
      </div>

      {/* Top Performing Journeys */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <h4 className="text-lg font-semibold text-slate-800 mb-6">Top Performing Journeys</h4>
        
        <div className="space-y-4">
          {mockJourneys.map((journey, index) => (
            <div key={journey.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-200 animate-slide-in-right" style={{animationDelay: `${index * 150}ms`}}>
              <div className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                  index === 0 ? 'bg-yellow-500' :
                  index === 1 ? 'bg-slate-400' :
                  'bg-amber-600'
                }`}>
                  {index + 1}
                </div>
                <div>
                  <h5 className="font-semibold text-slate-800">{journey.name}</h5>
                  <p className="text-slate-500 text-sm">{journey.visitors.toLocaleString()} visitors</p>
                </div>
              </div>
              <div className="flex items-center space-x-8 text-sm">
                <div className="text-center">
                  <div className="text-xl font-bold text-brand-teal">{journey.conversionRate}%</div>
                  <div className="text-slate-500">Conversion</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-emerald-600">${(journey.revenue / 1000).toFixed(0)}k</div>
                  <div className="text-slate-500">Revenue</div>
                </div>
                <div className="text-center">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    journey.status === 'active' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {journey.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optimization Opportunities */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-6">Optimization Opportunities</h4>
          
          <div className="space-y-4">
            {[
              { 
                title: 'Improve Demo Completion', 
                impact: '+15% conversion', 
                effort: 'Low', 
                priority: 'High',
                description: 'Add progress indicators to product demo'
              },
              { 
                title: 'Optimize Pricing Page', 
                impact: '+8% conversion', 
                effort: 'Medium', 
                priority: 'Medium',
                description: 'A/B test social proof placement'
              },
              { 
                title: 'Reduce Cart Abandonment', 
                impact: '+22% revenue', 
                effort: 'High', 
                priority: 'High',
                description: 'Implement exit-intent popup'
              }
            ].map((opportunity, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-brand-teal hover:bg-brand-teal/5 transition-all duration-200 animate-bounce-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-slate-800">{opportunity.title}</h5>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    opportunity.priority === 'High' ? 'bg-red-100 text-red-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {opportunity.priority} Priority
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-3">{opportunity.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-600 font-medium text-sm">{opportunity.impact}</span>
                  <span className="text-slate-500 text-xs">{opportunity.effort} effort</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <h4 className="text-lg font-semibold text-slate-800 mb-6">Revenue Forecast</h4>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6">
              <h5 className="font-semibold text-slate-800 mb-4">Projected Growth</h5>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Current MRR:</span>
                  <span className="text-2xl font-bold text-slate-800">$47.2k</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Projected (3 months):</span>
                  <span className="text-2xl font-bold text-emerald-600">$89.4k</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Growth Rate:</span>
                  <span className="text-xl font-bold text-blue-600">+89%</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <div className="flex items-center space-x-2 mb-3">
                <Zap className="w-5 h-5 text-purple-600" />
                <h5 className="font-semibold text-purple-800">AI Recommendations</h5>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span className="text-purple-700">Focus on Google Ads - highest converting source</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span className="text-purple-700">Optimize mobile experience for 25% boost</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span className="text-purple-700">Add social proof to increase trust signals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const getCurrentView = () => {
    switch (currentStep) {
      case 0:
        return renderDashboard()
      case 1:
        return renderJourneyAnalytics()
      case 2:
        return renderVisualBuilder()
      case 3:
        return renderLiveEvents()
      case 4:
        return renderConversionSuccess()
      case 5:
        return renderGrowthInsights()
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Demo Header */}
      <header className="bg-white/90 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-purple rounded-xl flex items-center justify-center shadow-lg">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">CustomerPath</h1>
                <div className="flex items-center space-x-2">
                  <span className="bg-gradient-to-r from-brand-teal to-brand-purple text-white px-3 py-1 rounded-full text-xs font-bold">PRO</span>
                  <span className="text-slate-500 text-sm">Analytics Dashboard</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Demo Controls */}
              <div className="flex items-center space-x-2 bg-slate-100 rounded-lg p-2">
                <button 
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="p-2 hover:bg-white rounded-md transition-colors"
                >
                  {isAutoPlaying ? (
                    <Pause className="w-4 h-4 text-slate-600" />
                  ) : (
                    <Play className="w-4 h-4 text-slate-600" />
                  )}
                </button>
                <button 
                  onClick={() => setCurrentStep(0)}
                  className="p-2 hover:bg-white rounded-md transition-colors"
                >
                  <RotateCcw className="w-4 h-4 text-slate-600" />
                </button>
              </div>
              
              <div className="flex items-center space-x-4">
                <Bell className="w-6 h-6 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors duration-200" />
                <Settings className="w-6 h-6 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors duration-200" />
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-teal shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Demo Navigation */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between py-4">
            <div className="flex space-x-1">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    currentStep === index
                      ? 'bg-brand-teal text-white shadow-lg scale-105'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {step}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="transition-all duration-700 ease-in-out">
          {getCurrentView()}
        </div>
      </main>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full transform animate-scale-in">
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-purple rounded-xl flex items-center justify-center shadow-lg">
                  {modalContent?.type === 'conversion' ? (
                    <Trophy className="w-6 h-6 text-white" />
                  ) : modalContent?.type === 'builder' ? (
                    <Plus className="w-6 h-6 text-white" />
                  ) : (
                    <Eye className="w-6 h-6 text-white" />
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">{modalContent?.title}</h3>
              </div>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">{modalContent?.content}</p>
              
              {modalContent?.type === 'conversion' && (
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <img 
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
                      alt="Customer"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <span className="font-semibold text-emerald-800">Sarah Martinez</span>
                      <div className="text-xs text-emerald-600">TechCorp Solutions</div>
                    </div>
                    <span className="text-xs text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full ml-auto">Just now</span>
                  </div>
                  {isTyping ? (
                    <p className="text-emerald-700">{typedText}<span className="animate-pulse">|</span></p>
                  ) : (
                    <p className="text-emerald-700">Just upgraded to Pro! The advanced analytics are exactly what we needed 🚀</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DemoPage