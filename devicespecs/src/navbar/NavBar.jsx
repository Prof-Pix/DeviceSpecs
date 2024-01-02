import React from "react";
import NavBarLink from "./NavBarLink";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">Logo</div>
        <div className="navbar-links">
          <NavBarLink to="/">Home</NavBarLink>
          <NavBarLink to="/device">Devices</NavBarLink>
          <NavBarLink to="/contact">About</NavBarLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
