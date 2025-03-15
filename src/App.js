import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import UseMentra from "./components/UseMentra";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/use-mentra" element={<UseMentra />} />
      </Routes>
    </Router>
  );
}

export default App;
