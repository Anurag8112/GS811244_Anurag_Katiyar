import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside style={{ width: "200px", padding: "20px", background: "#eee" }}>
      <ul>
        <li>
          <Link to="/stores">Stores</Link>
        </li>
        <li>
          <Link to="/skus">SKUs</Link>
        </li>
        <li>
          <Link to="/planning">Planning</Link>
        </li>
        <li>
          <Link to="/chart">Chart</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
