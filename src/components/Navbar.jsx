import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo1.webp";

import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const token = localStorage.getItem("access");
   const {products} = useContext(AuthContext)
  return (
    <div className="">
      {token ? (
        <div className="navbar bg-base-100 flex justify-between my-5 items-center">
          <div class="flex items-center">
            <div class="navbar-start">
              <div class="dropdown">
                <div
                  tabindex="0"
                  role="button"
                  class="btn btn-ghost btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <ul
                  tabindex="0"
                  class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    {" "}
                    <Link to={"/"}>Homepage</Link>{" "}
                  </li>
                  <li>
                    <Link to={"/shopnow"}>Shopnow</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>{" "}
                  </li>
                  <li>
                    <Link to={"/contactus"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <a class="text-xl">Menu</a>
          </div>

          <div>
            <img class="max-w-[130px] h-auto" src={logo} alt="" />
          </div>

          <Link to={'/shoppingcart'} className="flex gap-3">
            <div class="flex-none">
              <div class="dropdown dropdown-end">
                <div
                  tabindex="0"
                  role="button"
                  class="btn btn-ghost btn-circle"
                >
                  <div class="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span class="badge badge-sm indicator-item">{products.length}</span>
                  </div>
                </div>
                <div
                  tabindex="0"
                  class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
                >
                  {/* <div class="card-body">
                    <span class="text-lg font-bold">8 Items</span>
                    <span class="text-info">Subtotal: $999</span>
                    <div class="card-actions">
                      <button class="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div class="dropdown dropdown-end flex gap-3">
              <div
                tabindex="0"
                role="button"
                class="btn btn-ghost btn-circle avatar"
              >
                <div class="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabindex="0"
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link class="justify-between">
                    Profile
                    <span class="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
                <li>
                  <Link to={'/logout'}>Logout</Link>
                </li>
              </ul>
            </div>
          </Link>
        </div>
      ) : (
        <div className="navbar bg-base-100 flex justify-between py-8 items-center">
          <div class="flex items-center">
            <div class="navbar-start">
              <div class="dropdown">
                <div
                  tabindex="0"
                  role="button"
                  class="btn btn-ghost btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <ul
                  tabindex="0"
                  class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    {" "}
                    <Link to={"/"}>Homepage</Link>{" "}
                  </li>
                  <li>
                    <Link to={"/shopnow"}>Shopnow</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>{" "}
                  </li>
                  <li>
                    <Link to={"/contactus"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <a class="text-xl">Menu</a>
          </div>

          <div>
            <img class="max-w-[130px] h-auto" src={logo} alt="" />
          </div>

          <Link to={'/shoppingcart'} className="flex gap-3">
            <div class="flex-none">
              <div class="dropdown dropdown-end">
                <div
                  tabindex="0"
                  role="button"
                  class="btn btn-ghost btn-circle"
                >
                  <div class="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span class="badge badge-sm indicator-item">{products.length}</span>
                  </div>
                </div>
                <div
                  tabindex="0"
                  class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
                >
                  {/* <div class="card-body">
                    <span class="text-lg font-bold">8 Items</span>
                    <span class="text-info">Subtotal: $999</span>
                    <div class="card-actions">
                      <button class="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div class="flex gap-3">
                <Link to={'/login'} className="btn btn-accent">Sing In</Link>
                <Link to={'/register'} className="btn btn-success">Sign Up</Link>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
