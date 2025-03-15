import React from "react";
import Navbar from "./Navbar"; // Navbar added
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <Navbar /> {/* Top Navigation Bar */}

      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to <span className="mentra-text">Mentra</span></h1>
        <p className="subheading">Discover Yourself Through Emotion Analysis</p>
        <button className="btn btn-primary cta-button" onClick={() => navigate('/use-mentra')}>Use Mentra</button>
      </div>

      {/* Why Choose Mentra - High-Class Design */}
      <div className="why-mentra">
        <h2 className="section-title">Why Choose Mentra?</h2>
        <div className="scrolling-boxes">
          <div className="info-box">🎯 AI-Powered Emotion Analysis</div>
          <div className="info-box">💡 Scientifically Backed Insights</div>
          <div className="info-box">🔒 Secure & Private</div>
          <div className="info-box">🚀 Lightning-Fast Results</div>
          <div className="info-box">🌍 Available 24/7 Anytime</div>
        </div>
      </div>

      {/* Contact Section - Polished, Professional */}
      <div className="contact-section" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-text">Have questions or need support? Reach out to us!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary contact-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Homepage;
