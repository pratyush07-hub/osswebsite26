import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="OSS Logo" className="logo-img" />
        </Link>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/domains">Domains</Link>
        </li>

        <li>
          <Link to="/achievements">Achievements</Link>
        </li>

        <li>
          <Link to="/team">Our Team</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
