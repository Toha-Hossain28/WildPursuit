import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(true);

  return (
    <div className="navbar bg-white py-5 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost lg:text-3xl font-extrabold  lora text-evergreen">
          WildPursuit
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " bg-deepOceanBlue text-base font-semibold btn shadow-md outline-none rounded-md text-white"
                  : "text-base btn bg-white border-none shadow-none hover:bg-icyBlue text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/update"
              className={({ isActive }) =>
                isActive
                  ? " bg-deepOceanBlue text-base font-semibold btn shadow-md outline-none rounded-md text-white"
                  : "text-base btn bg-white border-none shadow-none hover:bg-icyBlue text-black"
              }
            >
              Update Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? " bg-deepOceanBlue text-base font-semibold btn shadow-md outline-none rounded-md text-white"
                  : "text-base btn bg-white border-none shadow-none hover:bg-icyBlue text-black"
              }
            >
              Categories
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end space-x-4">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <Link className={`btn ${user ? "hidden" : ""}`}>Sign In</Link>
        <Link className={`btn ${user ? "" : "hidden"}`}>Log Out</Link>
      </div>
    </div>
  );
}

export default Navbar;
