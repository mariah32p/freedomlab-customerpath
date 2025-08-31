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
        return next;
      });
    }, 8000);
    
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
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden animate-fade-in-up animation-delay-300">
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
          {/* Touchpoint Builder Toolbar */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-brand-navy">Touchpoint Builder</h4>
              <button className="bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add Touchpoint</span>
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
                📱 Landing Page
              </button>
              <button className="bg-purple-100 text-purple-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors">
                📅 Demo Booking
              </button>
              <button className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors">
                ✍️ Trial Signup
              </button>
              <button className="bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-200 transition-colors">
                💳 Payment
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {touchpoints.map((touchpoint, index) => (
              <div key={touchpoint.id} className="relative">
                {index < touchpoints.length - 1 && (
                  <div className="absolute left-12 top-20 w-0.5 h-16 bg-gradient-to-b from-brand-teal to-purple-400"></div>
                )}
                <div className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                  index === 0 ? 'bg-blue-50 border-blue-200 hover:border-blue-300' :
                  index === 1 ? 'bg-brand-teal/10 border-brand-teal/30 hover:border-brand-teal/50' :
                  index === 2 ? 'bg-purple-50 border-purple-200 hover:border-purple-300' :
                  'bg-green-50 border-green-200 hover:border-green-300'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg ${
                        index === 0 ? 'bg-blue-500' :
                        index === 1 ? 'bg-brand-teal' :
                        index === 2 ? 'bg-purple-500' :
                        'bg-green-500'
                      }`}>
                        <span className="text-white text-2xl font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-brand-navy mb-1">{touchpoint.name}</h4>
                        <p className="text-slate-600 text-sm">{touchpoint.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-brand-navy mb-1">
                        {touchpoint.conversionRate}%
                      </div>
                      <div className="text-slate-500 text-sm">conversion rate</div>
                    </div>
                  </div>
                  
                  {/* Detailed Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-navy">{touchpoint.visitors.toLocaleString()}</div>
                      <div className="text-xs text-slate-500">Total Visitors</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{touchpoint.conversions.toLocaleString()}</div>
                      <div className="text-xs text-slate-500">Conversions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{(touchpoint.visitors - touchpoint.conversions).toLocaleString()}</div>
                      <div className="text-xs text-slate-500">Drop-offs</div>
                    </div>
                  </div>
                  
                  {/* Tool Connection Status */}
                  <div className="flex items-center justify-between bg-white/70 rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm font-medium text-slate-700">Connected to {touchpoint.tool}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xs text-slate-500">Last sync: 2 min ago</span>
                      <button className="text-brand-teal hover:text-brand-teal/80 text-sm font-medium">
                        Configure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Journey Flow Visualization */}
          <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h4 className="font-semibold text-brand-navy mb-4">Journey Flow Visualization</h4>
            <div className="flex items-center justify-between">
              {touchpoints.map((touchpoint, index) => (
                <React.Fragment key={touchpoint.id}>
                  <div className="text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      index === 0 ? 'bg-blue-500' :
                      index === 1 ? 'bg-brand-teal' :
                      index === 2 ? 'bg-purple-500' :
                      'bg-green-500'
                    }`}>
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div className="text-xs text-slate-600 font-medium">{touchpoint.name}</div>
                    <div className="text-lg font-bold text-brand-navy">{touchpoint.conversionRate}%</div>
                  </div>
                  {index < touchpoints.length - 1 && (
                    <div className="flex-1 flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-slate-400" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Touchpoint Performance Analysis */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-fade-in-up animation-delay-500">
        <h3 className="text-xl font-semibold text-brand-navy mb-6">Touchpoint Performance Analysis</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-700">Best Performing Touchpoints</h4>
            {touchpoints
              .sort((a, b) => b.conversionRate - a.conversionRate)
              .slice(0, 2)
              .map((touchpoint, index) => (
                <div key={touchpoint.id} className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-green-800">{touchpoint.name}</span>
                    <span className="text-green-600 font-bold">{touchpoint.conversionRate}%</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    {index === 0 ? 'Highest conversion rate - great value proposition' : 'Strong performance - customers ready to buy'}
                  </p>
                </div>
              ))}
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-700">Needs Optimization</h4>
            {touchpoints
              .sort((a, b) => a.conversionRate - b.conversionRate)
              .slice(0, 2)
              .map((touchpoint, index) => (
                <div key={touchpoint.id} className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-orange-800">{touchpoint.name}</span>
                    <span className="text-orange-600 font-bold">{touchpoint.conversionRate}%</span>
                  </div>
                  <p className="text-orange-700 text-sm">
                    {index === 0 ? 'Biggest opportunity - simplify this step' : 'Consider adding social proof here'}
                  </p>
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
      <div className="bg-gradient-to-r from-brand-teal to-blue-600 rounded-2xl p-8 text-white animate-fade-in-up relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative">
          <h2 className="text-3xl font-bold mb-2">Connect Your Tools</h2>
          <p className="text-brand-teal/20 text-lg mb-4">Automatically track customer interactions across all your platforms</p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>4 tools connected</span>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-blue-200" />
              <span>Real-time sync active</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Integration Status Overview */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-fade-in-up animation-delay-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-brand-navy">Integration Status</h3>
          <button className="bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Integration</span>
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: 'Google Analytics', status: 'connected', events: '12.8k sessions', lastSync: '30 sec ago', color: 'blue' },
            { name: 'Calendly', status: 'connected', events: '247 bookings', lastSync: '1 min ago', color: 'green' },
            { name: 'Airtable', status: 'connected', events: '1,834 records', lastSync: '2 min ago', color: 'orange' },
            { name: 'Stripe', status: 'connected', events: '892 payments', lastSync: '45 sec ago', color: 'purple' }
          ].map((tool) => (
            <div key={tool.name} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    tool.color === 'blue' ? 'bg-blue-100' :
                    tool.color === 'green' ? 'bg-green-100' :
                    tool.color === 'orange' ? 'bg-orange-100' :
                    'bg-purple-100'
                  }`}>
                    <Database className={`w-5 h-5 ${
                      tool.color === 'blue' ? 'text-blue-600' :
                      tool.color === 'green' ? 'text-green-600' :
                      tool.color === 'orange' ? 'text-orange-600' :
                      'text-purple-600'
                    }`} />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-navy">{tool.name}</div>
                    <div className="text-sm text-slate-600">{tool.events}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">Live</span>
                  </div>
                  <div className="text-xs text-slate-500">{tool.lastSync}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tool Connections */}
      <div className="grid md:grid-cols-1 gap-8">
        {/* Connected Tools */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-fade-in-up animation-delay-400">
          <h3 className="text-xl font-semibold text-brand-navy mb-6">Webhook Configuration & Data Flow</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Calendly',
                description: 'Demo bookings and meeting scheduling',
                webhook: 'https://app.customerpath.com/webhooks/calendly',
                events: ['invitee.created', 'invitee.canceled', 'meeting.started'],
                lastEvent: 'Demo booked by john@company.com',
                eventTime: '2 min ago',
                color: 'blue'
              },
              {
                name: 'Airtable',
                description: 'Lead data and form submissions',
                webhook: 'https://app.customerpath.com/webhooks/airtable',
                events: ['record.created', 'record.updated', 'form.submitted'],
                lastEvent: 'New lead: sarah@startup.io',
                eventTime: '5 min ago',
                color: 'orange'
              },
              {
                name: 'Stripe',
                description: 'Payment processing and subscriptions',
                webhook: 'https://app.customerpath.com/webhooks/stripe',
                events: ['checkout.completed', 'subscription.created', 'payment.failed'],
                lastEvent: 'Payment completed: $49/month',
                eventTime: '1 min ago',
                color: 'purple'
              },
              {
                name: 'Google Analytics',
                description: 'Website traffic and user behavior',
                webhook: 'https://app.customerpath.com/webhooks/ga4',
                events: ['page.view', 'conversion.goal', 'user.engagement'],
                lastEvent: 'Goal conversion: trial_signup',
                eventTime: '30 sec ago',
                color: 'green'
              }
            ].map((tool) => (
              <div key={tool.name} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      tool.color === 'blue' ? 'bg-blue-100' :
                      tool.color === 'orange' ? 'bg-orange-100' :
                      tool.color === 'purple' ? 'bg-purple-100' :
                      'bg-green-100'
                    }`}>
                      <Database className={`w-6 h-6 ${
                        tool.color === 'blue' ? 'text-blue-600' :
                        tool.color === 'orange' ? 'text-orange-600' :
                        tool.color === 'purple' ? 'text-purple-600' :
                        'text-green-600'
                      }`} />
                    </div>
                    <div>
                      <div className="font-bold text-brand-navy">{tool.name}</div>
                      <div className="text-sm text-slate-600">{tool.description}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">Active</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-xs text-slate-500 mb-2">Webhook URL:</div>
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <code className="text-xs text-slate-600 font-mono">{tool.webhook}</code>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs text-slate-500 mb-2">Tracked Events:</div>
                  <div className="flex flex-wrap gap-1">
                    {tool.events.map((event) => (
                      <span key={event} className="bg-white text-slate-600 px-2 py-1 rounded text-xs font-medium border border-gray-200">
                        {event}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full animate-pulse ${
                        tool.color === 'blue' ? 'bg-blue-400' :
                        tool.color === 'orange' ? 'bg-orange-400' :
                        tool.color === 'purple' ? 'bg-purple-400' :
                        'bg-green-400'
                      }`}></div>
                      <span className="text-sm font-medium text-slate-700">Latest Event:</span>
                    </div>
                    <span className="text-xs text-slate-500">{tool.eventTime}</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">{tool.lastEvent}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Real-time Event Stream */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-fade-in-up animation-delay-600">
        <h3 className="text-xl font-semibold text-brand-navy mb-6">Live Event Stream</h3>
        
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {[
            { tool: 'Calendly', event: 'Demo booked by john@company.com', time: '2 min ago', type: 'booking', color: 'blue' },
            { tool: 'Stripe', event: 'Payment completed: $49/month subscription', time: '3 min ago', type: 'payment', color: 'green' },
            { tool: 'Airtable', event: 'New lead record created: sarah@startup.io', time: '5 min ago', type: 'lead', color: 'orange' },
            { tool: 'Google Analytics', event: 'Goal conversion: trial_signup', time: '7 min ago', type: 'conversion', color: 'purple' },
            { tool: 'Calendly', event: 'Demo completed by mike@techcorp.com', time: '12 min ago', type: 'completion', color: 'blue' },
            { tool: 'Stripe', event: 'Trial started: emily@design.co', time: '15 min ago', type: 'trial', color: 'green' },
            { tool: 'Airtable', event: 'Lead status updated: qualified → demo_scheduled', time: '18 min ago', type: 'update', color: 'orange' },
            { tool: 'Google Analytics', event: 'High-intent page view: /pricing', time: '22 min ago', type: 'engagement', color: 'purple' }
          ].map((event, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full animate-pulse ${
                  event.color === 'blue' ? 'bg-blue-400' :
                  event.color === 'green' ? 'bg-green-400' :
                  event.color === 'orange' ? 'bg-orange-400' :
                  'bg-purple-400'
                }`}></div>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    event.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                    event.color === 'green' ? 'bg-green-100 text-green-700' :
                    event.color === 'orange' ? 'bg-orange-100 text-orange-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {event.tool}
                  </span>
                  <span className="text-sm text-slate-700">{event.event}</span>
                </div>
              </div>
              <span className="text-xs text-slate-500">{event.time}</span>
            </div>
          ))}
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
    </div>
  );
};

export default DemoPage;