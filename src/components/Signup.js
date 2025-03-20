import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // ✅ Import Auth Context
import "./Auth.css";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  
  const { signup } = useAuth(); // ✅ Get signup function from AuthContext
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const success = signup(email, password, fullName); // ✅ Calls signup function
    if (success) {
      navigate("/use-mentra-selection"); // ✅ Redirects after signup
    } else {
      alert("Signup failed. Email might already be in use.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up for Mentra</h2>
        <form onSubmit={handleSignup}>
          <input 
            type="text" 
            placeholder="Full Name" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            required 
          />
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
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
          
          {/* Privacy Policy Checkbox */}
          <div className="privacy-policy">
            <input
              type="checkbox"
              id="privacy-check"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              required
            />
            <label htmlFor="privacy-check">
              I agree to the <Link to="/privacy-policy">Privacy Policy</Link>
            </label>
          </div>
          
          {/* Signup Button */}
          <button type="submit" className="auth-btn" disabled={!isChecked}>
            Sign Up
          </button>
        </form>

        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
