import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountUp } from 'react-countup';
import {
  Users, Target, CheckCircle, Settings, Plus, ArrowRight, Zap, Webhook, Database, Lightbulb, Briefcase, Bell, BarChart2, TrendingUp, Trophy, Activity, Calendar, MoreHorizontal, Filter, Search, Share2, Download, CreditCard, MousePointerClick, ChevronDown,
} from "lucide-react";

// --- Design System & Helper Components ---
const colors = {
  background: '#F8F9FC',
  surface: '#FFFFFF',
  primary: '#0D9488', // Teal-600
  text_primary: '#1E293B',
  text_secondary: '#64748B',
  border: '#E2E8F0',
};

const CountUp = ({ end }) => {
  const { countUp, start } = useCountUp({ start: 0, end, duration: 2, separator: ',' });
  useEffect(start, []);
  return <span>{countUp}</span>;
};

const StatCard = ({ title, value, icon, color, prefix = '', suffix = '' }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-surface p-6 rounded-2xl border" style={{ borderColor: colors.border, boxShadow: '0 4px 12px 0 rgba(0,0,0,0.02)'}}
    >
        <div className="flex items-center justify-between">
            <p className="text-sm font-semibold" style={{ color: colors.text_secondary }}>{title}</p>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-${color}-100`}>
                {React.createElement(icon, { className: `w-5 h-5 text-${color}-600`})}
            </div>
        </div>
        <p className="text-4xl font-bold mt-3" style={{ color: colors.text_primary }}>
            {prefix}<CountUp end={value} />{suffix}
        </p>
    </motion.div>
);

const FunnelChart = ({ data }) => (
    <div className="w-full max-w-4xl mx-auto py-8">
        {data.map((step, index) => {
            const isLast = index === data.length - 1;
            const dropOff = isLast ? null : Math.round(((step.users - data[index + 1].users) / step.users) * 100);
            return (
                <motion.div
                    key={step.id}
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-center my-1"
                >
                    <div className="w-40 text-right pr-6">
                        <p className="font-bold text-3xl" style={{ color: colors.text_primary }}>{step.users.toLocaleString()}</p>
                        <p className="text-sm" style={{ color: colors.text_secondary }}>Users</p>
                    </div>
                    <div className="relative text-center text-white font-bold text-base h-16 flex items-center justify-center" style={{ width: `${85 - (index * 18)}%` }}>
                        <div className={`absolute inset-0 ${step.color}`} style={{ clipPath: 'polygon(0% 0%, 100% 0%, 92% 100%, 8% 100%)' }}></div>
                        <span className="relative z-10">{step.name}</span>
                    </div>
                    <div className="w-40 text-left pl-6">
                        {isLast ? ( <>
                            <p className="font-bold text-2xl text-green-600">+{((step.users / data[0].users) * 100).toFixed(1)}%</p>
                            <p className="text-sm" style={{ color: colors.text_secondary }}>Total Conversion</p>
                        </>) : (<>
                            <p className="font-bold text-2xl text-red-500">-{dropOff}%</p>
                            <p className="text-sm" style={{ color: colors.text_secondary }}>Drop-off</p>
                        </>)}
                    </div>
                </motion.div>
            )
        })}
    </div>
);


// --- Main Demo Component ---
const FinalDemoPage = () => {
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
  
  const steps = ['Dashboard', 'Map Journey', 'Connect Tools', 'Live Analytics', 'Optimize'];

  const mockJourneys = [
    { id: 1, name: 'SaaS Trial to Paid', customers: 1247, conversionRate: 78, status: 'Healthy', revenue: 47200, healthColor: 'bg-green-500' },
    { id: 2, name: 'E-commerce Checkout', customers: 892, conversionRate: 62, status: 'Needs Attention', revenue: 28400, healthColor: 'bg-amber-500' },
    { id: 3, name: 'Lead Nurturing Funnel', customers: 2341, conversionRate: 45, status: 'Underperforming', revenue: 15600, healthColor: 'bg-red-500' },
  ];

  const touchpoints = [
    { id: 1, name: 'Landing Page', users: 8247, conversionRate: 78, tool: 'Segment', color: 'bg-blue-500', icon: MousePointerClick },
    { id: 2, name: 'Demo Booking', users: 6432, conversionRate: 62, tool: 'Calendly', color: 'bg-teal-500', icon: Calendar },
    { id: 3, name: 'Trial Signup', users: 3987, conversionRate: 57, tool: 'HubSpot', color: 'bg-purple-500', icon: Users },
    { id: 4, name: 'Payment', users: 1834, conversionRate: 80, tool: 'Stripe', color: 'bg-green-500', icon: CreditCard }
  ];

  const integrations = [
      { name: 'Segment', category: 'Analytics', connected: true, description: 'Collect, clean, and control your customer data.' },
      { name: 'Google Analytics', category: 'Analytics', connected: true, description: 'Website traffic & user behavior.' },
      { name: 'Salesforce', category: 'CRM', connected: false, description: 'The world’s #1 CRM platform.' },
      { name: 'HubSpot', category: 'CRM', connected: true, description: 'All-in-one CRM platform.' },
      { name: 'Stripe', category: 'Payment', connected: true, description: 'Online payment processing for internet businesses.' },
      { name: 'Calendly', category: 'Scheduling', connected: true, description: 'Automated scheduling software.' },
  ];

  const activityFeed = [
    { time: '2s ago', event: 'New visitor from Google Ads on Pricing Page', journey: 'SaaS Trial to Paid', type: 'visit' },
    { time: '8s ago', event: 'Payment completed ($49.99) via Stripe', journey: 'SaaS Trial to Paid', type: 'revenue' },
    { time: '15s ago', event: 'Demo booked via Calendly', journey: 'SaaS Trial to Paid', type: 'conversion' },
    { time: '23s ago', event: 'Cart abandoned on E-commerce site', journey: 'E-commerce Checkout', type: 'dropout' },
  ];

  const optimizationInsights = [
      { title: "High Drop-off: Demo Booking to Trial", impact: 'High', description: "Your 38% drop-off rate is 15% above the industry benchmark. This friction point is costing significant conversions.", potential: "+12% Lift", revenue: "+$8.4k/mo" },
      { title: "Opportunity: High-Intent Traffic", impact: 'Medium', description: "Users from your 'Product Hunt' campaign convert 45% higher than average. Consider reallocating ad spend to this channel.", potential: "+8% Lift", revenue: "+$12.1k/mo" },
      { title: "Quick Win: Simplify Payment Form", impact: 'Low', description: "Reducing the number of fields on your checkout page from 9 to 5 has been shown to improve conversion.", potential: "+5% Lift", revenue: "+$4.2k/mo" },
  ];


  // --- RENDER FUNCTIONS FOR EACH STEP ---

  const renderDashboard = () => (
      <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Active Journeys" value={liveMetrics.totalJourneys} icon={Target} color="blue" />
              <StatCard title="Customers Tracked" value={liveMetrics.customersTracked} icon={Users} color="teal" />
              <StatCard title="Avg. Conversion" value={Math.round(liveMetrics.conversionRate)} suffix="%" icon={TrendingUp} color="purple" />
              <StatCard title="Revenue Impact" value={Math.round(liveMetrics.revenue / 1000)} prefix="$" suffix="k" icon={Trophy} color="green" />
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-surface rounded-2xl border" style={{ borderColor: colors.border, boxShadow: '0 4px 12px 0 rgba(0,0,0,0.02)'}}>
              <div className="p-6 border-b flex items-center justify-between" style={{ borderColor: colors.border }}>
                  <h3 className="text-xl font-bold" style={{ color: colors.text_primary }}>Your Journeys</h3>
                  <div className="flex items-center space-x-2">
                      <button className="px-3 py-1.5 border rounded-lg text-sm font-semibold flex items-center space-x-2 hover:bg-slate-50" style={{borderColor: colors.border, color: colors.text_secondary}}>
                          <Filter className="w-4 h-4" /><span>Filter</span>
                      </button>
                  </div>
              </div>
              <div className="divide-y" style={{ borderColor: colors.border }}>
                  {mockJourneys.map(j => (
                      <div key={j.id} className="p-6 grid grid-cols-5 items-center hover:bg-slate-50/50">
                          <div className="col-span-2 flex items-center space-x-4">
                              <div className={`w-2.5 h-2.5 rounded-full ${j.healthColor}`} />
                              <p className="font-bold" style={{color: colors.text_primary}}>{j.name}</p>
                          </div>
                          <div className="text-center font-medium" style={{color: colors.text_secondary}}>{j.customers.toLocaleString()} Customers</div>
                          <div className="text-center font-bold" style={{color: colors.text_primary}}>{j.conversionRate}% Conversion</div>
                          <div className="text-right">
                              <span className={`px-3 py-1 text-xs font-bold rounded-full ${ j.status === 'Healthy' ? 'bg-green-100 text-green-700' : j.status === 'Needs Attention' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>{j.status}</span>
                          </div>
                      </div>
                  ))}
              </div>
          </motion.div>
      </div>
  );

  const renderMapTouchpoints = () => (
      <div className="text-center">
          <h2 className="text-3xl font-bold" style={{ color: colors.text_primary }}>Map Every Step of the Journey</h2>
          <p className="mt-2 max-w-2xl mx-auto" style={{ color: colors.text_secondary }}>Visually build your customer journey, connect data sources for each step, and see how users flow through your entire process.</p>
          <div className="mt-12 flex items-center justify-center py-10">
              {touchpoints.map((tp, i) => (
                  <React.Fragment key={tp.id}>
                      <div className="flex flex-col items-center">
                          <p className="font-semibold text-sm mb-2" style={{color: colors.text_primary}}>{tp.name}</p>
                          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="w-48 h-48 bg-surface rounded-2xl border p-4 flex flex-col justify-center items-center shadow-lg hover:shadow-xl transition-shadow" style={{borderColor: colors.border}}>
                              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${tp.color}`}>
                                  {React.createElement(tp.icon, { className: 'w-8 h-8 text-white' })}
                              </div>
                              <p className="text-2xl font-bold mt-3" style={{color: colors.text_primary}}>{tp.users.toLocaleString()}</p>
                              <p className="text-xs" style={{color: colors.text_secondary}}>Users</p>
                          </motion.div>
                      </div>
                      {i < touchpoints.length - 1 && (
                          <div className="w-32 self-center mt-10">
                              <div className="w-full h-0.5 bg-slate-200 relative">
                                  <ArrowRight className="absolute right-[-12px] top-1/2 -translate-y-1/2 text-slate-400"/>
                                  <div className="absolute inset-0 flex items-center justify-center">
                                      <span className="bg-background px-2 text-sm font-semibold" style={{color: colors.text_secondary}}>{tp.conversionRate}%</span>
                                  </div>
                              </div>
                          </div>
                      )}
                  </React.Fragment>
              ))}
          </div>
      </div>
  );

  const renderConnectTools = () => (
      <div className="space-y-8">
          <div className="text-center">
              <h2 className="text-3xl font-bold" style={{ color: colors.text_primary }}>Integrations Marketplace</h2>
              <p className="mt-2 max-w-2xl mx-auto" style={{ color: colors.text_secondary }}>Connect your entire stack with webhook-based integrations to get a unified view of the customer journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map(i => (
                  <motion.div key={i.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-surface rounded-2xl border p-6 flex flex-col" style={{ borderColor: colors.border }}>
                      <h4 className="font-bold text-lg" style={{ color: colors.text_primary }}>{i.name}</h4>
                      <p className="text-sm flex-grow mt-1" style={{ color: colors.text_secondary }}>{i.description}</p>
                      <button className={`mt-4 w-full py-2 rounded-lg text-sm font-semibold flex items-center justify-center space-x-2 transition-colors ${ i.connected ? 'bg-slate-100 text-slate-500' : 'bg-teal-600 text-white hover:bg-teal-700' }`}>
                          {i.connected ? <><CheckCircle className="w-4 h-4"/><span>Connected</span></> : <span>Connect</span>}
                      </button>
                  </motion.div>
              ))}
          </div>
      </div>
  );

  const renderLiveAnalytics = () => (
      <div className="bg-surface rounded-2xl border p-6" style={{ borderColor: colors.border, boxShadow: '0 4px 12px 0 rgba(0,0,0,0.02)'}}>
          <div className="flex items-center justify-between border-b pb-4 mb-4" style={{borderColor: colors.border}}>
              <h3 className="text-xl font-bold" style={{ color: colors.text_primary }}>Live Activity Stream</h3>
              <div className="flex items-center space-x-2 text-sm font-semibold text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div><span>Live</span>
              </div>
          </div>
          <div className="space-y-3">
              {activityFeed.map((a, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.2 }} className="p-4 grid grid-cols-3 items-center bg-slate-50/70 rounded-lg">
                      <p className="font-medium col-span-2" style={{ color: colors.text_primary }}>{a.event}</p>
                      <div className="text-right">
                          <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${a.type === 'revenue' ? 'bg-green-100 text-green-700' : a.type === 'conversion' ? 'bg-blue-100 text-blue-700' : a.type === 'dropout' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-700'}`}>{a.type}</span>
                          <span className="text-xs ml-3" style={{color: colors.text_secondary}}>{a.time}</span>
                      </div>
                  </motion.div>
              ))}
          </div>
      </div>
  );

  const renderOptimize = () => (
      <div className="space-y-8">
           <div className="text-center">
              <h2 className="text-3xl font-bold" style={{ color: colors.text_primary }}>Analyze & Optimize Your Funnel</h2>
              <p className="mt-2 max-w-2xl mx-auto" style={{ color: colors.text_secondary }}>Identify your biggest drop-off points and get AI-powered insights to boost conversion rates at every step.</p>
          </div>
          <div className="bg-surface rounded-2xl border shadow-lg shadow-slate-200/50" style={{ borderColor: colors.border }}>
            <FunnelChart data={touchpoints} />
          </div>
          <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.text_primary }}>Prioritized Opportunities</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {optimizationInsights.map(oi => (
                      <motion.div key={oi.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-surface rounded-2xl border p-6 space-y-4" style={{ borderColor: colors.border }}>
                          <span className={`px-3 py-1 text-xs font-bold rounded-full ${oi.impact === 'High' ? 'bg-red-100 text-red-700' : oi.impact === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>{oi.impact} Impact</span>
                          <h4 className="font-bold text-lg" style={{ color: colors.text_primary }}>{oi.title}</h4>
                          <p className="text-sm" style={{ color: colors.text_secondary }}>{oi.description}</p>
                          <div className="pt-4 border-t flex items-center justify-between" style={{borderColor: colors.border}}>
                              <p className="font-semibold text-green-600">{oi.potential} <span className="text-slate-500">({oi.revenue})</span></p>
                              <button className="font-bold text-teal-600 text-sm">View &rarr;</button>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </div>
  );

  const getCurrentView = () => {
    switch (currentStep) {
      case 0: return renderDashboard();
      case 1: return renderMapTouchpoints();
      case 2: return renderConnectTools();
      case 3: return renderLiveAnalytics();
      case 4: return renderOptimize();
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen" style={{ background: colors.background }}>
        <div className="bg-surface/80 backdrop-blur-xl border-b z-30 sticky top-0" style={{ borderColor: colors.border }}>
          <div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold" style={{ color: colors.text_primary }}>CustomerPath</h1>
            </div>
            {/* Main Navigation */}
            <div className="absolute left-1/2 -translate-x-1/2">
                <div className="flex space-x-2 p-1 bg-slate-200/70 rounded-lg">
                    {steps.map((step, index) => (
                        <button key={step} onClick={() => setCurrentStep(index)} className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${currentStep === index ? 'bg-surface text-slate-800 shadow-sm' : 'text-slate-600'}`}>
                            {step}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex items-center space-x-5">
                <Bell className="w-6 h-6" style={{ color: colors.text_secondary }} />
                <div className="w-9 h-9 rounded-full bg-slate-200 ring-2 ring-offset-2 ring-teal-500 flex items-center justify-center">
                    <Briefcase className="w-5 h-5" style={{ color: colors.text_secondary }} />
                </div>
            </div>
        </div>
      </div>
      <main className="max-w-screen-2xl mx-auto px-6 py-10">
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

export default FinalDemoPage;