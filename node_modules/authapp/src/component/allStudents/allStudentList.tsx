import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { allProductList, deleteProduct } from "../../redux/crudSlice";
import { Link } from "react-router-dom";
import SweetAlertComponent from "../sweetAlert.tsx/sweetAlert";

const AllProductList:React.FC=()=>{

    const {allProducts,isLoading} = useSelector((state:RootState)=> state.crud);
    const dispatch = useDispatch<AppDispatch>();

    const [deleteId,setDeleteId] = useState<string>("");
    const [isDelete,setIsDelete] = useState<boolean>(false);

    const deleteData = ()=>{
       if(deleteId){
         dispatch(deleteProduct(deleteId)).then(()=>{
            dispatch(allProductList());
         })
       }
    }

    useEffect(()=>{
        dispatch(allProductList());
    },[]);

   if (isLoading) {
    return (
        <div className="flex space-x-3 justify-center items-center h-screen bg-slate-950">
            <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce shadow-[0_0_15px_rgba(236,72,153,0.5)]"></div>
            <div className="w-4 h-4 bg-violet-500 rounded-full animate-bounce delay-150 shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
            <div className="w-4 h-4 bg-rose-500 rounded-full animate-bounce delay-300 shadow-[0_0_15px_rgba(244,63,94,0.5)]"></div>
        </div>
    )
}

return (
    <>
        <div className="min-h-screen bg-slate-950 p-8 pb-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.05),transparent_70%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
                        Product <span className="text-pink-500 not-italic">Collection</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-violet-600 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {allProducts.map((product) => (
                        <div
                            key={product._id}
                            className="group relative bg-white/5 border border-white/10 rounded-[2rem] p-6 backdrop-blur-sm hover:bg-white/[0.08] hover:border-pink-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
                        >
                            {/* Product Badge/Category */}
                            <div className="inline-block px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-[10px] font-black text-pink-500 uppercase tracking-widest mb-4">
                                {product.category}
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-xl font-black text-white tracking-tight truncate group-hover:text-pink-400 transition-colors">
                                    {product.name}
                                </h2>
                                
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-black text-white">${product.price}</span>
                                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">USD / Unit</span>
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 font-medium min-h-[40px]">
                                    {product.description}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-8 grid grid-cols-2 gap-3">
                                <Link 
                                    to={`/editProduct/${product._id}`}
                                    className="flex items-center justify-center bg-white text-slate-950 text-[11px] font-black uppercase tracking-widest py-3 rounded-xl hover:bg-pink-500 hover:text-white transition-all active:scale-95 shadow-lg shadow-white/5"
                                >
                                    Edit
                                </Link>
                                
                                <button 
                                    className="flex items-center justify-center border border-white/10 bg-slate-900/50 text-rose-500 text-[11px] font-black uppercase tracking-widest py-3 rounded-xl hover:bg-rose-500 hover:text-white transition-all active:scale-95" 
                                    onClick={() => {
                                        setDeleteId(product._id);
                                        setIsDelete(true);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>

                            {/* Card Glow Effect */}
                            <div className="absolute -inset-px bg-gradient-to-tr from-pink-500/20 to-violet-500/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>

            {isDelete && (
                <SweetAlertComponent 
                    confirm={deleteData} 
                    cancel={() => setIsDelete(false)} 
                    title="Are you sure?" 
                    type="warning" 
                />
            )}
        </div>
    </>
)

       
    
}

export default AllProductList;