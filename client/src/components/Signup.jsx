import React, { useState } from "react";
import "../styles/Signup.css";
import { Link } from "react-router-dom";
import { signup } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Signup() {
  console.log("hit");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.username) {
      validationErrors.username = "Username is required";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    }
    const res = await signup(formData);
    if (!res.success) {
      validationErrors.other = res.error;
    } else {
      localStorage.setItem("token", res.token);
      navigate("/home");
    }
    console.log(validationErrors);
    //TODO: set validation error

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
    }
  }

  return (
    <div className="signup">
      <h2 className="signup__title">Sign Up</h2>
      <form className="signup__form" onSubmit={(e) => handleSubmit(e)}>
        <div className="signup__form-group">
          <label htmlFor="username" className="signup__label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="signup__input"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </div>
        {errors.username && <p className="signup__error">{errors.username}</p>}
        <div className="signup__form-group">
          <label htmlFor="password" className="signup__label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="signup__input"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        {errors.password && <p className="signup__error">{errors.password}</p>}

        <button type="submit" className="signup__button">
          Sign Up
        </button>
        {errors.other && <p className="signup__error">{errors.other}</p>}

        <p className="signup__login-link">
          Already have an account?{" "}
          <Link to="/login" className="signup__link">
            Login
          </Link>
          .
        </p>
      </form>
    </div>
  );
}

export default Signup;
