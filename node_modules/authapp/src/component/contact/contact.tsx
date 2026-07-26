import React from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 px-8 py-20 relative overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-600/5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-pink-500 text-[10px] font-black uppercase tracking-[0.3em]">
                        Get In Touch
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
                        LET'S START A <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                            CONVERSATION
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium tracking-tight">
                        Have a question or looking to collaborate? Our elite support team is ready to assist you 24/7.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info Cards */}
                    <div className="space-y-6">
                        {[
                            { icon: FaEnvelope, title: "Email Us", detail: "support@skymeswms.com" },
                            { icon: FaPhoneAlt, title: "Call Us", detail: "+1 (800) 123-4567" },
                            { icon: FaMapMarkerAlt, title: "Visit Us", detail: "SkyMes WMS Headquarters Silicon Valley CA" }
                        ].map((item, index) => (
                            <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl group hover:bg-white/[0.08] transition-all duration-500">
                                <item.icon className="text-pink-500 mb-4 text-xl group-hover:scale-110 transition-transform" />
                                <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2">{item.title}</h4>
                                <p className="text-slate-400 text-sm font-bold">{item.detail}</p>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form - Glass Style */}
                    <div className="lg:col-span-2 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-4 px-6 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-4 px-6 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Message</label>
                                <textarea rows={5} placeholder="How can we help you?" className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-4 px-6 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-rose-500 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:-translate-y-1 transition-all active:scale-95">
                                Send Message <FaPaperPlane />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
