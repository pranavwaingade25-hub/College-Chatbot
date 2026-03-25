import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">College Chatbot</div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/signup">Register</a></li>
        <li><a href="/student-login">Login</a></li>
        <li><a href="/admin-login">Dashboard</a></li>
        <li><a href="/admin-login">Admin</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;