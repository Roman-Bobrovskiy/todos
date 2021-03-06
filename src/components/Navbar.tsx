import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper #2196f3 blue px1">
      <NavLink to="/todos" className="brand-logo">
        To-do list
      </NavLink>
      <ul className="right hide-on-med-and-down ">
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
