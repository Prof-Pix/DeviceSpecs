import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">Logo</div>
        <div className="navbar-links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/device" className="link">
            Devices
          </Link>
          <Link to="/contact" className="link">
            About
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
