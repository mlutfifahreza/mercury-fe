import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-gray-700 border-b border-gray-500 mb-6">
      <div className="mx-auto max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-1 justify-start items-stretch">
            <NavLink className="flex items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Mercury List
              </span>
            </NavLink>

            <div className="ml-auto">
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
