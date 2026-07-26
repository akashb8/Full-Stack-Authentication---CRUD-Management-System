import React from 'react';
import MissionVision from '../missionVision/MissionVision';

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 px-8 py-20 relative overflow-hidden">
            {/* Background Aesthetic Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-600/10 blur-[140px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[140px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-pink-500 text-[10px] font-black uppercase tracking-[0.3em]">
                        The SkyMes WMS Standard
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
                        REDEFINING LOGISTICS &amp; <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                            WAREHOUSE AUTOMATION
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed tracking-tight">
                        SkyMes WMS is an enterprise-grade warehouse management ecosystem, merging real-time inventory precision with smart automated logistics workflows.
                    </p>
                </div>

                {/* Interactive Mission & Vision Component (View On Click) */}
                <div className="mb-24">
                    <MissionVision />
                </div>

                {/* Values Section */}
                <div className="border-t border-white/5 pt-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div>
                            <h4 className="text-4xl font-black text-white mb-2 tracking-tighter">100%</h4>
                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Transparency</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-black text-white mb-2 tracking-tighter">24/7</h4>
                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Support Hub</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-black text-white mb-2 tracking-tighter">Global</h4>
                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Network</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-black text-white mb-2 tracking-tighter">Elite</h4>
                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Resources</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
