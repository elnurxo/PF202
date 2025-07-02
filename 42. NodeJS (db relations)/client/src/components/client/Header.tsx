import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-blue-600 shadow-md">
      <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-semibold tracking-wide flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8H18m-6-8V6"
            />
          </svg>
          <NavLink to="/" className="hover:text-white">
            Bazaar
          </NavLink>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center gap-8 text-white text-sm font-medium">
          <div className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1"
                  : "hover:text-white hover:opacity-90 transition"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1"
                  : "hover:text-white hover:opacity-90 transition"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1"
                  : "hover:text-white hover:opacity-90 transition"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1"
                  : "hover:text-white hover:opacity-90 transition"
              }
            >
              Shop
            </NavLink>
          </div>

          {/* Divider */}
          <span className="w-px h-6 bg-white opacity-30"></span>

          {/* Auth Links */}
          <div className="flex gap-4">
            <NavLink
              to="/auth/login"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1"
                  : "hover:text-white hover:opacity-90 transition"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/auth/register"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1"
                  : "hover:text-white hover:opacity-90 transition"
              }
            >
              Register
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
