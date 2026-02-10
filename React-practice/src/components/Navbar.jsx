import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="OSS Logo" className="logo-img" />
          </Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/domain">Domain</Link></li>
          <li><Link to="/achievements">Achievements</Link></li>
          <li><Link to="/ourteam">Our Team</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}


