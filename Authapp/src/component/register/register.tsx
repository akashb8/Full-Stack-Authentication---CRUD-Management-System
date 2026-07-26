import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../redux/store"
import { useEffect, useState } from "react";
import type { UserRegister, UserRegisterError } from "../../types/type";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/authslice";
import { Link } from "react-router-dom";




const Registration: React.FC = () => {
    const { isLoading, redirectHome } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();
    const [user, setUser] = useState<UserRegister>({
        name: "",
        email: "",
        password: "",
        phone: "",
        answer: "",
    })
    const navigate = useNavigate();
    const [error, setError] = useState<UserRegisterError>({})

    const validation = () => {
        let error: UserRegisterError = {}
        if (!user.name) error.name = "Please enter your name";
        if (!user.email) error.email = "Please enter your email";
        if (!user.password) error.password = "Please enter your password";
        if (!user.phone) error.phone = "Please enter your phone";
        if (!user.answer) error.answer = "Please enter your answer";
        return error;
    }
    const postUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        if (fieldName === "name") {
            if (fieldValue.trim().length === 0) {
                setUser({ ...user, name: "" });
                setError({ ...error, name: "Please enter your name in this inputfield" });
            } else {
                setUser({ ...user, name: fieldValue });
                setError({ ...error, name: "" });
            }
        }
        if (fieldName === "email") {
            if (fieldValue.trim().length === 0) {
                setUser({ ...user, email: "" });
                setError({ ...error, email: "Please enter your email in this inputfield" });
            } else {
                setUser({ ...user, email: fieldValue });
                setError({ ...error, email: "" });
            }
        }
        if (fieldName === "password") {
            if (fieldValue.trim().length === 0) {
                setUser({ ...user, password: "" });
                setError({ ...error, password: "Please fill your password in this inputfield" });
            } else {
                setUser({ ...user, password: fieldValue });
                setError({ ...error, password: "" });
            }
        }
        if (fieldName === "phone") {
            if (fieldValue.trim().length === 0) {
                setUser({ ...user, phone: "" });
                setError({ ...error, phone: "Please fill your phone number in this inputfield" });
            } else {
                setUser({ ...user, phone: fieldValue });
                setError({ ...error, phone: "" });
            }
        }
        if (fieldName === "answer") {
            if (fieldValue.trim().length === 0) {
                setUser({ ...user, answer: "" });
                setError({ ...error, answer: "Please enter your answer in this inputfield" });
            } else {
                setUser({ ...user, answer: fieldValue });
                setError({ ...error, answer: "" });
            }
        }
    };



    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const errors = validation();
        setError(errors);
        if (Object.keys(errors).length > 0) return null;
        let data = {
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone,
            answer: user.answer,
        };
        dispatch(register(data));
    };

    useEffect(() => {
        if (redirectHome !== null) {
            navigate(redirectHome);
        }
    }, [navigate, redirectHome]);

    return (
        <>
                  <div className="grow min-h-[calc(100vh-140px)] flex items-center justify-center bg-slate-950 p-6 relative overflow-hidden">
                {/* Background Orbs */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pink-600/25 rounded-full blur-[140px] pointer-events-none"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/25 rounded-full blur-[140px] pointer-events-none"></div>

                <div className="glass-card p-8 rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.5)] w-full max-w-md z-10 relative overflow-hidden backdrop-blur-2xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-600 text-white font-black text-2xl shadow-lg shadow-pink-500/30 mb-3">
                            S
                        </div>
                        <h2 className="text-3xl font-black text-white tracking-tight">Create Account</h2>
                        <p className="text-slate-400 text-sm mt-2">Get started with your free account.</p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                        {/* Name Input */}
                        <div className="relative">
                            <input 
                                type="text" name="name" value={user.name} onChange={(e) => postUserData(e)} 
                                className="glass-input w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none transition duration-300 text-sm font-medium" 
                                placeholder="Full Name" required 
                            />
                            {error.name && <p className="text-xs text-rose-400 font-semibold mt-1 ml-1 flex items-center gap-1"><span>⚠</span> {error.name}</p>}
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <input 
                                type="email" name="email" value={user.email} onChange={(e) => postUserData(e)} 
                                className="glass-input w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none transition duration-300 text-sm font-medium" 
                                placeholder="Email Address" required 
                            />
                            {error.email && <p className="text-xs text-rose-400 font-semibold mt-1 ml-1 flex items-center gap-1"><span>⚠</span> {error.email}</p>}
                        </div>

                        {/* Password & Phone in Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <input 
                                    type="password" name="password" value={user.password} onChange={(e) => postUserData(e)} 
                                    className="glass-input w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none transition duration-300 text-sm font-medium" 
                                    placeholder="Password" required 
                                />
                                {error.password && <p className="text-xs text-rose-400 font-semibold mt-1 ml-1 flex items-center gap-1"><span>⚠</span> {error.password}</p>}
                            </div>
                            <div className="relative">
                                <input 
                                    type="number" name="phone" value={user.phone} onChange={(e) => postUserData(e)} 
                                    className="glass-input w-full px-4 py-3 rounded-xl text-white placeholder-slate-400 focus:outline-none transition duration-300 text-sm font-medium" 
                                    placeholder="Phone Number" required 
                                />
                                {error.phone && <p className="text-xs text-rose-400 font-semibold mt-1 ml-1 flex items-center gap-1"><span>⚠</span> {error.phone}</p>}
                            </div>
                        </div>

                        {/* Security Answer */}
                        <div className="relative">
                            <input 
                                type="text" name="answer" value={user.answer} onChange={(e) => postUserData(e)} 
                                className="glass-input w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 focus:outline-none transition duration-300 text-sm font-medium" 
                                placeholder="Security Question: What is your pet's name?" required 
                            />
                            {error.answer && <p className="text-xs text-rose-400 font-semibold mt-1 ml-1 flex items-center gap-1"><span>⚠</span> {error.answer}</p>}
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="w-full mt-3 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-black py-3.5 rounded-xl shadow-lg shadow-pink-600/30 transition-all duration-300 active:scale-[0.98] disabled:opacity-50 text-sm uppercase tracking-widest" 
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    <span>Signing up...</span>
                                </div>
                            ) : (
                                "Create Account"
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 text-center border-t border-white/10 pt-6">
                        <p className="text-slate-400 text-sm">
                            Already have an account?{" "}
                            <Link to="/login" className="text-pink-400 font-bold hover:text-pink-300 transition underline decoration-pink-500/40 underline-offset-4 ml-1">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Registration