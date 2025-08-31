import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users, Target, Plus, ArrowRight, Zap, Database,
  BarChart2, TrendingUp, Activity, Calendar,
  CreditCard, MousePointerClick, Mail, ShoppingCart, 
  FileText, DollarSign, TrendingDown, Download,
  ExternalLink, Settings, Filter, Eye,
  Edit3, Trophy, ChevronRight, Sparkles, Play,
  CheckCircle, Clock, Globe, Webhook, X
} from "lucide-react";

const CountUp = ({ end, duration = 2, separator = '', prefix = '', suffix = '' }) => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCurrent(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return <span>{prefix}{current.toLocaleString()}{suffix}</span>;
};

const MetricCard = ({ title, value, icon: Icon, gradient, prefix = '', suffix = '', trend = null }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -2 }}
    transition={{ duration: 0.3 }}
    className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md group"
  >
    <div className="flex items-center justify-between mb-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${gradient} shadow-sm`}>
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
        {prefix}{value.toLocaleString()}{suffix}
      </p>
      <p className="text-gray-600 font-medium">{title}</p>
    </div>
  </motion.div>
);

const DemoPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [journeySteps, setJourneySteps] = useState([
    { name: 'Landing Page', users: 8247, icon: MousePointerClick, color: 'from-blue-500 to-blue-600' },
    { name: 'Demo Booking', users: 6432, icon: Calendar, color: 'from-teal-500 to-teal-600' },
    { name: 'Trial Signup', users: 3987, icon: Users, color: 'from-purple-500 to-purple-600' },
    { name: 'Payment', users: 1834, icon: CreditCard, color: 'from-emerald-500 to-emerald-600' }
  ]);
  
  const [connectedTools, setConnectedTools] = useState([
    { name: 'Calendly', type: 'Demo Bookings', status: 'Active', events: '247 events today', color: 'blue' },
    { name: 'Stripe', type: 'Payments', status: 'Active', events: '89 events today', color: 'emerald' },
    { name: 'HubSpot', type: 'Form Submissions', status: 'Active', events: '156 events today', color: 'orange' }
  ]);

  // Static metrics - no more crazy animations
  const metrics = {
    totalJourneys: 8,
    customersTracked: 12847,
    conversionRate: 67,
    revenue: 114000
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 4);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  
  const steps = [
    { name: 'Dashboard', icon: BarChart2 },
    { name: 'Journey Map', icon: Target },
    { name: 'Connect Tools', icon: Webhook },
    { name: 'Live Events', icon: Activity }
  ];

  const addJourneyStep = () => {
    const newStep = {
      name: 'New Step',
      users: Math.floor(journeySteps[journeySteps.length - 1].users * 0.7),
      icon: Target,
      color: 'from-gray-500 to-gray-600'
    };
    setJourneySteps([...journeySteps, newStep]);
  };

  const removeJourneyStep = (index) => {
    if (journeySteps.length > 2) {
      setJourneySteps(journeySteps.filter((_, i) => i !== index));
    }
  };

  const addTool = () => {
    const tools = ['Mailchimp', 'Airtable', 'Typeform', 'Slack', 'Zapier'];
    const randomTool = tools[Math.floor(Math.random() * tools.length)];
    const newTool = {
      name: randomTool,
      type: 'Integration',
      status: 'Active',
      events: `${Math.floor(Math.random() * 200)} events today`,
      color: 'purple'
    };
    setConnectedTools([...connectedTools, newTool]);
  };

  const removeTool = (index) => {
    if (connectedTools.length > 1) {
      setConnectedTools(connectedTools.filter((_, i) => i !== index));
    }
  };

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Featured Journey Funnel */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm p-8"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">SaaS Customer Journey</h3>
            <p className="text-gray-600">Your highest converting funnel</p>
          </div>
          <div className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-200">
            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            <span className="text-emerald-700 font-semibold text-sm">78% Overall Conversion</span>
          </div>
        </div>
        
        {/* Beautiful Funnel Flow */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 via-teal-400 to-emerald-400 opacity-30" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Landing Page */}
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MousePointerClick className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Landing</h4>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="text-3xl font-bold text-blue-600 mb-1">8,247</p>
                <p className="text-blue-700 text-sm font-medium">Visitors</p>
              </div>
            </div>
            
            {/* Demo Booking */}
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Demo</h4>
              <div className="bg-teal-50 rounded-xl p-4 border border-teal-100">
                <p className="text-3xl font-bold text-teal-600 mb-1">6,432</p>
                <p className="text-teal-700 text-sm font-medium">Bookings</p>
              </div>
              <div className="mt-2 text-xs text-red-600 font-semibold bg-red-50 px-2 py-1 rounded-full border border-red-200">
                -22% Drop-off
              </div>
            </div>
            
            {/* Trial Signup */}
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Trial</h4>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                <p className="text-3xl font-bold text-purple-600 mb-1">3,987</p>
                <p className="text-purple-700 text-sm font-medium">Signups</p>
              </div>
              <div className="mt-2 text-xs text-red-600 font-semibold bg-red-50 px-2 py-1 rounded-full border border-red-200">
                -38% Drop-off
              </div>
            </div>
            
            {/* Paid Customers */}
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Paid</h4>
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                <p className="text-3xl font-bold text-emerald-600 mb-1">$47.2k</p>
                <p className="text-emerald-700 text-sm font-medium">Revenue</p>
              </div>
              <div className="mt-2 text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
                2,289 Customers
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Insights */}
        <div className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Biggest Drop-off Point</h4>
                <p className="text-gray-600 text-sm">Demo → Trial: 38% of potential customers lost</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-orange-600">+$18k potential</p>
              <p className="text-gray-600 text-sm">if improved by 10%</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const renderJourneyMap = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Build Your Customer Journey</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Drag and drop to create your perfect customer flow
        </p>
      </div>

      {/* Interactive Journey Builder */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm p-8"
      >
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-gray-900">SaaS Customer Journey</h3>
          <button 
            onClick={addJourneyStep}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add Step</span>
          </button>
        </div>
        
        <div className="flex items-center justify-between overflow-x-auto pb-4">
          {journeySteps.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center relative group"
              >
                {journeySteps.length > 2 && (
                  <button
                    onClick={() => removeJourneyStep(i)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mt-4 text-center">
                  <h4 className="font-semibold text-gray-900 mb-1">{step.name}</h4>
                  <div className="bg-gray-50 rounded-lg p-3 min-w-[120px]">
                    <p className="text-xl font-bold text-gray-900">{step.users.toLocaleString()}</p>
                    <p className="text-xs text-gray-600">Users</p>
                  </div>
                </div>
              </motion.div>
              
              {i < journeySteps.length - 1 && (
                <div className="flex flex-col items-center justify-center mx-4">
                  <ArrowRight className="w-6 h-6 text-gray-300 mb-1" />
                  <div className="bg-red-50 border border-red-200 rounded-lg px-2 py-1">
                    <p className="text-xs font-bold text-red-600">
                      -{Math.round((1 - (journeySteps[i + 1].users / step.users)) * 100)}%
                    </p>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Overall Performance */}
        <div className="mt-8 text-center bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
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
        </div>
      </motion.div>
    </div>
  );

  const renderConnectTools = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Connect Your Tools</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Use webhooks to send data from your existing tools
        </p>
      </div>

      {/* Integration Setup */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm p-8"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6">3-Step Integration</h3>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {[
            { step: 1, title: "Choose Your Tool", description: "Select from 5,000+ apps" },
            { step: 2, title: "Copy Webhook URL", description: "Paste into your tool's settings" },
            { step: 3, title: "Start Tracking", description: "Data flows automatically" }
          ].map((item, index) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">{item.step}</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Webhook URL */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-600 mb-2">Your Webhook URL:</p>
          <div className="bg-white border border-gray-200 rounded-lg p-3 font-mono text-sm text-gray-800">
            https://api.customerpath.com/webhook/abc123xyz
          </div>
        </div>
      </motion.div>

      {/* Connected Tools */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Connected Tools</h3>
              <p className="text-gray-600 text-sm">Tools sending data to CustomerPath</p>
            </div>
            <button 
              onClick={addTool}
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add Tool</span>
            </button>
          </div>
        </div>
        <div className="p-6 space-y-4">
          {connectedTools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl group"
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
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-sm font-medium text-emerald-600">{tool.status}</span>
                  </div>
                  <p className="text-xs text-gray-500">{tool.events}</p>
                </div>
                {connectedTools.length > 1 && (
                  <button
                    onClick={() => removeTool(index)}
                    className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  const renderLiveEvents = () => (
    <div className="space-y-8 -mx-6">
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
        className="bg-white border-t border-b border-gray-100 shadow-sm overflow-hidden"
      >
        <div className="px-6 py-6 border-b border-gray-100 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Live Events Stream</h3>
              <p className="text-gray-600 text-sm">Customer actions happening right now</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-700 font-semibold text-sm">Live</span>
          </div>
        </div>

        <div className="px-6 py-6 space-y-3 max-h-96 overflow-y-auto max-w-7xl mx-auto">
          {[
            { time: '2s ago', event: 'Demo booked via Calendly', customer: 'sarah@techcorp.com', type: 'conversion', value: null },
            { time: '8s ago', event: 'Payment completed', customer: 'mike@startup.io', type: 'revenue', value: '$49' },
            { time: '15s ago', event: 'Form submitted', customer: 'jessica@scale.com', type: 'conversion', value: null },
            { time: '31s ago', event: 'Trial signup completed', customer: 'david@growth.co', type: 'conversion', value: null },
            { time: '45s ago', event: 'Landing page visit', customer: 'emma@business.net', type: 'visit', value: null },
            { time: '1m ago', event: 'Demo completed', customer: 'alex@company.com', type: 'conversion', value: null },
            { time: '1m ago', event: 'Payment completed', customer: 'lisa@startup.co', type: 'revenue', value: '$29' },
            { time: '2m ago', event: 'Trial started', customer: 'tom@business.io', type: 'conversion', value: null },
            { time: '2m ago', event: 'Demo booked via Calendly', customer: 'kate@scale.net', type: 'conversion', value: null },
            { time: '3m ago', event: 'Payment completed', customer: 'ryan@growth.com', type: 'revenue', value: '$49' }
          ].map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center justify-between p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
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
                  <p className="font-semibold text-gray-900 text-lg">{event.event}</p>
                  <p className="text-gray-600">{event.customer}</p>
                </div>
              </div>
              <div className="text-right">
                {event.value && (
                  <p className="font-bold text-emerald-600 text-lg">{event.value}</p>
                )}
                <p className="text-sm text-gray-500 font-medium">{event.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-8 -mx-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 px-6">Export & Reports</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Generate beautiful reports and share insights with your team
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6">
        {/* Export Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl border border-gray-100 shadow-sm p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Download className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Export Options</h3>
              <p className="text-gray-600 text-sm">Download your journey data</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'PDF Report', description: 'Complete journey analysis', icon: FileText },
              { name: 'CSV Data', description: 'Raw customer data export', icon: Database },
              { name: 'PNG Image', description: 'Journey map visualization', icon: Eye }
            ].map((option, index) => (
              <div key={option.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <option.icon className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-semibold text-gray-900">{option.name}</p>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Sharing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl border border-gray-100 shadow-sm p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Team Collaboration</h3>
              <p className="text-gray-600 text-sm">Share dashboards with your team</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">SM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Miller</p>
                  <p className="text-sm text-gray-600">Marketing Manager</p>
                </div>
              </div>
              <span className="text-sm text-emerald-600 font-medium">Editor</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">JD</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">John Davis</p>
                  <p className="text-sm text-gray-600">Product Manager</p>
                </div>
              </div>
              <span className="text-sm text-gray-600 font-medium">Viewer</span>
            </div>

            <button className="w-full border-2 border-dashed border-gray-300 text-gray-600 py-4 rounded-lg font-medium hover:border-teal-300 hover:text-teal-600 transition-colors">
              + Invite Team Member
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );

  const getCurrentView = () => {
    switch (currentStep) {
      case 0: return renderDashboard();
      case 1: return renderJourneyMap();
      case 2: return renderConnectTools();
      case 3: return renderLiveEvents();
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
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">CustomerPath</span>
            </Link>
            
            {/* Clean Navigation */}
            <nav className="flex items-center space-x-8">
              {steps.map((step, index) => (
                <button
                  key={step.name}
                  onClick={() => setCurrentStep(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentStep === index 
                      ? 'bg-gray-100 text-gray-900' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <step.icon className="w-4 h-4" />
                  <span>{step.name}</span>
                </button>
              ))}
            </nav>
            
            <div className="w-32"></div>
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