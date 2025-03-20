import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import UseMentra from "./components/UseMentra";
import UseMentraSelection from "./components/UseMentraSelection"; // ✅ Import the new selection page
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import ForgotPassword from "./components/ForgotPassword";
import { AuthProvider } from "./components/AuthContext"; // ✅ Import AuthProvider
import Footer from "./components/Footer";
import PsychologyTest from "./components/PsychologyTest";
import PrivacyPolicy from "./components/PrivacyPolicy"; 

function App() {
  return (
    <AuthProvider> {/* ✅ Wrap everything inside AuthProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/use-mentra-selection" element={<UseMentraSelection />} />
          <Route path="/use-mentra" element={<UseMentra />} />
          <Route path="/psychology-test" element={<PsychologyTest />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider> 
  );
}

export default App;
