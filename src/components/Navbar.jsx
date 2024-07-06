import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-sky-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-sky-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-sky-700 border-b border-sky-500 mb-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Mercury List
              </span>
            </NavLink>

            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/products" className={linkClass}>
                  Products
                </NavLink>
                <NavLink to="/categories" className={linkClass}>
                  Categories
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
