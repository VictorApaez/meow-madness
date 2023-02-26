import React, {useContext, useState} from "react";
import "../styles/Navbar.css";
import {UserContext} from "../context/userContext";
import Login from "./Login";
import Signup from "./Signup";
import logo from "../assets/logos/Meow_Logo_HD.png";

function Navbar({showLoginModal, setShowLoginModal}) {
  const {user, setUser} = useContext(UserContext);
  const [showSignupModal, setShowSignupModal] = useState(false);

  function logout() {
    setUser(null);
    localStorage.removeItem("token");
  }

  return (
    <nav className="navbar">
      <img className="navbar__logo" src={logo} alt="meow logo" />
      <ul className="navbar__links">
        {user ? (
          <>
            <li>Hi, {user}!</li>
            <li className="navbar__item" onClick={logout}>
              Log Out
            </li>
          </>
        ) : (
          <>
            <li
              className="navbar__item"
              onClick={() => setShowSignupModal(true)}
            >
              Sign Up
            </li>
            <li
              className="navbar__item"
              onClick={() => setShowLoginModal(true)}
            >
              Login
            </li>
          </>
        )}
      </ul>
      <Signup
        setShowLoginModal={setShowLoginModal}
        setShowSignupModal={setShowSignupModal}
        showSignupModal={showSignupModal}
      />
      <Login
        setShowSignupModal={setShowSignupModal}
        setShowLoginModal={setShowLoginModal}
        showLoginModal={showLoginModal}
      />
    </nav>
  );
}

export default Navbar;
