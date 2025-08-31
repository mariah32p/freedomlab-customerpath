import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import {
  Users, Target, Plus, ArrowRight, Zap, Database,
  BarChart2, TrendingUp, Activity, Calendar,
  CreditCard, MousePointerClick, Mail, ShoppingCart, 
  FileText, DollarSign, TrendingDown, Lightbulb,
  ExternalLink, Settings, Filter, Download
} from "lucide-react";

const StatCard = ({ title, value, icon: Icon, color, prefix = '', suffix = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <p className="text-3xl font-bold text-gray-900">
          {prefix}<CountUp end={value} duration={2} separator="," />{suffix}
        </p>
      </div>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
        color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
        color === 'teal' ? 'bg-gradient-to-br from-teal-500 to-teal-600' :
        color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
        color === 'emerald' ? 'bg-gradient-to-br from-emerald-500 to-emerald-600' : 'bg-gray-500'
      }`}>
        {Icon && <Icon className="w-6 h-6 text-white" />}
      </div>
    </div>
  </motion.div>
);

const DemoPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [liveMetrics, setLiveMetrics] = useState({
    totalJourneys: 8,
    customersTracked: 12847,
    conversionRate: 67,
    revenue: 114000
  });

  // Auto-advance demo steps
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 5);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Live metrics simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        totalJourneys: prev.totalJourneys,
        customersTracked: prev.customersTracked + Math.floor(Math.random() * 3),
        conversionRate: Math.max(60, Math.min(75, prev.conversionRate + (Math.random() - 0.5) * 1.5)),
        revenue: prev.revenue + Math.floor(Math.random() * 500)
      }));
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  
  const steps = [
    { name: 'Journeys', icon: Target },
    { name: 'Touchpoints', icon: MousePointerClick },
    { name: 'Webhooks', icon: Webhook },
    { name: 'Analytics', icon: BarChart2 },
    { name: 'Optimize', icon: TrendingUp }
  ];

  const mockJourneys = [
    { 
      id: 1, 
      name: 'SaaS Trial to Paid', 
      customers: 1247, 
      conversionRate: 78, 
      status: 'Healthy', 
      revenue: 47200, 
      healthColor: 'bg-emerald-500',
      lastUpdated: '2 hours ago'
    },
    { 
      id: 2, 
      name: 'E-commerce Checkout', 
      customers: 892, 
      conversionRate: 62, 
      status: 'Needs Attention', 
      revenue: 28400, 
      healthColor: 'bg-amber-500',
      lastUpdated: '4 hours ago'
    },
    { 
      id: 3, 
      name: 'Lead Nurturing Funnel', 
      customers: 2341, 
      conversionRate: 45, 
      status: 'Underperforming', 
      revenue: 15600, 
      healthColor: 'bg-red-500',
      lastUpdated: '1 day ago'
    },
  ];

  const touchpoints = [
    { 
      id: 1, 
      name: 'Landing Page', 
      users: 8247, 
      conversions: 6432,
      conversionRate: 78, 
      tool: 'Google Analytics', 
      color: 'bg-blue-500', 
      icon: MousePointerClick,
      performance: 'excellent',
      avgTime: '2m 34s',
      bounceRate: 22
    },
    { 
      id: 2, 
      name: 'Demo Booking', 
      users: 6432, 
      conversions: 3987,
      conversionRate: 62, 
      tool: 'Calendly', 
      color: 'bg-teal-500', 
      icon: Calendar,
      performance: 'good',
      avgTime: '4m 12s',
      bounceRate: 38
    },
    { 
      id: 3, 
      name: 'Trial Signup', 
      users: 3987, 
      conversions: 2273,
      conversionRate: 57, 
      tool: 'Airtable', 
      color: 'bg-purple-500', 
      icon: Users,
      performance: 'needs-attention',
      avgTime: '6m 45s',
      bounceRate: 43
    },
    { 
      id: 4, 
      name: 'Payment', 
      users: 2273, 
      conversions: 1834,
      conversionRate: 81, 
      tool: 'Stripe', 
      color: 'bg-green-500', 
      icon: CreditCard,
      performance: 'excellent',
      avgTime: '3m 21s',
      bounceRate: 19
    }
  ];

  const webhookSources = [
    { 
      name: 'Calendly',
      category: 'Scheduling',
      zapierConnected: true,
      description: 'Demo bookings and meeting completions',
      webhookUrl: 'https://hooks.zapier.com/hooks/catch/12345/calendly',
      events: ['Demo Booked', 'Meeting Completed', 'No Show'],
      lastEvent: '2 minutes ago',
      eventsToday: 23,
      icon: Calendar,
      color: 'bg-blue-500'
    },
    { 
      name: 'Airtable',
      category: 'Forms & Data',
      zapierConnected: true,
      description: 'Form submissions and lead data',
      webhookUrl: 'https://hooks.zapier.com/hooks/catch/12345/airtable',
      events: ['Form Submitted', 'Lead Qualified', 'Data Updated'],
      lastEvent: '1 minute ago',
      eventsToday: 67,
      icon: Database,
      color: 'bg-orange-500'
    },
    { 
      name: 'Stripe',
      category: 'Payments',
      zapierConnected: true,
      description: 'Payment events and subscription changes',
      webhookUrl: 'https://hooks.zapier.com/hooks/catch/12345/stripe',
      events: ['Payment Success', 'Subscription Created', 'Payment Failed'],
      lastEvent: '30 seconds ago',
      eventsToday: 45,
      icon: CreditCard,
      color: 'bg-green-500'
    },
    { 
      name: 'Typeform',
      category: 'Surveys',
      zapierConnected: false,
      description: 'Survey responses and feedback collection',
      webhookUrl: 'https://hooks.zapier.com/hooks/catch/12345/typeform',
      events: ['Survey Completed', 'Response Received', 'Form Abandoned'],
      lastEvent: null,
      eventsToday: 0,
      icon: FileText,
      color: 'bg-purple-500'
    },
    { 
      name: 'Mailchimp',
      category: 'Email Marketing',
      zapierConnected: false,
      description: 'Email opens, clicks, and unsubscribes',
      webhookUrl: 'https://hooks.zapier.com/hooks/catch/12345/mailchimp',
      events: ['Email Opened', 'Link Clicked', 'Unsubscribed'],
      lastEvent: null,
      eventsToday: 0,
      icon: Mail,
      color: 'bg-yellow-500'
    },
    { 
      name: 'Shopify',
      category: 'E-commerce',
      zapierConnected: false,
      description: 'Order events and cart abandonment',
      webhookUrl: 'https://hooks.zapier.com/hooks/catch/12345/shopify',
      events: ['Order Created', 'Cart Abandoned', 'Checkout Started'],
      lastEvent: null,
      eventsToday: 0,
      icon: ShoppingCart,
      color: 'bg-green-600'
    }
  ];

  const liveEvents = [
    { time: '2s ago', event: 'Demo booked via Calendly', customer: 'sarah@techcorp.com', journey: 'SaaS Trial to Paid', type: 'conversion', value: null },
    { time: '8s ago', event: 'Payment completed ($49/month)', customer: 'mike@startup.io', journey: 'SaaS Trial to Paid', type: 'revenue', value: '$49' },
    { time: '15s ago', event: 'Form submitted to Airtable', customer: 'jessica@scale.com', journey: 'Lead Nurturing', type: 'conversion', value: null },
    { time: '23s ago', event: 'Checkout abandoned on payment page', customer: 'alex@company.com', journey: 'E-commerce Checkout', type: 'dropout', value: '$127' },
    { time: '31s ago', event: 'Trial signup completed', customer: 'david@growth.co', journey: 'SaaS Trial to Paid', type: 'conversion', value: null },
    { time: '45s ago', event: 'Landing page visit from Google', customer: 'emma@business.net', journey: 'SaaS Trial to Paid', type: 'visit', value: null }
  ];

  const optimizationInsights = [
    { 
      title: "High Drop-off: Demo to Trial", 
      impact: 'High', 
      description: "43% of users who book demos don't complete trial signup. This is your biggest conversion leak.", 
      potential: "+12% Conversion", 
      revenue: "+$8.4k/mo",
      recommendation: "Add follow-up email sequence after demo"
    },
    { 
      title: "Payment Page Friction", 
      impact: 'Medium', 
      description: "19% cart abandonment on payment page. Users spend 6+ minutes before dropping off.", 
      potential: "+8% Conversion", 
      revenue: "+$5.2k/mo",
      recommendation: "Simplify checkout form and add trust badges"
    },
    { 
      title: "Mobile Experience Gap", 
      impact: 'Medium', 
      description: "Mobile users convert 23% lower than desktop. Landing page load time is 4.2s on mobile.", 
      potential: "+6% Conversion", 
      revenue: "+$3.8k/mo",
      recommendation: "Optimize mobile page speed and layout"
    }
  ];

  // Render functions for each step
  const renderCreateJourney = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Customer Journeys</h2>
          <p className="text-gray-600 mt-1">Create and manage your customer journey maps</p>
        </div>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg font-medium flex items-center space-x-2 transition-all">
          <Plus className="w-5 h-5" />
          <span>Create New Journey</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Active Journeys" value={liveMetrics.totalJourneys} Icon={Target} color="blue" />
        <StatCard title="Customers Tracked" value={liveMetrics.customersTracked} Icon={Users} color="teal" />
        <StatCard title="Avg. Conversion" value={Math.round(liveMetrics.conversionRate)} suffix="%" Icon={TrendingUp} color="purple" />
        <StatCard title="Revenue Impact" value={Math.round(liveMetrics.revenue / 1000)} prefix="$" suffix="k" Icon={Trophy} color="green" />
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Journey Performance</h3>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium flex items-center space-x-1 hover:bg-gray-50 text-gray-600">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium flex items-center space-x-1 hover:bg-gray-50 text-gray-600">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          {mockJourneys.map(journey => (
            <div key={journey.id} className="p-5 grid grid-cols-6 items-center hover:bg-gray-50 transition-colors">
              <div className="col-span-2 flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full ${journey.healthColor}`} />
                <div>
                  <p className="font-semibold text-gray-900">{journey.name}</p>
                  <p className="text-xs text-gray-500">Updated {journey.lastUpdated}</p>
                </div>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">{journey.customers.toLocaleString()}</p>
                <p className="text-xs text-gray-500">Customers</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">{journey.conversionRate}%</p>
                <p className="text-xs text-gray-500">Conversion</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">${(journey.revenue / 1000).toFixed(1)}k</p>
                <p className="text-xs text-gray-500">Revenue</p>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                  journey.status === 'Healthy' ? 'bg-emerald-100 text-emerald-700' : 
                  journey.status === 'Needs Attention' ? 'bg-amber-100 text-amber-700' : 
                  'bg-red-100 text-red-700'
                }`}>
                  {journey.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMapTouchpoints = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Map Customer Touchpoints</h2>
        <p className="text-gray-600 mt-1 max-w-2xl mx-auto">
          Define each step in your customer journey and track conversion rates
        </p>
      </div>

      {/* Touchpoint Builder */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-semibold text-gray-900">SaaS Trial to Paid Journey</h3>
          <div className="flex items-center space-x-3">
            <button className="px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium hover:bg-gray-50 text-gray-600">
              <Edit3 className="w-4 h-4 mr-2 inline" />
              Edit
            </button>
            <button className="px-3 py-1.5 bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-700">
              <Plus className="w-4 h-4 mr-2 inline" />
              Add Touchpoint
            </button>
          </div>
        </div>

        {/* Visual Journey Flow */}
        <div className="relative">
          <div className="flex items-center justify-between py-8">
            {touchpoints.map((tp, i) => (
              <React.Fragment key={tp.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center flex-1"
                >
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${tp.color} shadow-md`}>
                      {React.createElement(tp.icon, { className: 'w-8 h-8 text-white' })}
                    </div>
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      tp.performance === 'excellent' ? 'bg-emerald-500 text-white' :
                      tp.performance === 'good' ? 'bg-amber-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {tp.performance === 'excellent' ? '✓' : tp.performance === 'good' ? '!' : '⚠'}
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <p className="font-bold text-gray-900">{tp.name}</p>
                    <p className="text-xs text-gray-500 mb-3">{tp.tool}</p>
                    <div className="bg-gray-50 rounded-lg p-3 min-w-[120px]">
                      <p className="text-xl font-bold text-gray-900">{tp.users.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">Visitors</p>
                      <div className="mt-2 pt-2 border-t border-gray-100">
                        <p className="text-base font-bold text-teal-600">{tp.conversionRate}%</p>
                        <p className="text-xs text-gray-500">Convert</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {i < touchpoints.length - 1 && (
                  <div className="flex flex-col items-center justify-center px-4">
                    <ArrowRight className="w-5 h-5 text-gray-400 mb-1" />
                    <div className="bg-gray-100 rounded px-2 py-1">
                      <p className="text-sm font-semibold text-gray-700">
                        {Math.round(((touchpoints[i].conversions / touchpoints[i].users) * 100))}%
                      </p>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Performance Analysis */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <TrendingUp className="w-4 h-4 text-emerald-600 mr-2" />
              <h4 className="font-semibold text-emerald-800">Best Performing</h4>
            </div>
            <p className="font-medium text-gray-900">Payment Page (81%)</p>
            <p className="text-sm text-gray-600">Users who reach payment convert at high rates</p>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <TrendingDown className="w-4 h-4 text-red-600 mr-2" />
              <h4 className="font-semibold text-red-800">Needs Attention</h4>
            </div>
            <p className="font-medium text-gray-900">Trial Signup (57%)</p>
            <p className="text-sm text-gray-600">Biggest drop-off point in your funnel</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Eye className="w-4 h-4 text-blue-600 mr-2" />
              <h4 className="font-semibold text-blue-800">Total Impact</h4>
            </div>
            <p className="font-medium text-gray-900">22.3% Overall</p>
            <p className="text-sm text-gray-600">End-to-end conversion rate</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderConnectTools = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Connect Your Tools via Webhooks</h2>
        <p className="text-gray-600 mt-1 max-w-2xl mx-auto">
          Use Zapier or Make.com to send data from your tools to CustomerPath via webhooks
        </p>
      </div>

      {/* Webhook Setup */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Webhook Sources</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-emerald-600">3 Active</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {webhookSources.map(source => (
            <motion.div
              key={source.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${source.color}`}>
                    {React.createElement(source.icon, { className: 'w-5 h-5 text-white' })}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{source.name}</h4>
                    <p className="text-xs text-gray-500">{source.category}</p>
                  </div>
                </div>
                <div className={`w-3 h-3 rounded-full ${source.zapierConnected ? 'bg-emerald-500' : 'bg-gray-300'}`} />
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{source.description}</p>
              
              {source.zapierConnected ? (
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-md p-3">
                    <p className="text-xs font-medium text-gray-700 mb-1">Webhook URL:</p>
                    <code className="text-xs text-gray-600 break-all">{source.webhookUrl}</code>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Events today:</span>
                    <span className="font-semibold text-gray-900">{source.eventsToday}</span>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-gray-700">Tracking:</p>
                    {source.events.map(event => (
                      <div key={event} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2" />
                        {event}
                      </div>
                    ))}
                  </div>
                  
                  {source.lastEvent && (
                    <p className="text-xs text-emerald-600 font-medium">Last event: {source.lastEvent}</p>
                  )}
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-md p-3">
                    <p className="text-xs text-gray-600">Connect via Zapier or Make.com to start tracking events</p>
                  </div>
                  <button className="w-full bg-teal-600 text-white py-2 rounded-md text-sm font-medium hover:bg-teal-700 transition-colors">
                    Setup Webhook
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Live Event Stream */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Live Webhook Events</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-emerald-600">Live</span>
          </div>
        </div>
        <div className="p-6 space-y-3 max-h-80 overflow-y-auto">
          {liveEvents.slice(0, 12).map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  event.type === 'revenue' ? 'bg-emerald-100' :
                  event.type === 'conversion' ? 'bg-blue-100' :
                  event.type === 'dropout' ? 'bg-red-100' :
                  'bg-gray-100'
                }`}>
                  {event.type === 'revenue' ? <DollarSign className="w-4 h-4 text-emerald-600" /> :
                   event.type === 'conversion' ? <Target className="w-4 h-4 text-blue-600" /> :
                   event.type === 'dropout' ? <TrendingDown className="w-4 h-4 text-red-600" /> :
                   <Eye className="w-4 h-4 text-gray-600" />}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{event.event}</p>
                  <p className="text-sm text-gray-500">{event.customer}</p>
                </div>
              </div>
              <div className="text-right">
                {event.value && (
                  <p className="font-semibold text-emerald-600">{event.value}</p>
                )}
                <p className="text-xs text-gray-500">{event.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Zapier/Make Integration Guide */}
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border border-blue-200 p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 mb-2">How Webhook Integration Works</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/70 rounded-lg p-3">
                <p className="font-medium text-gray-900 mb-1">1. Setup in Zapier/Make</p>
                <p className="text-gray-600">Create a webhook trigger for your tool (Calendly, Airtable, etc.)</p>
              </div>
              <div className="bg-white/70 rounded-lg p-3">
                <p className="font-medium text-gray-900 mb-1">2. Configure Webhook URL</p>
                <p className="text-gray-600">Point your automation to CustomerPath's webhook endpoint</p>
              </div>
              <div className="bg-white/70 rounded-lg p-3">
                <p className="font-medium text-gray-900 mb-1">3. Track Customer Events</p>
                <p className="text-gray-600">See real-time customer interactions in your journey maps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLiveAnalytics = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Live Customer Analytics</h2>
        <p className="text-gray-600 mt-1">Real-time insights from your webhook data</p>
      </div>

      {/* Real-time Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
          <Activity className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <p className="text-2xl font-bold text-gray-900">
            <CountUp end={247} duration={2} />
          </p>
          <p className="text-sm text-gray-600">Active Users</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
          <Target className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
          <p className="text-2xl font-bold text-gray-900">
            <CountUp end={89} duration={2} />
          </p>
          <p className="text-sm text-gray-600">Conversions Today</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
          <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-3" />
          <p className="text-2xl font-bold text-gray-900">
            $<CountUp end={4420} duration={2} separator="," />
          </p>
          <p className="text-sm text-gray-600">Revenue Today</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
          <Webhook className="w-8 h-8 text-teal-600 mx-auto mb-3" />
          <p className="text-2xl font-bold text-gray-900">
            <CountUp end={135} duration={2} />
          </p>
          <p className="text-sm text-gray-600">Events Today</p>
        </div>
      </div>

      {/* Live Activity Stream */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Live Customer Activity</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-emerald-600">Live Updates</span>
          </div>
        </div>
        <div className="p-6 space-y-3 max-h-96 overflow-y-auto">
          {liveEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  event.type === 'revenue' ? 'bg-emerald-100' :
                  event.type === 'conversion' ? 'bg-blue-100' :
                  event.type === 'dropout' ? 'bg-red-100' :
                  'bg-gray-100'
                }`}>
                  {event.type === 'revenue' ? <DollarSign className="w-4 h-4 text-emerald-600" /> :
                   event.type === 'conversion' ? <Target className="w-4 h-4 text-blue-600" /> :
                   event.type === 'dropout' ? <TrendingDown className="w-4 h-4 text-red-600" /> :
                   <Eye className="w-4 h-4 text-gray-600" />}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{event.event}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{event.customer}</span>
                    <span>•</span>
                    <span>{event.journey}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                {event.value && (
                  <p className="font-semibold text-emerald-600 mb-1">{event.value}</p>
                )}
                <p className="text-xs text-gray-500">{event.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOptimize = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Optimize Your Conversions</h2>
        <p className="text-gray-600 mt-1 max-w-2xl mx-auto">
          AI-powered insights to identify bottlenecks and boost conversion rates
        </p>
      </div>

      {/* Funnel Visualization */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Conversion Funnel Analysis</h3>
        
        <div className="space-y-4">
          {touchpoints.map((step, index) => {
            const isLast = index === touchpoints.length - 1;
            const dropOff = isLast ? null : Math.round(((step.users - touchpoints[index + 1].users) / step.users) * 100);
            const width = 100 - (index * 15);
            
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="w-32 text-right pr-6">
                  <p className="font-bold text-xl text-gray-900">{step.users.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">Users</p>
                </div>
                
                <div className="relative text-center text-white font-semibold text-sm h-12 flex items-center justify-center" style={{ width: `${width}%` }}>
                  <div className={`absolute inset-0 ${step.color} rounded-lg`} style={{ 
                    clipPath: 'polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%, 5% 50%)' 
                  }} />
                  <span className="relative z-10">{step.name}</span>
                </div>
                
                <div className="w-32 text-left pl-6">
                  {isLast ? (
                    <>
                      <p className="font-bold text-xl text-emerald-600">
                        {((step.users / touchpoints[0].users) * 100).toFixed(1)}%
                      </p>
                      <p className="text-xs text-gray-500">Total Conversion</p>
                    </>
                  ) : (
                    <>
                      <p className="font-bold text-xl text-red-500">-{dropOff}%</p>
                      <p className="text-xs text-gray-500">Drop-off</p>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Optimization Insights */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Opportunities</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {optimizationInsights.map(insight => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                  insight.impact === 'High' ? 'bg-red-100 text-red-700' : 
                  insight.impact === 'Medium' ? 'bg-amber-100 text-amber-700' : 
                  'bg-blue-100 text-blue-700'
                }`}>
                  {insight.impact} Impact
                </span>
                <Lightbulb className="w-4 h-4 text-amber-500" />
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-2">{insight.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
              
              <div className="bg-gray-50 rounded-lg p-3 mb-3">
                <p className="text-xs text-gray-600 mb-1">Recommended:</p>
                <p className="font-medium text-gray-900 text-sm">{insight.recommendation}</p>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div>
                  <p className="font-semibold text-emerald-600 text-sm">{insight.potential}</p>
                  <p className="text-xs text-gray-500">{insight.revenue}</p>
                </div>
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors">
                  Apply
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  const getCurrentView = () => {
    switch (currentStep) {
      case 0: return renderCreateJourney();
      case 1: return renderMapTouchpoints();
      case 2: return renderConnectTools();
      case 3: return renderLiveAnalytics();
      case 4: return renderOptimize();
      default: return renderCreateJourney();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/30">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CustomerPath</h1>
              <p className="text-sm text-gray-500 -mt-1">Interactive Demo</p>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center space-x-2">
            {steps.map((step, index) => (
              <button
                key={step.name}
                onClick={() => setCurrentStep(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  currentStep === index 
                    ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg transform scale-105' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/60 hover:shadow-md'
                }`}
              >
                {React.createElement(step.icon, { className: 'w-5 h-5' })}
                <span>{step.name}</span>
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-emerald-700">
                Live Demo
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">SC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {getCurrentView()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );

  // Enhanced render functions
  const renderCreateJourney = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4"
        >
          Customer Journey Dashboard
        </motion.h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Create, manage, and optimize your customer journey maps
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <StatCard title="Active Journeys" value={liveMetrics.totalJourneys} icon={Target} color="blue" />
        <StatCard title="Customers Tracked" value={liveMetrics.customersTracked} icon={Users} color="teal" />
        <StatCard title="Avg. Conversion" value={Math.round(liveMetrics.conversionRate)} suffix="%" icon={TrendingUp} color="purple" />
        <StatCard title="Revenue Impact" value={Math.round(liveMetrics.revenue / 1000)} prefix="$" suffix="k" icon={DollarSign} color="emerald" />
      </div>
              <span>Live Demo</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
              <Users className="w-4 h-4 text-teal-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {getCurrentView()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default DemoPage;