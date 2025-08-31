import React, { useState, useEffect } from 'react';
import {
  Users,
  Target,
  CheckCircle,
  TrendingUp,
  Settings,
  Plus,
  ArrowRight,
  Activity,
  Bell,
  BarChart3,
  Zap,
  Webhook,
  Database,
  Link as LinkIcon,
  Gauge,
  Lightbulb,
  FileText,
  Filter,
  Briefcase
} from "lucide-react";

// Helper component for the centered funnel chart
const FunnelStep = ({ value, maxValue, label, dropOff, color, isFirst = false, isLast = false, nextValue }) => {
  const percentageOfMax = (value / maxValue) * 100;
  const nextPercentageOfMax = isLast ? 0 : (nextValue / maxValue) * 100;

  // Calculate the polygon points for the trapezoid shape
  // Points are: top-left, top-right, bottom-right, bottom-left
  // The 'x' coordinates are percentages relative to the parent div's width.
  // We want the current step to be wider than the next, creating the funnel shape.
  const points = `
    ${(100 - percentageOfMax) / 2}% 0%,
    ${100 - (100 - percentageOfMax) / 2}% 0%,
    ${100 - (100 - nextPercentageOfMax) / 2}% 100%,
    ${(100 - nextPercentageOfMax) / 2}% 100%
  `;

  return (
    <div className="flex items-center w-full my-1 relative">
      <div className="text-right w-32 pr-4 flex-shrink-0">
        <div className="font-bold text-2xl text-brand-navy">{value.toLocaleString()}</div>
        <div className="text-xs text-slate-500">Users</div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="relative h-14 flex items-center justify-center">
          <div
            className={`absolute inset-0 ${color} opacity-90`}
            style={{ clipPath: isLast ? `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)` : `polygon(${points})` }} // Simple rectangle for the last step
          ></div>
          <span className="relative text-white font-semibold text-base z-10">{label}</span>
        </div>
      </div>
      {!isLast && (
        <div className="text-left w-32 pl-4 flex-shrink-0">
          <div className="font-bold text-lg text-red-500">-{dropOff}%</div>
          <div className="text-xs text-slate-500">Drop-off</div>
        </div>
      )}
       {isLast && (
        <div className="text-left w-32 pl-4 flex-shrink-0">
          <div className="font-bold text-lg text-green-600">+{(value / maxValue * 100).toFixed(1)}%</div>
          <div className="text-xs text-slate-500">Conversion</div>
        </div>
      )}
    </div>
  );
};


const CustomerPathDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying] = useState(true);
  const [liveMetrics, setLiveMetrics] = useState({
    totalJourneys: 3,
    customersTracked: 12847,
    conversionRate: 67,
    revenue: 114000
  });

  // Auto-advance demo steps
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 4);
    }, 8000); // Changed to 8 seconds for better readability
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Live metrics simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        ...prev,
        customersTracked: prev.customersTracked + Math.floor(Math.random() * 3),
        revenue: prev.revenue + Math.floor(Math.random() * 100)
      }));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    'Dashboard',
    'Journey Map',
    'Integrations',
    'Analyze & Optimize'
  ];

  const mockJourneys = [
    { id: 1, name: 'SaaS Trial to Paid', customers: 8247, conversionRate: 78, status: 'Healthy', health: 'green' },
    { id: 2, name: 'E-commerce Checkout', customers: 4109, conversionRate: 62, status: 'Needs Attention', health: 'amber' },
    { id: 3, name: 'Lead Nurturing', customers: 11231, conversionRate: 45, status: 'Underperforming', health: 'red' }
  ];

  const touchpoints = [
    { id: 1, name: 'Landing Page Visit', visitors: 8247, conversions: 6432, conversionRate: 78, industryAverage: 72, tool: 'Google Analytics', icon: '📱' },
    { id: 2, name: 'Demo Booking', visitors: 6432, conversions: 3987, conversionRate: 62, industryAverage: 75, tool: 'Calendly', icon: '📅' },
    { id: 3, name: 'Trial Signup', visitors: 3987, conversions: 2289, conversionRate: 57, industryAverage: 65, tool: 'HubSpot', icon: '✍️' },
    { id: 4, name: 'Payment Conversion', visitors: 2289, conversions: 1834, conversionRate: 80, industryAverage: 85, tool: 'Stripe', icon: '💳' }
  ];
  
  const integrations = {
    analytics: [
        { name: 'Google Analytics', connected: true, description: 'Website traffic & user behavior.' },
        { name: 'Mixpanel', connected: false, description: 'Advanced product analytics.' },
        { name: 'Plausible', connected: false, description: 'Privacy-friendly analytics.' },
    ],
    crm: [
        { name: 'HubSpot', connected: true, description: 'Contact management & automation.' },
        { name: 'Salesforce', connected: false, description: 'Enterprise CRM platform.' },
    ],
    payment: [
        { name: 'Stripe', connected: true, description: 'Online payment processing.' },
        { name: 'Chargebee', connected: false, description: 'Subscription billing.' },
    ],
    communication: [
        { name: 'Calendly', connected: true, description: 'Automated scheduling.' },
        { name: 'Intercom', connected: false, description: 'Customer messaging platform.' },
    ]
  };
  
  const optimizationInsights = [
      {
        stage: 'Demo Booking → Trial Signup',
        dropoff: 38,
        benchmark: 23,
        impact: 'High',
        recommendation: 'Simplify the trial signup form. Our analysis shows reducing fields from 7 to 4 can significantly decrease friction.',
        potentialLift: '+12%',
        potentialRevenue: 8400,
      },
      {
        stage: 'Trial → Payment',
        dropoff: 20,
        benchmark: 15,
        impact: 'Medium',
        recommendation: 'Add social proof and testimonials to the checkout page to build trust at the point of purchase.',
        potentialLift: '+8%',
        potentialRevenue: 5600,
      }
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 animate-fade-in-up hover:shadow-lg transition-all">
          <div className="flex items-center justify-between"><p className="text-slate-600 text-sm font-medium">Active Journeys</p><Target className="w-6 h-6 text-blue-500" /></div>
          <p className="text-3xl font-bold text-brand-navy mt-2">{liveMetrics.totalJourneys}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 animate-fade-in-up animation-delay-200 hover:shadow-lg transition-all">
          <div className="flex items-center justify-between"><p className="text-slate-600 text-sm font-medium">Customers Tracked</p><Users className="w-6 h-6 text-brand-teal" /></div>
          <p className="text-3xl font-bold text-brand-navy mt-2">{liveMetrics.customersTracked.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 animate-fade-in-up animation-delay-400 hover:shadow-lg transition-all">
          <div className="flex items-center justify-between"><p className="text-slate-600 text-sm font-medium">Avg. Conversion</p><TrendingUp className="w-6 h-6 text-purple-500" /></div>
          <p className="text-3xl font-bold text-brand-navy mt-2">{Math.round(liveMetrics.conversionRate)}%</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 animate-fade-in-up animation-delay-600 hover:shadow-lg transition-all">
          <div className="flex items-center justify-between"><p className="text-slate-600 text-sm font-medium">Revenue Impact</p><Zap className="w-6 h-6 text-green-500" /></div>
          <p className="text-3xl font-bold text-brand-navy mt-2">${Math.round(liveMetrics.revenue / 1000)}k</p>
        </div>
      </div>

      {/* Active Journeys */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 animate-fade-in-up animation-delay-700">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-brand-navy">Your Customer Journeys</h3>
          <button className="bg-brand-teal text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-teal/90 flex items-center space-x-2">
            <Plus className="w-4 h-4" /><span>Create New Journey</span>
          </button>
        </div>
        <div className="divide-y divide-slate-100">
          {mockJourneys.map(journey => (
            <div key={journey.id} className="p-6 hover:bg-slate-50 transition-colors group">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${journey.health === 'green' ? 'bg-green-500' : journey.health === 'amber' ? 'bg-amber-500' : 'bg-red-500'}`}></div>
                  <div>
                    <h4 className="font-semibold text-brand-navy">{journey.name}</h4>
                    <p className="text-slate-600 text-sm">{journey.customers.toLocaleString()} customers</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-navy">{journey.conversionRate}%</div>
                    <div className="text-xs text-slate-500">Conversion</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${journey.health === 'green' ? 'bg-green-100 text-green-700' : journey.health === 'amber' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                    {journey.status}
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-brand-teal transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  const renderJourneyMap = () => (
    <div className="space-y-8">
      {/* Journey Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 animate-fade-in-up">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-brand-navy mb-1">SaaS Trial to Paid Journey</h2>
            <p className="text-slate-600">Visualizing the path from discovery to conversion.</p>
          </div>
          <div className="text-right">
             <div className="text-3xl font-bold text-green-600">A+</div>
             <div className="text-slate-500 text-sm">Journey Health Score</div>
          </div>
        </div>
      </div>

      {/* Touchpoint List */}
      <div className="space-y-4 animate-fade-in-up animation-delay-300">
        {touchpoints.map((tp, index) => {
          const diff = tp.conversionRate - tp.industryAverage;
          const isPositive = diff >= 0;
          return (
            <div key={tp.id} className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-brand-teal/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-xl">{tp.icon}</div>
                        <div>
                            <h4 className="text-lg font-semibold text-brand-navy">{tp.name}</h4>
                            <div className="flex items-center space-x-2 text-sm text-slate-500 mt-1">
                                <Database className="w-4 h-4" />
                                <span>Source: {tp.tool}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-brand-navy">{tp.conversionRate}%</div>
                            <div className="text-xs text-slate-500">Conversion</div>
                        </div>
                        <div className="text-center">
                            <div className={`text-lg font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                {isPositive ? '+' : ''}{diff}%
                            </div>
                            <div className="text-xs text-slate-500 flex items-center space-x-1">
                                <Gauge className="w-3 h-3" />
                                <span>vs. Industry Avg.</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl font-bold text-brand-navy">{tp.visitors.toLocaleString()}</div>
                            <div className="text-xs text-slate-500">Users</div>
                        </div>
                         <div className="text-center">
                            <div className="text-xl font-bold text-red-500">{(tp.visitors - tp.conversions).toLocaleString()}</div>
                            <div className="text-xs text-slate-500">Drop-offs</div>
                        </div>
                    </div>
                </div>
            </div>
          );
        })}
         <div className="flex justify-center pt-4">
            <button className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-50 flex items-center space-x-2">
                <Plus className="w-4 h-4" /><span>Add Touchpoint</span>
            </button>
        </div>
      </div>
    </div>
  );

  const renderIntegrations = () => (
    <div className="space-y-8">
        {/* Header */}
        <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-brand-navy">Integrations Hub</h2>
            <p className="text-slate-600 mt-1">Connect your entire stack to get a unified view of the customer journey.</p>
        </div>

        {/* Integration Categories */}
        {Object.entries(integrations).map(([category, tools], catIndex) => (
            <div key={category} className={`animate-fade-in-up animation-delay-${catIndex * 200}`}>
                <h3 className="text-xl font-semibold text-brand-navy capitalize mb-4">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tools.map(tool => (
                        <div key={tool.name} className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
                            <div>
                                <h4 className="font-semibold text-brand-navy text-lg">{tool.name}</h4>
                                <p className="text-slate-500 text-sm mt-1">{tool.description}</p>
                            </div>
                            <button className={`mt-4 w-full py-2 rounded-lg text-sm font-semibold transition-colors ${
                                tool.connected 
                                ? 'bg-green-100 text-green-700 flex items-center justify-center space-x-2' 
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}>
                                {tool.connected ? <><CheckCircle className="w-4 h-4" /><span>Connected</span></> : 'Connect'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
);
  
  const renderAnalysis = () => (
    <div className="space-y-8">
        {/* Funnel Visualization */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-brand-navy mb-2">Journey Conversion Funnel</h3>
            <p className="text-slate-500 mb-8">Tracking users from initial visit to final conversion.</p>
            <div className="max-w-2xl mx-auto space-y-0"> {/* Centered funnel */}
                <FunnelStep value={8247} maxValue={8247} label="Landing Page" color="bg-blue-500" dropOff={22} nextValue={6432} isFirst />
                <FunnelStep value={6432} maxValue={8247} label="Demo Booking" color="bg-brand-teal" dropOff={38} nextValue={3987} />
                <FunnelStep value={3987} maxValue={8247} label="Trial Signup" color="bg-purple-500" dropOff={20} nextValue={1834} />
                <FunnelStep value={1834} maxValue={8247} label="Payment" color="bg-green-500" isLast />
            </div>
        </div>

        {/* AI-Powered Insights */}
        <div className="animate-fade-in-up animation-delay-300">
            <div className="flex items-center space-x-3 mb-4">
                <Lightbulb className="w-8 h-8 text-amber-500" />
                <h3 className="text-2xl font-semibold text-brand-navy">AI-Powered Optimization Insights</h3>
            </div>
            <div className="space-y-6">
                {optimizationInsights.map((insight, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-semibold text-red-600">Major Drop-off Point</p>
                                <h4 className="text-lg font-semibold text-brand-navy mt-1">{insight.stage}</h4>
                                <p className="text-slate-600 mt-2">Your drop-off rate is <span className="font-bold">{insight.dropoff}%</span>, which is <span className="font-bold">{insight.dropoff - insight.benchmark}%</span> higher than the industry average of {insight.benchmark}%.
                                </p>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700`}>
                                {insight.impact} Impact
                            </div>
                        </div>
                        <div className="mt-4 bg-slate-50/70 rounded-xl p-4 border border-slate-200">
                            <p className="font-semibold text-brand-navy text-sm flex items-center space-x-2">
                                <Zap className="w-4 h-4 text-brand-teal" />
                                <span>AI Recommendation</span>
                            </p>
                            <p className="text-slate-700 text-sm mt-2">{insight.recommendation}</p>
                            <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
                                <div className="text-sm">
                                    <span className="font-semibold text-green-600">Potential Lift: {insight.potentialLift}</span>
                                    <span className="text-slate-500"> (+${insight.potentialRevenue.toLocaleString()}/mo)</span>
                                </div>
                                <button className="bg-brand-teal text-white px-3 py-1 rounded-lg text-xs font-medium hover:bg-brand-teal/90">Implement Task</button>
                            </div>
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
      case 2: return renderIntegrations();
      case 3: return renderAnalysis();
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <header className="bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-teal to-blue-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-brand-navy">CustomerPath</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-slate-500 hover:text-slate-700 cursor-pointer" />
              <Settings className="w-6 h-6 text-slate-500 hover:text-slate-700 cursor-pointer" />
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center ring-2 ring-offset-2 ring-brand-teal">
                <Briefcase className="w-5 h-5 text-slate-600"/>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-2 py-3">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentStep === index
                      ? 'bg-brand-navy text-white shadow'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {step}
                </button>
              ))}
            </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="transition-all duration-500 ease-in-out">
          {getCurrentView()}
        </div>
      </main>
    </div>
  );
};

export default CustomerPathDemo;