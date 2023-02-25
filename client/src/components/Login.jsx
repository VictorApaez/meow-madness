import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login">
      <h2 className="login__title">Login</h2>
      <form className="login__form">
        <div className="login__form-group">
          <label htmlFor="username" className="login__label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="login__input"
          />
        </div>
        <div className="login__form-group">
          <label htmlFor="password" className="login__label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="login__input"
          />
        </div>
        <button type="submit" className="login__button">
          Login
        </button>
        <p className="login__signup-link">
          Don't have an account?{" "}
          <Link to="/signup" className="login__link">
            Sign up
          </Link>
          .
        </p>
      </form>
    </div>
  );
}

export default Login;
