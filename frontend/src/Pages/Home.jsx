import React from "react";
import "../Style/Home.css";

const Home = () => {
  return (
    <div className="home-parent">
      <div className="home-card">

        {/* HEADER */}
        <div className="home-header">
          <span>College Chatbot</span>
        </div>

        {/* BODY */}
        <div className="home-body">

          {/* INFO TEXT */}
          <div className="home-info">
            Ask questions, get instant answers,<br />
            manage college queries easily.
          </div>

          <div className="home-divider"></div>

          {/* BUTTONS */}
          <button
            className="home-btn student-btn"
            onClick={() => (window.location.href = "/student-login")}
          >
            Student
          </button>

          <button
            className="home-btn admin-btn"
            onClick={() => (window.location.href = "/admin-login")}
          >
            Admin
          </button>

          {/* SIGNUP */}
          <div
            className="home-signup"
            onClick={() => (window.location.href = "/signup")}
          >
            New user? Create account
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
