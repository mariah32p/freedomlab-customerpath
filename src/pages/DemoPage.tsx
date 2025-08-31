import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Target, Plus, ArrowRight, Zap, Database,
  BarChart2, TrendingUp, Activity, Calendar,
  CreditCard, MousePointerClick, Mail, ShoppingCart, 
  FileText, DollarSign, TrendingDown, Lightbulb,
  ExternalLink, Settings, Filter, Download, Eye,
  Edit3, Trophy, ChevronRight, Sparkles
} from "lucide-react";

const Webhook = Zap;

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
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className="relative overflow-hidden bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-xl hover:shadow-2xl group"
  >
    <div className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity ${gradient}`} />
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${gradient} shadow-lg`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        {trend && (
          <div className="flex items-center space-x-1 text-emerald-600">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">{trend}</span>
          </div>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-4xl font-bold text-gray-900">
          {prefix}<CountUp end={value} duration={2.5} />{suffix}
        </p>
        <p className="text-gray-600 font-medium">{title}</p>
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 5);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        totalJourneys: prev.totalJourneys,
        customersTracked: prev.customersTracked + Math.floor(Math.random() * 2),
        conversionRate: Math.max(60, Math.min(75, prev.conversionRate + (Math.random() - 0.5) * 0.8)),
        revenue: prev.revenue + Math.floor(Math.random() * 300)
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  const steps = [
    { name: 'Overview', icon: BarChart2 },
    { name: 'Journey Map', icon: Target },
    { name: 'Live Events', icon: Activity },
    { name: 'Insights', icon: Lightbulb },
    { name: 'Optimization', icon: TrendingUp }
  ];

  const renderOverview = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-50 to-blue-50 px-6 py-3 rounded-full border border-teal-200">
          <Sparkles className="w-5 h-5 text-teal-600" />
          <span className="text-teal-700 font-semibold">Real-time Customer Intelligence</span>
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
          Transform Customer Journeys<br />Into Revenue Growth
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Track every touchpoint, understand drop-offs, and optimize conversions with AI-powered insights
        </p>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Active Journeys" 
          value={liveMetrics.totalJourneys} 
          icon={Target} 
          gradient="bg-gradient-to-br from-blue-500 to-blue-600"
        />
        <MetricCard 
          title="Customers Tracked" 
          value={liveMetrics.customersTracked} 
          icon={Users} 
          gradient="bg-gradient-to-br from-teal-500 to-teal-600"
          trend="+12%"
        />
        <MetricCard 
          title="Conversion Rate" 
          value={Math.round(liveMetrics.conversionRate)} 
          suffix="%" 
          icon={TrendingUp} 
          gradient="bg-gradient-to-br from-purple-500 to-purple-600"
          trend="+5.2%"
        />
        <MetricCard 
          title="Revenue Impact" 
          value={Math.round(liveMetrics.revenue / 1000)} 
          prefix="$" 
          suffix="k" 
          icon={DollarSign} 
          gradient="bg-gradient-to-br from-emerald-500 to-emerald-600"
          trend="+18%"
        />
      </div>

      {/* Journey Performance Overview */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white/90 backdrop-blur-md rounded-3xl border border-white/30 shadow-xl overflow-hidden"
      >
        <div className="p-8 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Top Performing Journeys</h3>
              <p className="text-gray-600 mt-1">Your highest converting customer paths</p>
            </div>
            <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center space-x-2 transition-all shadow-lg hover:shadow-xl">
              <Plus className="w-5 h-5" />
              <span>Create Journey</span>
            </button>
          </div>
        </div>
        <div className="p-8 space-y-6">
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
              className="flex items-center justify-between p-6 bg-gray-50/80 rounded-2xl hover:bg-gray-50 transition-colors group cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-4 h-4 rounded-full ${
                  journey.color === 'emerald' ? 'bg-emerald-500' :
                  journey.color === 'blue' ? 'bg-blue-500' : 'bg-amber-500'
                }`} />
                <div>
                  <h4 className="font-semibold text-gray-900">{journey.name}</h4>
                  <p className="text-sm text-gray-600">{journey.customers.toLocaleString()} customers</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{journey.conversion}%</p>
                  <p className="text-xs text-gray-600">Conversion</p>
                </div>
                <span className={`px-4 py-2 text-sm font-semibold rounded-full ${
                  journey.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                  journey.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {journey.status}
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  const renderJourneyMap = () => (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Visual Journey Mapping
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          See exactly where customers drop off and optimize each touchpoint
        </p>
      </div>

      {/* Journey Flow Visualization */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-md rounded-3xl border border-white/30 shadow-xl p-12 overflow-hidden"
      >
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">SaaS Trial to Paid Journey</h3>
        
        <div className="relative">
          <div className="flex items-center justify-between">
            {[
              { name: 'Landing Page', users: 8247, rate: 78, icon: MousePointerClick, color: 'from-blue-500 to-blue-600' },
              { name: 'Demo Booking', users: 6432, rate: 62, icon: Calendar, color: 'from-teal-500 to-teal-600' },
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
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {step.rate}% conversion rate
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <h4 className="font-bold text-gray-900 mb-2">{step.name}</h4>
                    <div className="bg-gray-50 rounded-xl p-4 min-w-[140px]">
                      <p className="text-2xl font-bold text-gray-900">{step.users.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Users</p>
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
                    <ArrowRight className="w-8 h-8 text-gray-300 mb-2" />
                    <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                      <p className="text-sm font-bold text-red-600">
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
          className="mt-12 text-center bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200"
        >
          <div className="flex items-center justify-center space-x-8">
            <div>
              <p className="text-3xl font-bold text-emerald-600">22.3%</p>
              <p className="text-emerald-700 font-medium">Overall Conversion</p>
            </div>
            <div className="w-px h-12 bg-emerald-300" />
            <div>
              <p className="text-3xl font-bold text-teal-600">$47.2k</p>
              <p className="text-teal-700 font-medium">Monthly Revenue</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );

  const renderLiveEvents = () => (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Live Customer Activity
          </h2>
        </div>
        <p className="text-xl text-gray-600">Real-time tracking of customer interactions across your journey</p>
      </div>

      {/* Live Activity Feed */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-md rounded-3xl border border-white/30 shadow-xl overflow-hidden"
      >
        <div className="p-8 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Live Events Stream</h3>
              <p className="text-gray-600">Customer actions happening right now</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-700 font-semibold text-sm">Live</span>
          </div>
        </div>

        <div className="p-8 space-y-4 max-h-96 overflow-y-auto">
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
              className="flex items-center justify-between p-6 bg-gray-50/80 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  event.type === 'revenue' ? 'bg-gradient-to-br from-emerald-500 to-emerald-600' :
                  event.type === 'conversion' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                  'bg-gradient-to-br from-gray-400 to-gray-500'
                }`}>
                  {event.type === 'revenue' ? <DollarSign className="w-6 h-6 text-white" /> :
                   event.type === 'conversion' ? <Target className="w-6 h-6 text-white" /> :
                   <Eye className="w-6 h-6 text-white" />}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{event.event}</p>
                  <p className="text-sm text-gray-600">{event.customer}</p>
                </div>
              </div>
              <div className="text-right">
                {event.value && (
                  <p className="font-bold text-emerald-600 text-lg">{event.value}</p>
                )}
                <p className="text-sm text-gray-500">{event.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  const renderInsights = () => (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          AI-Powered Insights
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover hidden patterns and get actionable recommendations to boost conversions
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            className="bg-white/90 backdrop-blur-md rounded-3xl border border-white/30 shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <span className={`px-4 py-2 text-sm font-bold rounded-full ${
                insight.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
              }`}>
                {insight.impact} Impact
              </span>
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h4 className="text-xl font-bold text-gray-900 mb-4">{insight.title}</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">{insight.description}</p>
            
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <p className="text-sm text-gray-600 mb-2">💡 Recommended Action:</p>
              <p className="font-medium text-gray-900">{insight.recommendation}</p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-bold text-emerald-600">{insight.potential}</p>
                <p className="text-sm text-gray-600">{insight.revenue}</p>
              </div>
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl">
                Implement Fix
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderOptimization = () => (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Conversion Optimization
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Visual funnel analysis with specific recommendations for improvement
        </p>
      </div>

      {/* Funnel Visualization */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-md rounded-3xl border border-white/30 shadow-xl p-12"
      >
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Conversion Funnel Analysis</h3>
        
        <div className="space-y-8">
          {[
            { name: 'Landing Page', users: 8247, color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
            { name: 'Demo Booking', users: 6432, color: 'bg-gradient-to-r from-teal-500 to-teal-600' },
            { name: 'Trial Signup', users: 3987, color: 'bg-gradient-to-r from-purple-500 to-purple-600' },
            { name: 'Payment', users: 1834, color: 'bg-gradient-to-r from-emerald-500 to-emerald-600' }
          ].map((step, index) => {
            const width = 100 - (index * 20);
            const isLast = index === 3;
            const dropOff = isLast ? null : Math.round(((step.users - [6432, 3987, 1834][index]) / step.users) * 100);
            
            return (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center justify-center"
              >
                <div className="w-32 text-right pr-8">
                  <p className="text-2xl font-bold text-gray-900">{step.users.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Users</p>
                </div>
                
                <div className="relative" style={{ width: `${width}%`, maxWidth: '500px' }}>
                  <div className={`h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-lg`} style={{
                    clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%)'
                  }}>
                    <span className="text-white font-semibold text-lg">{step.name}</span>
                  </div>
                </div>
                
                <div className="w-32 text-left pl-8">
                  {isLast ? (
                    <>
                      <p className="text-2xl font-bold text-emerald-600">22.3%</p>
                      <p className="text-sm text-gray-600">Final Rate</p>
                    </>
                  ) : (
                    <>
                      <p className="text-2xl font-bold text-red-500">-{dropOff}%</p>
                      <p className="text-sm text-gray-600">Drop-off</p>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200"
        >
          <div className="flex items-center justify-center space-x-12">
            <div>
              <p className="text-sm text-gray-600 mb-1">Potential Revenue Increase</p>
              <p className="text-3xl font-bold text-emerald-600">+$13.6k/mo</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">With Optimizations</p>
              <p className="text-3xl font-bold text-teal-600">32.8%</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );

  const getCurrentView = () => {
    switch (currentStep) {
      case 0: return renderOverview();
      case 1: return renderJourneyMap();
      case 2: return renderLiveEvents();
      case 3: return renderInsights();
      case 4: return renderOptimization();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-teal-50/50">
      {/* Simplified Header */}
      <div className="bg-white/70 backdrop-blur-xl border-b border-white/30 sticky top-0 z-30 shadow-lg">
        <div className="max-w-6xl mx-auto px-8 h-24 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Target className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CustomerPath</h1>
              <p className="text-sm text-gray-500 -mt-0.5">Journey Intelligence Platform</p>
            </div>
          </div>
          
          {/* Elegant Navigation */}
          <div className="flex items-center bg-white/60 backdrop-blur-md rounded-2xl p-1 shadow-lg">
            {steps.map((step, index) => (
              <button
                key={step.name}
                onClick={() => setCurrentStep(index)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  currentStep === index 
                    ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/80'
                }`}
              >
                <step.icon className="w-4 h-4" />
                <span>{step.name}</span>
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-emerald-700">Live Demo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-8 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {getCurrentView()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default DemoPage;