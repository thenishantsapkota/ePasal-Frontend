import React, { useState } from "react";
import { api } from "../utils";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginPromise = api
      .post("/users/login", { email, password }, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data.data;
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("user", JSON.stringify(data.user))
        navigate("/");
      })
      .catch((error) => {
        toast.error("Invalid email or password");
        setPassword("");
        throw error;
      });

    toast.promise(loginPromise, {
      loading: 'Logging in...', 
      success: 'Login successful', 
      error: 'Login failed',
    });
  };

  return (
    <div id="login">
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
        <Link className="register-link" to="/register">
          Don't have an account? Register
        </Link>
      </form>
    </div>
  );
}

export default Login;
