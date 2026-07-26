import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../redux/store"
import { useState } from "react";
import type { ProductCreateForm, ProductCreateFormError } from "../../types/type";
import { createProduct } from "../../redux/crudSlice";








const CreateProduct:React.FC=()=>{
     const {isLoading}=useSelector((state:RootState)=>state.crud)
     const dispatched=useDispatch<AppDispatch>();
     
const [product,setProduct] = useState<ProductCreateForm>({
    name:"",
    category:"",
    price:"",
    description:"",
})
const [error,setError]=useState<ProductCreateFormError>({})
const validation=()=>{
let error:ProductCreateFormError={};
if(!product.name) error.name="Please enter your name";
    if(!product.category) error.category="Please enter your email";
    if(!product.price) error.price="Please enter your password";
    if(!product.description) error.description="Please enter your phone";
    return error;
}
let name:string,value:string;
const postUserData=(e:React.ChangeEvent<HTMLInputElement>)=>{
    name=e.target.name;
    value=e.target.value;

if(name==="name"){
        if(value.trim().length === 0){
            setProduct({...product,name:""});
            setError({...error,name:"Please enter product name"});
        }
        else{
           setProduct({...product,name:value});
            setError({...error,name:""});
        }
    }
    if(name==="category"){
        if(value.trim().length === 0){
            setProduct({...product,category:""});
            setError({...error,category:"Please enter category of product"});
        }
        else{
           setProduct({...product,category:value});
            setError({...error,category:""});
        }
    }
     if(name==="price"){
        if(value.trim().length === 0){
            setProduct({...product,price:""});
            setError({...error,price:"Please enter price of product"});
        }
        else{
          setProduct({...product,price:value});
            setError({...error,price:""});
        }
    }
    if(name==="description"){
        if(value.trim().length === 0){
           setProduct({...product,description:""});
            setError({...error,description:"Please enter description"});
        }
        else{
             setProduct({...product,description:value});
            setError({...error,description:""});
        }
    }
}

const handleSubmit=(e:React.SyntheticEvent)=>{
    e.preventDefault();
    const errors = validation();
    setError(errors);
    if(Object.keys(errors).length > 0) return null;
    let data={
        name:product.name,
        category:product.category,
        price:product.price,
        description:product.description,
    }
    dispatched(createProduct(data));
}

return(
    <>
     <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6 relative overflow-hidden">
    {/* Background Decorative Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 blur-[120px] pointer-events-none"></div>
    <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-600/10 blur-[100px] pointer-events-none"></div>

    <div className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-2xl p-10 rounded-[2.5rem] shadow-2xl">
        {/* Header */}
        <div className="mb-10 text-center">
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase mb-2">
                New <span className="text-pink-500">Inventory</span>
            </h2>
            <p className="text-slate-500 text-[11px] font-black uppercase tracking-[0.2em]">Add Premium Product</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div className="group">
                <input 
                    type="text" 
                    name="name" 
                    value={product.name} 
                    onChange={(e)=> postUserData(e)} 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-3.5 px-6 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 group-hover:border-white/20" 
                    placeholder="Product Name" 
                    required
                />
                {error.name && <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest ml-2 mt-1 block">{error.name}</span>}
            </div>

            {/* Category Input */}
            <div className="group">
                <input 
                    type="text" 
                    name="category" 
                    value={product.category} 
                    onChange={(e)=> postUserData(e)} 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-3.5 px-6 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 group-hover:border-white/20" 
                    placeholder="Category (e.g. Electronics)" 
                    required
                />
                {error.category && <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest ml-2 mt-1 block">{error.category}</span>}
            </div>

            {/* Price Input */}
            <div className="group relative">
                <input 
                    type="number" 
                    name="price" 
                    value={product.price} 
                    onChange={(e)=> postUserData(e)} 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-3.5 px-6 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 group-hover:border-white/20" 
                    placeholder="Price ($)" 
                    required
                />
                {error.price && <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest ml-2 mt-1 block">{error.price}</span>}
            </div>

            {/* Description Input */}
            <div className="group">
                <input 
                    type="text" 
                    name="description" 
                    value={product.description} 
                    onChange={(e)=> postUserData(e)} 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-3.5 px-6 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 group-hover:border-white/20" 
                    placeholder="Short Description" 
                    required
                />
                {error.description && <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest ml-2 mt-1 block">{error.description}</span>}
            </div>

            {/* Submit Button */}
            <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-rose-500 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:-translate-y-0.5 transition-all active:scale-95 disabled:opacity-50" 
                disabled={isLoading}
            >
                {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                    "Create Product"
                )}
            </button>
        </form>
    </div>
</div>

    </>
)
}

export default CreateProduct