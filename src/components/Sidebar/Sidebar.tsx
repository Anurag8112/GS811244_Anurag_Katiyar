import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaStore,
  FaBoxes,
  FaRegCalendarAlt,
  FaChartLine,
} from "react-icons/fa"; // Importing icons
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
            <FaStore className="icon" />
            Stores
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skus"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaBoxes className="icon" />
            SKUs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/planning"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaRegCalendarAlt className="icon" />
            Planning
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/chart"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaChartLine className="icon" />
            Chart
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
