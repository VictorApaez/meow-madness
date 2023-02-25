import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home" className="navbar__link">
        <h1 className="navbar__logo">My App</h1>
      </Link>
      <ul className="navbar__links">
        <li className="navbar__item">
          <Link to="/signup" className="navbar__link">
            Sign Up
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/login" className="navbar__link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
