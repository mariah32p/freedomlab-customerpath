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
    { id: 1, name: 'Landing Page', users: 8247, icon: MousePointerClick, color: 'from-blue-500 to-blue-600' },
    { id: 2, name: 'Demo Booking', users: 6432, icon: Calendar, color: 'from-teal-500 to-teal-600' },
    { id: 3, name: 'Trial Signup', users: 3987, icon: Users, color: 'from-purple-500 to-purple-600' },
    { id: 4, name: 'Payment', users: 1834, icon: CreditCard, color: 'from-emerald-500 to-emerald-600' }
  ]);

  const [connectedTools, setConnectedTools] = useState([
    { id: 1, name: 'Calendly', type: 'Demo Bookings', status: 'Active', events: '247 events today', color: 'blue' },
    { id: 2, name: 'Stripe', type: 'Payments', status: 'Active', events: '89 events today', color: 'emerald' },
    { id: 3, name: 'HubSpot', type: 'Form Submissions', status: 'Active', events: '156 events today', color: 'orange' }
  ]);

  // Calculate metrics from actual data
  const metrics = {
    totalJourneys: journeySteps.length,
    customersTracked: journeySteps[0]?.users || 0,
    conversionRate: journeySteps.length > 1 ? Math.round((journeySteps[journeySteps.length - 1].users / journeySteps[0].users) * 100) : 0,
    revenue: journeySteps[journeySteps.length - 1]?.users ? journeySteps[journeySteps.length - 1].users * 25.8 : 0
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
      id: Date.now(),
      name: 'New Step',
      users: Math.floor(journeySteps[journeySteps.length - 1].users * 0.7),
      icon: Target,
      color: 'from-gray-500 to-gray-600'
    };
    setJourneySteps([...journeySteps, newStep]);
  };

  const removeJourneyStep = (id) => {
    if (journeySteps.length > 2) {
      setJourneySteps(journeySteps.filter(step => step.id !== id));
    }
  };

  const addTool = () => {
    const tools = ['Mailchimp', 'Airtable', 'Typeform', 'Slack', 'Zapier'];
    const randomTool = tools[Math.floor(Math.random() * tools.length)];
    const newTool = {
      id: Date.now(),
      name: randomTool,
      type: 'Integration',
      status: 'Active',
      events: `${Math.floor(Math.random() * 200)} events today`,
      color: 'purple'
    };
    setConnectedTools([...connectedTools, newTool]);
  };

  const removeTool = (id) => {
    if (connectedTools.length > 1) {
      setConnectedTools(connectedTools.filter(tool => tool.id !== id));
    }
  };

  const renderDashboard = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 -mx-6 -my-8 px-6 py-8">
      <div className="max-w-none">
        {/* Stunning Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Customer Journey Analytics
          </h2>
          <p className="text-xl text-gray-600">
            Real-time insights into your highest-converting customer funnel
          </p>
        </div>

        {/* Premium Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <MetricCard
            title="Total Visitors"
            value={metrics.customersTracked}
            icon={Users}
            gradient="bg-gradient-to-br from-blue-500 to-blue-600"
            trend="+12%"
          />
          <MetricCard
            title="Active Journeys"
            value={metrics.totalJourneys}
            icon={Target}
            gradient="bg-gradient-to-br from-purple-500 to-purple-600"
            trend="+3"
          />
          <MetricCard
            title="Conversion Rate"
            value={metrics.conversionRate}
            icon={TrendingUp}
            gradient="bg-gradient-to-br from-emerald-500 to-emerald-600"
            suffix="%"
            trend="+8%"
          />
          <MetricCard
            title="Monthly Revenue"
            value={metrics.revenue}
            icon={DollarSign}
            gradient="bg-gradient-to-br from-amber-500 to-orange-600"
            prefix="$"
            trend="+23%"
          />
        </div>

        {/* Stunning Funnel Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Premium Header */}
          <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 px-10 py-10 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <BarChart2 className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-3">SaaS Customer Journey</h3>
                  <p className="text-gray-300 text-xl">Your highest converting funnel • Updated 3 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-emerald-500/20 px-8 py-4 rounded-2xl border border-emerald-400/30">
                <div className="w-5 h-5 bg-emerald-400 rounded-full animate-pulse shadow-lg" />
                <span className="text-emerald-300 font-bold text-2xl">{metrics.conversionRate}% Overall Conversion</span>
              </div>
            </div>
          </div>

          {/* Massive Funnel Flow */}
          <div className="p-12">
            <div className="relative">
              {/* Flowing Connection Lines */}
              <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500 opacity-40 rounded-full shadow-lg" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                {/***************************************************************/}
                {/* FIX 1: The code was mapping over `journeySteps` but then   */}
                {/* rendering four hardcoded, static blocks inside the map.   */}
                {/* This defeats the purpose of mapping and causes rendering    */}
                {/* issues. The corrected code now renders one dynamic block    */}
                {/* for each `step` in the `journeySteps` array, using the data */}
                {/* from that step.                                             */}
                {/***************************************************************/}
                {journeySteps.map((step, i) => {
                  const Icon = step.icon;
                  const prevStepUsers = i > 0 ? journeySteps[i - 1].users : null;
                  const dropoff = prevStepUsers ? Math.round((1 - (step.users / prevStepUsers)) * 100) : null;

                  return (
                    <motion.div
                      key={step.id}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="text-center relative z-10 group"
                    >
                      <div className={`w-32 h-32 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-300`}>
                        <Icon className="w-16 h-16 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">{step.name}</h4>
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-lg">
                        <p className="text-5xl font-bold text-gray-800 mb-2">
                          {step.users.toLocaleString()}
                        </p>
                        <div className="mt-4 flex items-center justify-center space-x-2">
                          {i === 0 ? (
                            <>
                              <TrendingUp className="w-4 h-4 text-emerald-500" />
                              <span className="text-emerald-600 font-bold text-sm">+12% this week</span>
                            </>
                          ) : dropoff !== null ? (
                            <div className="bg-red-100 px-3 py-2 rounded-xl border border-red-200">
                              <span className="text-red-700 font-bold text-sm">-{dropoff}% Drop-off</span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

  const renderJourneyMap = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 -mx-6 -my-8 px-6 py-8">
      <div className="max-w-none">
        {/* Stunning Header */}
        <div className="text-center space-y-6 mb-12">
          <div className="flex items-center justify-center space-x-4">
            <Edit3 className="w-8 h-8 text-purple-600 animate-bounce" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Visual Journey Builder
            </h2>
            <Edit3 className="w-8 h-8 text-purple-600 animate-bounce" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Drag, drop, and customize your customer journey with our intuitive visual builder
          </p>
        </div>

        {/* Interactive Journey Builder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Premium Builder Header */}
          <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-10 py-10 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-3">Journey Builder</h3>
                  <p className="text-white/80 text-xl">Build and optimize your customer flow</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all border border-white/30">
                  <Settings className="w-5 h-5 mr-2 inline" />
                  Settings
                </button>
                <button
                  onClick={addJourneyStep}
                  className="bg-white text-purple-600 hover:bg-gray-50 px-6 py-3 rounded-xl font-bold flex items-center space-x-2 transition-all shadow-lg"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add Step</span>
                </button>
              </div>
            </div>
          </div>

          {/* Massive Journey Flow */}
          <div className="p-12">
            <div className="flex items-center justify-between overflow-x-auto pb-8">
              {journeySteps.map((step, i) => (
                <React.Fragment key={step.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex flex-col items-center relative group"
                  >
                    {journeySteps.length > 2 && (
                      <button
                        onClick={() => removeJourneyStep(step.id)}
                        className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-10 shadow-lg"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}

                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300`}>
                      <step.icon className="w-12 h-12 text-white" />
                    </div>

                    <div className="mt-6 text-center">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{step.name}</h4>
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 min-w-[160px] shadow-lg border border-gray-200">
                        <p className="text-3xl font-bold text-gray-900 mb-1">{step.users.toLocaleString()}</p>
                        <p className="text-gray-600 font-semibold">Users</p>
                      </div>
                    </div>
                  </motion.div>

                  {i < journeySteps.length - 1 && (
                    <div className="flex flex-col items-center justify-center mx-8">
                      <ArrowRight className="w-8 h-8 text-gray-400 mb-2" />
                      <div className="bg-gradient-to-r from-red-100 to-orange-100 border border-red-200 rounded-xl px-4 py-2 shadow-lg">
                        <p className="text-sm font-bold text-red-600">
                          -{Math.round((1 - (journeySteps[i + 1].users / step.users)) * 100)}% Drop-off
                        </p>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Performance Summary */}
            <div className="mt-12 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200/50">
              <div className="flex items-center justify-center space-x-12">
                <div className="text-center">
                  <p className="text-4xl font-bold text-emerald-600">{metrics.conversionRate}%</p>
                  <p className="text-emerald-700 font-bold text-lg">Overall Conversion</p>
                </div>
                <div className="w-px h-16 bg-emerald-300" />
                <div className="text-center">
                  <p className="text-4xl font-bold text-teal-600">${(metrics.revenue/1000).toFixed(1)}k</p>
                  <p className="text-teal-700 font-bold text-lg">Monthly Revenue</p>
                </div>
                <div className="w-px h-16 bg-emerald-300" />
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">{journeySteps[journeySteps.length-1].users.toLocaleString()}</p>
                  <p className="text-blue-700 font-bold text-lg">Active Customers</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

  const renderConnectTools = () => (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 -mx-6 -my-8 px-6 py-8">
      <div className="max-w-none">
        {/* Stunning Header */}
        <div className="text-center space-y-6 mb-12">
          <div className="flex items-center justify-center space-x-4">
            <Webhook className="w-8 h-8 text-teal-600 animate-pulse" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Connect Your Tools
            </h2>
            <Webhook className="w-8 h-8 text-teal-600 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seamlessly integrate with 5,000+ tools using webhooks and APIs
          </p>
        </div>

        {/* Integration Setup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-3xl shadow-2xl overflow-hidden mb-8"
        >
          {/* Premium Header */}
          <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 px-10 py-10 text-white">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-3">3-Step Integration</h3>
                <p className="text-white/80 text-xl">Connect any tool in under 5 minutes</p>
              </div>
            </div>
          </div>

          <div className="p-12">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {[
                { step: 1, title: "Choose Your Tool", description: "Select from 5,000+ integrations", icon: Database },
                { step: 2, title: "Copy Webhook URL", description: "One-click copy to clipboard", icon: ExternalLink },
                { step: 3, title: "Start Tracking", description: "Data flows automatically", icon: Activity }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <span className="text-white font-bold text-2xl">{item.step}</span>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <item.icon className="w-8 h-8 text-gray-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Webhook URL */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <p className="text-lg font-bold text-gray-900">Your Webhook URL:</p>
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold transition-all">
                  Copy URL
                </button>
              </div>
              <div className="bg-white border border-gray-300 rounded-xl p-6 font-mono text-lg text-gray-800 shadow-inner">
                https://api.customerpath.com/webhook/abc123xyz789
              </div>
            </div>
          </div>
        </motion.div>

        {/* Connected Tools */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Premium Header */}
          <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 px-10 py-10 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Webhook className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-3">Connected Tools</h3>
                  <p className="text-gray-300 text-xl">{connectedTools.length} tools sending live data</p>
                </div>
              </div>
              <button
                onClick={addTool}
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-3 transition-all shadow-xl"
              >
                <Plus className="w-6 h-6" />
                <span>Add Integration</span>
              </button>
            </div>
          </div>

          <div className="p-12 space-y-6">
            <AnimatePresence>
              {connectedTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  layout
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-center justify-between p-8 bg-gradient-to-r from-white to-gray-50/50 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl group"
                >
                  <div className="flex items-center space-x-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                      tool.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                      tool.color === 'emerald' ? 'bg-gradient-to-br from-emerald-500 to-emerald-600' :
                      tool.color === 'orange' ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                      'bg-gradient-to-br from-purple-500 to-purple-600'
                    }`}>
                      <Webhook className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-1">{tool.name}</h4>
                      <p className="text-lg text-gray-600 font-medium">{tool.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-lg font-bold text-emerald-600">{tool.status}</span>
                      </div>
                      <p className="text-gray-500 font-medium">{tool.events}</p>
                    </div>
                    {connectedTools.length > 1 && (
                      <button
                        onClick={() => removeTool(tool.id)}
                        className="w-12 h-12 bg-red-100 hover:bg-red-200 text-red-600 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
  
  // (renderLiveEvents and other functions remain the same)
  // ...
  const renderLiveEvents = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50 -mx-6 -my-8 px-6 py-8">
      <div className="max-w-none">
        {/* Hero Header */}
        <div className="text-center space-y-6 mb-12">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse shadow-lg" />
            <h2 className="text-4xl font-bold text-gray-900">Live Customer Activity</h2>
            <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse shadow-lg" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch your customers move through their journey in real-time across all touchpoints
          </p>
          <div className="flex items-center justify-center space-x-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-600">247</p>
              <p className="text-gray-600 font-medium">Events Today</p>
            </div>
            <div className="w-px h-12 bg-gray-300" />
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">$2,847</p>
              <p className="text-gray-600 font-medium">Revenue Today</p>
            </div>
            <div className="w-px h-12 bg-gray-300" />
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">89</p>
              <p className="text-gray-600 font-medium">New Trials</p>
            </div>
          </div>
        </div>
  
        {/* Stunning Event Stream */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Premium Header */}
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-8 py-8 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">Live Events Stream</h3>
                  <p className="text-gray-300 text-lg">Customer actions happening right now across all touchpoints</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-emerald-500/20 px-6 py-3 rounded-2xl border border-emerald-400/30">
                <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse shadow-lg" />
                <span className="text-emerald-300 font-bold text-lg">LIVE</span>
              </div>
            </div>
          </div>
  
          {/* Event Grid - Full Width */}
          <div className="p-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {[
                { time: '2s ago', event: 'Demo booked via Calendly', customer: 'sarah@techcorp.com', type: 'conversion', value: null, location: 'San Francisco, CA', source: 'Google Ads' },
                { time: '8s ago', event: 'Payment completed', customer: 'mike@startup.io', type: 'revenue', value: '$49', location: 'Austin, TX', source: 'Direct' },
                { time: '15s ago', event: 'Trial signup completed', customer: 'jessica@scale.com', type: 'conversion', value: null, location: 'New York, NY', source: 'LinkedIn' },
                { time: '31s ago', event: 'Demo completed', customer: 'david@growth.co', type: 'conversion', value: null, location: 'Seattle, WA', source: 'Organic Search' },
                { time: '45s ago', event: 'Landing page visit', customer: 'emma@business.net', type: 'visit', value: null, location: 'Boston, MA', source: 'Twitter' },
                { time: '1m ago', event: 'Payment completed', customer: 'alex@company.com', type: 'revenue', value: '$29', location: 'Chicago, IL', source: 'Google Ads' },
                { time: '1m ago', event: 'Demo booked via Calendly', customer: 'lisa@startup.co', type: 'conversion', value: null, location: 'Miami, FL', source: 'Facebook' },
                { time: '2m ago', event: 'Trial started', customer: 'tom@business.io', type: 'conversion', value: null, location: 'Denver, CO', source: 'Direct' },
                { time: '2m ago', event: 'Payment completed', customer: 'kate@scale.net', type: 'revenue', value: '$49', location: 'Portland, OR', source: 'Organic Search' },
                { time: '3m ago', event: 'Demo completed', customer: 'ryan@growth.com', type: 'conversion', value: null, location: 'Atlanta, GA', source: 'LinkedIn' },
                { time: '3m ago', event: 'Trial signup completed', customer: 'anna@enterprise.com', type: 'conversion', value: null, location: 'Los Angeles, CA', source: 'Organic Search' },
                { time: '4m ago', event: 'Payment completed', customer: 'chris@startup.net', type: 'revenue', value: '$99', location: 'Phoenix, AZ', source: 'Direct' }
              ].map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-gradient-to-r from-white to-gray-50/50 p-6 rounded-2xl border border-gray-100/50 hover:shadow-xl transition-all duration-300 group backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                        event.type === 'revenue' ? 'bg-gradient-to-br from-emerald-500 to-emerald-600' :
                        event.type === 'conversion' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                        'bg-gradient-to-br from-gray-400 to-gray-500'
                      }`}>
                        {event.type === 'revenue' ? <DollarSign className="w-7 h-7 text-white" /> :
                         event.type === 'conversion' ? <Target className="w-7 h-7 text-white" /> :
                         <Eye className="w-7 h-7 text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-3">
                          <h4 className="font-bold text-gray-900 text-lg">{event.event}</h4>
                          {event.value && (
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-sm font-bold shadow-sm">
                              {event.value}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-700 font-semibold mb-3 text-base">{event.customer}</p>
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center space-x-2">
                            <Globe className="w-4 h-4" />
                            <span className="font-medium">{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <ExternalLink className="w-4 h-4" />
                            <span className="font-medium">{event.source}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm font-semibold bg-gray-100 px-3 py-1.5 rounded-full">
                        <Clock className="w-3 h-3" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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

// FIX 2: Removed the duplicate export statement.
export default DemoPage;