import React, { useState, useEffect } from 'react'

interface Customer {
  id: string
  name: string
  email: string
  currentStage: number
  joinedAt: string
  notes: string
  avatar: string
  source: string
  value: number
  lastActivity: string
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

  const journeys = [
    {
      name: "E-commerce Funnel",
      description: "Main product purchase journey",
      customers: 12847,
      stages: [
        { id: 0, name: "Landing Page", color: "bg-blue-500", customers: 12847, conversionRate: 73 },
        { id: 1, name: "Product Demo", color: "bg-indigo-500", customers: 9378, conversionRate: 58 },
        { id: 2, name: "Free Trial", color: "bg-purple-500", customers: 5439, conversionRate: 42 },
        { id: 3, name: "Purchase", color: "bg-green-500", customers: 2284, conversionRate: 89 },
        { id: 4, name: "Onboarding", color: "bg-emerald-500", customers: 2033, conversionRate: 94 },
        { id: 5, name: "Active User", color: "bg-teal-500", customers: 1911, conversionRate: 0 }
      ]
    },
    {
      name: "SaaS Onboarding",
      description: "New user activation flow",
      customers: 8156,
      stages: [
        { id: 0, name: "Account Created", color: "bg-cyan-500", customers: 8156, conversionRate: 87 },
        { id: 1, name: "Email Verified", color: "bg-blue-500", customers: 7096, conversionRate: 76 },
        { id: 2, name: "Profile Complete", color: "bg-indigo-500", customers: 5393, conversionRate: 69 },
        { id: 3, name: "First Project", color: "bg-purple-500", customers: 3721, conversionRate: 82 },
        { id: 4, name: "Team Invited", color: "bg-pink-500", customers: 3051, conversionRate: 91 },
        { id: 5, name: "Power User", color: "bg-green-500", customers: 2776, conversionRate: 0 }
      ]
    },
    {
      name: "Content Marketing",
      description: "Blog to customer conversion",
      customers: 24891,
      stages: [
        { id: 0, name: "Blog Visit", color: "bg-orange-500", customers: 24891, conversionRate: 34 },
        { id: 1, name: "Newsletter Signup", color: "bg-amber-500", customers: 8463, conversionRate: 28 },
        { id: 2, name: "Lead Magnet", color: "bg-yellow-500", customers: 2370, conversionRate: 45 },
        { id: 3, name: "Demo Request", color: "bg-lime-500", customers: 1067, conversionRate: 67 },
        { id: 4, name: "Sales Call", color: "bg-green-500", customers: 715, conversionRate: 78 },
        { id: 5, name: "Customer", color: "bg-emerald-500", customers: 558, conversionRate: 0 }
      ]
    }
  ]

  const customers: Customer[] = [
    {
      id: "1",
      name: "Sarah Chen",
      email: "sarah@techcorp.com",
      currentStage: 3,
      joinedAt: "2025-01-15",
      source: "Google Ads",
      value: 2400,
      lastActivity: "2 hours ago",
      notes: "Completed purchase yesterday. Very engaged with onboarding materials. Asked about team collaboration features and API access. High potential for upsell to enterprise plan. Mentioned they're evaluating 3 other tools but likes our visual approach."
    },
    {
      id: "2", 
      name: "Mike Rodriguez",
      email: "mike@startup.io",
      currentStage: 5,
      joinedAt: "2025-01-12",
      source: "Product Hunt",
      value: 4900,
      lastActivity: "15 minutes ago",
      notes: "Extremely active user. Uses advanced features daily. Created 12 journey maps in first week. Excellent case study candidate. Referred 3 new customers through our referral program. Power user who pushes our limits."
    },
    {
      id: "3",
      name: "Jessica Liu",
      email: "j.liu@agency.com", 
      currentStage: 2,
      joinedAt: "2025-01-18",
      source: "LinkedIn",
      value: 1200,
      lastActivity: "1 hour ago",
      notes: "Marketing agency owner. Interested in white-label options. Currently in trial phase, testing with 3 client projects. Needs bulk import functionality. Considering Pro plan for unlimited journeys."
    },
    {
      id: "4",
      name: "David Park",
      email: "david@ecommerce.co",
      currentStage: 4,
      joinedAt: "2025-01-10",
      source: "Organic Search",
      value: 3600,
      lastActivity: "3 hours ago",
      notes: "E-commerce store owner. Purchased Pro plan after 5-day trial. Currently setting up product funnel tracking. Needs help with advanced segmentation features. Very methodical in his approach."
    },
    {
      id: "5",
      name: "Emma Wilson",
      email: "emma@consulting.biz",
      currentStage: 1,
      joinedAt: "2025-01-20",
      source: "Referral",
      value: 800,
      lastActivity: "30 minutes ago",
      notes: "Business consultant. New lead from LinkedIn campaign. Watched demo video twice. Scheduled onboarding call for tomorrow. Interested in client reporting features. Very detail-oriented."
    },
    {
      id: "6",
      name: "Alex Thompson",
      email: "alex@growth.io",
      currentStage: 2,
      joinedAt: "2025-01-14",
      source: "Twitter",
      value: 1800,
      lastActivity: "45 minutes ago",
      notes: "Growth marketing specialist. Currently in trial. Built 2 journey maps for different product lines. Asking about API integrations with existing tools. Technical background, asks good questions."
    },
    {
      id: "7",
      name: "Maria Garcia",
      email: "maria@retailplus.com",
      currentStage: 4,
      joinedAt: "2025-01-08",
      source: "Google Ads",
      value: 5200,
      lastActivity: "1 day ago",
      notes: "Retail chain marketing director. Pro customer since week 1. Managing 5 different customer journeys across store locations. Very satisfied with results. Potential enterprise customer."
    },
    {
      id: "8",
      name: "James Kim",
      email: "james@techstartup.ai",
      currentStage: 1,
      joinedAt: "2025-01-19",
      source: "Hacker News",
      value: 600,
      lastActivity: "6 hours ago",
      notes: "AI startup founder. Watched product demo, very interested in advanced analytics. Currently evaluating against competitors. Price-sensitive but sees value. Technical founder."
    },
    {
      id: "9",
      name: "Lisa Zhang",
      email: "lisa@designstudio.co",
      currentStage: 3,
      joinedAt: "2025-01-16",
      source: "Dribbble",
      value: 2100,
      lastActivity: "4 hours ago",
      notes: "Design agency owner. Loves the visual interface. Using it to map client user journeys. Interested in white-label options. Very design-focused feedback."
    },
    {
      id: "10",
      name: "Robert Taylor",
      email: "robert@saascompany.com",
      currentStage: 5,
      joinedAt: "2025-01-05",
      source: "Cold Email",
      value: 7800,
      lastActivity: "2 hours ago",
      notes: "SaaS company CMO. Heavy user of advanced features. Built comprehensive onboarding journey. Tracks 400+ customers. Excellent retention metrics. Champion user."
    }
  ]

  const demoSteps = [
    "Journey Overview",
    "Funnel Analytics", 
    "Customer Management",
    "Analytics Dashboard",
    "Individual Tracking",
    "Export & Share"
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

  const currentJourney = journeys[selectedJourney]

  // Funnel Chart Component
  const FunnelChart = ({ stages }: { stages: Stage[] }) => {
    const maxCustomers = stages[0].customers
    
    return (
      <div className="space-y-2">
        {stages.map((stage, index) => {
          const width = (stage.customers / maxCustomers) * 100
          const dropOff = index > 0 ? stages[index - 1].customers - stage.customers : 0
          
          return (
            <div key={stage.id} className="relative">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                  <span className="font-semibold text-brand-navy text-sm">{stage.name}</span>
                </div>
                <div className="flex items-center space-x-4 text-xs">
                  <span className="text-gray-600">{stage.customers.toLocaleString()}</span>
                  {index > 0 && dropOff > 0 && (
                    <span className="text-red-500 font-medium">-{dropOff.toLocaleString()}</span>
                  )}
                  {index < stages.length - 1 && (
                    <span className="text-green-600 font-semibold">{stage.conversionRate}%</span>
                  )}
                </div>
              </div>
              
              {/* Funnel Bar */}
              <div className="relative bg-gray-100 rounded-full h-8 overflow-hidden">
                <div 
                  className={`h-full ${stage.color} transition-all duration-1000 flex items-center justify-between px-4`}
                  style={{ 
                    width: `${width}%`,
                    clipPath: index === 0 ? 'none' : `polygon(0 0, ${100 - (index * 2)}% 0, ${100 - ((index + 1) * 2)}% 100%, 0% 100%)`
                  }}
                >
                  <span className="text-white text-sm font-semibold">
                    {Math.round(width)}%
                  </span>
                  {index < stages.length - 1 && (
                    <span className="text-white text-xs">
                      {stage.conversionRate}% →
                    </span>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
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
                              <span className="text-gray-500">{journey.customers.toLocaleString()} customers</span>
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
                      <span className="font-bold text-brand-navy">45,894</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Active Journeys</span>
                      <span className="font-bold text-brand-navy">3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Avg Conversion</span>
                      <span className="font-bold text-green-600">18.7%</span>
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
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-gray-600">Sarah Chen moved to Purchase</span>
                      <span className="text-gray-400 ml-auto">2h ago</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-gray-600">47 new customers in Awareness</span>
                      <span className="text-gray-400 ml-auto">1h ago</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-gray-600">Trial conversion up 3.2%</span>
                      <span className="text-gray-400 ml-auto">3h ago</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-brand-teal rounded-full mr-3 animate-pulse"></div>
                      <span className="text-gray-600">Mike Rodriguez became Power User</span>
                      <span className="text-gray-400 ml-auto">1d ago</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-teal/10 to-blue-50 rounded-xl border border-brand-teal/20 p-6">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <h3 className="font-bold text-brand-navy">AI Insight</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Optimization Opportunity:</strong> Your trial-to-purchase conversion could improve by 15% by adding a mid-trial check-in email.
                  </p>
                  <button className="text-brand-teal hover:text-brand-teal/80 text-sm font-medium transition-colors">
                    View Recommendation →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Funnel Analytics with Chart */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-brand-navy">{currentJourney.name} - Funnel Analysis</h2>
                    <p className="text-gray-600">Conversion rates and drop-off analysis</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <select 
                      value={selectedJourney}
                      onChange={(e) => setSelectedJourney(Number(e.target.value))}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                    >
                      {journeys.map((journey, index) => (
                        <option key={index} value={index}>{journey.name}</option>
                      ))}
                    </select>
                    <button className="bg-brand-teal text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-teal/90 transition-colors">
                      Export Chart
                    </button>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Funnel Visualization */}
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-4">Conversion Funnel</h3>
                    <FunnelChart stages={currentJourney.stages} />
                  </div>

                  {/* Stage Metrics */}
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-4">Stage Performance</h3>
                    <div className="space-y-4">
                      {currentJourney.stages.map((stage, index) => (
                        <div key={stage.id} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <div className={`w-4 h-4 rounded-full ${stage.color}`}></div>
                              <span className="font-semibold text-brand-navy">{stage.name}</span>
                            </div>
                            <span className="text-sm text-gray-600">{stage.customers.toLocaleString()}</span>
                          </div>
                          
                          {index < currentJourney.stages.length - 1 && (
                            <div className="grid grid-cols-3 gap-4 text-sm">
                              <div>
                                <span className="text-gray-500">Conversion Rate</span>
                                <div className="font-semibold text-green-600">{stage.conversionRate}%</div>
                              </div>
                              <div>
                                <span className="text-gray-500">Drop-off</span>
                                <div className="font-semibold text-red-600">
                                  {stage.customers - currentJourney.stages[index + 1].customers}
                                </div>
                              </div>
                              <div>
                                <span className="text-gray-500">Avg Time</span>
                                <div className="font-semibold text-brand-navy">
                                  {Math.floor(Math.random() * 5) + 1}.{Math.floor(Math.random() * 9)}d
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Insights Panel */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h3 className="font-bold text-red-700">Biggest Drop-off</h3>
                  </div>
                  <p className="text-red-700 font-semibold mb-1">Demo → Trial</p>
                  <p className="text-red-600 text-sm">42% conversion rate</p>
                  <p className="text-red-600 text-xs mt-2">3,939 customers lost at this stage</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <h3 className="font-bold text-green-700">Best Performer</h3>
                  </div>
                  <p className="text-green-700 font-semibold mb-1">Onboarding → Active</p>
                  <p className="text-green-600 text-sm">94% conversion rate</p>
                  <p className="text-green-600 text-xs mt-2">Only 122 customers lost</p>
                </div>

                <div className="bg-gradient-to-br from-brand-teal/10 to-cyan-50 p-6 rounded-xl border border-brand-teal/20">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="font-bold text-brand-teal">Avg Journey Time</h3>
                  </div>
                  <p className="text-brand-teal font-semibold mb-1">14.2 days</p>
                  <p className="text-brand-teal text-sm">End-to-end conversion</p>
                  <p className="text-brand-teal text-xs mt-2">2.3 days faster than last month</p>
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Visual Builder */}
          {currentStep === 2 && (
            <div className="animate-fade-in-up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-brand-navy">Journey Builder - {currentJourney.name}</h2>
                    <p className="text-gray-600">Drag and drop to customize your customer journey</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      + Add Stage
                    </button>
                    <button className="bg-brand-teal text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-teal/90 transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>

                {/* Journey Builder */}
                <div className="relative overflow-x-auto">
                  <div className="flex items-center space-x-6 pb-4 min-w-max">
                    {currentJourney.stages.map((stage, index) => (
                      <div key={stage.id} className="flex items-center">
                        <div className="bg-white border-2 border-gray-200 rounded-xl p-6 min-w-[220px] hover:border-brand-teal transition-all cursor-move group shadow-sm hover:shadow-md">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-5 h-5 rounded-full ${stage.color} shadow-sm`}></div>
                            <div className="flex items-center space-x-2">
                              <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 transition-all">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                              </button>
                              <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-all">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <h3 className="font-bold text-brand-navy mb-3 text-lg">{stage.name}</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Customers</span>
                              <span className="font-semibold text-brand-navy">{stage.customers.toLocaleString()}</span>
                            </div>
                            {index < currentJourney.stages.length - 1 && (
                              <>
                                <div className="flex items-center justify-between">
                                  <span className="text-gray-600">Conversion</span>
                                  <span className="font-semibold text-green-600">{stage.conversionRate}%</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-gray-600">Drop-off</span>
                                  <span className="font-semibold text-red-600">
                                    {(stage.customers - currentJourney.stages[index + 1].customers).toLocaleString()}
                                  </span>
                                </div>
                              </>
                            )}
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Avg Time</span>
                              <span className="font-semibold text-brand-navy">
                                {Math.floor(Math.random() * 8) + 1}.{Math.floor(Math.random() * 9)}d
                              </span>
                            </div>
                          </div>
                        </div>
                        {index < currentJourney.stages.length - 1 && (
                          <div className="flex items-center mx-4">
                            <div className="flex flex-col items-center">
                              <svg className="w-8 h-8 text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                              <span className="text-xs text-gray-500 font-medium">{stage.conversionRate}%</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stage Templates */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-brand-navy mb-4">Add Stage Templates</h3>
                  <div className="flex items-center space-x-3 overflow-x-auto">
                    {[
                      { name: "Email Campaign", color: "bg-orange-500" },
                      { name: "Webinar", color: "bg-purple-500" },
                      { name: "Sales Call", color: "bg-blue-500" },
                      { name: "Follow-up", color: "bg-pink-500" },
                      { name: "Upsell", color: "bg-indigo-500" }
                    ].map((template, index) => (
                      <button
                        key={index}
                        className="flex items-center space-x-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-brand-teal hover:bg-brand-teal/5 transition-all text-sm font-medium text-gray-600 hover:text-brand-teal whitespace-nowrap"
                      >
                        <div className={`w-3 h-3 rounded-full ${template.color}`}></div>
                        <span>{template.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Customer Management */}
          {currentStep === 3 && (
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
                        className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedCustomer?.id === customer.id 
                            ? 'border-brand-teal bg-brand-teal/5' 
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center shadow-sm">
                            <span className="text-white text-sm font-bold">{customer.avatar}</span>
                          </div>
                          <div>
                            <div className="font-semibold text-brand-navy">{customer.name}</div>
                            <div className="text-sm text-gray-600">{customer.email}</div>
                            <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1">
                              <span>From {customer.source}</span>
                              <span>•</span>
                              <span>Value: ${customer.value.toLocaleString()}</span>
                              <span>•</span>
                              <span>Active {customer.lastActivity}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <div className="text-xs text-gray-600 mb-1">Current Stage</div>
                            <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${currentJourney.stages[customer.currentStage].color}`}>
                              {currentJourney.stages[customer.currentStage].name}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-gray-600 mb-1">Progress</div>
                            <div className="flex items-center space-x-1">
                              {currentJourney.stages.map((_, index) => (
                                <div
                                  key={index}
                                  className={`w-2 h-2 rounded-full ${
                                    index <= customer.currentStage ? 'bg-brand-teal' : 'bg-gray-300'
                                  }`}
                                />
                              ))}
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
                    {currentJourney.stages.map((stage) => {
                      const percentage = Math.round((stage.customers / currentJourney.customers) * 100)
                      return (
                        <div key={stage.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                              <span className="text-sm font-medium text-gray-700">{stage.name}</span>
                            </div>
                            <span className="text-sm font-bold text-brand-navy">{stage.customers.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${stage.color} transition-all duration-1000`}
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-4">Bulk Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-brand-teal hover:bg-brand-teal/5 transition-all">
                      <div className="font-medium text-brand-navy">Move Selected</div>
                      <div className="text-sm text-gray-600">Move multiple customers to stage</div>
                    </button>
                    <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-brand-teal hover:bg-brand-teal/5 transition-all">
                      <div className="font-medium text-brand-navy">Export Segment</div>
                      <div className="text-sm text-gray-600">Download filtered customer list</div>
                    </button>
                    <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-brand-teal hover:bg-brand-teal/5 transition-all">
                      <div className="font-medium text-brand-navy">Send Email</div>
                      <div className="text-sm text-gray-600">Email customers in stage</div>
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="font-bold text-blue-700">Pro Tip</h3>
                  </div>
                  <p className="text-blue-700 text-sm">
                    Use filters to segment customers by source, value, or time in stage for targeted actions.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Analytics Dashboard */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Total Customers</span>
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-brand-navy">45,894</div>
                  <div className="text-sm text-green-600 font-medium">+12% this month</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Overall Conversion</span>
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-brand-navy">18.7%</div>
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
                  <div className="text-3xl font-bold text-brand-navy">$847k</div>
                  <div className="text-sm text-green-600 font-medium">+18% this month</div>
                </div>
              </div>

              {/* Advanced Analytics */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-brand-navy mb-6">Conversion Trends (30 Days)</h3>
                  
                  {/* Simple Line Chart Mockup */}
                  <div className="relative h-48 bg-gray-50 rounded-lg p-4">
                    <div className="absolute inset-4">
                      {/* Y-axis labels */}
                      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500">
                        <span>30%</span>
                        <span>25%</span>
                        <span>20%</span>
                        <span>15%</span>
                        <span>10%</span>
                      </div>
                      
                      {/* Chart area */}
                      <div className="ml-8 h-full relative">
                        <svg className="w-full h-full" viewBox="0 0 400 160">
                          {/* Grid lines */}
                          {[0, 1, 2, 3, 4].map(i => (
                            <line key={i} x1="0" y1={i * 32} x2="400" y2={i * 32} stroke="#e5e7eb" strokeWidth="1" />
                          ))}
                          
                          {/* Trend line */}
                          <polyline
                            fill="none"
                            stroke="#01b79e"
                            strokeWidth="3"
                            points="0,120 50,115 100,110 150,105 200,100 250,95 300,90 350,85 400,80"
                          />
                          
                          {/* Data points */}
                          {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((x, i) => (
                            <circle key={i} cx={x} cy={120 - (i * 5)} r="4" fill="#01b79e" />
                          ))}
                        </svg>
                        
                        {/* X-axis labels */}
                        <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-500">
                          <span>Jan 1</span>
                          <span>Jan 8</span>
                          <span>Jan 15</span>
                          <span>Jan 22</span>
                          <span>Jan 29</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-gray-600">Current Rate: <strong className="text-brand-navy">24.8%</strong></span>
                    <span className="text-green-600 font-semibold">↗ +3.2% vs last month</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-brand-navy mb-6">Time in Stage Analysis</h3>
                  
                  <div className="space-y-4">
                    {currentJourney.stages.slice(0, -1).map((stage, index) => {
                      const avgTime = Math.floor(Math.random() * 8) + 1
                      const variance = Math.floor(Math.random() * 3) + 1
                      
                      return (
                        <div key={stage.id} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                              <span className="font-semibold text-brand-navy text-sm">{stage.name}</span>
                            </div>
                            <span className="text-sm font-bold text-brand-navy">{avgTime}.{variance}d</span>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-xs text-gray-600">
                            <span>Min: {Math.max(1, avgTime - 2)}d</span>
                            <span>Max: {avgTime + 5}d</span>
                            <span className={`font-semibold ${variance > 2 ? 'text-red-600' : 'text-green-600'}`}>
                              {variance > 2 ? '↗' : '↘'} {variance > 2 ? '+' : '-'}0.{variance}d
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-blue-700 text-sm font-medium">
                      💡 Customers spending >7 days in Trial have 23% higher conversion rates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Individual Customer Tracking */}
          {currentStep === 5 && (
            <div className="grid lg:grid-cols-3 gap-6 animate-fade-in-up">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-2xl font-bold text-brand-navy mb-6">Customer Journey Details</h2>
                  
                  {selectedCustomer ? (
                    <div className="space-y-6">
                      {/* Customer Header */}
                      <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-lg font-bold">{selectedCustomer.avatar}</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-brand-navy">{selectedCustomer.name}</h3>
                            <p className="text-gray-600">{selectedCustomer.email}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                              <span>Joined {new Date(selectedCustomer.joinedAt).toLocaleDateString()}</span>
                              <span>•</span>
                              <span>From {selectedCustomer.source}</span>
                              <span>•</span>
                              <span>Value: ${selectedCustomer.value.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600 mb-1">Last Activity</div>
                          <div className="font-semibold text-brand-navy">{selectedCustomer.lastActivity}</div>
                        </div>
                      </div>

                      {/* Journey Progress */}
                      <div>
                        <h4 className="font-bold text-brand-navy mb-4">Journey Progress</h4>
                        <div className="relative">
                          <div className="flex items-center space-x-4 overflow-x-auto">
                            {currentJourney.stages.map((stage, index) => (
                              <div key={stage.id} className="flex items-center">
                                <div className="flex flex-col items-center min-w-[100px]">
                                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                                    index <= selectedCustomer.currentStage 
                                      ? `${stage.color} border-transparent text-white shadow-lg` 
                                      : 'bg-gray-100 border-gray-300 text-gray-400'
                                  }`}>
                                    {index < selectedCustomer.currentStage ? (
                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                      </svg>
                                    ) : index === selectedCustomer.currentStage ? (
                                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                    ) : (
                                      <span className="text-sm font-bold">{index + 1}</span>
                                    )}
                                  </div>
                                  <div className="text-center mt-2">
                                    <div className="text-xs font-medium text-gray-700">{stage.name}</div>
                                    {index <= selectedCustomer.currentStage && (
                                      <div className="text-xs text-gray-500 mt-1">
                                        {Math.floor(Math.random() * 5) + 1} days ago
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {index < currentJourney.stages.length - 1 && (
                                  <div className={`w-16 h-1 mx-2 transition-all ${
                                    index < selectedCustomer.currentStage ? 'bg-brand-teal' : 'bg-gray-300'
                                  }`}></div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Move Customer */}
                      <div>
                        <h4 className="font-bold text-brand-navy mb-4">Move to Stage</h4>
                        <div className="flex items-center space-x-3 flex-wrap gap-2">
                          {currentJourney.stages.map((stage, index) => (
                            <button
                              key={stage.id}
                              onClick={() => setSelectedCustomer({...selectedCustomer, currentStage: index})}
                              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                index === selectedCustomer.currentStage
                                  ? `${stage.color} text-white shadow-lg`
                                  : 'border border-gray-300 text-gray-600 hover:border-brand-teal hover:text-brand-teal'
                              }`}
                            >
                              {stage.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Customer Activity Timeline */}
                      <div>
                        <h4 className="font-bold text-brand-navy mb-4">Activity Timeline</h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg border border-green-200">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-green-700">Completed Purchase</div>
                              <div className="text-sm text-green-600">Upgraded to Pro plan • 2 hours ago</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-blue-700">Watched Product Demo</div>
                              <div className="text-sm text-blue-600">Completed 87% of demo video • 1 day ago</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-700">First Visit</div>
                              <div className="text-sm text-gray-600">Landed from Google Ads • 8 days ago</div>
                            </div>
                          </div>
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
                        <div className="flex items-center justify-between mt-3">
                          <button className="bg-brand-teal text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-teal/90 transition-colors">
                            Save Notes
                          </button>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <span>Last updated: 2 hours ago</span>
                            <span>•</span>
                            <span>by Sarah Chen</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <p className="text-gray-600">Click on a customer from the previous step to view details</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-4">Customer Segments</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-blue-700">High Value</div>
                        <div className="text-sm text-blue-600">$3k+ potential</div>
                      </div>
                      <span className="text-blue-700 font-bold">127</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-green-700">Fast Movers</div>
                        <div className="text-sm text-green-600">&lt;7 days to convert</div>
                      </div>
                      <span className="text-green-700 font-bold">89</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-yellow-700">At Risk</div>
                        <div className="text-sm text-yellow-600">&gt;14 days in stage</div>
                      </div>
                      <span className="text-yellow-700 font-bold">43</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-4">Recent Moves</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-8 h-8 bg-brand-navy rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">SC</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-brand-navy">Sarah Chen</div>
                        <div className="text-gray-600">Trial → Purchase • 2h ago</div>
                      </div>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-8 h-8 bg-brand-navy rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">MR</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-brand-navy">Mike Rodriguez</div>
                        <div className="text-gray-600">Onboarding → Active • 1d ago</div>
                      </div>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-8 h-8 bg-brand-navy rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">JL</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-brand-navy">Jessica Liu</div>
                        <div className="text-gray-600">Demo → Trial • 1d ago</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 p-6">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <h3 className="font-bold text-purple-700">Smart Suggestion</h3>
                  </div>
                  <p className="text-purple-700 text-sm mb-3">
                    Based on similar customers, Sarah is likely to upgrade to Enterprise within 30 days.
                  </p>
                  <button className="text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors">
                    Schedule Follow-up →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Export Options */}
          {currentStep === 6 && (
            <div className="max-w-5xl mx-auto animate-fade-in-up">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-brand-navy mb-4">Export & Share Your Journey</h2>
                  <p className="text-lg text-gray-600">Share insights with your team or stakeholders</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-brand-teal hover:bg-brand-teal/5 cursor-pointer transition-all group">
                    <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-brand-navy mb-2">PDF Report</h3>
                    <p className="text-gray-600 text-sm">Complete journey analysis with charts and insights</p>
                    <div className="mt-3 text-xs text-gray-500">Last exported: 2 days ago</div>
                  </div>

                  <div className="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-brand-teal hover:bg-brand-teal/5 cursor-pointer transition-all group">
                    <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-brand-navy mb-2">PNG Image</h3>
                    <p className="text-gray-600 text-sm">High-resolution journey map for presentations</p>
                    <div className="mt-3 text-xs text-gray-500">4K resolution available</div>
                  </div>

                  <div className="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-brand-teal hover:bg-brand-teal/5 cursor-pointer transition-all group">
                    <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-brand-navy mb-2">CSV Export</h3>
                    <p className="text-gray-600 text-sm">Customer data for further analysis</p>
                    <div className="mt-3 text-xs text-gray-500">45,894 records ready</div>
                  </div>
                </div>

                {/* Live Dashboard Sharing */}
                <div className="bg-gradient-to-br from-brand-teal/10 to-cyan-50 rounded-xl border border-brand-teal/20 p-6">
                  <h4 className="font-bold text-brand-navy mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share Live Dashboard
                  </h4>
                  <div className="space-y-4">
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
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Anyone with this link can view a read-only version</span>
                      <div className="flex items-center space-x-4">
                        <span className="text-green-600 font-medium">🟢 Active</span>
                        <span className="text-gray-500">47 views</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Export History */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-brand-navy mb-4">Export Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal">
                          <option>Last 30 days</option>
                          <option>Last 90 days</option>
                          <option>Last 6 months</option>
                          <option>All time</option>
                          <option>Custom range</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Include</label>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input type="checkbox" defaultChecked className="mr-2 text-brand-teal rounded" />
                            <span className="text-sm text-gray-700">Customer details & contact info</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" defaultChecked className="mr-2 text-brand-teal rounded" />
                            <span className="text-sm text-gray-700">Conversion metrics & timing</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" defaultChecked className="mr-2 text-brand-teal rounded" />
                            <span className="text-sm text-gray-700">Customer notes & activity</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2 text-brand-teal rounded" />
                            <span className="text-sm text-gray-700">Revenue attribution data</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-brand-navy mb-4">Recent Exports</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          <div>
                            <div className="font-medium text-brand-navy text-sm">E-commerce_Report.pdf</div>
                            <div className="text-xs text-gray-500">2.4 MB</div>
                          </div>
                        </div>
                        <span className="text-gray-500 text-xs">2h ago</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <div>
                            <div className="font-medium text-brand-navy text-sm">Customer_Data.csv</div>
                            <div className="text-xs text-gray-500">847 KB</div>
                          </div>
                        </div>
                        <span className="text-gray-500 text-xs">1d ago</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <div>
                            <div className="font-medium text-brand-navy text-sm">Journey_Map.png</div>
                            <div className="text-xs text-gray-500">1.2 MB</div>
                          </div>
                        </div>
                        <span className="text-gray-500 text-xs">3d ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DemoPage