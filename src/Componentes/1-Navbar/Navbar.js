import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from '../images/choose-logo.png';

const Navbar = () => {
    return (   
        <nav className='nav-container'>
            <img src={logo} alt="" />
            <p className='nav-title'>Developer Quiz Master</p>

          <div className='nav-link'>
          <Link to={'/home'}> <p>Home</p> </Link>
            <Link to={'/topics'}><p>Topics</p></Link>
            <Link to={'/statistics'}> <p>Statistics</p> </Link>
            <Link to={'/blog'}><p>Blog</p> </Link>
          </div>
        </nav>
       
    );
};

export default Navbar;