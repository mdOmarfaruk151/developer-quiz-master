import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/choose-logo.png";
import Time from "../Timer/Time";


const Navbar = () => {

  //! Active Navbar
const navLinkStyles =({ isActive }) =>{
   return{
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'underline' : 'none',
    
   }
}

  return (
    <nav className="nav-container ">
      <NavLink to={"/home"}>
        <img src={logo} alt="" />
      </NavLink>

      <NavLink to={"/home"}>
        <p className="nav-title">Developer Quiz Master</p>
      </NavLink>

      

      <div className="nav-link">
        <NavLink style={navLinkStyles} to={"/home"}>
          {" "}
          <p>Home</p>{" "}
        </NavLink>
        <NavLink style={navLinkStyles} to={"/topics"}>
          <p>Topics</p>
        </NavLink>
        <NavLink style={navLinkStyles} to={"/statistics"}>
          {" "}
          <p>Statistics</p>{" "}
        </NavLink>
        <NavLink style={navLinkStyles} to={"/blog"}>
          <p>Blog</p>{" "}
        </NavLink>
      </div>
    </nav>

    
  );
};

export default Navbar;
