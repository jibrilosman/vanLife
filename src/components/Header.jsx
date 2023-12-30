import React from "react";
import "../index.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        #vanlife
      </Link>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "activeStyle" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "activeStyle" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "activeStyle" : null)}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
