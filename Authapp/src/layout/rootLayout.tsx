import { Outlet } from "react-router-dom"
import Header from "./header"
import Footer from "./footer"
import { AntiGravityBackground } from "../component/AntiGravityBackground"


const RootLayout:React.FC=()=>{
    return(
        <>
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-pink-500 selection:text-white relative overflow-x-hidden">
            <AntiGravityBackground />
            <Header/>
            <main className="grow flex flex-col relative z-10">
             <Outlet/>
            </main>
            <Footer/>
        </div>
        </>
    )
}
export default RootLayout