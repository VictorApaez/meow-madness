import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { UserContext } from "../context/userContext";
function Navbar() {
  const { user, setUser } = useContext(UserContext);

  function logout() {
    setUser(null);
    localStorage.removeItem("token");
  }

  return (
    <nav className="navbar">
      <Link to="/home" className="navbar__link">
        <h1 className="navbar__logo">My App</h1>
      </Link>

      <ul className="navbar__links">
        {user ? (
          <li className="navbar__item">
            {" "}
            <Link to="/signup" className="navbar__link" onClick={logout}>
              Log out
            </Link>
          </li>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
