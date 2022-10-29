import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/choose-logo.png";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <Link to={"/home"}>
        <img src={logo} alt="" />
      </Link>

      <Link to={"/home"}>
        <p className="nav-title">Developer Quiz Master</p>
      </Link>

      <div className="nav-link">
        <Link to={"/home"}>
          {" "}
          <p>Home</p>{" "}
        </Link>
        <Link to={"/topics"}>
          <p>Topics</p>
        </Link>
        <Link to={"/statistics"}>
          {" "}
          <p>Statistics</p>{" "}
        </Link>
        <Link to={"/blog"}>
          <p>Blog</p>{" "}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
