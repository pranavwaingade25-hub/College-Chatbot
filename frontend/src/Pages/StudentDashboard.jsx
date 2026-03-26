import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    const email = localStorage.getItem("studentEmail");
    const contact = localStorage.getItem("studentContact");

    const logout = () => {
        localStorage.clear();
        navigate("/student-login");
    };

    return (
        <>
            <Navbar />
            <div className="dashboard">

                {/* HEADER */}
                <div className="dash-header">
                    <h2>🎓 Student Dashboard </h2>
                    <div className="actions">
                        <button className="btn chatbot-btn" onClick={() => navigate("/chatbot")}>
                            🤖 Chatbot
                        </button>

                        <button className="btn logout-btn" onClick={logout}>
                            🚪 Logout
                        </button>
                    </div>

                    
                </div>

                {/* PROFILE CARD */}
                <div className="card profile">
                    <h3>👤 Student Info</h3>
                    <p><b>Name:</b> {name}</p>
                    <p><b>Email:</b> {email}</p>
                    <p><b>Contact:</b> {contact}</p>
                </div>

                {/* GRID */}
                <div className="grid">

                    {/* NOTICES */}
                    <div className="card">
                        <h3>📢 Daily Notices</h3>
                        <ul>
                            <li>📌 Mid-term exam from Monday</li>
                            <li>📌 Submit assignment before Friday</li>
                            <li>📌 Library closed tomorrow</li>
                        </ul>
                    </div>

                    {/* TIMETABLE */}
                    <div className="card">
                        <h3>📅 Timetable</h3>
                        <ul>
                            <li>Mon: Math | Physics</li>
                            <li>Tue: Java | DBMS</li>
                            <li>Wed: AI | OS</li>
                            <li>Thu: Web Dev</li>
                            <li>Fri: Lab + Project</li>
                        </ul>
                    </div>

                    {/* EVENTS */}
                    <div className="card">
                        <h3>🎉 Events</h3>
                        <ul>
                            <li>🚀 Hackathon – 25 Aug</li>
                            <li>🎤 Seminar on AI – 28 Aug</li>
                            <li>🎯 Tech Fest – 30 Aug</li>
                        </ul>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
};

export default StudentDashboard;