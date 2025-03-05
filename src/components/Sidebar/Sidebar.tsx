import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li>
          <NavLink
            to="/stores"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Stores
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skus"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            SKUs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/planning"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Planning
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/chart"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Chart
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
