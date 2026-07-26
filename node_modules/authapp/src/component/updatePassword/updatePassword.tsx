import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { useState, type SyntheticEvent } from "react";
import { updatePassword } from "../../redux/authslice";

const UpdatePassword:React.FC=()=>{

    const {isLoading} = useSelector((state:RootState)=> state.auth);
    const distpatch = useDispatch<AppDispatch>();

    const [password,setPassword] = useState<string>("");
    const [error,setError] = useState<string>("");

    const postUserData=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name === "password"){
            if(e.target.value.trim().length === 0){
                setPassword("");
                setError("please fill the password to update")
            }else{
                setPassword(e.target.value);
                setError("")
            }
        }
    }

    const handleSubmit=(e:SyntheticEvent)=>{
        e.preventDefault();
        if(password.length === 0){
            setError("You had Forget to enter password!");
            return;
        }
        const userId = localStorage.getItem("UserId");
        if(userId !== null){
            let data={
            user_id:userId,
            password:password,
        }
        distpatch(updatePassword(data))
        }
    }
 return(
        <>
           <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6 relative overflow-hidden">
    {/* Background Decorative Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/10 blur-[120px] pointer-events-none"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://transparenttextures.com')] opacity-[0.02] pointer-events-none"></div>

    <div className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-2xl p-10 rounded-[2.5rem] shadow-2xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-pink-500 text-3xl">🔒</span>
            </div>
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase mb-2">
                Security <span className="text-pink-500">Update</span>
            </h2>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.25em]">Protect your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Password Input */}
            <div className="relative group">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1 mb-2 block">New Password</label>
                <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={(e)=> postUserData(e)} 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-4 px-6 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 group-hover:border-white/20" 
                    placeholder="••••••••" 
                />
                {error && (
                    <span className="absolute -bottom-6 left-1 text-[10px] font-bold text-rose-500 uppercase tracking-widest animate-pulse">
                        {error}
                    </span>
                )}
            </div>

            {/* Action Button */}
            <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-3 bg-white text-slate-950 py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all hover:bg-pink-500 hover:text-white hover:shadow-[0_20px_40px_-10px_rgba(236,72,153,0.4)] hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:pointer-events-none" 
                disabled={isLoading}
            >
                {isLoading ? (
                    <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                    "Confirm Update"
                )}
            </button>
        </form>

        {/* Support Footer */}
        <p className="mt-10 text-center text-slate-600 text-[10px] font-black uppercase tracking-widest">
            Encrypted End-to-End
        </p>
    </div>
</div>

        </>
    )
}

export default UpdatePassword;