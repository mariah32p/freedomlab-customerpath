import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Target, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Settings, 
  Plus, 
  Eye, 
  MessageSquare, 
  Trophy, 
  Bell,
  BarChart3,
  Zap,
  ArrowRight,
  Activity,
  Calendar,
  Webhook,
  Database,
  ExternalLink
} from "lucide-react";

const DemoPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<any>(null);
  const [liveMetrics, setLiveMetrics] = useState({
    totalJourneys: 8,
    customersTracked: 12847,
    conversionRate: 67,
    revenue: 114000
  });

  // Auto-advance demo steps
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        const next = (prev + 1) % 5;
        // Show modal for certain steps
        if (next === 1) {
          setTimeout(() => showTouchpointModal(), 2000);
        } else if (next === 2) {
          setTimeout(() => showWebhookModal(), 2500);
        } else if (next === 4) {
          setTimeout(() => showOptimizationModal(), 2000);
        }
        return next;
      });
    }, 7000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Live metrics simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        totalJourneys: prev.totalJourneys,
        customersTracked: prev.customersTracked + Math.floor(Math.random() * 3),
        conversionRate: Math.max(60, Math.min(75, prev.conversionRate + (Math.random() - 0.5) * 2)),
        revenue: prev.revenue + Math.floor(Math.random() * 500)
      }));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const showTouchpointModal = () => {
    setModalContent({
      type: 'touchpoint',
      title: 'Mapping Customer Touchpoints',
      content: 'Let me show you how to map every interaction point in your customer journey. Each touchpoint reveals valuable insights about customer behavior.'
    });
    setShowModal(true);
    setTimeout(() => setShowModal(false), 4000);
  };

  const showWebhookModal = () => {
    setModalContent({
      type: 'webhook',
      title: 'Connecting Real Tools',
      content: 'Here\'s how CustomerPath connects to your existing tools like Calendly, Airtable, and Stripe to track real customer interactions automatically.'
    });
    setShowModal(true);
    setTimeout(() => setShowModal(false), 4500);
  };

  const showOptimizationModal = () => {
    setModalContent({
      type: 'optimization',
      title: 'Conversion Optimization Insights',
      content: 'CustomerPath has identified where customers are dropping off and provides specific recommendations to improve your conversion rates.'
    });
    setShowModal(true);
    setTimeout(() => setShowModal(false), 6000);
  };

  const steps = [
    'Create Journey',
    'Map Touchpoints', 
    'Connect Tools',
    'Live Analytics',
    'Optimize Conversions'
  ];

  const mockJourneys = [
    {
      id: 1,
      name: 'SaaS Trial to Paid',
      touchpoints: 7,
      customers: 1247,
      conversionRate: 78,
      status: 'active',
      lastUpdated: '2 hours ago',
      revenue: 47200
    },
    {
      id: 2,
      name: 'E-commerce Checkout',
      touchpoints: 5,
      customers: 892,
      conversionRate: 62,
      status: 'active',
      lastUpdated: '1 day ago',
      revenue: 28400
    },
    {
      id: 3,
      name: 'Lead Nurturing',
      touchpoints: 9,
      customers: 2341,
      conversionRate: 45,
      status: 'optimizing',
      lastUpdated: '3 days ago',
      revenue: 15600
    }
  ];

  const touchpoints = [
    {
      id: 1,
      name: 'Landing Page Visit',
      description: 'Customer discovers your product',
      visitors: 8247,
      conversions: 6432,
      conversionRate: 78,
      tool: 'Google Analytics',
      status: 'connected'
    },
    {
      id: 2,
      name: 'Demo Booking',
      description: 'Customer schedules product demo',
      visitors: 6432,
      conversions: 3987,
      conversionRate: 62,
      tool: 'Calendly',
      status: 'connected'
    },
    {
      id: 3,
      name: 'Trial Signup',
      description: 'Customer creates trial account',
      visitors: 3987,
      conversions: 2289,
      conversionRate: 57,
      tool: 'Airtable',
      status: 'connected'
    },
    {
      id: 4,
      name: 'Payment Conversion',
      description: 'Customer completes purchase',
      visitors: 2289,
      conversions: 1834,
      conversionRate: 80,
      tool: 'Stripe',
      status: 'connected'
    }
  ];

  const renderCreateJourney = () => (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 animate-fade-in-up hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm font-medium">Active Journeys</p>
              <p className="text-3xl font-bold text-blue-700">{liveMetrics.totalJourneys}</p>
            </div>
            <Target className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-brand-teal/10 to-brand-teal/20 p-6 rounded-2xl border border-brand-teal/30 animate-fade-in-up animation-delay-200 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-brand-teal text-sm font-medium">Customers Tracked</p>
              <p className="text-3xl font-bold text-brand-teal">{liveMetrics.customersTracked.toLocaleString()}</p>
            </div>
            <Users className="w-8 h-8 text-brand-teal" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200 animate-fade-in-up animation-delay-300 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-600 text-sm font-medium">Avg Conversion</p>
              <p className="text-3xl font-bold text-purple-700">{Math.round(liveMetrics.conversionRate)}%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 animate-fade-in-up animation-delay-500 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 text-sm font-medium">Revenue Impact</p>
              <p className="text-3xl font-bold text-green-700">${Math.round(liveMetrics.revenue / 1000)}k</p>
            </div>
            <Trophy className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Active Journeys */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden animate-fade-in-up animation-delay-700 hover:shadow-xl transition-all duration-300">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-brand-navy">Your Customer Journeys</h3>
            <button className="bg-brand-teal text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-teal/90 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Create Journey</span>
            </button>
          </div>
        </div>
        <div className="divide-y divide-slate-100">
          {mockJourneys.map((journey, index) => (
            <div key={journey.id} className="p-6 hover:bg-slate-50 transition-colors duration-200 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 ${
                    index === 0 ? 'bg-blue-100' :
                    index === 1 ? 'bg-brand-teal/10' :
                    'bg-purple-100'
                  }`}>
                    <Target className={`w-6 h-6 ${
                      index === 0 ? 'text-blue-600' :
                      index === 1 ? 'text-brand-teal' :
                      'text-purple-600'
                    }`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy">{journey.name}</h4>
                    <p className="text-slate-600 text-sm">{journey.customers.toLocaleString()} customers • {journey.touchpoints} touchpoints</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-navy">{journey.conversionRate}%</div>
                    <div className="text-xs text-slate-500">Conversion</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">${(journey.revenue / 1000).toFixed(0)}k</div>
                    <div className="text-xs text-slate-500">Revenue</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    journey.status === 'active' ? 'bg-green-100 text-green-700' :
                    journey.status === 'optimizing' ? 'bg-amber-100 text-amber-700' :
                    'bg-slate-100 text-slate-700'
                  }`}>
                    {journey.status}
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-teal transition-colors duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMapTouchpoints = () => (
    <div className="space-y-8">
      {/* Journey Header */}
      <div className="bg-gradient-to-r from-brand-navy to-brand-purple rounded-2xl p-8 text-white animate-fade-in-up relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">SaaS Trial to Paid Journey</h2>
              <p className="text-blue-100 text-lg">Mapping every customer touchpoint • Updated 3 minutes ago</p>
              <div className="flex items-center space-x-4 mt-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Live tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-200" />
                  <span className="text-sm">8,247 customers this month</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-brand-teal">78%</div>
              <div className="text-blue-100">Overall Conversion</div>
            </div>
          </div>
        </div>
      </div>

      {/* Touchpoint Mapping */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden animate-fade-in-up animation-delay-300 hover:shadow-xl transition-all duration-300">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-brand-navy">Customer Touchpoint Map</h3>
            <div className="flex space-x-2">
              <button className="bg-brand-teal text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-brand-teal/90 transition-colors">Export</button>
              <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Share</button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {touchpoints.map((touchpoint, index) => (
              <div key={touchpoint.id} className="relative">
                {index < touchpoints.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-brand-teal to-purple-400"></div>
                )}
                <div className={`flex items-center justify-between p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-102 ${
                  index === 0 ? 'bg-blue-50 border-blue-200 hover:border-blue-300' :
                  index === 1 ? 'bg-brand-teal/10 border-brand-teal/30 hover:border-brand-teal/50' :
                  index === 2 ? 'bg-purple-50 border-purple-200 hover:border-purple-300' :
                  'bg-green-50 border-green-200 hover:border-green-300'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 ${
                      index === 0 ? 'bg-blue-500' :
                      index === 1 ? 'bg-brand-teal' :
                      index === 2 ? 'bg-purple-500' :
                      'bg-green-500'
                    }`}>
                      <span className="text-white text-xl font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-navy mb-1">{touchpoint.name}</h4>
                      <p className="text-slate-600 text-sm mb-2">{touchpoint.description}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                          Connected to {touchpoint.tool}
                        </span>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-brand-navy mb-1">
                      {touchpoint.conversionRate}%
                    </div>
                    <div className="text-slate-500 text-sm">conversion rate</div>
                    <div className="text-slate-600 text-sm mt-1">
                      {touchpoint.conversions.toLocaleString()} converted
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderConnectTools = () => (
    <div className="space-y-8">
      {/* Tools Integration Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-fade-in-up hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-brand-navy">Connect Your Tools</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-600">Real-time sync</span>
          </div>
        </div>
        
        <p className="text-slate-600 mb-6">
          Connect CustomerPath to your existing tools to automatically track customer interactions and conversions.
        </p>
      </div>

      {/* Tool Connections */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Connected Tools */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-fade-in-up animation-delay-300 hover:shadow-xl transition-all duration-300">
          <h4 className="text-lg font-semibold text-brand-navy mb-6">Connected Tools</h4>
          
          <div className="space-y-4">
            {[
              { name: 'Calendly', type: 'Scheduling', status: 'connected', events: '247 bookings', icon: Calendar, color: 'blue' },
              { name: 'Airtable', type: 'CRM', status: 'connected', events: '1,834 records', icon: Database, color: 'orange' },
              { name: 'Stripe', type: 'Payments', status: 'connected', events: '892 transactions', icon: Trophy, color: 'purple' },
              { name: 'Google Analytics', type: 'Web Analytics', status: 'connected', events: '12.8k sessions', icon: BarChart3, color: 'green' }
            ].map((tool, index) => (
              <div key={tool.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    tool.color === 'blue' ? 'bg-blue-100' :
                    tool.color === 'orange' ? 'bg-orange-100' :
                    tool.color === 'purple' ? 'bg-purple-100' :
                    'bg-green-100'
                  }`}>
                    <tool.icon className={`w-5 h-5 ${
                      tool.color === 'blue' ? 'text-blue-600' :
                      tool.color === 'orange' ? 'text-orange-600' :
                      tool.color === 'purple' ? 'text-purple-600' :
                      'text-green-600'
                    }`} />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-navy">{tool.name}</div>
                    <div className="text-sm text-slate-600">{tool.type}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-green-600 font-medium">Connected</span>
                  </div>
                  <div className="text-xs text-slate-500">{tool.events}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Webhook Configuration */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-fade-in-up animation-delay-500 hover:shadow-xl transition-all duration-300">
          <h4 className="text-lg font-semibold text-brand-navy mb-6">Webhook Configuration</h4>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-brand-teal/10 to-blue-50 rounded-xl p-4 border border-brand-teal/20">
              <div className="flex items-center space-x-3 mb-3">
                <Webhook className="w-5 h-5 text-brand-teal" />
                <span className="font-semibold text-brand-navy">Calendly Webhook</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">Active</span>
              </div>
              <p className="text-sm text-slate-600 mb-2">Tracks demo bookings and attendance</p>
              <div className="text-xs text-slate-500 font-mono bg-slate-100 p-2 rounded">
                https://app.customerpath.com/webhooks/calendly
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
              <div className="flex items-center space-x-3 mb-3">
                <Webhook className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-brand-navy">Stripe Webhook</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">Active</span>
              </div>
              <p className="text-sm text-slate-600 mb-2">Captures payment events and subscriptions</p>
              <div className="text-xs text-slate-500 font-mono bg-slate-100 p-2 rounded">
                https://app.customerpath.com/webhooks/stripe
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-200">
              <div className="flex items-center space-x-3 mb-3">
                <Webhook className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-brand-navy">Airtable Webhook</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">Active</span>
              </div>
              <p className="text-sm text-slate-600 mb-2">Syncs lead data and form submissions</p>
              <div className="text-xs text-slate-500 font-mono bg-slate-100 p-2 rounded">
                https://app.customerpath.com/webhooks/airtable
              </div>
            </div>
          </div>

          <button className="w-full mt-6 bg-slate-100 hover:bg-slate-200 text-slate-600 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add New Integration</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderLiveAnalytics = () => (
    <div className="space-y-8">
      {/* Live Analytics Header */}
      <div className="bg-gradient-to-r from-brand-teal to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden animate-fade-in-up">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative">
          <h2 className="text-3xl font-bold mb-2">Live Customer Analytics 📊</h2>
          <p className="text-brand-teal/20 text-lg mb-4">Real-time tracking across all your customer touchpoints</p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4 text-blue-200" />
              <span>Real-time analytics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Live Activity Feed */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden animate-fade-in-up animation-delay-300 hover:shadow-xl transition-all duration-300">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-brand-navy">Customer Activity Stream</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-600">Live</span>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
          {[
            { time: '2 sec ago', event: 'New visitor landed on pricing page', source: 'Google Ads', journey: 'SaaS Trial to Paid', stage: 'Landing Page', type: 'visit' },
            { time: '8 sec ago', event: 'Demo booking completed via Calendly', source: 'Calendly Webhook', journey: 'SaaS Trial to Paid', stage: 'Demo Booking', type: 'conversion' },
            { time: '15 sec ago', event: 'Trial signup form submitted', source: 'Airtable Webhook', journey: 'SaaS Trial to Paid', stage: 'Trial Signup', type: 'engagement' },
            { time: '23 sec ago', event: 'Payment completed successfully', source: 'Stripe Webhook', journey: 'SaaS Trial to Paid', stage: 'Payment Conversion', type: 'revenue' },
            { time: '31 sec ago', event: 'New visitor from organic search', source: 'Google Analytics', journey: 'E-commerce Checkout', stage: 'Landing Page', type: 'visit' },
            { time: '45 sec ago', event: 'Cart abandonment detected', source: 'Shopify Webhook', journey: 'E-commerce Checkout', stage: 'Checkout', type: 'dropout' },
            { time: '52 sec ago', event: 'Email campaign click-through', source: 'Mailchimp Webhook', journey: 'Lead Nurturing', stage: 'Email Engagement', type: 'engagement' }
          ].map((activity, index) => (
            <div key={index} className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-102 ${
              activity.type === 'revenue' ? 'bg-green-50 border border-green-200' :
              activity.type === 'conversion' ? 'bg-brand-teal/10 border border-brand-teal/30' :
              activity.type === 'engagement' ? 'bg-blue-50 border border-blue-200' :
              activity.type === 'dropout' ? 'bg-red-50 border border-red-200' :
              'bg-slate-50 border border-slate-200'
            }`}>
              <div className={`w-3 h-3 rounded-full mt-2 ${
                activity.type === 'revenue' ? 'bg-green-500 animate-pulse' :
                activity.type === 'conversion' ? 'bg-brand-teal animate-pulse' :
                activity.type === 'engagement' ? 'bg-blue-500' :
                activity.type === 'dropout' ? 'bg-red-500' :
                'bg-slate-400'
              }`}></div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-brand-navy">{activity.event}</p>
                  <span className="text-xs text-slate-500">{activity.time}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-slate-600">
                  <span>📍 {activity.journey}</span>
                  <span>🎯 {activity.stage}</span>
                  <span>🔗 {activity.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOptimizeConversions = () => (
    <div className="space-y-8">
      {/* Optimization Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-fade-in-up hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-brand-navy">Conversion Optimization Insights</h3>
          <div className="flex space-x-2">
            <button className="bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-teal/90 transition-colors">
              Export Report
            </button>
            <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Share Insights
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">+23%</div>
            <div className="text-sm text-slate-600">Conversion Rate Improvement</div>
            <div className="text-xs text-green-600 mt-1">↗ vs last quarter</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-teal mb-1">2.4x</div>
            <div className="text-sm text-slate-600">Revenue Per Customer</div>
            <div className="text-xs text-brand-teal mt-1">↗ 140% increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">-18%</div>
            <div className="text-sm text-slate-600">Customer Drop-off Rate</div>
            <div className="text-xs text-purple-600 mt-1">↘ significant improvement</div>
          </div>
        </div>
      </div>

      {/* Drop-off Analysis */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-fade-in-up animation-delay-300 hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl font-semibold text-brand-navy mb-6">Where Customers Drop Off</h3>
        
        <div className="space-y-4">
          {[
            { stage: 'Demo Booking → Trial Signup', dropoff: 38, impact: 'High', recommendation: 'Add social proof to signup form', potential: '+12% conversion' },
            { stage: 'Trial → Payment', dropoff: 20, impact: 'Critical', recommendation: 'Simplify checkout process', potential: '+8% conversion' },
            { stage: 'Landing → Demo Booking', dropoff: 22, impact: 'Medium', recommendation: 'Improve value proposition clarity', potential: '+5% conversion' }
          ].map((issue, index) => (
            <div key={index} className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-102 ${
              issue.impact === 'Critical' ? 'bg-red-50 border-red-200' :
              issue.impact === 'High' ? 'bg-orange-50 border-orange-200' :
              'bg-yellow-50 border-yellow-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    issue.impact === 'Critical' ? 'bg-red-500' :
                    issue.impact === 'High' ? 'bg-orange-500' :
                    'bg-yellow-500'
                  }`}>
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">{issue.stage}</h4>
                    <p className="text-slate-600 text-sm">{issue.dropoff}% of customers drop off here</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  issue.impact === 'Critical' ? 'bg-red-100 text-red-700' :
                  issue.impact === 'High' ? 'bg-orange-100 text-orange-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {issue.impact} Impact
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-brand-navy text-sm mb-1">💡 Recommendation</p>
                    <p className="text-slate-700 text-sm">{issue.recommendation}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600 font-semibold text-sm">{issue.potential}</p>
                    <button className="bg-brand-teal text-white px-3 py-1 rounded text-xs font-medium mt-1 hover:bg-brand-teal/90 transition-colors">
                      Apply Fix
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Optimization Opportunities */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-fade-in-up animation-delay-500 hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl font-semibold text-brand-navy mb-6">AI-Powered Optimization Opportunities</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-brand-teal/10 to-brand-teal/20 rounded-xl p-6 border border-brand-teal/30 hover:shadow-lg transition-all duration-300">
            <h4 className="font-semibold text-brand-teal mb-3">🎯 High Impact Opportunity</h4>
            <p className="text-brand-navy font-medium mb-2">Optimize Demo Booking Flow</p>
            <p className="text-slate-600 text-sm mb-4">
              Adding calendar availability preview could increase demo bookings by an estimated 15-20%.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-brand-teal font-semibold text-sm">Potential Revenue: +$8.4k/month</span>
              <button className="bg-brand-teal text-white px-3 py-1 rounded-lg text-xs font-medium hover:bg-brand-teal/90 transition-colors">Apply</button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300">
            <h4 className="font-semibold text-purple-800 mb-3">📈 Growth Lever</h4>
            <p className="text-brand-navy font-medium mb-2">Scale High-Converting Traffic</p>
            <p className="text-slate-600 text-sm mb-4">
              Your Google Ads traffic converts 42% better than average. Consider increasing ad spend by 25%.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-purple-600 font-semibold text-sm">Potential Revenue: +$12.1k/month</span>
              <button className="bg-purple-500 text-white px-3 py-1 rounded-lg text-xs font-medium hover:bg-purple-600 transition-colors">Review</button>
            </div>
          </div>
        </div>

        {/* Quick Wins */}
        <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-all duration-300">
          <h4 className="font-semibold text-amber-800 mb-4">⚡ Quick Wins (1-2 weeks)</h4>
          <div className="space-y-3">
            {[
              { task: 'Add exit-intent popup to landing page', impact: '+5% conversion', effort: 'Low' },
              { task: 'Optimize trial signup form (reduce fields)', impact: '+8% signups', effort: 'Low' },
              { task: 'Add social proof to checkout page', impact: '+12% completion', effort: 'Medium' }
            ].map((win, index) => (
              <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3 border border-amber-200 hover:shadow-md transition-all duration-200">
                <div className="flex-1">
                  <p className="font-medium text-brand-navy text-sm">{win.task}</p>
                  <p className="text-amber-700 text-xs">{win.impact} • {win.effort} effort</p>
                </div>
                <button className="bg-amber-500 text-white px-3 py-1 rounded text-xs font-medium hover:bg-amber-600 transition-colors">Start</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const getCurrentView = () => {
    switch (currentStep) {
      case 0:
        return renderCreateJourney();
      case 1:
        return renderMapTouchpoints();
      case 2:
        return renderConnectTools();
      case 3:
        return renderLiveAnalytics();
      case 4:
        return renderOptimizeConversions();
      default:
        return renderCreateJourney();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-brand-teal/10">
      {/* Demo Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-teal to-blue-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-brand-navy">CustomerPath</h1>
                <div className="flex items-center space-x-2">
                  <span className="bg-gradient-to-r from-brand-teal to-brand-purple text-white px-2 py-1 rounded-full text-xs font-medium">PRO</span>
                  <span className="text-slate-500 text-sm">Journey Analytics</span>
                </div>
              </div>
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
      </header>

      {/* Demo Navigation */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between py-4">
            <div className="flex space-x-1">
              {steps.map((step, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentStep === index
                      ? 'bg-brand-teal text-white shadow-lg'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {step}
                </button>
              ))}
            </div>
            
            <div className="text-sm text-slate-500">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="transition-all duration-500 ease-in-out">
          {getCurrentView()}
        </div>
      </main>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform animate-scale-in">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-brand-teal to-blue-600 rounded-full flex items-center justify-center">
                  {modalContent?.type === 'optimization' ? (
                    <Zap className="w-5 h-5 text-white" />
                  ) : modalContent?.type === 'webhook' ? (
                    <Webhook className="w-5 h-5 text-white" />
                  ) : (
                    <Eye className="w-5 h-5 text-white" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-brand-navy">{modalContent?.title}</h3>
              </div>
              <p className="text-slate-600 mb-6">{modalContent?.content}</p>
              
              {modalContent?.type === 'optimization' && (
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-800">Optimization Detected</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    Demo booking conversion can be improved by 15% with calendar preview integration.
                  </p>
                </div>
              )}
              
              <div className="flex justify-end">
                <button 
                  onClick={() => setShowModal(false)}
                  className="opacity-0 pointer-events-none"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoPage;