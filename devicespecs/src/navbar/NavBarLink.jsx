import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../styles/navbar.css";

//Created for the links of navbar
const NavBarLink = ({ to, children, ...props }) => {
  //accepts the path, children propss
  const resolvedPath = useResolvedPath(to); // make sure that we are taking the absolute path & converts any relative path
  const isActive = useMatch({ path: resolvedPath.pathname, end: true }); // check if the the path matches
  return (
    <>
      <Link
        to={to}
        {...props}
        className={`link ${isActive ? "navlink-active" : ""}`}
      >
        {children}
      </Link>
    </>
  );
};

export default NavBarLink;
