import React, { useState, useEffect } from 'react';
import {
  Users,
  Target,
  CheckCircle,
  TrendingUp,
  Settings,
  Plus,
  ArrowRight,
  Zap,
  Webhook,
  Database,
  Lightbulb,
  Briefcase,
  PlusCircle,
  Copy,
  Loader2,
  X,
  MousePointerClick
} from "lucide-react";

// --- NEW VISUAL COMPONENTS ---

// The main card for a touchpoint on the canvas
const TouchpointCard = ({ touchpoint, onConnect }) => {
  const { name, icon, connected, tool, users, conversionRate } = touchpoint;

  return (
    <div className={`w-64 h-48 bg-white rounded-2xl border-2 p-4 flex flex-col justify-between shadow-lg transition-all duration-300 ${connected ? 'border-green-400' : 'border-slate-300 border-dashed'}`}>
      <div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-xl">{icon}</div>
          <h3 className="font-bold text-brand-navy text-md">{name}</h3>
        </div>
      </div>
      {connected ? (
        <div className="animate-fade-in-up">
          <div className="text-center my-2">
            <p className="text-3xl font-bold text-brand-navy">{users.toLocaleString()}</p>
            <p className="text-xs text-slate-500">Users in this stage</p>
          </div>
          <div className="bg-green-50 text-green-700 text-xs font-medium p-2 rounded-md flex items-center justify-center space-x-2">
            <CheckCircle className="w-4 h-4" />
            <span>Connected to {tool}</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
            <p className="text-slate-500 text-sm mb-3">No data source</p>
            <button onClick={onConnect} className="bg-brand-teal text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-brand-teal/90 flex items-center space-x-2">
                <Webhook className="w-4 h-4" />
                <span>Connect Data</span>
            </button>
        </div>
      )}
    </div>
  );
};

// The modal for simulating webhook connection
const ConnectionModal = ({ touchpoint, onClose, onConnected }) => {
    const [isConnecting, setIsConnecting] = useState(true);
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsConnecting(false);
        }, 3000); // Simulate listening for 3 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(`https://api.customerpath.com/wh/cl_123abc_${touchpoint.name.toLowerCase().replace(' ', '')}`);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const finishConnection = () => {
        onConnected();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
                    <X className="w-6 h-6" />
                </button>
                <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-xl">{touchpoint.icon}</div>
                    <div>
                        <h3 className="font-bold text-brand-navy text-lg">Connect: {touchpoint.name}</h3>
                        <p className="text-slate-500 text-sm">Waiting for data via webhook...</p>
                    </div>
                </div>
                
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
                    <p className="text-sm text-slate-600">
                        Copy this webhook URL and paste it into your tool's settings (e.g., Calendly, Stripe) to send us events.
                    </p>
                    <div className="flex items-center space-x-2">
                        <input 
                            type="text" 
                            readOnly 
                            className="text-xs bg-white border border-slate-300 rounded-md p-2 w-full font-mono"
                            value={`https://api.customerpath.com/wh/cl_123...`}
                        />
                        <button onClick={handleCopy} className="p-2 bg-slate-200 hover:bg-slate-300 rounded-md">
                            {isCopied ? <CheckCircle className="w-4 h-4 text-green-600"/> : <Copy className="w-4 h-4 text-slate-600"/>}
                        </button>
                    </div>
                    {isConnecting ? (
                         <div className="flex items-center justify-center space-x-2 text-brand-teal pt-4">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span className="font-semibold">Listening for first event...</span>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center pt-4 animate-fade-in-up">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                                <Zap className="w-6 h-6 text-green-600"/>
                            </div>
                            <p className="font-semibold text-green-700">Event Received!</p>
                            <p className="text-slate-500 text-sm mb-4">Data source connected successfully.</p>
                            <button onClick={finishConnection} className="bg-green-600 text-white w-full py-2 rounded-lg font-semibold">
                                Complete Connection
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// The final, accurate funnel visualization
const FunnelChart = ({ data }) => (
    <div className="w-full max-w-4xl mx-auto py-8">
        {data.map((step, index) => {
            const isLast = index === data.length - 1;
            const dropOff = isLast ? null : Math.round(((step.users - data[index + 1].users) / step.users) * 100);
            
            return(
                <div key={step.id} className="flex items-center justify-center">
                    <div className="w-36 text-right pr-6">
                        <p className="font-bold text-3xl text-brand-navy">{step.users.toLocaleString()}</p>
                        <p className="text-sm text-slate-500">Users</p>
                    </div>
                    
                    <div className="relative text-center text-white font-bold text-lg py-4" style={{ width: `${80 - (index * 15)}%`}}>
                       <div className={`absolute inset-0 ${step.color} opacity-90`} style={{ clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)' }}></div>
                       <span className="relative z-10">{step.name}</span>
                    </div>

                    <div className="w-36 text-left pl-6">
                       {isLast ? (
                           <>
                           <p className="font-bold text-2xl text-green-600">+{((step.users / data[0].users) * 100).toFixed(1)}%</p>
                           <p className="text-sm text-slate-500">Conversion</p>
                           </>
                       ) : (
                           <>
                           <p className="font-bold text-2xl text-red-500">-{dropOff}%</p>
                           <p className="text-sm text-slate-500">Drop-off</p>
                           </>
                       )}
                    </div>
                </div>
            )
        })}
    </div>
);


// --- MAIN DEMO COMPONENT ---

const CustomerPathDemoV2: React.FC = () => {
    const [currentView, setCurrentView] = useState('build');
    const [touchpoints, setTouchpoints] = useState([]);
    const [showModalFor, setShowModalFor] = useState(null);
    
    const allTouchpoints = [
        { id: 1, name: 'Landing Page Visit', icon: '🖱️', connected: false, tool: 'Segment', users: 8247, color: 'bg-blue-500' },
        { id: 2, name: 'Demo Booking', icon: '📅', connected: false, tool: 'Calendly', users: 6432, color: 'bg-teal-500' },
        { id: 3, name: 'Trial Signup', icon: '✍️', connected: false, tool: 'HubSpot', users: 3987, color: 'bg-purple-500' },
        { id: 4, name: 'Payment', icon: '💳', connected: false, tool: 'Stripe', users: 1834, color: 'bg-green-500' }
    ];

    // Demo animation sequence
    useEffect(() => {
        setTouchpoints([]); // Start fresh
        let step = 0;
        const sequence = [
            () => setTouchpoints(prev => [...prev, allTouchpoints[0]]), // Add first card
            () => setShowModalFor(allTouchpoints[0]), // Show modal for first card
            // onConnected callback will trigger the next step
            () => setTouchpoints(prev => [...prev, allTouchpoints[1]]),
            () => setShowModalFor(allTouchpoints[1]),
            () => setTouchpoints(prev => [...prev, allTouchpoints[2]]),
            () => setShowModalFor(allTouchpoints[2]),
            () => setTouchpoints(prev => [...prev, allTouchpoints[3]]),
            () => setShowModalFor(allTouchpoints[3]),
            () => setCurrentView('analyze') // Finally, switch to analytics view
        ];
        
        const runSequence = () => {
            if (step < sequence.length) {
                sequence[step]();
                step++;
            }
        };

        const interval = setInterval(runSequence, 2000); // Step through sequence every 2 seconds
        
        // This is a simplified demo loop; connecting via modal will drive the sequence mostly.
        return () => clearInterval(interval);

    }, []);

    const handleConnect = (touchpoint) => {
        setShowModalFor(touchpoint);
    };

    const handleConnected = () => {
        const connectedId = showModalFor.id;
        setTouchpoints(prev => 
            prev.map(tp => 
                tp.id === connectedId ? { ...tp, connected: true } : tp
            )
        );
        // This would be the place to trigger the next step in a real user-driven flow
    };


    const renderBuildJourney = () => (
        <div className="animate-fade-in-up">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-navy">Build Your Customer Journey</h2>
                <p className="text-slate-600 mt-2">Visually map each step and connect your data sources with simple webhooks.</p>
            </div>
            <div className="flex items-center justify-center p-8 space-x-4">
                {touchpoints.map((tp, index) => (
                    <React.Fragment key={tp.id}>
                        <TouchpointCard touchpoint={tp} onConnect={() => handleConnect(tp)} />
                        {index < touchpoints.length && (
                            <div className="text-slate-300">
                                { (index < allTouchpoints.length - 1) && touchpoints.length > index + 1 ? <ArrowRight size={32}/> : <PlusCircle size={32} className="cursor-pointer hover:text-brand-teal"/> }
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );

    const renderAnalyzeFunnel = () => (
        <div className="animate-fade-in-up">
            <div className="text-center mb-4">
                <h2 className="text-3xl font-bold text-brand-navy">Journey Conversion Funnel</h2>
                <p className="text-slate-600 mt-2">Tracking users from initial visit to final conversion.</p>
            </div>
            <FunnelChart data={allTouchpoints} />

             {/* AI Insights remain a strong feature */}
            <div className="mt-12 max-w-4xl mx-auto">
                 <div className="flex items-center space-x-3 mb-4">
                    <Lightbulb className="w-8 h-8 text-amber-500" />
                    <h3 className="text-2xl font-semibold text-brand-navy">AI-Powered Optimization Insights</h3>
                </div>
                 <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <h4 className="font-semibold text-brand-navy">Opportunity: Demo Booking → Trial Signup Drop-off</h4>
                    <p className="text-slate-600 mt-2">Your drop-off rate of 38% is significantly higher than the 23% industry average. This indicates high friction.</p>
                    <div className="mt-4 bg-slate-50/70 rounded-xl p-4 border border-slate-200">
                        <p className="font-semibold text-brand-navy text-sm flex items-center space-x-2">
                           <Zap className="w-4 h-4 text-brand-teal" />
                           <span>AI Recommendation</span>
                        </p>
                        <p className="text-slate-700 text-sm mt-2">Simplify the trial signup form. Reducing fields from 7 to 4 could increase signups by an estimated 12%.</p>
                    </div>
                </div>
            </div>
        </div>
    );
    

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
             <header className="bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-brand-teal to-blue-600 rounded-xl flex items-center justify-center">
                            <Target className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-brand-navy">CustomerPath</h1>
                    </div>
                     <div className="flex space-x-2 p-1 bg-slate-200 rounded-lg">
                        <button onClick={() => setCurrentView('build')} className={`px-4 py-1.5 rounded-md text-sm font-semibold ${currentView === 'build' ? 'bg-white text-brand-navy shadow' : 'text-slate-600'}`}>
                            1. Build Journey
                        </button>
                        <button onClick={() => setCurrentView('analyze')} className={`px-4 py-1.5 rounded-md text-sm font-semibold ${currentView === 'analyze' ? 'bg-white text-brand-navy shadow' : 'text-slate-600'}`}>
                            2. Analyze Funnel
                        </button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center ring-2 ring-offset-2 ring-brand-teal">
                           <Briefcase className="w-5 h-5 text-slate-600"/>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                 {currentView === 'build' ? renderBuildJourney() : renderAnalyzeFunnel()}
            </main>
            
            {showModalFor && <ConnectionModal touchpoint={showModalFor} onClose={() => setShowModalFor(null)} onConnected={handleConnected} />}
        </div>
    );
};

export default CustomerPathDemoV2;