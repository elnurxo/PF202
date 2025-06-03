import { Link, NavLink } from "react-router";
import { useContext } from "react";
import {
  House,
  SquareLibrary,
  BookOpenText,
  ShoppingBasket,
  Moon,
  Sun,
  Heart,
  LogIn,
  LogOut,
} from "lucide-react";
import ModeContext from "../../context/ModeContext/modeContext";
import FavoriteContext from "../../context/FavoritesContext/favoriteContext";
import UserContext from "../../context/UserContext/userContext";

const ClientHeader = () => {
  const { mode, toggleMode } = useContext(ModeContext);
  const { favorites } = useContext(FavoriteContext);
  const { user, logout } = useContext(UserContext);

  const links = [
    {
      icon: <House />,
      title: "home",
      url: "/",
    },
    {
      icon: <SquareLibrary />,
      title: "about",
      url: "/about",
    },
    {
      icon: <BookOpenText />,
      title: "books",
      url: "/books",
    },
    {
      icon: <ShoppingBasket />,
      title: "basket",
      url: "/basket",
    },
  ];
  return (
    <header
      className={`w-full h-[80px] shadow-md flex items-center justify-between px-12 ${
        mode === "light" ? "bg-emerald-100" : "bg-emerald-200"
      }`}
    >
      <div className="logo text-2xl font-bold">
        <Link to={"/"}>
          <span className="text-emerald-500">Code</span>
          <span className="text-emerald-950">Library</span>
        </Link>
      </div>
      <div className="flex items-center gap-x-3.5">
        <ul className="flex items-center justify-between gap-x-4">
          {links.map((link, idx) => {
            return (
              <li key={idx}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-emerald-900" : "text-emerald-500"
                  }
                  to={link.url}
                  title={link.title}
                >
                  {link.icon}
                </NavLink>
              </li>
            );
          })}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-emerald-900" : "text-emerald-500"
              }
              to={"/favorites"}
              title="favorites"
            >
              <div className="relative">
                <Heart />
                <span className="absolute bottom-5 left-5 text-xs">
                  {favorites.length}
                </span>
              </div>
            </NavLink>
          </li>
          {/* login link */}
          {user === null ? (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-emerald-900" : "text-emerald-500"
                }
                to={"/login"}
                title="login"
              >
                <LogIn />
              </NavLink>
            </li>
          ) : (
            <li
              onClick={() => {
                logout();
              }}
              title="log out"
              className={"text-emerald-500 cursor-pointer"}
            >
              <LogOut />
            </li>
          )}
        </ul>
        {/* mode */}
        <button
          onClick={() => {
            toggleMode();
          }}
          className="cursor-pointer bg-emerald-50 text-emerald-400 px-2 py-1 rounded-xl"
        >
          {mode === "light" ? <Moon /> : <Sun />}
        </button>
      </div>
    </header>
  );
};

export default ClientHeader;
