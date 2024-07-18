import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login validation (replace with your own logic)
    if (email === "test@example.com" && password === "password123") {
        // Mock successful login action
        console.log("Login successful!");
        // Reset form fields
        setEmail("");
        setPassword("");

        navigate("/")
      } else {
        // Mock unsuccessful login action
        console.log("Error")
      }
    };

  return (
    <div>
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
