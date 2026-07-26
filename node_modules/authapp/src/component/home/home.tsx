import { Link } from "react-router-dom";
import MissionVision from "../missionVision/MissionVision";

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 px-8 py-20 relative overflow-hidden flex flex-col items-center">
            
            {/* Background Luxury Accents */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-600/10 blur-[150px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full animate-pulse delay-700"></div>

            <div className="max-w-6xl mx-auto text-center z-10 w-full">
                
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                    </span>
                    <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">
                        SkyMes WMS Warehouse System
                    </span>
                </div>

                {/* Elite Heading */}
                <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                    SMART LOGISTICS <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-violet-500">
                        AUTOMATION
                    </span>
                </h1>

                {/* Action Hub */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                    <Link
                        to="/register"
                        className="relative px-10 py-5 w-full sm:w-auto bg-gradient-to-r from-pink-600 to-indigo-600 text-white font-black uppercase text-xs tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-pink-600/30 hover:shadow-pink-600/50 hover:-translate-y-1 active:scale-95 overflow-hidden group"
                    >
                        <span className="relative z-10">Get Started Now</span>
                    </Link>

                    <Link
                        to="/Products"
                        className="px-10 py-5 w-full sm:w-auto bg-transparent text-white font-black uppercase text-xs tracking-[0.2em] rounded-2xl border border-white/10 backdrop-blur-sm transition-all hover:bg-white/5 hover:border-white/20 hover:-translate-y-1 active:scale-95"
                    >
                        View Warehouse Products
                    </Link>
                </div>

                {/* Interactive Mission & Vision Section */}
                <div className="my-16 border-t border-white/10 pt-16">
                    <MissionVision />
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
                    <div className="space-y-1">
                        <h3 className="text-4xl font-black text-white tracking-tighter">10K<span className="text-pink-500">+</span></h3>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Shipments Handled</p>
                    </div>
                    <div className="space-y-1 border-x border-white/10 px-4">
                        <h3 className="text-4xl font-black text-white tracking-tighter">99.9<span className="text-pink-500">%</span></h3>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Stock Accuracy</p>
                    </div>
                    <div className="col-span-2 md:col-span-1 space-y-1">
                        <h3 className="text-4xl font-black text-white tracking-tighter">24<span className="text-pink-500">/</span>7</h3>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Live Monitoring</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

