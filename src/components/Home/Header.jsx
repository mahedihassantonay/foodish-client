/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-gray-800 sticky top-0 z-10">
      <div className="container mx-auto  flex items-center justify-between text-white">
        <img className="md:h-16 h-8" src={logo} />
        <ul className="font-semibold flex gap-8 md:text-base text-xs">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "border border-x-0" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "border border-x-0" : "")}
          >
            Blog
          </NavLink>
        </ul>

        <div>
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img src={user.photoURL} title={user.displayName} />
                  ) : (
                    <img
                      src="https://randomuser.me/api/portraits/men/43.jpg"
                      title={user?.displayName}
                    />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-gray-100 rounded-box w-52 text-black"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={handleLogOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn normal-case p-1 md:p-4">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
