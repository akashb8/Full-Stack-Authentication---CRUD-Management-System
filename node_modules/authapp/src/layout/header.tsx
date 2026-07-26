import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../redux/store"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { NavLinks } from "../types/type";
import { check_token, handleLoggOut } from "../redux/authslice";
import { FaBars, FaX } from "react-icons/fa6";

const navlinks: NavLinks[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Create Product", path: "/create" },
    { name: "Products list", path: "/Products" },
    { name: "Update Password", path: "/updatePassword" },
];


const Header: React.FC = () => {
    const { isLoggedin } = useSelector((state: RootState) => state.auth);
    const dispatched = useDispatch<AppDispatch>()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const navigate = useNavigate();

    useEffect(() => {
        dispatched(check_token())
    }, [dispatched])
    const loggedOut = () => {
        dispatched(handleLoggOut());
        navigate("/login");
        setIsOpen(false);
    }

    return (
        <>
            {/* <nav>
            <div>
                <div>authify</div>
                <button onClick={()=>setIsOpen((prev)=>!prev)} >
                    {isOpen? <FaX/> : <FaBars/>}
                </button>
                <ul>
                    {navlinks.map((link:NavLinks)=>(
                        <li key={link.name}>
                            <Link to={link.path}>{link.name}</Link>
                         </li>

                 ))}
                 <li>
                    {isLoggedin?(
                        <button onClick={loggedOut}>
                           LogOut
                        </button>
                    ):(
                        <Link to="/login">LogIn</Link>
                    )}
                 </li>
                </ul>
            </div>
            <ul className=`${isOpen?"block":"hidden"}`>
               {
                navlinks.map((link:NavLinks)=>(
                    <li key={link.name}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))
               }
               <li>
               {
                isLoggedin?(
                    <button onClick={loggedOut}>LogOut</button>
                ):(
                    <Link to="login">logIn</Link>
                )
               }
               </li>
            </ul>
        </nav>
        </> */}
            <nav className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/5 px-8 py-4 transition-all duration-500">
                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    {/* Logo Section - Modern & Clean */}
                    <Link to="/" className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative overflow-hidden w-10 h-10 bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.3)] group-hover:shadow-pink-500/50 transition-all duration-500">
                            <span className="text-white font-black text-2xl group-hover:scale-110 transition-transform">S</span>
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-tight text-white leading-none">
                                SkyMes <span className="text-pink-500">WMS</span>
                            </span>
                            <span className="text-[10px] text-slate-400 font-bold tracking-[0.18em] uppercase">Warehouse Management</span>
                        </div>
                    </Link>

                    {/* Desktop Menu - Apple Style Minimalist */}
                    <div className="hidden md:flex items-center gap-12">
                        <ul className="flex gap-10 text-[12px] font-bold uppercase tracking-widest text-slate-400">
                            {navlinks.map((link: NavLinks) => (
                                <li key={link.name} className="relative group">
                                    <Link to={link.path} className="hover:text-white transition-colors duration-300">
                                        {link.name}
                                    </Link>
                                    {/* Soft Glow Underline */}
                                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-pink-500 shadow-[0_0_10px_#ec4899] transition-all duration-300 group-hover:w-full"></span>
                                </li>
                            ))}
                        </ul>

                        {/* Action Section */}
                        <div className="flex items-center gap-6 pl-8 border-l border-white/10">
                            {isLoggedin ? (
                                <button
                                    onClick={loggedOut}
                                    className="group flex items-center gap-2 text-rose-500 font-bold text-xs uppercase tracking-tighter hover:text-rose-400 transition-all"
                                >
                                    <span className="w-2 h-2 bg-rose-500 rounded-full group-hover:animate-ping"></span>
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    to="/login"
                                    className="relative inline-flex items-center justify-center px-7 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-pink-600 rounded-lg group hover:bg-pink-500 shadow-[0_10px_20px_-10px_rgba(236,72,153,0.5)]"
                                >
                                    <span className="relative">Sign In</span>
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-pink-500 md:hidden transition-all active:scale-90"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label="Toggle Navigation Menu"
                    >
                        {isOpen ? <FaX size={18} /> : <FaBars size={20} />}
                    </button>
                </div>

                {/* Backdrop Overlay to Blur Main Section when menu is open */}
                <div 
                    className={`fixed inset-0 top-[73px] bg-slate-950/70 backdrop-blur-md z-40 md:hidden transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                    onClick={() => setIsOpen(false)}
                />

                {/* Mobile Menu Drawer - High Contrast & Scrollable */}
                <div className={`fixed inset-x-0 top-[73px] bg-slate-950/95 border-b border-white/10 shadow-2xl z-50 flex flex-col items-center py-8 gap-5 md:hidden transition-all duration-300 max-h-[calc(100vh-80px)] overflow-y-auto ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
                    {navlinks.map((link: NavLinks) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-bold text-slate-100 hover:text-pink-400 hover:scale-105 transition-all duration-200 uppercase tracking-wider py-2 px-6 rounded-xl hover:bg-white/5 w-4/5 text-center"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="mt-2 pt-4 border-t border-white/10 w-4/5 flex justify-center">
                        {isLoggedin ? (
                            <button onClick={loggedOut} className="w-full py-3 border border-rose-500 text-rose-400 rounded-xl font-bold uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all text-xs">
                                Logout
                            </button>
                        ) : (
                            <Link to="/login" onClick={() => setIsOpen(false)} className="w-full text-center py-3 bg-gradient-to-r from-pink-600 to-indigo-600 text-white rounded-xl font-bold uppercase tracking-widest shadow-lg shadow-pink-500/20 text-xs">
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;