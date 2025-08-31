import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users, Target, Plus, ArrowRight, BarChart2, TrendingUp, Activity,
  CreditCard, MousePointerClick, Calendar, DollarSign, Webhook, X, Edit3
} from "lucide-react";

const MetricCard = ({ title, value, prefix = '', suffix = '', trend = null, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200',
    teal: 'bg-teal-50 border-teal-200', 
    purple: 'bg-purple-50 border-purple-200',
    green: 'bg-green-50 border-green-200'
  };

  return (
    <div className={`${colorClasses[color]} p-4 rounded-lg border`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-gray-900">
            {prefix}{value.toLocaleString()}{suffix}
          </p>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
        {trend && (
          <span className="text-emerald-600 text-sm font-medium">{trend}</span>
        )}
      </div>
    </div>
  );
};

const DemoPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [editingStep, setEditingStep] = useState(null);
  const [editName, setEditName] = useState('');
  const [journeySteps, setJourneySteps] = useState([
    { id: 1, name: 'Landing Page', users: 8247, icon: MousePointerClick, color: 'blue' },
    { id: 2, name: 'Demo Booking', users: 6432, icon: Calendar, color: 'teal' },
    { id: 3, name: 'Trial Signup', users: 3987, icon: Users, color: 'purple' },
    { id: 4, name: 'Payment', users: 1834, icon: CreditCard, color: 'green' }
  ]);

  const startEditing = (step) => {
    setEditingStep(step.id);
    setEditName(step.name);
  };

  const saveEdit = () => {
    setJourneySteps(journeySteps.map(step => 
      step.id === editingStep ? { ...step, name: editName } : step
    ));
    setEditingStep(null);
    setEditName('');
  };

  const cancelEdit = () => {
    setEditingStep(null);
    setEditName('');
  };

  const [connectedTools, setConnectedTools] = useState([
    { id: 1, name: 'Calendly', type: 'Demo Bookings', status: 'Active', events: '247 events today' },
    { id: 2, name: 'Stripe', type: 'Payments', status: 'Active', events: '89 events today' },
    { id: 3, name: 'HubSpot', type: 'Form Submissions', status: 'Active', events: '156 events today' }
  ]);

  const [liveEvents] = useState([
    { id: 1, time: '2s ago', event: 'Demo booked', customer: 'sarah@techcorp.com', type: 'conversion', value: null },
    { id: 2, time: '8s ago', event: 'Payment completed', customer: 'mike@startup.io', type: 'revenue', value: '$49' },
    { id: 3, time: '15s ago', event: 'Trial signup', customer: 'jessica@scale.com', type: 'conversion', value: null },
    { id: 4, time: '31s ago', event: 'Demo completed', customer: 'david@growth.co', type: 'conversion', value: null },
    { id: 5, time: '45s ago', event: 'Landing page visit', customer: 'emma@business.net', type: 'visit', value: null }
  ]);

  const metrics = {
    totalJourneys: journeySteps.length,
    customersTracked: journeySteps[0]?.users || 0,
    conversionRate: journeySteps.length > 1 ? Math.round((journeySteps[journeySteps.length - 1].users / journeySteps[0].users) * 100) : 0,
    revenue: journeySteps[journeySteps.length - 1]?.users ? Math.round(journeySteps[journeySteps.length - 1].users * 25.8 / 1000) : 0
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { name: 'Dashboard', icon: BarChart2 },
    { name: 'Journey Map', icon: Target },
    { name: 'Connect Tools', icon: Webhook },
    { name: 'Live Events', icon: Activity }
  ];

  const addJourneyStep = () => {
    const colors = ['blue', 'teal', 'purple', 'green', 'orange'];
    const icons = [Target, Users, CreditCard, Calendar, MousePointerClick];
    const newStep = {
      id: Date.now(),
      name: 'New Step',
      users: Math.floor(journeySteps[journeySteps.length - 1].users * 0.7),
      icon: icons[Math.floor(Math.random() * icons.length)],
      color: colors[Math.floor(Math.random() * colors.length)]
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
      events: `${Math.floor(Math.random() * 200)} events today`
    };
    setConnectedTools([...connectedTools, newTool]);
  };

  const removeTool = (id) => {
    if (connectedTools.length > 1) {
      setConnectedTools(connectedTools.filter(tool => tool.id !== id));
    }
  };

  // DASHBOARD - Analytics Overview
  const renderDashboard = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4">
        <MetricCard
          title="Total Visitors"
          value={metrics.customersTracked}
          trend="+12%"
          color="blue"
        />
        <MetricCard
          title="Active Journeys"
          value={metrics.totalJourneys}
          trend="+3"
          color="teal"
        />
        <MetricCard
          title="Conversion Rate"
          value={metrics.conversionRate}
          suffix="%"
          trend="+8%"
          color="purple"
        />
        <MetricCard
          title="Monthly Revenue"
          value={metrics.revenue}
          prefix="$"
          suffix="k"
          trend="+23%"
          color="green"
        />
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Funnel</h3>
        <div className="space-y-3">
          {journeySteps.map((step, i) => {
            const conversionRate = i === 0 ? 100 : Math.round((step.users / journeySteps[0].users) * 100);
            const dropOff = i > 0 ? Math.round((1 - (step.users / journeySteps[i-1].users)) * 100) : 0;
            
            return (
              <div key={step.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">{step.name}</span>
                    <p className="text-sm text-gray-600">{step.users.toLocaleString()} users</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">{conversionRate}%</div>
                  {dropOff > 0 && (
                    <div className="text-sm text-red-600">-{dropOff}% drop</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  // JOURNEY MAP - Interactive Visual Builder
  const renderJourneyMap = () => (
    <div className="grid grid-cols-2 gap-6 h-[calc(100vh-140px)]">
      {/* Left: Journey Builder */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Journey Builder</h3>
          <button
            onClick={addJourneyStep}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold text-lg flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
          >
            <Plus className="w-5 h-5" />
            <span>Add Step</span>
          </button>
        </div>

        <div className="space-y-4">
          {journeySteps.map((step, i) => (
            <div key={step.id} className="relative group">
              <div className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{i + 1}</span>
                  </div>
                  <div>
                    {editingStep === step.id ? (
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="bg-white border border-blue-300 rounded-lg px-3 py-2 text-lg font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          autoFocus
                        />
                        <button
                          onClick={saveEdit}
                          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-lg transition-all"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold text-lg transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <>
                        <h4 className="text-lg font-bold text-gray-900">{step.name}</h4>
                        <p className="text-gray-600 text-base">{step.users.toLocaleString()} users</p>
                      </>
                    )}
                  </div>
                </div>
                
                {editingStep !== step.id && (
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => startEditing(step)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
                    >
                      Edit
                    </button>
                    {journeySteps.length > 2 && (
                      <button
                        onClick={() => removeJourneyStep(step.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-3 rounded-lg transition-all"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                )}
              </div>
              
              {i < journeySteps.length - 1 && (
                <div className="flex justify-center my-2">
                  <div className="flex items-center space-x-2 bg-red-100 px-3 py-1 rounded-full">
                    <ArrowRight className="w-4 h-4 text-red-600" />
                    <span className="text-red-600 font-semibold text-base">
                      -{Math.round((1 - (journeySteps[i + 1].users / step.users)) * 100)}% drop
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Conversion Funnel */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Conversion Funnel</h3>
        
        <div className="space-y-3">
          {journeySteps.map((step, i) => {
            const conversionRate = i === 0 ? 100 : Math.round((step.users / journeySteps[0].users) * 100);
            const width = conversionRate;
            
            return (
              <div key={step.id} className="relative">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white relative overflow-hidden transition-all duration-500"
                  style={{ width: `${width}%`, minWidth: '250px' }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-lg">{step.name}</h4>
                      <p className="text-blue-100 text-base">{step.users.toLocaleString()} users</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{conversionRate}%</div>
                    </div>
                  </div>
                  
                  {/* Funnel shape effect */}
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-transparent to-black/10"></div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-green-600">{metrics.conversionRate}%</p>
              <p className="text-gray-700 font-medium text-base">Overall Rate</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">${metrics.revenue}k</p>
              <p className="text-gray-700 font-medium text-base">Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // CONNECT TOOLS - Integration Management
  const renderConnectTools = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Connected Tools</h3>
          <button
            onClick={addTool}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold text-lg flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
          >
            <Plus className="w-5 h-5" />
            <span>Add Tool</span>
          </button>
        </div>

        <div className="space-y-3">
          {connectedTools.map((tool) => (
            <div
              key={tool.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                  <Webhook className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{tool.name}</h4>
                  <p className="text-gray-600 text-base">{tool.type}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="font-semibold text-green-600 text-base">{tool.status}</span>
                  </div>
                  <p className="text-gray-500 text-base">{tool.events}</p>
                </div>
                {connectedTools.length > 1 && (
                  <button
                    onClick={() => removeTool(tool.id)}
                    className="w-6 h-6 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Webhook URL</h3>
        <div className="flex items-center space-x-3">
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-3 font-mono text-sm text-gray-700">
            https://api.customerpath.com/webhook/abc123xyz789
          </div>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Copy
          </button>
        </div>
      </div>
    </div>
  );

  // LIVE EVENTS - Real-time Activity
  const renderLiveEvents = () => (
    <div className="bg-white rounded-xl border border-gray-200 p-6 h-[calc(100vh-140px)]">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Live Customer Events</h3>
      
      <div className="space-y-3 overflow-y-auto h-full">
        {liveEvents.map((event) => (
          <div key={event.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${
                event.type === 'revenue' ? 'bg-green-500' :
                event.type === 'conversion' ? 'bg-blue-500' : 'bg-gray-400'
              }`} />
              <div>
                <p className="font-semibold text-gray-900 text-base">{event.event}</p>
                <p className="text-gray-600 text-sm">{event.customer}</p>
              </div>
            </div>
            <div className="text-right">
              {event.value && (
                <p className="font-bold text-green-600 text-base">{event.value}</p>
              )}
              <p className="text-gray-500 text-sm">{event.time}</p>
            </div>
          </div>
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
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Clean Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-teal-500 rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">CustomerPath</span>
            </Link>

            <nav className="flex items-center space-x-1">
              {steps.map((step, index) => (
                <button
                  key={step.name}
                  onClick={() => setCurrentStep(index)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentStep === index
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <step.icon className="w-4 h-4" />
                  <span>{step.name}</span>
                </button>
              ))}
            </nav>

            <Link to="/signup" className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Start Trial
            </Link>
          </div>
        </div>
      </header>

      {/* Compact Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="h-[calc(100vh-120px)] overflow-hidden"
          >
            {getCurrentView()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default DemoPage;