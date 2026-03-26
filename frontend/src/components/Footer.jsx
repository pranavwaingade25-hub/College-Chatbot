import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">

  <div className="footer-container">

    {/* LEFT */}
    <div className="footer-section">
      <h3> <a href="/">College Chatbot</a></h3>
      <p>Your smart assistant for campus queries.</p>
    </div>

    {/* LINKS */}
    <div className="footer-section">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/student-login">Student Login</a></li>
        <li><a href="/admin-login">Admin</a></li>
        <li><a href="/chatbot">Chatbot</a></li>
      </ul>
    </div>

    {/* CONTACT */}
    <div className="footer-section">
      <h4>Contact</h4>
      <p>Email: peathibha@collegebot.com</p>
      <p>Phone: +91 75592 15929</p>
    </div>

  </div>

  {/* BOTTOM */}
  <div className="footer-bottom">
    © 2026 College Chatbot | All Rights Reserved
  </div>

</footer>
  )
}

export default Footer