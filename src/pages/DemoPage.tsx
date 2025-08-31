import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users, Target, Plus, ArrowRight, BarChart2, TrendingUp, Activity,
  CreditCard, MousePointerClick, Calendar, DollarSign, Webhook, X
} from "lucide-react";

const MetricCard = ({ title, value, prefix = '', suffix = '', trend = null }) => (
  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
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

const DemoPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [journeySteps, setJourneySteps] = useState([
    { id: 1, name: 'Landing Page', users: 8247, icon: MousePointerClick },
    { id: 2, name: 'Demo Booking', users: 6432, icon: Calendar },
    { id: 3, name: 'Trial Signup', users: 3987, icon: Users },
    { id: 4, name: 'Payment', users: 1834, icon: CreditCard }
  ]);

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
    { id: 5, time: '45s ago', event: 'Landing page visit', customer: 'emma@business.net', type: 'visit', value: null },
    { id: 6, time: '1m ago', event: 'Payment completed', customer: 'alex@company.com', type: 'revenue', value: '$29' }
  ]);

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
      icon: Target
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

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <MetricCard
          title="Total Visitors"
          value={metrics.customersTracked}
          trend="+12%"
        />
        <MetricCard
          title="Active Journeys"
          value={metrics.totalJourneys}
          trend="+3"
        />
        <MetricCard
          title="Conversion Rate"
          value={metrics.conversionRate}
          suffix="%"
          trend="+8%"
        />
        <MetricCard
          title="Monthly Revenue"
          value={Math.round(metrics.revenue)}
          prefix="$"
          trend="+23%"
        />
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Journey Flow</h3>
        <div className="flex items-center justify-between">
          {journeySteps.map((step, i) => (
            <React.Fragment key={step.id}>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{step.name}</h4>
                <p className="text-lg font-bold text-gray-900">{step.users.toLocaleString()}</p>
              </div>
              {i < journeySteps.length - 1 && (
                <div className="flex flex-col items-center">
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <span className="text-xs text-red-600 font-medium mt-1">
                    -{Math.round((1 - (journeySteps[i + 1].users / step.users)) * 100)}%
                  </span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );

  const renderJourneyMap = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Journey Builder</h3>
          <button
            onClick={addJourneyStep}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Step</span>
          </button>
        </div>

        <div className="flex items-center justify-between">
          {journeySteps.map((step, i) => (
            <React.Fragment key={step.id}>
              <div className="text-center relative group">
                {journeySteps.length > 2 && (
                  <button
                    onClick={() => removeJourneyStep(step.id)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-2">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{step.name}</h4>
                <p className="text-lg font-bold text-gray-900">{step.users.toLocaleString()}</p>
              </div>
              {i < journeySteps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-gray-400" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-center space-x-8">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{metrics.conversionRate}%</p>
            <p className="text-gray-600 text-sm">Overall Conversion</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">${Math.round(metrics.revenue/1000)}k</p>
            <p className="text-gray-600 text-sm">Monthly Revenue</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderConnectTools = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Connected Tools</h3>
          <button
            onClick={addTool}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Tool</span>
          </button>
        </div>

        <div className="space-y-3">
          {connectedTools.map((tool) => (
            <div
              key={tool.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                  <Webhook className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{tool.name}</h4>
                  <p className="text-sm text-gray-600">{tool.type}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm font-medium text-green-600">{tool.status}</span>
                  </div>
                  <p className="text-xs text-gray-500">{tool.events}</p>
                </div>
                {connectedTools.length > 1 && (
                  <button
                    onClick={() => removeTool(tool.id)}
                    className="w-8 h-8 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Webhook URL</h3>
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

  const renderLiveEvents = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Live Events</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-600 text-sm font-medium">Live</span>
          </div>
        </div>

        <div className="space-y-3">
          {liveEvents.map((event) => (
            <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  event.type === 'revenue' ? 'bg-green-500' :
                  event.type === 'conversion' ? 'bg-blue-500' :
                  'bg-gray-400'
                }`}>
                  {event.type === 'revenue' ? <DollarSign className="w-4 h-4 text-white" /> :
                   event.type === 'conversion' ? <Target className="w-4 h-4 text-white" /> :
                   <MousePointerClick className="w-4 h-4 text-white" />}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{event.event}</p>
                  <p className="text-sm text-gray-600">{event.customer}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {event.value && (
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                    {event.value}
                  </span>
                )}
                <span className="text-xs text-gray-500">{event.time}</span>
              </div>
            </div>
          ))}
        </div>
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">CustomerPath</span>
            </Link>

            <nav className="flex items-center space-x-1">
              {steps.map((step, index) => (
                <button
                  key={step.name}
                  onClick={() => setCurrentStep(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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
      <main className="max-w-6xl mx-auto px-6 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {getCurrentView()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default DemoPage;