import React from "react";
import "../styles/Signup.css";

function Signup() {
  return (
    <div className="signup">
      <h2 className="signup__title">Sign Up</h2>
      <form className="signup__form">
        <div className="signup__form-group">
          <label htmlFor="username" className="signup__label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="signup__input"
          />
        </div>
        <div className="signup__form-group">
          <label htmlFor="email" className="signup__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="signup__input"
          />
        </div>
        <div className="signup__form-group">
          <label htmlFor="password" className="signup__label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="signup__input"
          />
        </div>
        <button type="submit" className="signup__button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
