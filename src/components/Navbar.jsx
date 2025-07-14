import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo1.webp";

import { AuthContext } from "../Provider/AuthProvider";
import { Menu, ShoppingCart } from "lucide-react";
import { GiShoppingCart } from "react-icons/gi";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem("access");
  const { products } = useContext(AuthContext);
  return (
    <>
      <nav className="bg-white z-50">
        <div className="px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between h-16">
            {/* Left - Logo/Image */}
            <div className="flex-shrink-0">
              <img className="h-14 w-auto rounded-full" src={logo} alt="Logo" />
            </div>

            {/* Middle - Nav Links */}
            <div className="hidden md:flex space-x-4 ml-auto mr-10">
              <Link
                to={"/"}
                className="px-3 py-1 text-gray-700 font-medium tracking-wide rounded-md transition duration-300 hover:shadow-[0_2px_8px_rgba(56,189,248,0.3)] hover:text-sky-600"
              >
                Home
              </Link>
              <Link
                to={"/shopnow"}
                className="px-3 py-1 text-gray-700 font-medium tracking-wide rounded-md transition duration-300 hover:shadow-[0_2px_8px_rgba(56,189,248,0.3)] hover:text-sky-600"
              >
                Shop now
              </Link>
              <Link
                to={"/about"}
                className="px-3 py-1 text-gray-700 font-medium tracking-wide rounded-md transition duration-300 hover:shadow-[0_2px_8px_rgba(56,189,248,0.3)] hover:text-sky-600"
              >
                About
              </Link>
              <Link
                to={"/contactus"}
                className="px-3 py-1 text-gray-700 font-medium tracking-wide rounded-md transition duration-300 hover:shadow-[0_2px_8px_rgba(56,189,248,0.3)] hover:text-sky-600"
              >
                Contact
              </Link>
            </div>

            {/* Right - Cart + Buttons */}
            <div className="hidden md:flex items-center space-x-4 relative">
              <div className="relative">
                <Link to={"/shoppingcart"}>
                  <GiShoppingCart className="w-6 h-6 text-gray-700 hover:text-sky-600 cursor-pointer" />

                  {/* Badge */}
                </Link>

                <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {products.length}
                </span>
              </div>

              <Link
                to={"/register"}
                className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-full shadow-md hover:from-indigo-500 hover:to-sky-500 hover:scale-105 transition duration-300"
              >
                Register
              </Link>

              <Link
                to={"/login"}
                className="px-5 py-2 text-sm font-semibold border-2 border-sky-500 text-sky-600 rounded-full shadow-md hover:bg-sky-500 hover:text-white hover:scale-105 transition duration-300"
              >
                Login
              </Link>
            </div>

            {/* Mobile - Hamburger Menu */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white px-4 pb-4 shadow-md">
            <div className="flex flex-col space-y-3 mt-2">
              <Link
                to={"/"}
                className="px-3 py-1 text-gray-700 font-medium tracking-wide rounded-md transition duration-300 hover:shadow-[0_2px_8px_rgba(56,189,248,0.3)] hover:text-sky-600"
              >
                Home
              </Link>
              <Link
                to={"/shopnow"}
                className="px-3 py-1 text-gray-700 font-medium tracking-wide rounded-md transition duration-300 hover:shadow-[0_2px_8px_rgba(56,189,248,0.3)] hover:text-sky-600"
              >
                Shop now
              </Link>
              <Link
                to={"/about"}
                className="px-3 py-1 text-gray-700 font-medium tracking-wide rounded-md transition duration-300 hover:shadow-[0_2px_8px_rgba(56,189,248,0.3)] hover:text-sky-600"
              >
                About
              </Link>
              <Link
                to={"/contactus"}
                className="px-3 py-1 text-gray-700 font-medium tracking-wide rounded-md transition duration-300 hover:shadow-[0_2px_8px_rgba(56,189,248,0.3)] hover:text-sky-600"
              >
                Contact
              </Link>

              <div className="flex space-x-4 mt-2">
                <Link
                  to={"/register"}
                  className="flex-1 px-4 py-1 border border-sky-600 text-sky-600 rounded-xl hover:bg-sky-600 hover:text-white transition duration-200"
                >
                  Register
                </Link>
                <Link
                  to={"/register"}
                  className="flex-1 px-4 py-1 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition duration-200"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
    // <div className="">
    //   {token ? (
    //     <div className="navbar bg-base-100 flex justify-between my-5 items-center">
    //       <div class="flex items-center">
    //         <div class="navbar-start">
    //           <div class="dropdown">
    //             <div
    //               tabindex="0"
    //               role="button"
    //               class="btn btn-ghost btn-circle"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 class="h-5 w-5"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   stroke-width="2"
    //                   d="M4 6h16M4 12h16M4 18h7"
    //                 />
    //               </svg>
    //             </div>
    //             <ul
    //               tabindex="0"
    //               class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
    //             >
    //               <li>
    //                 {" "}
    //                 <Link to={"/"}>Homepage</Link>{" "}
    //               </li>
    //               <li>
    //                 <Link to={"/shopnow"}>Shopnow</Link>
    //               </li>
    //               <li>
    //                 <Link to={"/about"}>About</Link>{" "}
    //               </li>
    //               <li>
    //                 <Link to={"/contactus"}>Contact</Link>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //         <a class="text-xl">Menu</a>
    //       </div>

    //       <div>
    //         <img class="max-w-[130px] h-auto" src={logo} alt="" />

    //       </div>

    //       <Link to={'/shoppingcart'} className="flex gap-3">
    //         <div class="flex-none">
    //           <div class="dropdown dropdown-end">
    //             <div
    //               tabindex="0"
    //               role="button"
    //               class="btn btn-ghost btn-circle"
    //             >
    //               <div class="indicator">
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   class="h-5 w-5"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   stroke="currentColor"
    //                 >
    //                   <path
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    //                   />
    //                 </svg>
    //                 <span class="badge badge-sm indicator-item">{products.length}</span>
    //               </div>
    //             </div>
    //             <div
    //               tabindex="0"
    //               class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
    //             >
    //               {/* <div class="card-body">
    //                 <span class="text-lg font-bold">8 Items</span>
    //                 <span class="text-info">Subtotal: $999</span>
    //                 <div class="card-actions">
    //                   <button class="btn btn-primary btn-block">
    //                     View cart
    //                   </button>
    //                 </div>
    //               </div> */}
    //             </div>
    //           </div>
    //         </div>
    //         <div class="dropdown dropdown-end flex gap-3">
    //           <div
    //             tabindex="0"
    //             role="button"
    //             class="btn btn-ghost btn-circle avatar"
    //           >
    //             <div class="w-10 rounded-full">
    //               <img
    //                 alt="Tailwind CSS Navbar component"
    //                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    //               />
    //             </div>
    //           </div>
    //           <ul
    //             tabindex="0"
    //             class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
    //           >
    //             <li>
    //               <Link class="justify-between">
    //                 Profile
    //                 <span class="badge">New</span>
    //               </Link>
    //             </li>
    //             <li>
    //               <Link>Settings</Link>
    //             </li>
    //             <li>
    //               <Link to={'/logout'}>Logout</Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </Link>
    //     </div>
    //   ) : (
    //     <div className="navbar bg-base-100 flex justify-between py-8 items-center">
    //       <div class="flex items-center">
    //         <div class="navbar-start">
    //           <div class="dropdown">
    //             <div
    //               tabindex="0"
    //               role="button"
    //               class="btn btn-ghost btn-circle"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 class="h-5 w-5"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   stroke-width="2"
    //                   d="M4 6h16M4 12h16M4 18h7"
    //                 />
    //               </svg>
    //             </div>
    //             <ul
    //               tabindex="0"
    //               class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
    //             >
    //               <li>
    //                 {" "}
    //                 <Link to={"/"}>Homepage</Link>{" "}
    //               </li>
    //               <li>
    //                 <Link to={"/shopnow"}>Shopnow</Link>
    //               </li>
    //               <li>
    //                 <Link to={"/about"}>About</Link>{" "}
    //               </li>
    //               <li>
    //                 <Link to={"/contactus"}>Contact</Link>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //         <a class="text-xl">Menu</a>
    //       </div>

    //       <div>
    //         <img class="max-w-[130px] h-auto" src={logo} alt="" />

    //       </div>

    //       <Link to={'/shoppingcart'} className="flex gap-3">
    //         <div class="flex-none">
    //           <div class="dropdown dropdown-end">
    //             <div
    //               tabindex="0"
    //               role="button"
    //               class="btn btn-ghost btn-circle"
    //             >
    //               <div class="indicator">
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   class="h-5 w-5"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   stroke="currentColor"
    //                 >
    //                   <path
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     stroke-width="2"
    //                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    //                   />
    //                 </svg>
    //                 <span class="badge badge-sm indicator-item">{products.length}</span>
    //               </div>
    //             </div>
    //             <div
    //               tabindex="0"
    //               class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
    //             >
    //               {/* <div class="card-body">
    //                 <span class="text-lg font-bold">8 Items</span>
    //                 <span class="text-info">Subtotal: $999</span>
    //                 <div class="card-actions">
    //                   <button class="btn btn-primary btn-block">
    //                     View cart
    //                   </button>
    //                 </div>
    //               </div> */}
    //             </div>
    //           </div>
    //         </div>
    //         <div class="flex gap-3">
    //             <Link to={'/login'} className="btn btn-accent">Sing In</Link>
    //             <Link to={'/register'} className="btn btn-success">Sign Up</Link>
    //         </div>
    //       </Link>
    //     </div>
    //   )}
    // </div>
  );
};

export default Navbar;
