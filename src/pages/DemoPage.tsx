import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users, Target, Plus, ArrowRight, Zap, Database,
  BarChart2, TrendingUp, Activity, Calendar,
  CreditCard, MousePointerClick, Mail, ShoppingCart, 
  FileText, DollarSign, TrendingDown, Lightbulb,
  ExternalLink, Settings, Filter, Download, Eye,
  Edit3, Trophy, ChevronRight, Sparkles, Play,
  CheckCircle, Clock, Globe, Webhook
} from "lucide-react";
import CountUp from 'react-countup';

const MetricCard = ({ title, value, Icon, gradient, prefix = '', suffix = '', trend = null }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className="relative overflow-hidden bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl group"
  >
    <div className="flex items-center justify-between mb-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${gradient} shadow-lg`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      {trend && (
        <div className="flex items-center space-x-1 text-emerald-600">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">{trend}</span>
        </div>
      )}
    </div>
    <div className="space-y-1">
      <p className="text-3xl font-bold text-gray-900">
        {prefix}<CountUp end={value} duration={2.5} />{suffix}
      </p>
      <p className="text-gray-600 font-medium">{title}</p>
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 5);
    }, 15000);
    
    const metricsInterval = setInterval(() => {
      setLiveMetrics(prev => ({
        ...prev,
        customersTracked: prev.customersTracked + Math.floor(Math.random() * 3),
        conversionRate: Math.max(65, Math.min(70, prev.conversionRate + (Math.random() - 0.5) * 0.2)),
        revenue: prev.revenue + Math.floor(Math.random() * 150)
      }));
    }, 8000);
    return () => {
      clearInterval(interval);
      clearInterval(metricsInterval);
    };
  }, []);
  
  const steps = [
    { name: 'Dashboard', icon: BarChart2 },
    { name: 'Journey Map', icon: Target },
    { name: 'Connect Tools', icon: Webhook },
    { name: 'Live Events', icon: Activity },
    { name: 'AI Insights', icon: Lightbulb }
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Active Journeys" 
          value={liveMetrics.totalJourneys} 
          Icon={Target} 
          gradient="bg-gradient-to-br from-blue-500 to-blue-600"
        />
        <MetricCard 
          title="Customers Tracked" 
          value={liveMetrics.customersTracked} 
          Icon={Users} 
          gradient="bg-gradient-to-br from-brand-teal to-teal-600"
          trend="+12%"
        />
        <MetricCard 
          title="Conversion Rate" 
          value={Math.round(liveMetrics.conversionRate)} 
          suffix="%" 
          Icon={TrendingUp} 
          gradient="bg-gradient-to-br from-purple-500 to-purple-600"
          trend="+5.2%"
        />
        <MetricCard 
          title="Revenue Impact" 
          value={Math.round(liveMetrics.revenue / 1000)} 
          prefix="$" 
          suffix="k" 
          Icon={DollarSign} 
          gradient="bg-gradient-to-br from-emerald-500 to-emerald-600"
          trend="+18%"
        />
      </div>

      {/* Journey Performance */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden"
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Top Performing Journeys</h3>
              <p className="text-gray-600 text-sm">Your highest converting customer paths</p>
            </div>
            <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-all shadow-md hover:shadow-lg">
              <Plus className="w-4 h-4" />
              <span>Create Journey</span>
            </button>
          </div>
        </div>
        <div className="p-6 space-y-4">
          {[
            { name: 'SaaS Trial to Paid', conversion: 78, customers: 1247, status: 'Excellent', color: 'emerald' },
            { name: 'E-commerce Checkout', conversion: 62, customers: 892, status: 'Good', color: 'blue' },
            { name: 'Lead Nurturing', conversion: 45, customers: 2341, status: 'Needs Work', color: 'amber' }
          ].map((journey, index) => (
            <motion.div
              key={journey.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  journey.color === 'emerald' ? 'bg-emerald-500' :
                  journey.color === 'blue' ? 'bg-blue-500' : 'bg-amber-500'
                }`} />
                <div>
                  <h4 className="font-semibold text-gray-900">{journey.name}</h4>
                  <p className="text-sm text-gray-600">{journey.customers.toLocaleString()} customers</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900">{journey.conversion}%</p>
                  <p className="text-xs text-gray-600">Conversion</p>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  journey.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                  journey.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {journey.status}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  const renderJourneyMap = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Visual Journey Mapping</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          See exactly where customers drop off and optimize each touchpoint
        </p>
      </div>

      {/* Journey Flow */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8"
      >
        <h3 className="text-xl font-bold text-gray-900 text-center mb-8">SaaS Trial to Paid Journey</h3>
        
        <div className="relative">
          <div className="flex items-center justify-between">
            {[
              { name: 'Landing Page', users: 8247, rate: 78, icon: MousePointerClick, color: 'from-blue-500 to-blue-600' },
              { name: 'Demo Booking', users: 6432, rate: 62, icon: Calendar, color: 'from-brand-teal to-teal-600' },
              { name: 'Trial Signup', users: 3987, rate: 57, icon: Users, color: 'from-purple-500 to-purple-600' },
              { name: 'Payment', users: 1834, rate: 81, icon: CreditCard, color: 'from-emerald-500 to-emerald-600' }
            ].map((step, i) => (
              <React.Fragment key={step.name}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative group">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">{step.name}</h4>
                    <div className="bg-gray-50 rounded-lg p-3 min-w-[120px]">
                      <p className="text-xl font-bold text-gray-900">{step.users.toLocaleString()}</p>
                      <p className="text-xs text-gray-600">Users</p>
                    </div>
                  </div>
                </motion.div>
                
                {i < 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 + 0.3 }}
                    className="flex flex-col items-center justify-center"
                  >
                    <ArrowRight className="w-6 h-6 text-gray-300 mb-1" />
                    <div className="bg-red-50 border border-red-200 rounded-lg px-2 py-1">
                      <p className="text-xs font-bold text-red-600">
                        -{Math.round((1 - ([6432, 3987, 1834][i] / [8247, 6432, 3987][i])) * 100)}%
                      </p>
                    </div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Overall Performance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200"
        >
          <div className="flex items-center justify-center space-x-8">
            <div>
              <p className="text-2xl font-bold text-emerald-600">22.3%</p>
              <p className="text-emerald-700 font-medium text-sm">Overall Conversion</p>
            </div>
            <div className="w-px h-8 bg-emerald-300" />
            <div>
              <p className="text-2xl font-bold text-teal-600">$47.2k</p>
              <p className="text-teal-700 font-medium text-sm">Monthly Revenue</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );

  const renderConnectTools = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Connect Your Tools</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Use Zapier or Make to send data from your existing tools via webhooks
        </p>
      </div>

      {/* Integration Setup Guide */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">3-Step Integration Process</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              title: "Choose Your Tool",
              description: "Select from 5,000+ apps in Zapier or Make",
              tools: ["Calendly", "HubSpot", "Stripe", "Mailchimp", "Airtable"]
            },
            {
              step: 2,
              title: "Set Up Webhook",
              description: "Copy your unique webhook URL",
              url: "https://api.customerpath.com/webhook/abc123"
            },
            {
              step: 3,
              title: "Start Tracking",
              description: "Data flows automatically to CustomerPath",
              status: "Live"
            }
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-brand-teal rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-lg">{item.step}</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              
              {item.tools && (
                <div className="flex flex-wrap justify-center gap-2">
                  {item.tools.map(tool => (
                    <span key={tool} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              )}
              
              {item.url && (
                <div className="bg-gray-50 rounded-lg p-3 font-mono text-xs text-gray-600 break-all">
                  {item.url}
                </div>
              )}
              
              {item.status && (
                <div className="flex items-center justify-center space-x-2 bg-emerald-50 px-3 py-2 rounded-full border border-emerald-200">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-emerald-700 font-semibold text-sm">{item.status}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Connected Tools */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden"
      >
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">Connected Tools</h3>
          <p className="text-gray-600 text-sm">Tools sending data to CustomerPath</p>
        </div>
        <div className="p-6 space-y-4">
          {[
            { name: 'Calendly', type: 'Demo Bookings', status: 'Active', events: '247 events today', color: 'blue' },
            { name: 'Stripe', type: 'Payments', status: 'Active', events: '89 events today', color: 'emerald' },
            { name: 'HubSpot', type: 'Form Submissions', status: 'Active', events: '156 events today', color: 'orange' },
            { name: 'Mailchimp', type: 'Email Opens', status: 'Active', events: '1.2k events today', color: 'purple' }
          ].map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  tool.color === 'blue' ? 'bg-blue-100' :
                  tool.color === 'emerald' ? 'bg-emerald-100' :
                  tool.color === 'orange' ? 'bg-orange-100' : 'bg-purple-100'
                }`}>
                  <Webhook className={`w-5 h-5 ${
                    tool.color === 'blue' ? 'text-blue-600' :
                    tool.color === 'emerald' ? 'text-emerald-600' :
                    tool.color === 'orange' ? 'text-orange-600' : 'text-purple-600'
                  }`} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{tool.name}</h4>
                  <p className="text-sm text-gray-600">{tool.type}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="text-sm font-medium text-emerald-600">{tool.status}</span>
                </div>
                <p className="text-xs text-gray-500">{tool.events}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  const renderLiveEvents = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
          <h2 className="text-3xl font-bold text-gray-900">Live Customer Activity</h2>
        </div>
        <p className="text-lg text-gray-600">Real-time tracking of customer interactions</p>
      </div>

      {/* Live Activity Feed */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden"
      >
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Live Events Stream</h3>
              <p className="text-gray-600 text-sm">Customer actions happening right now</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-emerald-50 px-3 py-2 rounded-full border border-emerald-200">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-700 font-semibold text-sm">Live</span>
          </div>
        </div>

        <div className="p-6 space-y-3 max-h-80 overflow-y-auto">
          {[
            { time: '2s ago', event: 'Demo booked via Calendly', customer: 'sarah@techcorp.com', type: 'conversion', value: null },
            { time: '8s ago', event: 'Payment completed', customer: 'mike@startup.io', type: 'revenue', value: '$49' },
            { time: '15s ago', event: 'Form submitted', customer: 'jessica@scale.com', type: 'conversion', value: null },
            { time: '31s ago', event: 'Trial signup completed', customer: 'david@growth.co', type: 'conversion', value: null },
            { time: '45s ago', event: 'Landing page visit', customer: 'emma@business.net', type: 'visit', value: null }
          ].map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  event.type === 'revenue' ? 'bg-gradient-to-br from-emerald-500 to-emerald-600' :
                  event.type === 'conversion' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                  'bg-gradient-to-br from-gray-400 to-gray-500'
                }`}>
                  {event.type === 'revenue' ? <DollarSign className="w-4 h-4 text-white" /> :
                   event.type === 'conversion' ? <Target className="w-4 h-4 text-white" /> :
                   <Eye className="w-4 h-4 text-white" />}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{event.event}</p>
                  <p className="text-sm text-gray-600">{event.customer}</p>
                </div>
              </div>
              <div className="text-right">
                {event.value && (
                  <p className="font-bold text-emerald-600">{event.value}</p>
                )}
                <p className="text-xs text-gray-500">{event.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  const renderInsights = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">AI-Powered Insights</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover hidden patterns and get actionable recommendations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          { 
            title: "High Drop-off: Demo to Trial", 
            impact: 'High', 
            description: "43% of users who book demos don't complete trial signup. This is your biggest conversion leak.", 
            potential: "+12% Conversion", 
            revenue: "+$8.4k/mo",
            recommendation: "Add personalized follow-up email sequence after demo"
          },
          { 
            title: "Payment Page Friction", 
            impact: 'Medium', 
            description: "19% cart abandonment on payment page. Users spend 6+ minutes before dropping off.", 
            potential: "+8% Conversion", 
            revenue: "+$5.2k/mo",
            recommendation: "Simplify checkout form and add trust badges"
          }
        ].map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                insight.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
              }`}>
                {insight.impact} Impact
              </span>
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <h4 className="text-lg font-bold text-gray-900 mb-3">{insight.title}</h4>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{insight.description}</p>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <p className="text-xs text-gray-600 mb-1">💡 Recommended Action:</p>
              <p className="font-medium text-gray-900 text-sm">{insight.recommendation}</p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-bold text-emerald-600 text-sm">{insight.potential}</p>
                <p className="text-xs text-gray-600">{insight.revenue}</p>
              </div>
              <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg">
                Implement Fix
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const getCurrentView = () => {
    switch (currentStep) {
      case 0: return renderDashboard();
      case 1: return renderJourneyMap();
      case 2: return renderConnectTools();
      case 3: return renderLiveEvents();
      case 4: return renderInsights();
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Clean, Professional Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-teal to-blue-600 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">CustomerPath</span>
            </Link>
            
            {/* Navigation Tabs */}
            <nav className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              {steps.map((step, index) => (
                <button
                  key={step.name}
                  onClick={() => setCurrentStep(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    currentStep === index 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <step.icon className="w-4 h-4" />
                  <span>{step.name}</span>
                </button>
              ))}
            </nav>
            
            <div></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {getCurrentView()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default DemoPage;