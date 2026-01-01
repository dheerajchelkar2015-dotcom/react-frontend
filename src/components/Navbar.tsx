import { Menu, X } from "lucide-react";
import useAuth from "@/auth/store";
import { NavLink, useNavigate } from "react-router";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import useTheme from "@/lib/useTheme";


function NavBar() {
  const [open, setOpen] = useState(false);

  const checkLogin = useAuth(state => state.checkLogin);
  const user = useAuth(state => state.user);
  const logout = useAuth(state => state.logout);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = () => {
    logout();
    setLoggingOut(true);
  };

  useEffect(() => {
    if (loggingOut && !user) {
      navigate("/");
      setLoggingOut(false);
    }
  }, [loggingOut, user, navigate]);

  return (
    <nav
      className="
    sticky top-0 z-50 w-full mb-10 p-2
    bg-[#eaf0ec]
    shadow-[6px_6px_12px_#cfd8d3,-6px_-6px_12px_#ffffff]

    dark:bg-[#0f172a]
    dark:shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#1f2933]
  "
    >

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand */}
        <div
          className="
    h-12 w-12 rounded-full flex items-center justify-center
     bg-[#eaf0ec] text-emerald-700
  shadow-[5px_5px_10px_#cfd8d3,-5px_-5px_10px_#ffffff]
  hover:bg-[#eaf0ec]
  hover:text-emerald-700
  hover:shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]

  dark:bg-[#0f172a] dark:text-emerald-400
  dark:shadow-[5px_5px_10px_#020617,-5px_-5px_10px_#1f2933]
  dark:hover:bg-[#0f172a]
  dark:shadow-[inset_3px_3px_6px_#e5e7eb,inset_-3px_-3px_6px_#ffffff]
  transition-all
  "
        >
          🌿
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {checkLogin() ? (
            <>
              {/* Dashboard */}
              <Button
                size="sm"
                className="
  rounded-full
  bg-[#eaf0ec] text-emerald-700
  shadow-[5px_5px_10px_#cfd8d3,-5px_-5px_10px_#ffffff]
  hover:bg-[#eaf0ec]
  hover:text-emerald-700
  hover:shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]

  dark:bg-[#0f172a] dark:text-emerald-400
  dark:shadow-[5px_5px_10px_#020617,-5px_-5px_10px_#1f2933]
  dark:hover:bg-[#0f172a]
  dark:hover:text-white
  dark:hover:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]
dark:border dark:border-white/10

  transition-all
"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </Button>

              {/* Add Plants */}
              <Button
                size="sm"
                className="
  rounded-full
  bg-[#eaf0ec] text-emerald-700
  shadow-[5px_5px_10px_#cfd8d3,-5px_-5px_10px_#ffffff]
  hover:bg-[#eaf0ec]
  hover:text-emerald-700
  hover:shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]

  dark:bg-[#0f172a] dark:text-emerald-400
  dark:shadow-[5px_5px_10px_#020617,-5px_-5px_10px_#1f2933]
  dark:hover:bg-[#0f172a]
  dark:hover:text-white
  dark:hover:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]
dark:border dark:border-white/10

  transition-all
"
                onClick={() => navigate("/dashboard/add-plant")}
              >
                Add Plants
              </Button>

              {/* Profile */}
              <NavLink to="/dashboard/profile">
                <Badge
                  className="
                    px-5 py-3 rounded-full capitalize
                    bg-[#eaf0ec] text-emerald-700
                    shadow-[inset_3px_3px_6px_#cfd8d3,inset_-3px_-3px_6px_#ffffff]
                  "
                >
                  {user?.name}
                </Badge>
              </NavLink>

              {/* Logout */}
              <Button
                onClick={handleLogout}
                className="
  rounded-full
  bg-red-500 text-white
  shadow-[5px_5px_10px_#cfd8d3,-5px_-5px_10px_#ffffff]
  hover:bg-red-500
  hover:text-white
  hover:shadow-[inset_4px_4px_8px_#7f1d1d,inset_-4px_-4px_8px_#ef4444]


  dark:bg-red dark:text-white
  dark:shadow-[5px_5px_10px_#020617,-5px_-5px_10px_#1f2933]
  dark:hover:bg-red-500
  dark:hover:text-white
dark:hover:shadow-[inset_4px_4px_8px_#7f1d1d,inset_-4px_-4px_8px_#ef4444]
dark:border dark:border-white/10

  transition-all
"
              >
                Logout
              </Button>

              <Button
                size="icon"
                onClick={toggleTheme}
                className="
  h-10 w-10 rounded-full
  bg-[#eaf0ec] text-emerald-700
  shadow-[5px_5px_10px_#cfd8d3,-5px_-5px_10px_#ffffff]
  hover:bg-[#eaf0ec]
  hover:text-emerald-700
  hover:shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]

  dark:bg-[#0f172a] dark:text-emerald-400
  dark:shadow-[5px_5px_10px_#020617,-5px_-5px_10px_#1f2933]
  dark:hover:bg-[#0f172a]
  dark:hover:text-white
  dark:hover:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]
dark:border dark:border-white/10

  transition-all
"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </Button>

            </>
          ) : (
            <>
              <NavLink to="/">
                <Button
                  size="sm"
                  className="
  rounded-full
  bg-[#eaf0ec] text-emerald-700
  shadow-[5px_5px_10px_#cfd8d3,-5px_-5px_10px_#ffffff]
  hover:bg-[#eaf0ec]
  hover:text-emerald-700
  hover:shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]

  dark:bg-[#0f172a] dark:text-emerald-400
  dark:shadow-[5px_5px_10px_#020617,-5px_-5px_10px_#1f2933]
  dark:hover:bg-[#0f172a]
  dark:hover:text-emerald-400
  dark:hover:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]
dark:border dark:border-white/10
 transition-all
"
                >
                  Home
                </Button>
              </NavLink>

              <NavLink to="/login">
                <Button
                  size="sm"
                  className="
  rounded-full
  bg-[#eaf0ec] text-emerald-700
  shadow-[5px_5px_10px_#cfd8d3,-5px_-5px_10px_#ffffff]
  hover:bg-[#eaf0ec]
  hover:text-emerald-700
  hover:shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]

  dark:bg-[#0f172a] dark:text-emerald-400
  dark:shadow-[5px_5px_10px_#020617,-5px_-5px_10px_#1f2933]
  dark:hover:bg-[#0f172a]
  dark:hover:text-emerald-400
  dark:hover:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]
dark:border dark:border-white/10

  transition-all
"
                >
                  Login
                </Button>
              </NavLink>

              <NavLink to="/signup">
                <Button
                  size="sm"
                  className="
  rounded-full
  bg-[#eaf0ec] text-emerald-700
  shadow-[5px_5px_10px_#cfd8d3,-5px_-5px_10px_#ffffff]
  hover:bg-[#eaf0ec]
  hover:text-emerald-700
  hover:shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]

  dark:bg-[#0f172a] dark:text-emerald-400
  dark:shadow-[5px_5px_10px_#020617,-5px_-5px_10px_#1f2933]
  dark:hover:bg-[#0f172a]
  dark:hover:text-emerald-400
  dark:hover:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]
dark:border dark:border-white/10

  transition-all
"
                >
                  Signup
                </Button>
              </NavLink>
              <Button
                size="icon"
                onClick={toggleTheme}
                className="
  h-10 w-10 rounded-full
  bg-[#eaf0ec] text-emerald-700
  shadow-[5px_5px_10px_#cfd8d3,-5px_-5px_10px_#ffffff]
  hover:bg-[#eaf0ec]
  hover:text-emerald-700
  hover:shadow-[inset_4px_4px_8px_#cfd8d3,inset_-4px_-4px_8px_#ffffff]

  dark:bg-[#0f172a] dark:text-emerald-400
  dark:shadow-[5px_5px_10px_#020617,-5px_-5px_10px_#1f2933]
  dark:hover:bg-[#0f172a]
  dark:hover:text-white
  dark:hover:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#1f2933]
dark:border dark:border-white/10

  transition-all
"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </Button>
            </>


          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="
  md:hidden p-2 rounded-xl
  bg-[#eaf0ec]
  shadow-[4px_4px_8px_#cfd8d3,-4px_-4px_8px_#ffffff]
  dark:bg-[#0f172a]
  dark:shadow-[4px_4px_8px_#020617,-4px_-4px_8px_#1f2933]
  transition-all
"

        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
  md:hidden mt-2 mx-4 rounded-3xl
  bg-[#eaf0ec]
  shadow-[8px_8px_16px_#cfd8d3,-8px_-8px_16px_#ffffff]

  dark:bg-[#0f172a]
  dark:shadow-[8px_8px_16px_#020617,-8px_-8px_16px_#1f2933]

  transition-all
"

        >
          <div className="px-6 py-6 flex flex-col items-center gap-5 text-sm">
            {checkLogin() ? (
              <>
                <NavLink
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  className="font-medium text-green-500"
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/dashboard/profile"
                  onClick={() => setOpen(false)}
                  className="capitalize text-green-500"
                >
                  {user?.name}
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="font-medium text-red-500"
                >
                  Logout
                </button>
                <button
                  onClick={() => {
                    toggleTheme();
                    setOpen(false);
                  }}
                  className="font-medium text-green-500"
                >
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </button>
              </>
            ) : (
              <>
                <NavLink to="/" onClick={() => setOpen(false)} className="text-green-500 font-semibold">
                  Home
                </NavLink>
                <NavLink to="/login" onClick={() => setOpen(false)} className="text-green-500 font-semibold">
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="text-green-500 font-semibold"
                >
                  Signup
                </NavLink>
              </>
            )}
          </div>
        </div>

      )}
    </nav>
  );
}

export default NavBar;
