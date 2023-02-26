import React, { useState, useContext } from "react";
import "../styles/Signup.css";
import { signup } from "../services/authService";
import Modal from "react-modal";
import { UserContext } from "../context/userContext";

function Signup({ setShowSignupModal, showSignupModal, setShowLoginModal }) {
  const { setUser } = useContext(UserContext);

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
      console.log(res.user, "HELOOO");
      setUser(res.user);
    }
    //TODO: set validation error

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
    }
  }

  function switchToLogin() {
    setShowSignupModal(false);
    setShowLoginModal(true);
  }
  return (
    <Modal
      isOpen={showSignupModal}
      onRequestClose={() => setShowSignupModal(false)}
      className="signup"
      overlayClassName="signup-overlay"
    >
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
          <span className="signup__link" onClick={switchToLogin}>
            Login
          </span>
          .
        </p>
      </form>
    </Modal>
  );
}

export default Signup;
