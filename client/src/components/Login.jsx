import React, { useContext, useState } from "react";
import "../styles/Login.css";
import { UserContext } from "../context/userContext";
import { login } from "../services/authService";
import Modal from "react-modal";

function Login({ setShowLoginModal, showLoginModal, setShowSignupModal }) {
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  async function handleFormSubmit(e) {
    e.preventDefault();

    const validationErrors = {};

    if (!formData.username) {
      validationErrors.username = "Username is required";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const res = await login(formData);
      if (!res.success) {
        validationErrors.other = res.error;
        console.log(res.error);

        setErrors(validationErrors);
      } else {
        setUser(res.user);
        setShowLoginModal(false);
      }
    }
  }

  function updateFormData(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function switchPage() {
    setShowLoginModal(false);
    setShowSignupModal(true);
  }

  return (
    <Modal
      isOpen={showLoginModal}
      onRequestClose={() => setShowLoginModal(false)}
      className="login"
      overlayClassName="login-overlay"
    >
      <h2 className="login__title">Login</h2>
      <form className="login__form" onSubmit={(e) => handleFormSubmit(e)}>
        <div className="login__form-group">
          <label htmlFor="username" className="login__label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="login__input"
            onChange={(e) => updateFormData(e)}
          />
        </div>
        {errors.username && <p className="login__error">{errors.username}</p>}

        <div className="login__form-group">
          <label htmlFor="password" className="login__label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="login__input"
            onChange={(e) => updateFormData(e)}
          />
        </div>
        {errors.password && <p className="login__error">{errors.password}</p>}

        <button type="submit" className="login__button">
          Login
        </button>
        {errors.other && <p className="login__error">{errors.other}</p>}

        <p className="login__signup-link">
          Don't have an account?{" "}
          <span className="signup__link" onClick={switchPage}>
            {" "}
            Sign up
          </span>
          .
        </p>
      </form>
    </Modal>
  );
}

export default Login;
