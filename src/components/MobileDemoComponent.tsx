import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Target, BarChart2, Activity, Webhook,
  CreditCard, MousePointerClick, Calendar, TrendingUp
} from "lucide-react";

const MobileDemoComponent: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const journeySteps = [
    { id: 1, name: 'Landing Page', users: 8247, color: 'blue' },
    { id: 2, name: 'Demo Booking', users: 6432, color: 'teal' },
    { id: 3, name: 'Trial Signup', users: 3987, color: 'purple' },
    { id: 4, name: 'Payment', users: 1834, color: 'green' }
  ];

  const steps = [
    { name: 'Dashboard', icon: BarChart2 },
    { name: 'Journey Map', icon: Target },
    { name: 'Connect Tools', icon: Webhook },
    { name: 'Live Events', icon: Activity }
  ];

  useEffect(() => {
    let cycleCount = 0;
    const maxFastCycles = 2;
    
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 4);
      cycleCount++;
    }, cycleCount < maxFastCycles ? 3000 : 6000);
    
    return () => clearInterval(interval);
  }, []);

  // DASHBOARD - Mobile Analytics
  const renderMobileDashboard = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="text-2xl font-bold text-gray-900">8.2k</div>
          <div className="text-gray-600 text-sm">Visitors</div>
          <div className="text-green-600 text-xs font-medium">+12%</div>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
          <div className="text-2xl font-bold text-gray-900">4</div>
          <div className="text-gray-600 text-sm">Journeys</div>
          <div className="text-green-600 text-xs font-medium">+3</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <div className="text-2xl font-bold text-gray-900">22%</div>
          <div className="text-gray-600 text-sm">Conversion</div>
          <div className="text-green-600 text-xs font-medium">+8%</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="text-2xl font-bold text-gray-900">$47k</div>
          <div className="text-gray-600 text-sm">Revenue</div>
          <div className="text-green-600 text-xs font-medium">+23%</div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="font-semibold text-gray-900 mb-3">Top Performing Journey</h3>
        <div className="space-y-2">
          {journeySteps.slice(0, 3).map((step, i) => {
            const conversionRate = i === 0 ? 100 : Math.round((step.users / journeySteps[0].users) * 100);
            
            return (
              <div key={step.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 text-sm">{step.name}</span>
                    <p className="text-gray-600 text-xs">{(step.users / 1000).toFixed(1)}k users</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">{conversionRate}%</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  // JOURNEY MAP - Mobile Visual Builder
  const renderMobileJourneyMap = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">Journey Builder</h3>
          <button className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-medium">
            + Add Step
          </button>
        </div>

        <div className="space-y-3">
          {journeySteps.map((step, i) => (
            <div key={step.id}>
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{step.name}</h4>
                      <p className="text-gray-600 text-sm">{(step.users / 1000).toFixed(1)}k users</p>
                    </div>
                  </div>
                  <button className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm">
                    Edit
                  </button>
                </div>
              </div>
              
              {i < journeySteps.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="bg-red-100 px-3 py-1 rounded-full">
                    <span className="text-red-600 font-medium text-sm">
                      -{Math.round((1 - (journeySteps[i + 1].users / step.users)) * 100)}% drop
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-xl font-bold text-green-600">22%</p>
            <p className="text-gray-700 text-sm">Conversion Rate</p>
          </div>
          <div>
            <p className="text-xl font-bold text-blue-600">$47k</p>
            <p className="text-gray-700 text-sm">Revenue</p>
          </div>
        </div>
      </div>
    </div>
  );

  // CONNECT TOOLS - Mobile Integration View
  const renderMobileConnectTools = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">Connected Tools</h3>
          <button className="bg-teal-500 text-white px-3 py-2 rounded-lg text-sm font-medium">
            + Add
          </button>
        </div>

        <div className="space-y-3">
          {[
            { name: 'Calendly', type: 'Demo Bookings', events: '247 events' },
            { name: 'Stripe', type: 'Payments', events: '89 events' },
            { name: 'HubSpot', type: 'Forms', events: '156 events' }
          ].map((tool, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-teal-500 rounded-lg flex items-center justify-center">
                  <Webhook className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">{tool.name}</h4>
                  <p className="text-gray-600 text-xs">{tool.type}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-green-600 text-xs font-medium">Active</span>
                </div>
                <p className="text-gray-500 text-xs">{tool.events}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="font-medium text-gray-900 mb-2">Webhook URL</h3>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
          <div className="font-mono text-xs text-gray-700 break-all">
            https://api.customerpath.com/webhook/abc123
          </div>
        </div>
      </div>
    </div>
  );

  // LIVE EVENTS - Mobile Activity Feed
  const renderMobileLiveEvents = () => (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="font-bold text-gray-900 mb-4">Live Customer Events</h3>
      
      <div className="space-y-3">
        {[
          { time: '2s ago', event: 'Demo booked', customer: 'sarah@techcorp.com', type: 'conversion' },
          { time: '8s ago', event: 'Payment completed', customer: 'mike@startup.io', type: 'revenue', value: '$49' },
          { time: '15s ago', event: 'Trial signup', customer: 'jessica@scale.com', type: 'conversion' },
          { time: '31s ago', event: 'Demo completed', customer: 'david@growth.co', type: 'conversion' },
          { time: '45s ago', event: 'Landing visit', customer: 'emma@business.net', type: 'visit' }
        ].map((event, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${
                event.type === 'revenue' ? 'bg-green-500' :
                event.type === 'conversion' ? 'bg-blue-500' : 'bg-gray-400'
              }`} />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-gray-900 text-sm truncate">{event.event}</p>
                <p className="text-gray-600 text-xs truncate">{event.customer}</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              {event.value && (
                <p className="font-bold text-green-600 text-sm">{event.value}</p>
              )}
              <p className="text-gray-500 text-xs">{event.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const getCurrentMobileView = () => {
    switch (currentStep) {
      case 0: return renderMobileDashboard();
      case 1: return renderMobileJourneyMap();
      case 2: return renderMobileConnectTools();
      case 3: return renderMobileLiveEvents();
      default: return renderMobileDashboard();
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Mobile Header */}
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-teal-500 rounded-lg flex items-center justify-center">
              <Target className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold text-gray-900">CustomerPath</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-600 text-xs font-medium">Live</span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="bg-white border-b border-gray-200 px-4 py-2">
        <div className="text-center mb-2">
          <span className="text-lg font-bold text-gray-900">{steps[currentStep].name}</span>
        </div>
        <div className="flex justify-center space-x-1">
          {steps.map((step, index) => (
            <div
              key={step.name}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentStep === index
                  ? 'bg-blue-500'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Content */}
      <div className="p-4 h-80 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {getCurrentMobileView()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MobileDemoComponent;