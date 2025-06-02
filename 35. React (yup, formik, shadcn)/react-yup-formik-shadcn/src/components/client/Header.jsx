import { Link, NavLink } from "react-router";

const ClientHeader = () => {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    {
      title: "Courses",
      url: "/courses",
    },
     {
      title: "Add Course",
      url: "/add-course",
    },
  ];
  return (
    <header className="w-full h-[80px] bg-slate-100">
      <div className="container px-12 flex justify-between items-center h-full">
        <div className="logo">
          <h3 className="text-xl font-bold">
            Code<span className="text-red-500">Academy</span>
          </h3>
        </div>
        <ul className="links flex items-center gap-x-5">
          {links.map((link, idx) => {
            return (
              <li key={idx} className="hover:underline cursor-pointer">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-red-500" : "text-black"
                  }
                  to={link.url}
                >
                  {link.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default ClientHeader;
