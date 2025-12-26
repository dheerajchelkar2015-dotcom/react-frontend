import { Menu, ShoppingCart, X } from "lucide-react";
import useAuth from "@/auth/store";
import { NavLink, useNavigate } from "react-router";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useCart } from "@/context/CartContext";
import { useState } from "react";




function NavBar() {
  const [open, setOpen] = useState(false);

  const checkLogin = useAuth(state => state.checkLogin);
  const user = useAuth(state => state.user);
  const logout = useAuth(state => state.logout);
  const navigate = useNavigate();
  const { cart } = useCart();

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
            🌿
          </span>
          <span className="font-semibold">Greenery</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          {checkLogin() ? (
            <>
              <Button
                size="sm"
                variant="outline"
                className="hover:bg-yellow-200 rounded-full"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </Button>

              <NavLink to="/dashboard/profile">
                <Badge
                  variant="outline"
                  className="capitalize bg-green-200 hover:bg-yellow-200 px-4 py-4"
                >
                  {user?.name}
                </Badge>
              </NavLink>

              <Button
                size="sm"
                className="bg-green-200 text-black hover:text-white hover:bg-green-600 rounded-half"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Logout
              </Button>

              <NavLink to="/dashboard/cart" className="relative">
                <ShoppingCart className="h-6 w-6 text-green-700" />
                {count > 0 && (
                  <Badge className="absolute -top-2 -right-2 rounded-full px-2 py-0 text-xs">
                    {count}
                  </Badge>
                )}
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/">
                <Button size="sm" variant="ghost">Home</Button>
              </NavLink>
              <NavLink to="/login">
                <Button size="sm" variant="ghost">Login</Button>
              </NavLink>
              <NavLink to="/signup">
                <Button size="sm" className="rounded-full">
                  Signup
                </Button>
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-lg p-2 hover:bg-muted"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="px-6 py-5 flex flex-col items-center gap-4 text-sm">

            {checkLogin() ? (
              <>
                <NavLink
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  className="font-medium text-foreground"
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/dashboard/profile"
                  onClick={() => setOpen(false)}
                  className="text-foreground capitalize"
                >
                  {user?.name}
                </NavLink>

                <button
                  onClick={() => {
                    logout();
                    navigate("/");
                    setOpen(false);
                  }}
                  className="text-red-600 text-left font-medium"
                >
                  Logout
                </button>

                <NavLink to="/dashboard/cart" className="relative">      
                <ShoppingCart className="h-6 w-6 text-green-700" />Cart
                {count > 0 && (
                  <Badge className="absolute -top-2 -right-2 rounded-full px-2 py-0 text-xs">
                    {count}
                  </Badge>
                )}
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/"
                  onClick={() => setOpen(false)}
                  className="font-medium"
                >
                  Home
                </NavLink>

                <NavLink
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="font-medium"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="font-medium text-green-600"
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