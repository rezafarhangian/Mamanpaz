import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { useCart } from "../Context/CartProvider";
import { useAuth, useAuthActions } from "../Context/AuthProvider";

export default function Navbar() {
  const { cart } = useCart();
  const auth = useAuth();
  const setAuth = useAuthActions();

  const logoutUser = () => {
    localStorage.removeItem("auth");
    setAuth(null);
  };

  return (
    <div className="hidden md:block fixed top-0 right-0 left-0 bg-white z-50  shadow px-4">
      <div className="container flex items-center justify-between ">
        <div className="flex items-center">
          <NavLink to="/">
            <img
              className="w-11 mb-4"
              src="./img/logo-brand.png"
              alt="Logo-mamanpaz"
            />
          </NavLink>
          <ul className="flex items-center  h-[70px]  mr-5">
            <li className="mr-5 hover:text-mamanpaz ">
              <NavLink
                to="/companies"
                className={({ isActive }) =>
                  isActive ? "text-mamanpaz" : "text-black"
                }
              >
                <p className=" py-6 hover:text-mamanpaz">سفارش شرکتی</p>
              </NavLink>
            </li>
            <li className="mr-5 hover:text-mamanpaz">
              <NavLink
                to="/chefRegistration"
                className={({ isActive }) =>
                  isActive ? "text-mamanpaz" : "text-black"
                }
              >
                <p className=" py-6 hover:text-mamanpaz">آشپزی در مامان پز</p>
              </NavLink>
            </li>
            <li className="mr-5 hover:text-mamanpaz">
              <NavLink
                to="/foods"
                className={({ isActive }) =>
                  isActive ? "text-mamanpaz" : "text-black"
                }
              >
                <p className=" py-6 hover:text-mamanpaz">ثبت سفارش آنلاین</p>
              </NavLink>
            </li>
            <li className="mr-5 hover:text-mamanpaz">
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive ? "text-mamanpaz" : "text-black"
                }
              >
                <p className=" py-6 hover:text-mamanpaz">درباره ما</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <Link to="/cart">
            <div className=" ml-7 relative cursor-pointer">
              <HiOutlineShoppingCart className="text-3xl" />
              <span className="absolute -top-[5px] -right-[5px] text-white bg-mamanpaz rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            </div>
          </Link>
          <div>
            {auth ? (
              <div className="relative group/item  py-5">
                <div className="flex items-center cursor-pointer group-hover/item:text-mamanpaz">
                  <FaRegUserCircle className="text-3xl" />
                  <p className="mr-1 font-bold">{auth.name}</p>
                </div>
                <div
                  onClick={() => logoutUser()}
                  className="absolute hidden group-hover/item:flex -bottom-8 p-2 cursor-pointer  items-center justify-evenly rounded text-center bg-white w-32 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]"
                >
                  <p>خروج</p>
                  <BiLogOut className="text-xl" />
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-mamanpaz text-white outline-0 rounded-lg py-2 px-5 font-bold">
                  ورود / ثبت نام
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
