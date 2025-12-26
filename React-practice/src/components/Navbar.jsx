import "../styles/navbar.css";
import logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="OSS Logo" className="logo-img" />
      </div>
      <ul>
        <li>Home</li>
        <li>Domains</li>
        <li>Achievements</li>
        <li>Our Team</li>
        <li>About us</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
}

