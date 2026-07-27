import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGithub, FaInstagram, FaPaperPlane } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <>
            <footer className="bg-slate-950 border-t border-white/10 border-b-0 border-x-0 pt-20 pb-10 px-8 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-600/10 blur-[150px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">

                        {/* Brand Section */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 group">
                                <div className="w-10 h-10 bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-xl shadow-pink-500/20 transition-transform group-hover:-rotate-6">
                                    <span className="text-white font-black text-xl">S</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-black tracking-tighter text-white leading-none">
                                        SkyMes <span className="text-pink-500">WMS</span>
                                    </span>
                                    <span className="text-[10px] text-slate-400 font-bold tracking-[0.18em] uppercase">Warehouse Management System</span>
                                </div>
                            </div>
                            <p className="text-slate-400 text-[13px] leading-relaxed font-medium max-w-xs">
                                Redefining logistics and warehouse operations through curated technology and real-time automation.
                            </p>
                            <div className="flex gap-3">
                                {[FaFacebookF, FaTwitter, FaGithub, FaInstagram].map((Icon, index) => (
                                    <a key={index} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 hover:border-pink-500 hover:-translate-y-1 transition-all duration-500">
                                        <Icon size={14} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white font-bold mb-8 text-[11px] uppercase tracking-[0.3em]">Directory</h3>
                            <ul className="space-y-4 text-slate-400 text-[13px] font-bold">
                                {["Home", "About Us", "Contact"].map((item) => (
                                    <li key={item}>
                                        <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="hover:text-pink-400 transition-all flex items-center gap-2 group">
                                            <span className="w-0 h-[1.5px] bg-pink-500 group-hover:w-3 transition-all"></span>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-white font-bold mb-8 text-[11px] uppercase tracking-[0.3em]">Assistance</h3>
                            <ul className="space-y-4 text-slate-400 text-[13px] font-bold">
                                {["Help Center", "Privacy Policy", "Terms of Service"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-pink-400 transition-all">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter - Product Launch Style */}
                        <div className="space-y-6">
                            <h3 className="text-white font-bold text-[11px] uppercase tracking-[0.3em]">Join the Elite</h3>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="ENTER YOUR EMAIL"
                                    className="w-full bg-slate-900/50 border-b border-white/20 py-3 px-2 text-[12px] text-white focus:outline-none focus:border-pink-500 transition-all placeholder:text-slate-500 font-bold tracking-widest rounded-t-lg"
                                />
                                <button className="absolute right-2 bottom-3 text-pink-500 hover:text-white transition-colors">
                                    <FaPaperPlane size={14} />
                                </button>
                            </div>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                                Subscribe to receive early access to new features.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Bar without harsh dark borders */}
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-slate-400 text-[11px] font-bold tracking-widest uppercase">
                            © {new Date().getFullYear()} <span className="text-pink-400 font-black">Akash Bhattacharyya</span>. All rights reserved.
                        </div>
                        <a
                            href="https://github.com/akashb8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 bg-white/5 hover:bg-pink-600/20 border border-white/10 hover:border-pink-500/50 px-4 py-2 rounded-full text-slate-300 hover:text-white transition-all duration-300 group shadow-lg"
                        >
                            <FaGithub className="text-pink-500 group-hover:scale-110 transition-transform" size={16} />
                            <span className="text-[11px] font-bold tracking-widest uppercase">
                                Developed by <span className="text-pink-400 font-black group-hover:text-pink-300">Akash Bhattacharyya</span>
                            </span>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;