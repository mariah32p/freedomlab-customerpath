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
  Calendar
} from "lucide-react";

const DemoPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying] = useState(true);
  const [celebrationVisible, setCelebrationVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<any>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [liveMetrics, setLiveMetrics] = useState({
    totalCustomers: 12847,
    activeJourneys: 12,
    conversionRate: 67,
    revenue: 114000
  });

  // Auto-advance demo steps
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        const next = (prev + 1) % 6;
        // Show modal for certain steps
        if (next === 1) {
          setTimeout(() => showJourneyDetailModal(), 2000);
        } else if (next === 2) {
          setTimeout(() => showJourneyBuilderModal(), 2500);
        } else if (next === 4) {
          setTimeout(() => showConversionModal(), 2000);
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
        totalCustomers: prev.totalCustomers + Math.floor(Math.random() * 3),
        activeJourneys: prev.activeJourneys,
        conversionRate: Math.max(60, Math.min(75, prev.conversionRate + (Math.random() - 0.5) * 2)),
        revenue: prev.revenue + Math.floor(Math.random() * 500)
      }));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Celebration effect
  useEffect(() => {
    if (currentStep === 4) {
      setCelebrationVisible(true);
      const timer = setTimeout(() => setCelebrationVisible(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  // Typing animation effect
  useEffect(() => {
    if (!isTyping) return;
    
    const text = "Just upgraded to Pro plan! 🎉 Ready to scale our customer journey optimization with unlimited maps and AI insights.";
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 50);
    
    return () => clearInterval(typeInterval);
  }, [isTyping]);

  const showJourneyDetailModal = () => {
    setModalContent({
      type: 'journey-detail',
      title: 'Analyzing Journey Performance',
      content: 'Let me show you the detailed analytics for our e-commerce funnel. We can see exactly where customers are dropping off and identify optimization opportunities.'
    });
    setShowModal(true);
    setTimeout(() => setShowModal(false), 4000);
  };

  const showJourneyBuilderModal = () => {
    setModalContent({
      type: 'journey-builder',
      title: 'Building a New Customer Journey',
      content: 'Here\'s how easy it is to create custom customer journey maps. Each touchpoint is carefully mapped to track the complete customer experience.'
    });
    setShowModal(true);
    setTimeout(() => setShowModal(false), 4500);
  };

  const showConversionModal = () => {
    setModalContent({
      type: 'conversion',
      title: 'Customer Conversion Success!',
      content: 'A customer just upgraded to our Pro plan! Watch how the system automatically tracks this conversion and updates our analytics.'
    });
    setShowModal(true);
    setIsTyping(true);
    setTypedText('');
    setTimeout(() => setShowModal(false), 8000);
  };

  const steps = [
    'Dashboard',
    'Journey Analytics',
    'Visual Builder',
    'Live Events',
    'Conversion Success',
    'Growth Insights'
  ];

  const mockJourneys = [
    {
      id: 1,
      name: 'E-commerce Checkout',
      type: 'conversion',
      customers: 1247,
      conversionRate: 78,
      status: 'active',
      lastUpdated: '2 hours ago',
      revenue: 47200,
      stages: 4
    },
    {
      id: 2,
      name: 'SaaS Onboarding',
      type: 'retention',
      customers: 892,
      conversionRate: 62,
      status: 'active',
      lastUpdated: '1 day ago',
      revenue: 28400,
      stages: 5
    },
    {
      id: 3,
      name: 'Content Marketing',
      type: 'acquisition',
      customers: 2341,
      conversionRate: 45,
      status: 'optimizing',
      lastUpdated: '3 days ago',
      revenue: 15600,
      stages: 3
    }
  ];

  const journeyStages = [
    {
      id: 1,
      name: 'Landing Page',
      visitors: 8247,
      conversions: 6432,
      conversionRate: 78,
      revenue: 0,
      color: 'blue'
    },
    {
      id: 2,
      name: 'Product Demo',
      visitors: 6432,
      conversions: 3987,
      conversionRate: 62,
      revenue: 0,
      color: 'teal'
    },
    {
      id: 3,
      name: 'Trial Signup',
      visitors: 3987,
      conversions: 2289,
      conversionRate: 57,
      revenue: 0,
      color: 'purple'
    },
    {
      id: 4,
      name: 'Paid Conversion',
      visitors: 2289,
      conversions: 1834,
      conversionRate: 80,
      revenue: 114750,
      color: 'green'
    }
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 animate-fade-in-up hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm font-medium">Active Journeys</p>
              <p className="text-3xl font-bold text-blue-700">{liveMetrics.activeJourneys}</p>
            </div>
            <Target className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-brand-teal/10 to-brand-teal/20 p-6 rounded-2xl border border-brand-teal/30 animate-fade-in-up animation-delay-200 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-brand-teal text-sm font-medium">Customers Tracked</p>
              <p className="text-3xl font-bold text-brand-teal">{liveMetrics.totalCustomers.toLocaleString()}</p>
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
            <h3 className="text-xl font-semibold text-brand-navy">Active Customer Journeys</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-600">Live tracking</span>
            </div>
          </div>
        </div>
        <div className="divide-y divide-slate-100">
          {mockJourneys.map((journey, index) => (
            <div key={journey.id} className="p-6 hover:bg-slate-50 transition-colors duration-200 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 ${
                    journey.type === 'conversion' ? 'bg-blue-100' :
                    journey.type === 'retention' ? 'bg-brand-teal/10' :
                    'bg-purple-100'
                  }`}>
                    {journey.type === 'conversion' ? (
                      <Target className="w-6 h-6 text-blue-600" />
                    ) : journey.type === 'retention' ? (
                      <Users className="w-6 h-6 text-brand-teal" />
                    ) : (
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy">{journey.name}</h4>
                    <p className="text-slate-600 text-sm">{journey.customers.toLocaleString()} customers • {journey.stages} stages</p>
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

  const renderJourneyAnalytics = () => (
    <div className="space-y-8">
      {/* Journey Header */}
      <div className="bg-gradient-to-r from-brand-navy to-brand-purple rounded-2xl p-8 text-white animate-fade-in-up relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">E-commerce Checkout Journey</h2>
              <p className="text-blue-100 text-lg">Real-time funnel analysis • Updated 3 minutes ago</p>
              <div className="flex items-center space-x-4 mt-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Live tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-200" />
                  <span className="text-sm">8,247 customers this week</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-brand-teal">67%</div>
              <div className="text-blue-100">Overall Conversion</div>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Funnel */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden animate-fade-in-up animation-delay-300 hover:shadow-xl transition-all duration-300">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-brand-navy">Customer Journey Funnel</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-brand-teal text-white rounded-lg text-sm font-medium hover:bg-brand-teal/90 transition-colors">Export</button>
              <button className="px-3 py-1 border border-slate-300 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">Share</button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {journeyStages.map((stage, index) => (
              <div key={stage.id} className="relative">
                {index < journeyStages.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-brand-teal to-purple-400"></div>
                )}
                <div className={`flex items-center justify-between p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-102 ${
                  stage.color === 'blue' ? 'bg-blue-50 border-blue-200 hover:border-blue-300' :
                  stage.color === 'teal' ? 'bg-brand-teal/10 border-brand-teal/30 hover:border-brand-teal/50' :
                  stage.color === 'purple' ? 'bg-purple-50 border-purple-200 hover:border-purple-300' :
                  'bg-green-50 border-green-200 hover:border-green-300'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 ${
                      stage.color === 'blue' ? 'bg-blue-500' :
                      stage.color === 'teal' ? 'bg-brand-teal' :
                      stage.color === 'purple' ? 'bg-purple-500' :
                      'bg-green-500'
                    }`}>
                      <span className="text-white text-xl font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-navy mb-1">{stage.name}</h4>
                      <p className="text-slate-600">{stage.visitors.toLocaleString()} visitors</p>
                      {stage.revenue > 0 && (
                        <p className="text-green-600 font-semibold">${(stage.revenue / 1000).toFixed(0)}k revenue</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-brand-navy mb-2">
                      {stage.conversionRate}%
                    </div>
                    <div className="text-slate-500 text-sm">conversion rate</div>
                    <div className="text-slate-600 text-sm mt-1">
                      {stage.conversions.toLocaleString()} converted
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* AI Insights */}
          <div className="mt-8 bg-gradient-to-r from-brand-teal/10 to-blue-50 rounded-xl p-6 border border-brand-teal/20 hover:shadow-lg transition-all duration-300">
            <h4 className="font-bold text-brand-navy mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-brand-teal" />
              AI-Powered Insights
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white/70 p-4 rounded-lg hover:bg-white transition-colors duration-200">
                <p className="font-semibold text-brand-navy mb-1">🎯 Optimization Opportunity</p>
                <p className="text-slate-600">Improve product demo conversion by estimated 15% with interactive elements</p>
              </div>
              <div className="bg-white/70 p-4 rounded-lg hover:bg-white transition-colors duration-200">
                <p className="font-semibold text-brand-navy mb-1">📈 Growth Lever</p>
                <p className="text-slate-600">Landing page performs best - consider increasing ad spend by 25%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderJourneyBuilder = () => (
    <div className="space-y-8">
      {/* Builder Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-fade-in-up hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-brand-navy">Visual Journey Builder</h3>
          <button className="bg-brand-teal text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-teal/90 transition-all duration-200 transform hover:scale-105">
            Save Journey
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Journey Name</label>
            <input 
              type="text" 
              value="Mobile App Onboarding"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-all duration-200"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Journey Type</label>
            <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-all duration-200">
              <option>User Onboarding</option>
              <option>Purchase Funnel</option>
              <option>Retention Flow</option>
            </select>
          </div>
        </div>
      </div>

      {/* Journey Builder Canvas */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-fade-in-up animation-delay-300 hover:shadow-xl transition-all duration-300">
        <h4 className="text-lg font-semibold text-brand-navy mb-6">Build Your Customer Touchpoints</h4>
        
        <div className="space-y-4">
          {[
            { title: 'App Download', description: 'Customer downloads mobile app from store', status: 'building', icon: '📱', metrics: '2,847 downloads' },
            { title: 'Account Creation', description: 'Customer creates account with email/social', status: 'planned', icon: '👤', metrics: '1,923 signups' },
            { title: 'Profile Setup', description: 'Complete profile and preferences', status: 'planned', icon: '⚙️', metrics: '1,456 completed' },
            { title: 'First Purchase', description: 'Customer completes first transaction', status: 'planned', icon: '🛒', metrics: '892 conversions' },
            { title: 'Feature Discovery', description: 'Customer explores key app features', status: 'planned', icon: '🔍', metrics: '1,234 engaged' }
          ].map((touchpoint, index) => (
            <div key={index} className={`p-4 rounded-xl border-2 border-dashed transition-all duration-300 hover:shadow-md hover:scale-102 ${
              touchpoint.status === 'building' ? 'border-brand-teal bg-brand-teal/5 shadow-lg' : 'border-slate-200 bg-slate-50 hover:border-brand-teal/50'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{touchpoint.icon}</div>
                  <div>
                    <span className="font-medium text-brand-navy">{touchpoint.title}</span>
                    <p className="text-slate-600 text-sm">{touchpoint.description}</p>
                    <p className="text-brand-teal text-xs font-medium">{touchpoint.metrics}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {touchpoint.status === 'building' && (
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-brand-teal rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-brand-teal rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-brand-teal rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          <button className="w-full p-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 hover:border-brand-teal hover:text-brand-teal hover:bg-brand-teal/5 transition-all duration-200 flex items-center justify-center space-x-2 group">
            <Plus className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span>Add Customer Touchpoint</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderLiveEvents = () => (
    <div className="space-y-8">
      {/* Live Events Header */}
      <div className="bg-gradient-to-r from-brand-teal to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden animate-fade-in-up">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative">
          <h2 className="text-3xl font-bold mb-2">Live Customer Activity 📊</h2>
          <p className="text-brand-teal/20 text-lg mb-4">Real-time tracking across all your customer journeys</p>
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
            { time: '2 sec ago', event: 'New customer landed on homepage', user: 'Anonymous Visitor', journey: 'E-commerce Checkout', stage: 'Landing Page', type: 'visit' },
            { time: '8 sec ago', event: 'Customer completed trial signup', user: 'sarah.m@techcorp.com', journey: 'SaaS Onboarding', stage: 'Trial Signup', type: 'conversion' },
            { time: '15 sec ago', event: 'Customer watched product demo', user: 'Anonymous Visitor', journey: 'E-commerce Checkout', stage: 'Product Demo', type: 'engagement' },
            { time: '23 sec ago', event: 'Customer upgraded to Pro plan', user: 'mike.r@startup.io', journey: 'SaaS Onboarding', stage: 'Paid Conversion', type: 'revenue' },
            { time: '31 sec ago', event: 'New customer from Google Ads', user: 'Anonymous Visitor', journey: 'Content Marketing', stage: 'Landing Page', type: 'visit' },
            { time: '45 sec ago', event: 'Customer completed purchase', user: 'emily.j@company.com', journey: 'E-commerce Checkout', stage: 'Paid Conversion', type: 'revenue' },
            { time: '52 sec ago', event: 'Customer started trial signup', user: 'Anonymous Visitor', journey: 'SaaS Onboarding', stage: 'Trial Signup', type: 'engagement' }
          ].map((activity, index) => (
            <div key={index} className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-102 ${
              activity.type === 'revenue' ? 'bg-green-50 border border-green-200' :
              activity.type === 'conversion' ? 'bg-brand-teal/10 border border-brand-teal/30' :
              activity.type === 'engagement' ? 'bg-blue-50 border border-blue-200' :
              'bg-slate-50 border border-slate-200'
            }`}>
              <div className={`w-3 h-3 rounded-full mt-2 ${
                activity.type === 'revenue' ? 'bg-green-500 animate-pulse' :
                activity.type === 'conversion' ? 'bg-brand-teal animate-pulse' :
                activity.type === 'engagement' ? 'bg-blue-500' :
                'bg-slate-400'
              }`}></div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-brand-navy">{activity.event}</p>
                  <span className="text-xs text-slate-500">{activity.time}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-slate-600">
                  <span>👤 {activity.user}</span>
                  <span>📍 {activity.journey}</span>
                  <span>🎯 {activity.stage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderConversionSuccess = () => (
    <div className="space-y-8">
      {/* Celebration Header */}
      <div className="bg-gradient-to-r from-green-400 via-brand-teal to-blue-500 rounded-2xl p-8 text-white relative overflow-hidden animate-fade-in-up">
        {celebrationVisible && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random()}s`
                }}
              ></div>
            ))}
          </div>
        )}
        <div className="relative text-center">
          <Trophy className="w-16 h-16 text-yellow-300 mx-auto mb-4 animate-pulse" />
          <h2 className="text-4xl font-bold mb-2">Customer Converted! 🎉</h2>
          <p className="text-green-100 text-lg">TechCorp just upgraded to Pro plan</p>
        </div>
      </div>

      {/* Conversion Details */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-fade-in-up animation-delay-300 hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl font-semibold text-brand-navy mb-6">Conversion Event Details</h3>
        
        <div className="space-y-6">
          <div className="bg-green-50 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h4 className="font-semibold text-green-800">Pro Plan Upgrade - SUCCESS! ✅</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-green-700 mb-2"><strong>Customer:</strong> TechCorp (sarah.m@techcorp.com)</p>
                <p className="text-green-700 mb-2"><strong>Journey:</strong> SaaS Onboarding</p>
                <p className="text-green-700 mb-2"><strong>Time in Funnel:</strong> 4 days</p>
              </div>
              <div>
                <p className="text-green-700 mb-2"><strong>Plan:</strong> Basic → Pro</p>
                <p className="text-green-700 mb-2"><strong>Revenue:</strong> +$49/month</p>
                <p className="text-green-700 mb-2"><strong>LTV Impact:</strong> +$588/year</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-green-200 mt-4 hover:shadow-md transition-all duration-200">
              <div className="flex items-start space-x-3">
                <MessageSquare className="w-5 h-5 text-green-500 mt-0.5" />
                <div className="flex-1">
                  {isTyping ? (
                    <p className="text-slate-700 text-sm">{typedText}<span className="animate-pulse">|</span></p>
                  ) : (
                    <p className="text-slate-700 text-sm">Just upgraded to Pro plan! 🎉 Ready to scale our customer journey optimization with unlimited maps and AI insights.</p>
                  )}
                  <p className="text-slate-500 text-xs mt-1">Customer feedback • Just now</p>
                </div>
              </div>
            </div>
          </div>

          {/* Journey Path Taken */}
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300">
            <h4 className="font-semibold text-blue-800 mb-4">🛤️ Customer Journey Path</h4>
            <div className="space-y-3">
              {[
                { step: 'Landing Page Visit', time: '4 days ago', status: 'completed' },
                { step: 'Product Demo View', time: '3 days ago', status: 'completed' },
                { step: 'Trial Signup', time: '3 days ago', status: 'completed' },
                { step: 'Feature Exploration', time: '2 days ago', status: 'completed' },
                { step: 'Pro Plan Upgrade', time: 'Just now', status: 'completed' }
              ].map((step, index) => (
                <div key={index} className="flex items-center space-x-3 hover:bg-blue-100 p-2 rounded-lg transition-colors duration-200">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-blue-700 text-sm flex-1">{step.step}</span>
                  <span className="text-blue-600 text-xs">{step.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Analysis */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300">
            <h4 className="font-semibold text-purple-800 mb-3">📊 Conversion Impact</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-700">+$588</div>
                <div className="text-purple-600">Annual Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-700">4 days</div>
                <div className="text-purple-600">Time to Convert</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-700">5</div>
                <div className="text-purple-600">Touchpoints</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGrowthInsights = () => (
    <div className="space-y-8">
      {/* Insights Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-fade-in-up hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-brand-navy">Growth Insights & Optimization</h3>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">Last 30 days</button>
            <button className="px-4 py-2 bg-brand-teal text-white rounded-lg text-sm font-medium hover:bg-brand-teal/90 transition-colors">This quarter</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <div className="text-sm text-slate-600">Customer Churn Rate</div>
            <div className="text-xs text-purple-600 mt-1">↘ significant improvement</div>
          </div>
        </div>
      </div>

      {/* Top Performing Journeys */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-fade-in-up animation-delay-300 hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl font-semibold text-brand-navy mb-6">Top Performing Customer Journeys</h3>
        
        <div className="space-y-4">
          {[
            { name: 'E-commerce Checkout', conversion: 78, revenue: 47200, improvement: '+12%', rank: 1 },
            { name: 'SaaS Onboarding', conversion: 62, revenue: 28400, improvement: '+8%', rank: 2 },
            { name: 'Content Marketing', conversion: 45, revenue: 15600, improvement: '+15%', rank: 3 }
          ].map((journey) => (
            <div key={journey.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 hover:scale-102 transition-all duration-200">
              <div className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                  journey.rank === 1 ? 'bg-yellow-500' :
                  journey.rank === 2 ? 'bg-slate-400' :
                  'bg-amber-600'
                }`}>
                  {journey.rank}
                </div>
                <span className="font-medium text-brand-navy">{journey.name}</span>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="text-center">
                  <div className="font-bold text-brand-teal">{journey.conversion}%</div>
                  <div className="text-slate-500">Conversion</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-green-600">${(journey.revenue / 1000).toFixed(0)}k</div>
                  <div className="text-slate-500">Revenue</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-purple-600">{journey.improvement}</div>
                  <div className="text-slate-500">Growth</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optimization Opportunities */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-fade-in-up animation-delay-500 hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl font-semibold text-brand-navy mb-6">AI-Powered Optimization Opportunities</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-brand-teal/10 to-brand-teal/20 rounded-xl p-6 border border-brand-teal/30 hover:shadow-lg transition-all duration-300">
            <h4 className="font-semibold text-brand-teal mb-3">🎯 High Impact Opportunity</h4>
            <p className="text-brand-navy font-medium mb-2">Optimize Product Demo Stage</p>
            <p className="text-slate-600 text-sm mb-4">
              Adding interactive elements to your product demo could increase conversion by an estimated 15-20%.
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
        return renderDashboard();
      case 1:
        return renderJourneyAnalytics();
      case 2:
        return renderJourneyBuilder();
      case 3:
        return renderLiveEvents();
      case 4:
        return renderConversionSuccess();
      case 5:
        return renderGrowthInsights();
      default:
        return renderDashboard();
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
                  <span className="text-slate-500 text-sm">Analytics Dashboard</span>
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
                  {modalContent?.type === 'conversion' ? (
                    <Trophy className="w-5 h-5 text-white" />
                  ) : modalContent?.type === 'journey-builder' ? (
                    <Plus className="w-5 h-5 text-white" />
                  ) : (
                    <Eye className="w-5 h-5 text-white" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-brand-navy">{modalContent?.title}</h3>
              </div>
              <p className="text-slate-600 mb-6">{modalContent?.content}</p>
              
              {modalContent?.type === 'conversion' && (
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <img 
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                      alt="Customer"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-medium text-green-800">TechCorp Customer</span>
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Just now</span>
                  </div>
                  {isTyping ? (
                    <p className="text-green-700 text-sm">{typedText}<span className="animate-pulse">|</span></p>
                  ) : (
                    <p className="text-green-700 text-sm">Just upgraded to Pro plan! 🎉 Ready to scale our customer journey optimization with unlimited maps and AI insights.</p>
                  )}
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