import React, { useState } from "react";
import "./Navbar.css"; // Make sure the path is correct
import logo from "../../assets/gsynergy.svg"; // Correct import from inside src
import { FaUserCircle } from "react-icons/fa"; // Import from react-icons/fa

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="GSynergy Logo" />
      </div>
      <div className="cta">Data Viewer APP</div>
      <div className="user-menu" onClick={handleMenuToggle}>
        <FaUserCircle size={30} />
        <span className="triangle">&#9660;</span>
        {showMenu && (
          <div className="dropdown">
            <ul>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
