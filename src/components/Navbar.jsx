import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

function Navbar() {
  const { user, userSignOut } = useContext(AuthContext);
  // console.log(user);
  return (
    <div className="navbar bg-white lg:py-5 lg:px-5">
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
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? " bg-deepOceanBlue text-base font-semibold btn shadow-md outline-none rounded-md text-white"
                    : "text-base btn bg-white border-none shadow-none hover:bg-icyBlue text-black"
                }
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/adventures"
                className={({ isActive }) =>
                  isActive
                    ? " bg-deepOceanBlue text-base font-semibold btn shadow-md outline-none rounded-md text-white"
                    : "text-base btn bg-white border-none shadow-none hover:bg-icyBlue text-black"
                }
              >
                Adventures
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost lg:text-3xl text-xl font-extrabold p-0  lora text-evergreen">
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
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? " bg-deepOceanBlue text-base font-semibold btn shadow-md outline-none rounded-md text-white"
                  : "text-base btn bg-white border-none shadow-none hover:bg-icyBlue text-black"
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/adventures"
              className={({ isActive }) =>
                isActive
                  ? " bg-deepOceanBlue text-base font-semibold btn shadow-md outline-none rounded-md text-white"
                  : "text-base btn bg-white border-none shadow-none hover:bg-icyBlue text-black"
              }
            >
              Adventures
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end space-x-4">
        <div
          className={`tooltip tooltip-bottom ${user ? "" : "hidden"}`}
          data-tip={user?.displayName}
        >
          {/* <button className="btn">Hover me</button> */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <Link to="/profile" className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={
                  user?.photoURL
                    ? user.photoURL
                    : "https://i.seadn.io/gcs/files/3085b3fc65f00b28699b43efb4434eec.png?auto=format&dpr=1&w=1000"
                }
                className="rounded-full"
              />
            </Link>
          </div>
        </div>
        <Link
          to="/auth/signin"
          className={`btn ${
            user ? "hidden" : ""
          } text-white bg-deepOceanBlue hover:bg-icyBlue hover:text-black`}
        >
          Sign In
        </Link>
        <button
          onClick={userSignOut}
          className={`btn ${
            user ? "" : "hidden"
          }  text-white bg-deepOceanBlue hover:bg-icyBlue hover:text-black`}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Navbar;
