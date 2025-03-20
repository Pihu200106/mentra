import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth(); // Get user details & logout function
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <div className="logo">Mentra</div>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        
        {/* If user is logged in, show Profile dropdown */}
        {user ? (
          <li className="profile-menu">
            <button className="profile-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
              {user.fullName} ⏷
            </button>
            {dropdownOpen && (
              <div className="profile-dropdown">
                <p><strong>{user.fullName}</strong></p>
                <p>{user.email}</p>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </li>
        ) : (
          <>
            <li><Link to="/login" className="nav-auth-btn">Login</Link></li>
            <li><Link to="/signup" className="nav-auth-btn signup-btn">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
