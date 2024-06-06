import React, { useState } from "react";
import { api } from "../utils/apiUrls";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      setPassword("");
      setConfirmPassword("");
      return;
    }
    try {
      const response = await api.post(
        "/users/register",
        { email, password, confirm_password: confirmPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Registration successful");
      navigate("/login");
    } catch (error) {
      toast.error("Registration failed");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div id="register">
      <form className="register-form" onSubmit={handleSubmit}>
        <img src="/images/logo.png" alt="Logo" />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Register</button>
        <Link className="login-link" to="/login">
          Already have an account? Login here
        </Link>
      </form>
    </div>
  );
}

export default Register;
