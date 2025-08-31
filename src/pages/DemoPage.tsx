import React, { useState, useEffect } from 'react'

interface Customer {
  id: string
  name: string
  email: string
  currentStage: number
  joinedAt: string
  notes: string
  avatar: string
}

interface Stage {
  id: number
  name: string
  color: string
  customers: number
  conversionRate: number
}

const DemoPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedJourney, setSelectedJourney] = useState(0)
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)
  const [showAddStepModal, setShowAddStepModal] = useState(false)
  const [showWebhookModal, setShowWebhookModal] = useState(false)
  const [copiedWebhook, setCopiedWebhook] = useState(false)
  const [newStepName, setNewStepName] = useState('')
  const [newStepColor, setNewStepColor] = useState('bg-blue-500')
  const [newStepPosition, setNewStepPosition] = useState(0)

  const journeys = [
    {
      name: "E-commerce Customer Journey",
      description: "Track customers from first visit to purchase and beyond",
      customers: 2103,
      stages: [
        { id: 1, name: "Landing Page", color: "bg-blue-500", customers: 2103, conversionRate: 68 },
        { id: 2, name: "Product View", color: "bg-purple-500", customers: 1430, conversionRate: 42 },
        { id: 3, name: "Add to Cart", color: "bg-orange-500", customers: 601, conversionRate: 71 },
        { id: 4, name: "Checkout", color: "bg-red-500", customers: 427, conversionRate: 89 },
        { id: 5, name: "Purchase", color: "bg-green-500", customers: 380, conversionRate: 94 },
        { id: 6, name: "Active User", color: "bg-brand-teal", customers: 357, conversionRate: 0 }
      ]
    },
    {
      name: "SaaS Onboarding Flow",
      description: "Guide new users through trial to paid subscription",
      customers: 1847,
      stages: [
        { id: 1, name: "Sign Up", color: "bg-indigo-500", customers: 1847, conversionRate: 73 },
        { id: 2, name: "Email Verified", color: "bg-blue-500", customers: 1348, conversionRate: 56 },
        { id: 3, name: "First Login", color: "bg-purple-500", customers: 755, conversionRate: 84 },
        { id: 4, name: "Feature Used", color: "bg-pink-500", customers: 634, conversionRate: 67 },
        { id: 5, name: "Trial Extended", color: "bg-orange-500", customers: 425, conversionRate: 78 },
        { id: 6, name: "Paid Plan", color: "bg-green-500", customers: 331, conversionRate: 0 }
      ]
    }
  ];

  const demoSteps = [
    "Journey Overview",
    "Visual Builder", 
    "Customer Management",
    "Analytics Dashboard",
    "Individual Tracking",
    "Export & Share"
  ]

  const webhookUrl = "https://app.customerpath.com/api/webhooks/journey-events"
  
  const sampleWebhookPayload = `{
  "customer_id": "cust_abc123",
  "event": "page_viewed",
  "stage": "product_demo",
  "timestamp": "2025-01-20T21:15:00Z",
  "metadata": {
    "page": "/pricing",
    "source": "google_ads",
    "campaign": "winter_sale"
  }
}`

  const zapierIntegrations = [
    { name: "Shopify", icon: "🛍️", events: ["Order Created", "Cart Abandoned", "Product Viewed"] },
    { name: "HubSpot", icon: "🎯", events: ["Contact Created", "Deal Stage Changed", "Email Opened"] },
    { name: "Stripe", icon: "💳", events: ["Payment Succeeded", "Trial Started", "Subscription Canceled"] },
    { name: "Mailchimp", icon: "📧", events: ["Email Sent", "Link Clicked", "Unsubscribed"] },
    { name: "Google Analytics", icon: "📊", events: ["Goal Completed", "Event Tracked", "Page View"] },
    { name: "Intercom", icon: "💬", events: ["Message Sent", "Conversation Started", "User Replied"] }
  ]

  const copyWebhookUrl = async () => {
    try {
      await navigator.clipboard.writeText(webhookUrl)
      setCopiedWebhook(true)
      setTimeout(() => setCopiedWebhook(false), 2000)
    } catch (err) {
      console.error('Failed to copy webhook URL:', err)
    }
  }

  const customers: Customer[] = [
    {
      id: "1",
      name: "Sarah Chen",
      email: "sarah@techcorp.com",
      currentStage: 3,
      joinedAt: "2025-01-15",
      notes: "Completed purchase yesterday. Very engaged with onboarding materials. Asked about team collaboration features and API access. High potential for upsell to enterprise plan.",
      avatar: "SC"
    },
    {
      id: "2", 
      name: "Mike Rodriguez",
      email: "mike@startup.io",
      currentStage: 6,
      joinedAt: "2025-01-12",
      notes: "Extremely active user. Uses advanced features daily. Created 12 journey maps in first week. Excellent case study candidate. Referred 3 new customers.",
      avatar: "MR"
    },
    {
      id: "3",
      name: "Jessica Liu",
      email: "j.liu@agency.com", 
      currentStage: 2,
      joinedAt: "2025-01-18",
      notes: "Marketing agency owner. Interested in white-label options. Currently in trial phase, testing with 3 client projects. Needs bulk import functionality.",
      avatar: "JL"
    },
    {
      id: "4",
      name: "David Park",
      email: "david@ecommerce.co",
      currentStage: 5,
      joinedAt: "2025-01-10",
      notes: "E-commerce store owner. Purchased Pro plan after 5-day trial. Currently setting up product funnel tracking. Needs help with advanced segmentation features.",
      avatar: "DP"
    },
    {
      id: "5",
      name: "Emma Wilson",
      email: "emma@consulting.biz",
      currentStage: 1,
      joinedAt: "2025-01-20",
      notes: "Business consultant. New lead from LinkedIn campaign. Watched demo video twice. Scheduled onboarding call for tomorrow. Interested in client reporting features.",
      avatar: "EW"
    },
    {
      id: "6",
      name: "Alex Thompson",
      email: "alex@growth.io",
      currentStage: 2,
      joinedAt: "2025-01-14",
      notes: "Growth marketing specialist. Currently in trial. Built 2 journey maps for different product lines. Asking about API integrations with existing tools.",
      avatar: "AT"
    },
    {
      id: "7",
      name: "Maria Garcia",
      email: "maria@retailplus.com",
      currentStage: 5,
      joinedAt: "2025-01-08",
      notes: "Retail chain marketing director. Pro customer since week 1. Managing 5 different customer journeys across store locations. Very satisfied with results.",
      avatar: "MG"
    },
    {
      id: "8",
      name: "James Kim",
      email: "james@techstartup.ai",
      currentStage: 1,
      joinedAt: "2025-01-19",
      notes: "AI startup founder. Watched product demo, very interested in advanced analytics. Currently evaluating against competitors. Price-sensitive but sees value.",
      avatar: "JK"
    },
    {
      id: "9",
      name: "Lisa Zhang",
      email: "lisa@fintech.co",
      currentStage: 4,
      joinedAt: "2025-01-16",
      notes: "Fintech startup CMO. Very data-driven approach. Loves the analytics features. Currently in trial but showing strong engagement signals.",
      avatar: "LZ"
    },
    {
      id: "10",
      name: "Robert Johnson",
      email: "rob@consulting.pro",
      currentStage: 2,
      joinedAt: "2025-01-17",
      notes: "Business consultant. Evaluating multiple tools. Needs integration with CRM system.",
      avatar: "RJ"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= demoSteps.length - 1) {
          return 0
        }
        return prev + 1
      })
    }, 6000)
    return () => clearInterval(interval)
  }, [demoSteps.length])

  // Auto-open Add Step modal during Visual Builder step
  useEffect(() => {
    if (currentStep === 1) {
      const timer = setTimeout(() => {
        setShowAddStepModal(true)
        setNewStepName('Email Nurture')
        setNewStepColor('bg-indigo-500')
        setNewStepPosition(2) // After "Product View"
      }, 2000)
      return () => clearTimeout(timer)
    } else {
      setShowAddStepModal(false)
    }
  }, [currentStep])
  // Auto-select different customers as we cycle through steps
  useEffect(() => {
    if (currentStep === 4) { // Individual Tracking step
      const customerIndex = Math.floor(Date.now() / 10000) % customers.length
      setSelectedCustomer(customers[customerIndex])
    }
  }, [currentStep])

  const currentJourney = journeys[selectedJourney]

  const colorOptions = [
    { name: 'Blue', value: 'bg-blue-500' },
    { name: 'Purple', value: 'bg-purple-500' },
    { name: 'Indigo', value: 'bg-indigo-500' },
    { name: 'Pink', value: 'bg-pink-500' },
    { name: 'Orange', value: 'bg-orange-500' },
    { name: 'Teal', value: 'bg-teal-500' },
    { name: 'Red', value: 'bg-red-500' },
    { name: 'Green', value: 'bg-green-500' }
  ]

  const handleAddStep = () => {
    // In a real app, this would update the journey
    setShowAddStepModal(false)
    setNewStepName('')
    setNewStepColor('bg-blue-500')
    setNewStepPosition(0)
  }

  return (
    <div className="min-h-screen bg-gray-50 font-montserrat">
      {/* Demo Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-brand-navy">CustomerPath</div>
              <nav className="flex items-center space-x-6">
                <button className="text-brand-navy font-medium border-b-2 border-brand-teal pb-1">
                  Dashboard
                </button>
                <button className="text-gray-600 hover:text-brand-navy font-medium transition-colors">
                  Journeys
                </button>
                <button className="text-gray-600 hover:text-brand-navy font-medium transition-colors">
                  Analytics
                </button>
                <button className="text-gray-600 hover:text-brand-navy font-medium transition-colors">
                  Customers
                </button>
                <button className="text-gray-600 hover:text-brand-navy font-medium transition-colors">
                  Settings
                </button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-sm font-semibold">
                Pro Plan
              </div>
              <div className="w-8 h-8 bg-brand-navy rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">SC</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-6">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-700 text-sm font-medium">
              💡 Customers spending &gt;7 days in Trial have 23% higher conversion rates • 
              <span className="font-bold">Current Step: {demoSteps[currentStep]}</span>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6">
          {/* Step 0: Journey Overview */}
          {currentStep === 0 && (
            <div className="grid lg:grid-cols-3 gap-6 animate-fade-in-up">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-brand-navy">Customer Journeys</h2>
                    <button className="bg-brand-teal text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-teal/90 transition-colors">
                      + New Journey
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {journeys.map((journey, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedJourney(index)}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                          selectedJourney === index 
                            ? 'border-brand-teal bg-brand-teal/5' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-brand-navy mb-1">{journey.name}</h3>
                            <p className="text-gray-600 mb-3">{journey.description}</p>
                            <div className="flex items-center space-x-4 text-sm">
                              <span className="text-gray-500">{journey.customers} customers</span>
                              <span className="text-gray-500">{journey.stages.length} stages</span>
                              <span className="text-green-600 font-semibold">
                                {Math.round((journey.stages[journey.stages.length - 1].customers / journey.stages[0].customers) * 100)}% overall conversion
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {journey.stages.slice(0, 4).map((stage, stageIndex) => (
                              <div key={stageIndex} className={`w-4 h-4 rounded-full ${stage.color}`} />
                            ))}
                            {journey.stages.length > 4 && (
                              <span className="text-gray-400 text-sm">+{journey.stages.length - 4}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-4">Quick Stats</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total Customers</span>
                      <span className="font-bold text-brand-navy">12,403</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Active Journeys</span>
                      <span className="font-bold text-brand-navy">2</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Avg Conversion</span>
                      <span className="font-bold text-green-600">14.9%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Revenue Impact</span>
                      <span className="font-bold text-brand-navy">$847k</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-600">Sarah Chen moved to Purchase • 2m ago</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-600">47 new customers in Landing Page • 5m ago</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-600">Trial conversion up 3.2% • 1h ago</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-brand-teal rounded-full mr-3"></div>
                      <span className="text-gray-600">Mike Rodriguez became Active User • 3h ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Visual Builder */}
          {currentStep === 1 && (
            <div className="animate-fade-in-up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-brand-navy">{currentJourney.name}</h2>
                    <p className="text-gray-600">{currentJourney.description}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      <span onClick={() => setShowAddStepModal(true)}>+ Add Stage</span>
                    </button>
                    <button 
                      onClick={() => setShowWebhookModal(true)}
                      className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white px-4 py-2 rounded-lg font-semibold transition-all flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      Connect Webhooks
                    </button>
                    <button className="bg-brand-teal text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-teal/90 transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* Journey Builder */}
                <div className="relative">
                  <div className="flex items-center space-x-4 overflow-x-auto pb-4">
                    {currentJourney.stages.map((stage, index) => (
                      <div key={stage.id} className="flex items-center">
                        <div className="bg-white border-2 border-gray-200 rounded-xl p-6 min-w-[200px] hover:border-brand-teal transition-all cursor-pointer group">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-4 h-4 rounded-full ${stage.color}`}></div>
                            <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 transition-all">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                          <h3 className="font-bold text-brand-navy mb-2">{stage.name}</h3>
                          <div className="text-sm text-gray-600 space-y-1">
                            <div>{stage.customers.toLocaleString()} customers</div>
                            {index < currentJourney.stages.length - 1 && (
                              <div className="text-green-600 font-semibold">
                                {stage.conversionRate}% convert
                              </div>
                            )}
                          </div>
                        </div>
                        {index < currentJourney.stages.length - 1 && (
                          <div className="flex items-center mx-4">
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Customer Tracking */}
          {currentStep === 2 && (
            <div className="grid lg:grid-cols-4 gap-6 animate-fade-in-up">
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-brand-navy">Customer Progress Tracking</h2>
                    <div className="flex items-center space-x-3">
                      <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        Import CSV
                      </button>
                      <button className="bg-brand-teal text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-teal/90 transition-colors">
                        + Add Customer
                      </button>
                    </div>
                  </div>

                  {/* Customer List */}
                  <div className="space-y-3">
                    {customers.map((customer) => (
                      <div
                        key={customer.id}
                        onClick={() => setSelectedCustomer(customer)}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-brand-teal hover:bg-brand-teal/5 cursor-pointer transition-all"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-brand-navy rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">{customer.avatar}</span>
                          </div>
                          <div>
                            <div className="font-semibold text-brand-navy">{customer.name}</div>
                            <div className="text-sm text-gray-600">{customer.email}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <div className="text-sm text-gray-600 mb-1">Current Stage</div>
                            <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${currentJourney.stages[customer.currentStage - 1].color}`}>
                              {currentJourney.stages[customer.currentStage - 1].name}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-gray-600 mb-1">Joined</div>
                            <div className="text-sm font-medium text-brand-navy">
                              {new Date(customer.joinedAt).toLocaleDateString()}
                            </div>
                          </div>
                          <button className="text-brand-teal hover:text-brand-teal/80 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-4">Stage Distribution</h3>
                  <div className="space-y-3">
                    {currentJourney.stages.map((stage) => (
                      <div key={stage.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                          <span className="text-sm font-medium text-gray-700">{stage.name}</span>
                        </div>
                        <span className="text-sm font-bold text-brand-navy">{stage.customers}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-brand-teal hover:bg-brand-teal/5 transition-all">
                      <div className="font-medium text-brand-navy">Bulk Move</div>
                      <div className="text-sm text-gray-600">Move multiple customers</div>
                    </button>
                    <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-brand-teal hover:bg-brand-teal/5 transition-all">
                      <div className="font-medium text-brand-navy">Export Data</div>
                      <div className="text-sm text-gray-600">Download customer list</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Analytics Dashboard */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Total Customers</span>
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-brand-navy">2,103</div>
                  <div className="text-sm text-green-600 font-medium">+12% this month</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Overall Conversion</span>
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-brand-navy">24.8%</div>
                  <div className="text-sm text-green-600 font-medium">+3.2% this week</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Avg Time to Convert</span>
                    <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-brand-navy">14.2d</div>
                  <div className="text-sm text-red-600 font-medium">+1.3d this month</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Revenue Impact</span>
                    <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-brand-navy">$127k</div>
                  <div className="text-sm text-green-600 font-medium">+18% this month</div>
                </div>
              </div>

              {/* Conversion Funnel */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-6">Conversion Funnel Analysis</h3>
                <div className="space-y-4">
                  {currentJourney.stages.map((stage, index) => {
                    const width = (stage.customers / currentJourney.stages[0].customers) * 100
                    const dropOff = index > 0 ? currentJourney.stages[index - 1].customers - stage.customers : 0
                    return (
                      <div key={stage.id} className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className={`w-4 h-4 rounded-full ${stage.color}`}></div>
                            <span className="font-semibold text-brand-navy">{stage.name}</span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="text-gray-600">{stage.customers.toLocaleString()} customers</span>
                            {index < currentJourney.stages.length - 1 && (
                              <span className="text-green-600 font-semibold">{stage.conversionRate}% convert</span>
                            )}
                            {dropOff > 0 && (
                              <span className="text-red-500 font-medium">-{dropOff.toLocaleString()} dropped</span>
                            )}
                          </div>
                        </div>
                        <div className="bg-gray-100 rounded-full h-10 overflow-hidden relative">
                          <div 
                            className={`h-full ${stage.color} transition-all duration-1000 flex items-center justify-between px-4`}
                            style={{ width: `${width}%` }}
                          >
                            <span className="text-white text-sm font-medium">
                              {stage.name}
                            </span>
                            <span className="text-white text-sm font-bold">
                              {stage.customers.toLocaleString()}
                            </span>
                          </div>
                          {index < currentJourney.stages.length - 1 && dropOff > 0 && (
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                              -{Math.round(((dropOff / currentJourney.stages[index].customers) * 100))}%
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Customer Details */}
          {currentStep === 4 && (
            <div className="grid lg:grid-cols-3 gap-6 animate-fade-in-up">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-2xl font-bold text-brand-navy mb-6">Customer Details</h2>
                  
                  {selectedCustomer && (
                    <div className="space-y-6">
                      {/* Customer Header */}
                      <div className="flex items-center space-x-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center">
                          <span className="text-white text-lg font-bold">{selectedCustomer.avatar}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-brand-navy">{selectedCustomer.name}</h3>
                          <p className="text-gray-600">{selectedCustomer.email}</p>
                          <p className="text-sm text-gray-500">Joined {new Date(selectedCustomer.joinedAt).toLocaleDateString()}</p>
                        </div>
                      </div>

                      {/* Journey Progress */}
                      <div>
                        <h4 className="font-bold text-brand-navy mb-4">Journey Progress</h4>
                        <div className="relative">
                          <div className="flex items-center space-x-4">
                            {currentJourney.stages.map((stage, index) => (
                              <div key={stage.id} className="flex items-center">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                                  index <= selectedCustomer.currentStage 
                                    ? `${stage.color} border-transparent text-white` 
                                    : 'bg-gray-100 border-gray-300 text-gray-400'
                                }`}>
                                  {index < selectedCustomer.currentStage ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                  ) : (
                                    <span className="text-sm font-bold">{index + 1}</span>
                                  )}
                                </div>
                                {index < currentJourney.stages.length - 1 && (
                                  <div className={`w-16 h-1 mx-2 ${
                                    index < selectedCustomer.currentStage ? 'bg-brand-teal' : 'bg-gray-300'
                                  }`}></div>
                                )}
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center space-x-4 mt-3">
                            {currentJourney.stages.map((stage, index) => (
                              <div key={stage.id} className="flex items-center">
                                <div className="text-center min-w-[80px]">
                                  <div className="text-xs text-gray-600 font-medium">{stage.name}</div>
                                </div>
                                {index < currentJourney.stages.length - 1 && <div className="w-16"></div>}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Move Customer */}
                      <div>
                        <h4 className="font-bold text-brand-navy mb-4">Move to Stage</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {currentJourney.stages.map((stage, index) => (
                            <button
                              key={stage.id}
                              onClick={() => setSelectedCustomer({...selectedCustomer, currentStage: index + 1})}
                              className={`px-4 py-3 rounded-lg font-medium transition-all text-sm ${
                                index === selectedCustomer.currentStage - 1
                                  ? `${stage.color} text-white`
                                  : 'border border-gray-300 text-gray-600 hover:border-brand-teal hover:text-brand-teal'
                              }`}
                            >
                              {stage.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Notes */}
                      <div>
                        <h4 className="font-bold text-brand-navy mb-4">Customer Notes</h4>
                        <textarea
                          value={selectedCustomer.notes}
                          onChange={(e) => setSelectedCustomer({...selectedCustomer, notes: e.target.value})}
                          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                          rows={4}
                          placeholder="Add notes about this customer's journey..."
                        />
                        <button className="mt-3 bg-brand-teal text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-teal/90 transition-colors">
                          Save Notes
                        </button>
                      </div>

                      {/* Customer Timeline */}
                      <div>
                        <h4 className="font-bold text-brand-navy mb-4">Activity Timeline</h4>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <div>
                              <div className="font-medium text-brand-navy text-sm">Moved to {currentJourney.stages[selectedCustomer.currentStage - 1].name}</div>
                              <div className="text-xs text-gray-500">2 hours ago</div>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <div>
                              <div className="font-medium text-brand-navy text-sm">Completed previous stage</div>
                              <div className="text-xs text-gray-500">1 day ago</div>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                            <div>
                              <div className="font-medium text-brand-navy text-sm">First interaction recorded</div>
                              <div className="text-xs text-gray-500">{Math.floor(Math.random() * 10) + 3} days ago</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {!selectedCustomer && (
                    <div className="text-center py-12">
                      <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <p className="text-gray-600">Select a customer to view details</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-4">Recent Moves</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-8 h-8 bg-brand-navy rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">SC</span>
                      </div>
                      <div>
                        <div className="font-medium text-brand-navy">Sarah Chen</div>
                        <div className="text-gray-600">Moved to Purchase • 2m ago</div>
                      </div>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-8 h-8 bg-brand-navy rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">MR</span>
                      </div>
                      <div>
                        <div className="font-medium text-brand-navy">Mike Rodriguez</div>
                        <div className="text-gray-600">Moved to Active User • 15m ago</div>
                      </div>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-8 h-8 bg-brand-navy rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">JL</span>
                      </div>
                      <div>
                        <div className="font-medium text-brand-navy">Jessica Liu</div>
                        <div className="text-gray-600">Moved to Pricing Page • 1h ago</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-4">Stage Performance</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Best Converting</span>
                      <span className="text-sm font-semibold text-green-600">Onboarding (94%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Needs Attention</span>
                      <span className="text-sm font-semibold text-red-600">Free Trial (42%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Avg Time in Stage</span>
                      <span className="text-sm font-semibold text-brand-navy">4.7 days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">This Week</span>
                      <span className="text-sm font-semibold text-green-600">+127 customers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Export Options */}
          {currentStep === 5 && (
            <div className="max-w-4xl mx-auto animate-fade-in-up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-brand-navy mb-4">Export Your Journey</h2>
                  <p className="text-lg text-gray-600">Share insights with your team or stakeholders</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-brand-teal hover:bg-brand-teal/5 cursor-pointer transition-all group">
                    <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-brand-navy mb-2">PDF Report</h3>
                    <p className="text-gray-600 text-sm">Complete journey analysis with charts and insights</p>
                  </div>

                  <div className="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-brand-teal hover:bg-brand-teal/5 cursor-pointer transition-all group">
                    <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-brand-navy mb-2">PNG Image</h3>
                    <p className="text-gray-600 text-sm">High-resolution journey map for presentations</p>
                  </div>

                  <div className="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-brand-teal hover:bg-brand-teal/5 cursor-pointer transition-all group">
                    <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-brand-navy mb-2">CSV Export</h3>
                    <p className="text-gray-600 text-sm">Customer data for further analysis</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-brand-teal/10 rounded-xl border border-brand-teal/20">
                  <h4 className="font-bold text-brand-navy mb-4">Share Dashboard</h4>
                  <div className="flex items-center space-x-4">
                    <input
                      type="text"
                      value="https://app.customerpath.com/shared/e-commerce-funnel-abc123"
                      readOnly
                      className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-600 font-mono text-sm"
                    />
                    <button className="bg-brand-teal text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-teal/90 transition-colors">
                      Copy Link
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Anyone with this link can view a read-only version of your journey</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-4">Export Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal">
                        <option>Last 30 days</option>
                        <option>Last 90 days</option>
                        <option>All time</option>
                        <option>Custom range</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Include</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2 text-brand-teal" />
                          <span className="text-sm text-gray-700">Customer details</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2 text-brand-teal" />
                          <span className="text-sm text-gray-700">Conversion metrics</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2 text-brand-teal" />
                          <span className="text-sm text-gray-700">Customer notes</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-4">Recent Exports</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">E-commerce_Report.pdf</span>
                      <span className="text-gray-500">2h ago</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Customer_Data.csv</span>
                      <span className="text-gray-500">1d ago</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Journey_Map.png</span>
                      <span className="text-gray-500">3d ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Step Modal */}
      {showAddStepModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fade-in-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-brand-navy">Add New Stage</h3>
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
              {/* Stage Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stage Name
                </label>
                <input
                  type="text"
                  value={newStepName}
                  onChange={(e) => setNewStepName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  placeholder="e.g., Email Nurture, Demo Call, Onboarding"
                />
              </div>

              {/* Position */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Insert After
                </label>
                <select
                  value={newStepPosition}
                  onChange={(e) => setNewStepPosition(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                >
                  <option value={0}>Beginning</option>
                  {currentJourney.stages.map((stage, index) => (
                    <option key={stage.id} value={index + 1}>
                      After {stage.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Stage Color
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {colorOptions.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setNewStepColor(color.value)}
                      className={`w-12 h-12 rounded-lg ${color.value} border-2 transition-all ${
                        newStepColor === color.value 
                          ? 'border-brand-navy scale-110' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Preview */}
              <div className="bg-gray-50 rounded-lg p-4">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Preview
                </label>
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${newStepColor}`}></div>
                  <span className="font-semibold text-brand-navy">
                    {newStepName || 'New Stage'}
                  </span>
                  <span className="text-sm text-gray-500">
                    • Position {newStepPosition + 1}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-4 pt-4">
                <button
                  onClick={handleAddStep}
                  disabled={!newStepName.trim()}
                  className="flex-1 bg-brand-teal hover:bg-brand-teal/90 disabled:bg-gray-300 text-white py-3 rounded-lg font-semibold transition-all disabled:cursor-not-allowed"
                >
                  Add Stage
                </button>
                <button
                  onClick={() => setShowAddStepModal(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Webhook Integration Modal */}
      {showWebhookModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-brand-navy mb-2">Connect Your Tools</h2>
                  <p className="text-gray-600">Send customer events from any platform using webhooks</p>
                </div>
                <button 
                  onClick={() => setShowWebhookModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Webhook URL */}
                <div>
                  <h3 className="text-lg font-bold text-brand-navy mb-4">Your Webhook URL</h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
                    <div className="flex items-center justify-between">
                      <code className="text-sm text-gray-700 font-mono break-all">{webhookUrl}</code>
                      <button 
                        onClick={copyWebhookUrl}
                        className={`ml-3 px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                          copiedWebhook 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-brand-teal text-white hover:bg-brand-teal/90'
                        }`}
                      >
                        {copiedWebhook ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>

                  <h4 className="font-semibold text-brand-navy mb-3">Sample Payload</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-sm">
                    <pre className="text-green-400 font-mono whitespace-pre-wrap">{sampleWebhookPayload}</pre>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-blue-800 mb-1">Pro Tip</p>
                        <p className="text-blue-700 text-sm">Use this URL in Zapier, Make.com, or any webhook-enabled platform to send customer events in real-time.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Popular Integrations */}
                <div>
                  <h3 className="text-lg font-bold text-brand-navy mb-4">Popular Integrations</h3>
                  <div className="space-y-3">
                    {zapierIntegrations.map((integration, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-brand-teal/30 hover:bg-gray-50 transition-all cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <span className="text-2xl mr-3">{integration.icon}</span>
                            <span className="font-semibold text-brand-navy">{integration.name}</span>
                          </div>
                          <button className="text-brand-teal hover:text-brand-teal/80 text-sm font-medium">
                            Connect →
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {integration.events.map((event, eventIndex) => (
                            <span key={eventIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {event}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-brand-teal/10 rounded-lg border border-brand-teal/20">
                    <h4 className="font-semibold text-brand-navy mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7" />
                      </svg>
                      Quick Setup with Zapier
                    </h4>
                    <ol className="text-sm text-gray-700 space-y-1">
                      <li>1. Choose your trigger app (Shopify, HubSpot, etc.)</li>
                      <li>2. Select the event (new order, email opened, etc.)</li>
                      <li>3. Add CustomerPath webhook as the action</li>
                      <li>4. Paste the webhook URL above</li>
                      <li>5. Map your data to our event format</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Need help setting up? <a href="#" className="text-brand-teal hover:text-brand-teal/80 font-medium">View integration docs →</a>
                </div>
                <button 
                  onClick={() => setShowWebhookModal(false)}
                  className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-2 rounded-lg font-semibold transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DemoPage