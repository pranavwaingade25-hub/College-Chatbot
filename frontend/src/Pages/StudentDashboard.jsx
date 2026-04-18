import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/studentDashboard.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const StudentDashboard = () => {
  const navigate = useNavigate();

  // 🔒 PROTECT ROUTE
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("studentLoggedIn");
    if (!isLoggedIn) {
      navigate("/student-login");
    }
  }, []);

  // 👤 USER DATA
  const name = localStorage.getItem("studentName");
  const std = localStorage.getItem("studentstd");
  const email = localStorage.getItem("studentEmail");
  const contact = localStorage.getItem("studentContact");

  const logout = () => {
    localStorage.clear();
    navigate("/student-login");
  };

  // 🔥 STATES
  const [events, setEvents] = useState([]);
  const [notices, setNotices] = useState([]);
  const [timetable, setTimetable] = useState([]);

  // 🔥 FETCH FUNCTIONS
  const fetchEvents = async () => {
    const res = await axios.get("http://localhost:5000/api/events");
    setEvents(res.data);
  };

  const fetchNotices = async () => {
    const res = await axios.get("http://localhost:5000/api/notices");
    setNotices(res.data);
  };

  const fetchTimetable = async () => {
  const res = await axios.get(
    `http://localhost:5000/api/timetable/${std}`
  );
  setTimetable(res.data);
};

  // 🔄 LOAD DATA
  useEffect(() => {
    fetchEvents();
    fetchNotices();
    fetchTimetable();
  }, []);

  // ⚡ AUTO REFRESH (every 5 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      fetchEvents();
      fetchNotices();
      fetchTimetable();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <br />

        {/* HEADER */}
        <div className="dash-header">
          <h2>🎓 Student Dashboard</h2>
          <br />
          <div className="actions">
            <button
              className="btn chatbot-btn"
              onClick={() => navigate("/chatbot")}
            >
              🤖 Chatbot
            </button>

            <button className="btn logout-btn" onClick={logout}>
              🚪 Logout
            </button>
          </div>
        </div>

        <br />

        {/* PROFILE */}
        <div className="card profile">
          <h3>👤 Student Info</h3>
          <p><b>Name:</b> {name}</p>
          <p><b>Std:</b> {std}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>Contact:</b> {contact}</p>
        </div>

        <br />

        {/* GRID */}
        <div className="grid">

          {/* NOTICES */}
          <div className="card">
            <h3>📢 Daily Notices</h3>
            <ul>
              {notices.length === 0 ? (
                <li>No notices available</li>
              ) : (
                notices.slice(0, 3).map((n) => (
                  <li key={n._id}>
                    📌 {n.title} - {n.content}
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* TIMETABLE */}
          <div className="card">
            <h3>📅 Timetable</h3>
            <ul>
              {timetable.length === 0 ? (
                <li>No timetable available</li>
              ) : (
                timetable.map((t) => (
                  <li key={t._id}>
                    {t.day}: {t.subject} ({t.time})
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* EVENTS */}
          <div className="card">
            <h3>🎉 Events</h3>
            <ul>
              {events.length === 0 ? (
                <li>No events available</li>
              ) : (
                events.slice(0, 3).map((e) => (
                  <li key={e._id}>
                    🎯 {e.title} – {e.date}
                  </li>
                ))
              )}
            </ul>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentDashboard;