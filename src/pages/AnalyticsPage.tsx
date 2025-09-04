import React, { useState } from 'react'
import Header from '../components/Header'
import PaymentIssueBanner from '../components/PaymentIssueBanner'
import { useAuth } from '../hooks/useAuth'
import { shouldShowPaymentBanner } from '../utils/routeGuard'
import { BarChart2, TrendingUp, Users, DollarSign, Calendar, Filter } from 'lucide-react'

const AnalyticsPage: React.FC = () => {
  const { profile } = useAuth()
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d')
  const [selectedJourney, setSelectedJourney] = useState('all')
  
  const showPaymentBanner = shouldShowPaymentBanner(profile)
  const hasActiveSubscription = profile?.subscription_status === 'trialing' || profile?.subscription_status === 'active'

  const timeframes = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ]

  const journeys = [
    { value: 'all', label: 'All Journeys' },
    { value: 'ecommerce', label: 'E-commerce Checkout' },
    { value: 'saas', label: 'SaaS Trial to Paid' },
    { value: 'content', label: 'Content Marketing' }
  ]

  const metrics = {
    totalConversions: 2847,
    conversionRate: 24.8,
    totalRevenue: 91700,
    avgOrderValue: 32.25
  }

  const conversionData = [
    { step: 'Landing Page', users: 8247, rate: 100 },
    { step: 'Product Demo', users: 6432, rate: 78 },
    { step: 'Trial Signup', users: 3987, rate: 62 },
    { step: 'Payment Info', users: 3421, rate: 86 },
    { step: 'Purchase Complete', users: 2847, rate: 83 }
  ]

  const recentActivity = [
    { time: '2 min ago', event: 'High-value customer completed checkout', value: '$247', type: 'revenue' },
    { time: '5 min ago', event: 'Drop-off detected at payment step', value: null, type: 'warning' },
    { time: '8 min ago', event: 'New trial signup from organic search', value: null, type: 'conversion' },
    { time: '12 min ago', event: 'Customer returned after 3 days', value: '$89', type: 'revenue' },
    { time: '15 min ago', event: 'Demo completion rate improved', value: '+5%', type: 'improvement' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-montserrat">
      <Header />
      
      {showPaymentBanner && profile && <PaymentIssueBanner profile={profile} />}
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-3xl font-bold text-brand-navy mb-2">Analytics Dashboard</h1>
              <p className="text-gray-600">Deep insights into your customer journey performance</p>
            </div>
            
            {hasActiveSubscription && (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select 
                    value={selectedJourney}
                    onChange={(e) => setSelectedJourney(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                  >
                    {journeys.map(journey => (
                      <option key={journey.value} value={journey.value}>{journey.label}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <select 
                    value={selectedTimeframe}
                    onChange={(e) => setSelectedTimeframe(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
                  >
                    {timeframes.map(timeframe => (
                      <option key={timeframe.value} value={timeframe.value}>{timeframe.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>

          {hasActiveSubscription ? (
            <>
              {/* Key Metrics */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Conversions</p>
                      <p className="text-2xl font-bold text-brand-navy">{metrics.totalConversions.toLocaleString()}</p>
                      <p className="text-sm text-green-600 font-medium">+12% vs last period</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Conversion Rate</p>
                      <p className="text-2xl font-bold text-brand-navy">{metrics.conversionRate}%</p>
                      <p className="text-sm text-green-600 font-medium">+3.2% vs last period</p>
                    </div>
                    <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center">
                      <BarChart2 className="w-6 h-6 text-brand-teal" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                      <p className="text-2xl font-bold text-brand-navy">{formatCurrency(metrics.totalRevenue)}</p>
                      <p className="text-sm text-green-600 font-medium">+18% vs last period</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-brand-purple" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Avg Order Value</p>
                      <p className="text-2xl font-bold text-brand-navy">{formatCurrency(metrics.avgOrderValue)}</p>
                      <p className="text-sm text-green-600 font-medium">+5.8% vs last period</p>
                    </div>
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conversion Funnel */}
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-brand-navy mb-6">Conversion Funnel</h2>
                  
                  <div className="space-y-4">
                    {conversionData.map((step, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-brand-teal rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold">{index + 1}</span>
                            </div>
                            <div>
                              <h3 className="font-semibold text-brand-navy">{step.step}</h3>
                              <p className="text-sm text-gray-600">{step.users.toLocaleString()} users</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-brand-navy">{step.rate}%</div>
                            {index > 0 && (
                              <div className="text-sm text-red-600">
                                -{(100 - step.rate).toFixed(1)}% drop
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Funnel Visualization */}
                        <div className="mt-2 mb-2">
                          <div 
                            className="h-2 bg-gradient-to-r from-brand-teal to-cyan-500 rounded-full transition-all duration-500"
                            style={{ width: `${step.rate}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-brand-navy mb-6">Live Activity</h2>
                  
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                          activity.type === 'revenue' ? 'bg-green-500' :
                          activity.type === 'warning' ? 'bg-red-500' :
                          activity.type === 'improvement' ? 'bg-blue-500' :
                          'bg-brand-teal'
                        }`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-brand-navy">{activity.event}</p>
                          <div className="flex items-center justify-between mt-1">
                            <p className="text-xs text-gray-500">{activity.time}</p>
                            {activity.value && (
                              <span className={`text-xs font-bold ${
                                activity.type === 'revenue' ? 'text-green-600' :
                                activity.type === 'improvement' ? 'text-blue-600' :
                                'text-brand-teal'
                              }`}>
                                {activity.value}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Performance Insights */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-brand-navy mb-6">AI-Powered Insights</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-blue-900 mb-2">Optimization Opportunity</h3>
                        <p className="text-blue-800 text-sm mb-3">
                          Your payment step has a 17% drop-off rate. Consider adding trust badges or simplifying the form.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          View Recommendations
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-green-900 mb-2">Success Pattern</h3>
                        <p className="text-green-800 text-sm mb-3">
                          Users who watch your demo video are 3x more likely to convert. Consider promoting it more.
                        </p>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart2 className="w-10 h-10 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Advanced Analytics Locked</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Get detailed conversion insights, AI-powered recommendations, and real-time performance tracking.
              </p>
              <Link 
                to="/get-started"
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg inline-block"
              >
                Unlock Analytics
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AnalyticsPage