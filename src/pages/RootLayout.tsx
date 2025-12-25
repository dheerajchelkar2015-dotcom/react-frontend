import React from "react";
import NavBar from "../components/Navbar";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast"
import Footer from "@/components/home/Footer";

function RootLayout(){
    return (
        <div>
            <Toaster/>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default RootLayout;