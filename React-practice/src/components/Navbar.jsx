import "../styles/navbar.css";
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClasses = ({isActive}) =>
    (isActive ? 
    "active-link" 
    : "link"
    );
  




  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="OSS Logo" className="logo-img" />
      </div>
      <ul>
        <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
        <li><NavLink to="/achievements" className={linkClasses}>Achievements</NavLink></li>
        <li><NavLink to="/domain" className={linkClasses}>Domains</NavLink></li>
        <li><NavLink to="/our-team" className={linkClasses}>Our Team</NavLink></li>
        <li><NavLink to="/about" className={linkClasses}>About us</NavLink></li>
        <li><NavLink to="/contact" className={linkClasses}>Contact us</NavLink></li>
    
    
      </ul>
    </nav>
  );
}

