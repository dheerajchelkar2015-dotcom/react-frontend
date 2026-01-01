
import NavBar from "../components/Navbar";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast"
import Footer from "@/components/home/Footer";

function RootLayout(){
    return (
        <div className="min-h-screen flex flex-col bg-[#eaf0ec] dark:bg-[#020617]">
            <Toaster/>
            <NavBar/>
             <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
            <Footer/>
        </div>
    )
}

export default RootLayout;