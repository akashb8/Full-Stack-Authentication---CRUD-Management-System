import { Outlet } from "react-router-dom"
import Header from "./header"
import Footer from "./footer"


const RootLayout:React.FC=()=>{
    return(
        <>
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-pink-500 selection:text-white relative overflow-x-hidden">
            <Header/>
            <main className="grow flex flex-col">
             <Outlet/>
            </main>
            <Footer/>
        </div>
        </>
    )
}
export default RootLayout