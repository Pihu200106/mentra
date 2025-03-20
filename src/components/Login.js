import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // ✅ Using AuthContext
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(email, password); // ✅ Calls login function
    if (success) {
      navigate("/use-mentra-selection"); // ✅ Redirect to UseMentraSelection page
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login to Mentra</h2>
        <form onSubmit={handleLogin}>
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
          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
