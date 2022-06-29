import React from "react";
import "../styles/navbar.css";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navigation">
          <img className="hamburger"
          src={logo}
          alt="??"
          >
          </img>
        <a href="/" className="brand-name">
          WholeMart
        </a>
        <div className="navigation-menu">
          <ul>
            <li>
              <a href="/home">Home</a>
              <div className="line"></div>
            </li>
            <li>
              <a href="/categories">Categories</a>
              <div className="line"></div>
            </li>
            <li>
              <a href="/about">About Us</a>
              <div className="line"></div>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
              <div className="line"></div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
