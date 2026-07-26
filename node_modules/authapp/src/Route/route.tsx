import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom"
import RootLayout from "../layout/rootLayout"
import Login from "../component/login/login"
import Registration from "../component/register/register"
import ForgetPassword from "../component/forget/forget"
import Home from "../component/home/home"
import About from "../component/about/about"
import Contact from "../component/contact/contact"
import UpdatePassword from "../component/updatePassword/updatePassword"
import CreateProduct from "../component/createStudent/createStudent"
import AllProductList from "../component/allStudents/allStudentList"
import UpdateProduct from "../component/updateStudent/updateStudent"





const Publicwrapper=()=>{
    const token=localStorage.getItem("token")||sessionStorage.getItem("token")
    return !token?<Outlet/>:<Navigate to="/" replace/>
}
const Privatewrapper=()=>{
    const token=localStorage.getItem("token")||sessionStorage.getItem("token")
    return token?<Outlet/>:<Navigate to="/login" replace/>
}

const router=createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>,
        children:[
            {
                element:<Publicwrapper/>,
                children:[
               {path:"/login",element:<Login/>},
               {path:"/register",element:<Registration/>},
               {path:"/forget",element:<ForgetPassword/>}
                ]
            },
            {
                element:<Privatewrapper/>,
                children:[
                    {index:true,element:<Home/>},
                    {path:"/about",element:<About/>},
                    {path:"/contact",element:<Contact/>},
                    {path:"/create",element:<CreateProduct/>},
                    {path:"/Products",element:<AllProductList/>},
                    {path:"/editProduct/:id",element:<UpdateProduct/>},
                    {path:"/updatePassword",element:<UpdatePassword/>},
                ]
            }
        ]
    }
]);

const Routeing:React.FC=()=>{
    return(
        <>
        <RouterProvider router={router}/>
        </>
    )
}
export default Routeing