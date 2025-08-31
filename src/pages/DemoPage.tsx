import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CountUp } from 'react-countup';
import {
  Users, Target, CheckCircle, Settings, Plus, ArrowRight, Zap, Webhook, Database, 
  Lightbulb, Briefcase, Bell, BarChart2, TrendingUp, Trophy, Activity, Calendar, 
  MoreHorizontal, Filter, Search, Share2, Download, CreditCard, MousePointerClick, 
  ChevronDown, Globe, Mail, ShoppingCart, FileText, DollarSign, Clock, AlertTriangle,
  TrendingDown, Eye, Edit3, Trash2
} from "lucide-react";

// Design System
const colors = {
  background: '#F8F9FC',
  surface: '#FFFFFF',
  primary: '#0D9488',
  text_primary: '#1E293B',
  text_secondary: '#64748B',
  border: '#E2E8F0',
};

const StatCard = ({ title, value, Icon, color, prefix = '', suffix = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
  >
    <div className="flex items-center justify-between">
      <p className="text-sm font-semibold text-gray-600">{title}</p>
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-${color}-100`}>
        {Icon && <Icon className={`w-5 h-5 text-${color}-600`} />}
      </div>
    </div>
    <p className="text-4xl font-bold mt-3 text-gray-900">
      {prefix}<CountUp end={value} duration={2} separator="," />{suffix}
    </p>
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
    }, 8000);
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
  
  const steps = ['Create Journey', 'Map Touchpoints', 'Connect Tools', 'Live Analytics', 'Optimize'];

  const mockJourneys = [
    { id: 1, name: 'SaaS Trial to Paid', customers: 1247, conversionRate: 78, status: 'Healthy', revenue: 47200, healthColor: 'bg-green-500' },
    { id: 2, name: 'E-commerce Checkout', customers: 892, conversionRate: 62, status: 'Needs Attention', revenue: 28400, healthColor: 'bg-amber-500' },
    { id: 3, name: 'Lead Nurturing Funnel', customers: 2341, conversionRate: 45, status: 'Underperforming', revenue: 15600, healthColor: 'bg-red-500' },
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

  const integrations = [
    { 
      name: 'Calendly', 
      category: 'Scheduling', 
      connected: true, 
      description: 'Track demo bookings and meeting completions',
      events: ['booking.created', 'meeting.completed', 'meeting.cancelled'],
      lastEvent: '2 minutes ago'
    },
    { 
      name: 'Airtable', 
      category: 'Database', 
      connected: true, 
      description: 'Monitor form submissions and lead qualification',
      events: ['record.created', 'record.updated', 'form.submitted'],
      lastEvent: '5 minutes ago'
    },
    { 
      name: 'Stripe', 
      category: 'Payment', 
      connected: true, 
      description: 'Track payments, subscriptions, and revenue',
      events: ['payment.succeeded', 'subscription.created', 'invoice.paid'],
      lastEvent: '1 minute ago'
    },
    { 
      name: 'Google Analytics', 
      category: 'Analytics', 
      connected: true, 
      description: 'Website traffic and user behavior tracking',
      events: ['page.view', 'event.track', 'goal.completed'],
      lastEvent: '30 seconds ago'
    },
    { 
      name: 'HubSpot', 
      category: 'CRM', 
      connected: false, 
      description: 'Lead management and sales pipeline tracking',
      events: ['contact.created', 'deal.updated', 'email.opened'],
      lastEvent: null
    },
    { 
      name: 'Mailchimp', 
      category: 'Email', 
      connected: false, 
      description: 'Email campaign performance and engagement',
      events: ['email.sent', 'email.opened', 'link.clicked'],
      lastEvent: null
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
          <h2 className="text-3xl font-bold text-gray-900">Your Customer Journeys</h2>
          <p className="text-gray-600 mt-2">Create and manage customer journey maps</p>
        </div>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all transform hover:scale-105">
          <Plus className="w-5 h-5" />
          <span>Create New Journey</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Active Journeys" value={liveMetrics.totalJourneys} Icon={Target} color="blue" />
        <StatCard title="Customers Tracked" value={liveMetrics.customersTracked} Icon={Users} color="teal" />
        <StatCard title="Avg. Conversion" value={Math.round(liveMetrics.conversionRate)} suffix="%" Icon={TrendingUp} color="purple" />
        <StatCard title="Revenue Impact" value={Math.round(liveMetrics.revenue / 1000)} prefix="$" suffix="k" Icon={Trophy} color="green" />
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Journey Performance</h3>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-semibold flex items-center space-x-2 hover:bg-gray-50 text-gray-600">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-semibold flex items-center space-x-2 hover:bg-gray-50 text-gray-600">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {mockJourneys.map(journey => (
            <div key={journey.id} className="p-6 grid grid-cols-6 items-center hover:bg-gray-50/50 transition-colors">
              <div className="col-span-2 flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full ${journey.healthColor}`} />
                <div>
                  <p className="font-bold text-gray-900">{journey.name}</p>
                  <p className="text-sm text-gray-500">Updated 2 hours ago</p>
                </div>
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-900">{journey.customers.toLocaleString()}</p>
                <p className="text-sm text-gray-500">Customers</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-900">{journey.conversionRate}%</p>
                <p className="text-sm text-gray-500">Conversion</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-900">${(journey.revenue / 1000).toFixed(1)}k</p>
                <p className="text-sm text-gray-500">Revenue</p>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                  journey.status === 'Healthy' ? 'bg-green-100 text-green-700' : 
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
        <h2 className="text-3xl font-bold text-gray-900">Map Your Customer Touchpoints</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Build your customer journey by mapping each interaction point and tracking conversion rates
        </p>
      </div>

      {/* Touchpoint Builder */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-gray-900">SaaS Trial to Paid Journey</h3>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 text-gray-600">
              <Edit3 className="w-4 h-4 mr-2 inline" />
              Edit
            </button>
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-semibold hover:bg-teal-700">
              <Plus className="w-4 h-4 mr-2 inline" />
              Add Touchpoint
            </button>
          </div>
        </div>

        {/* Visual Journey Flow */}
        <div className="relative">
          <div className="flex items-center justify-center space-x-8 py-8">
            {touchpoints.map((tp, i) => (
              <React.Fragment key={tp.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${tp.color} shadow-lg`}>
                      {React.createElement(tp.icon, { className: 'w-10 h-10 text-white' })}
                    </div>
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      tp.performance === 'excellent' ? 'bg-green-500 text-white' :
                      tp.performance === 'good' ? 'bg-amber-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {tp.performance === 'excellent' ? '✓' : tp.performance === 'good' ? '!' : '⚠'}
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <p className="font-bold text-gray-900">{tp.name}</p>
                    <p className="text-sm text-gray-500 mb-2">{tp.tool}</p>
                    <div className="bg-gray-50 rounded-lg p-3 min-w-[140px]">
                      <p className="text-2xl font-bold text-gray-900">{tp.users.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">Visitors</p>
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <p className="text-lg font-bold text-teal-600">{tp.conversionRate}%</p>
                        <p className="text-xs text-gray-500">Convert</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {i < touchpoints.length - 1 && (
                  <div className="flex flex-col items-center mt-8">
                    <ArrowRight className="w-6 h-6 text-gray-400 mb-2" />
                    <div className="bg-gray-100 rounded-lg px-3 py-1">
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
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center mb-3">
              <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
              <h4 className="font-bold text-green-800">Best Performing</h4>
            </div>
            <p className="font-semibold text-gray-900">Payment Page (81%)</p>
            <p className="text-sm text-gray-600">Users who reach payment convert at high rates</p>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center mb-3">
              <TrendingDown className="w-5 h-5 text-red-600 mr-2" />
              <h4 className="font-bold text-red-800">Needs Attention</h4>
            </div>
            <p className="font-semibold text-gray-900">Trial Signup (57%)</p>
            <p className="text-sm text-gray-600">Biggest drop-off point in your funnel</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center mb-3">
              <Eye className="w-5 h-5 text-blue-600 mr-2" />
              <h4 className="font-bold text-blue-800">Total Impact</h4>
            </div>
            <p className="font-semibold text-gray-900">22.3% Overall</p>
            <p className="text-sm text-gray-600">End-to-end conversion rate</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderConnectTools = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Connect Your Tools</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Set up webhook integrations to automatically track customer interactions across your entire stack
        </p>
      </div>

      {/* Integration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map(integration => (
          <motion.div
            key={integration.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-bold text-lg text-gray-900">{integration.name}</h4>
                <p className="text-sm text-gray-500">{integration.category}</p>
              </div>
              <div className={`w-3 h-3 rounded-full ${integration.connected ? 'bg-green-500' : 'bg-gray-300'}`} />
            </div>
            
            <p className="text-sm text-gray-600 mb-4">{integration.description}</p>
            
            {integration.connected && (
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Webhook Events:</span>
                  <span className="text-green-600 font-semibold">Active</span>
                </div>
                <div className="space-y-1">
                  {integration.events.map(event => (
                    <div key={event} className="flex items-center text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2" />
                      <code className="bg-gray-100 px-2 py-0.5 rounded">{event}</code>
                    </div>
                  ))}
                </div>
                {integration.lastEvent && (
                  <p className="text-xs text-gray-500">Last event: {integration.lastEvent}</p>
                )}
              </div>
            )}
            
            <button className={`w-full py-2 rounded-lg text-sm font-semibold transition-colors ${
              integration.connected 
                ? 'bg-gray-100 text-gray-500 cursor-default' 
                : 'bg-teal-600 text-white hover:bg-teal-700'
            }`}>
              {integration.connected ? (
                <span className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Connected</span>
                </span>
              ) : (
                <span>Connect</span>
              )}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Webhook Configuration */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Webhook Configuration</h3>
          <div className="flex items-center space-x-2 text-sm text-green-600 font-semibold">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Live</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Webhook URLs */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Active Webhooks</h4>
            <div className="space-y-3">
              {integrations.filter(i => i.connected).map(integration => (
                <div key={integration.name} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">{integration.name}</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
                  </div>
                  <code className="text-xs text-gray-600 bg-white px-2 py-1 rounded border">
                    https://api.customerpath.com/webhooks/{integration.name.toLowerCase()}
                  </code>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Events */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Recent Webhook Events</h4>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {liveEvents.slice(0, 8).map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-gray-50 rounded-lg p-3 text-sm"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-gray-900">{event.event}</span>
                    <span className="text-xs text-gray-500">{event.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{event.customer}</span>
                    <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                      event.type === 'revenue' ? 'bg-green-100 text-green-700' :
                      event.type === 'conversion' ? 'bg-blue-100 text-blue-700' :
                      event.type === 'dropout' ? 'bg-red-100 text-red-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLiveAnalytics = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Live Customer Analytics</h2>
        <p className="text-gray-600 mt-2">Real-time insights from your connected tools and customer interactions</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Live Activity Stream</h3>
          <div className="flex items-center space-x-2 text-sm font-semibold text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Live Updates</span>
          </div>
        </div>
        <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
          {liveEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{event.event}</p>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-sm text-gray-600">{event.customer}</span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{event.journey}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {event.value && (
                  <span className="font-bold text-green-600">{event.value}</span>
                )}
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                  event.type === 'revenue' ? 'bg-green-100 text-green-700' :
                  event.type === 'conversion' ? 'bg-blue-100 text-blue-700' :
                  event.type === 'dropout' ? 'bg-red-100 text-red-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {event.type}
                </span>
                <span className="text-sm text-gray-500">{event.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Real-time Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900">Active Users</h4>
            <Activity className="w-5 h-5 text-teal-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">
            <CountUp end={247} duration={2} />
          </p>
          <p className="text-sm text-gray-600">Currently browsing</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900">Conversions Today</h4>
            <Target className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">
            <CountUp end={89} duration={2} />
          </p>
          <p className="text-sm text-green-600">+12% vs yesterday</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900">Revenue Today</h4>
            <DollarSign className="w-5 h-5 text-purple-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">
            $<CountUp end={4420} duration={2} separator="," />
          </p>
          <p className="text-sm text-purple-600">+8% vs yesterday</p>
        </div>
      </div>
    </div>
  );

  const renderOptimize = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Optimize Your Conversions</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          AI-powered insights to identify bottlenecks and boost your conversion rates
        </p>
      </div>

      {/* Funnel Visualization */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">Conversion Funnel Analysis</h3>
        
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
                  <p className="font-bold text-2xl text-gray-900">{step.users.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">Users</p>
                </div>
                
                <div className="relative text-center text-white font-bold text-base h-16 flex items-center justify-center" style={{ width: `${width}%` }}>
                  <div className={`absolute inset-0 ${step.color} rounded-lg`} style={{ 
                    clipPath: 'polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%, 5% 50%)' 
                  }} />
                  <span className="relative z-10">{step.name}</span>
                </div>
                
                <div className="w-32 text-left pl-6">
                  {isLast ? (
                    <>
                      <p className="font-bold text-2xl text-green-600">
                        {((step.users / touchpoints[0].users) * 100).toFixed(1)}%
                      </p>
                      <p className="text-sm text-gray-500">Total Conversion</p>
                    </>
                  ) : (
                    <>
                      <p className="font-bold text-2xl text-red-500">-{dropOff}%</p>
                      <p className="text-sm text-gray-500">Drop-off</p>
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
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Prioritized Optimization Opportunities</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {optimizationInsights.map(insight => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                  insight.impact === 'High' ? 'bg-red-100 text-red-700' : 
                  insight.impact === 'Medium' ? 'bg-amber-100 text-amber-700' : 
                  'bg-blue-100 text-blue-700'
                }`}>
                  {insight.impact} Impact
                </span>
                <Lightbulb className="w-5 h-5 text-amber-500" />
              </div>
              
              <h4 className="font-bold text-lg text-gray-900 mb-3">{insight.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{insight.description}</p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 mb-2">Recommended Action:</p>
                <p className="font-semibold text-gray-900">{insight.recommendation}</p>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <p className="font-semibold text-green-600">{insight.potential}</p>
                  <p className="text-sm text-gray-500">{insight.revenue}</p>
                </div>
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  Implement
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">CustomerPath</h1>
          </div>
          
          {/* Navigation */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="flex space-x-2 p-1 bg-gray-200/70 rounded-lg">
              {steps.map((step, index) => (
                <button
                  key={step}
                  onClick={() => setCurrentStep(index)}
                  className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${
                    currentStep === index 
                      ? 'bg-white text-gray-800 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {step}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-5">
            <Bell className="w-6 h-6 text-gray-600" />
            <div className="w-9 h-9 rounded-full bg-gray-200 ring-2 ring-offset-2 ring-teal-500 flex items-center justify-center">
              <Users className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {getCurrentView()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default DemoPage;