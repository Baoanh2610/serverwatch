import { Outlet } from "react-router-dom"
import Aside from "./Aside"
import React from "react"
import Dashboard from "@/pages/Dashboard"
import Login from "@/pages/Login"


const Layout: React.FC= () => {
    

    return (
        <div>
            <Dashboard/>    
            <Aside/>

            Đây là trang tổng
            <Outlet />
        </div>


    )
}

export default Layout