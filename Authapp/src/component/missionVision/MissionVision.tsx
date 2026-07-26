import React, { useState } from 'react';
import { FaBullseye, FaEye, FaTimes, FaArrowRight, FaCheckCircle, FaRocket, FaShieldAlt, FaChartLine } from 'react-icons/fa';

export interface MissionVisionProps {
    className?: string;
}

const MissionVision: React.FC<MissionVisionProps> = ({ className = "" }) => {
    const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');
    const [selectedModal, setSelectedModal] = useState<'mission' | 'vision' | null>(null);

    const missionData = {
        title: "Our Mission",
        subtitle: "Precision Automation & Global Logistics Excellence",
        icon: FaBullseye,
        badgeColor: "from-pink-500 to-rose-600",
        glowColor: "bg-pink-500/20",
        summary: "To empower global enterprises with intelligent, real-time warehouse management software, optimizing inventory flows and maximizing operational accuracy worldwide.",
        details: [
            {
                icon: FaChartLine,
                title: "Real-Time Inventory Intelligence",
                desc: "Instant live tracking across multi-site warehouses with 99.99% stock precision and automated reordering."
            },
            {
                icon: FaRocket,
                title: "Automated Workflow Engine",
                desc: "Streamlined order fulfillment, smart picking routes, and AI-driven stock allocation to eliminate bottlenecks."
            },
            {
                icon: FaShieldAlt,
                title: "Enterprise Uptime & Security",
                desc: "Bank-grade encryption and 99.99% uptime SLA built for high-throughput supply chain environments."
            }
        ],
        quote: "Transforming complex warehouse logistics into effortless, real-time intelligence for ambitious organizations."
    };

    const visionData = {
        title: "Our Vision",
        subtitle: "Pioneering Autonomous & Intelligent Supply Chains",
        icon: FaEye,
        badgeColor: "from-violet-500 to-indigo-600",
        glowColor: "bg-violet-500/20",
        summary: "To become the global gold standard in intelligent warehouse operating systems, driving hyper-automated, AI-powered logistics for the supply chains of tomorrow.",
        details: [
            {
                icon: FaRocket,
                title: "Autonomous Logistics Systems",
                desc: "Direct integration with smart robotics, IoT tracking sensors, and predictive stock forecasting."
            },
            {
                icon: FaChartLine,
                title: "Global Enterprise Scalability",
                desc: "Cloud-native infrastructure scaling seamlessly across millions of SKUs and worldwide logistics hubs."
            },
            {
                icon: FaShieldAlt,
                title: "Sustainable & Ergonomic Design",
                desc: "Human-centered UI paired with paperless workflows to minimize environmental impact and boost worker efficiency."
            }
        ],
        quote: "Creating an interconnected global supply chain ecosystem that operates with zero latency and infinite agility."
    };

    const currentModalData = selectedModal === 'mission' ? missionData : selectedModal === 'vision' ? visionData : null;

    return (
        <div className={`w-full relative z-10 ${className}`}>
            {/* Section Header */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-pink-400 text-xs font-black uppercase tracking-[0.25em] mb-4 shadow-lg backdrop-blur-md">
                    <span>⚡</span> Corporate Purpose
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                    OUR MISSION <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400">&amp; VISION</span>
                </h2>
                <p className="text-slate-400 text-sm max-w-xl mx-auto mt-3 font-medium">
                    Click any card below to open the interactive detailed view of our core strategic directives.
                </p>
            </div>

            {/* Toggle Tabs (Desktop / Mobile switcher) */}
            <div className="flex justify-center mb-10">
                <div className="p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl flex gap-2 shadow-2xl">
                    <button
                        onClick={() => setActiveTab('mission')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                            activeTab === 'mission'
                                ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-600/30'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                        <FaBullseye className="text-sm" />
                        Mission
                    </button>
                    <button
                        onClick={() => setActiveTab('vision')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                            activeTab === 'vision'
                                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                        <FaEye className="text-sm" />
                        Vision
                    </button>
                </div>
            </div>

            {/* Interactive Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Mission Card */}
                <div
                    onClick={() => setSelectedModal('mission')}
                    className={`group cursor-pointer p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 relative overflow-hidden flex flex-col justify-between ${
                        activeTab === 'mission'
                            ? 'bg-slate-900/80 border-pink-500/50 shadow-[0_10px_40px_rgba(236,72,153,0.2)] scale-[1.02]'
                            : 'bg-slate-900/40 border-white/10 hover:border-pink-500/40 hover:bg-slate-900/60'
                    }`}
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-pink-500/20 transition-all duration-500"></div>

                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
                                <FaBullseye className="text-2xl" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-pink-400 bg-pink-500/10 px-3 py-1.5 rounded-full border border-pink-500/20">
                                View Details ➔
                            </span>
                        </div>

                        <h3 className="text-2xl font-black text-white tracking-tight uppercase mb-2 group-hover:text-pink-400 transition-colors">
                            {missionData.title}
                        </h3>
                        <p className="text-xs font-bold text-pink-400/90 tracking-wider uppercase mb-4">
                            {missionData.subtitle}
                        </p>
                        <p className="text-slate-300 text-sm font-medium leading-relaxed mb-6">
                            {missionData.summary}
                        </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                        <span>Click to expand full strategic roadmap</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform text-pink-500" />
                    </div>
                </div>

                {/* Vision Card */}
                <div
                    onClick={() => setSelectedModal('vision')}
                    className={`group cursor-pointer p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 relative overflow-hidden flex flex-col justify-between ${
                        activeTab === 'vision'
                            ? 'bg-slate-900/80 border-purple-500/50 shadow-[0_10px_40px_rgba(168,85,247,0.2)] scale-[1.02]'
                            : 'bg-slate-900/40 border-white/10 hover:border-purple-500/40 hover:bg-slate-900/60'
                    }`}
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all duration-500"></div>

                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                                <FaEye className="text-2xl" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">
                                View Details ➔
                            </span>
                        </div>

                        <h3 className="text-2xl font-black text-white tracking-tight uppercase mb-2 group-hover:text-purple-400 transition-colors">
                            {visionData.title}
                        </h3>
                        <p className="text-xs font-bold text-purple-400/90 tracking-wider uppercase mb-4">
                            {visionData.subtitle}
                        </p>
                        <p className="text-slate-300 text-sm font-medium leading-relaxed mb-6">
                            {visionData.summary}
                        </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                        <span>Click to expand full strategic roadmap</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform text-purple-500" />
                    </div>
                </div>
            </div>

            {/* Interactive On-Click Glass Modal / Popup */}
            {selectedModal && currentModalData && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-2xl animate-fadeIn">
                    <div
                        className="fixed inset-0"
                        onClick={() => setSelectedModal(null)}
                    />
                    
                    <div className="relative w-full max-w-2xl bg-slate-900/90 border border-white/15 rounded-3xl p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl z-10 max-h-[90vh] overflow-y-auto animate-scaleUp">
                        {/* Glow ornament */}
                        <div className={`absolute top-0 right-0 w-80 h-80 ${currentModalData.glowColor} blur-3xl pointer-events-none rounded-full`}></div>

                        {/* Close button */}
                        <button
                            onClick={() => setSelectedModal(null)}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/15 text-slate-300 hover:text-white hover:bg-rose-500 hover:border-rose-500 flex items-center justify-center transition-all duration-300 z-20"
                            aria-label="Close"
                        >
                            <FaTimes size={16} />
                        </button>

                        {/* Header inside modal */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${currentModalData.badgeColor} flex items-center justify-center text-white shadow-xl`}>
                                <currentModalData.icon className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-white uppercase tracking-tight">
                                    {currentModalData.title}
                                </h3>
                                <p className="text-xs font-bold text-pink-400 uppercase tracking-widest mt-0.5">
                                    {currentModalData.subtitle}
                                </p>
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 text-sm text-slate-200 leading-relaxed font-medium">
                            {currentModalData.summary}
                        </div>

                        {/* Key Pillars / Details List */}
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2">
                            <FaCheckCircle className="text-pink-500" /> Strategic Pillars &amp; Key Goals
                        </h4>
                        
                        <div className="space-y-4 mb-8">
                            {currentModalData.details.map((item, idx) => (
                                <div key={idx} className="p-4 rounded-2xl bg-slate-800/60 border border-white/10 hover:border-pink-500/40 transition-all flex gap-4 items-start">
                                    <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20 shrink-0 mt-0.5">
                                        <item.icon size={16} />
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-bold text-white mb-1">{item.title}</h5>
                                        <p className="text-xs text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quote Footer */}
                        <div className="border-t border-white/10 pt-4 text-center">
                            <p className="text-xs italic text-slate-400 font-medium">
                                "{currentModalData.quote}"
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MissionVision;
