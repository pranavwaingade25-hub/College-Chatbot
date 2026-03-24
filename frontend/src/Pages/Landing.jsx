import { useNavigate } from "react-router-dom";
import "../Style/Landing.css";

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="landing">
            {/* 🔷 Navbar */}
            <nav className="navbar">
                <div className="logo">🤖 College Chatbot</div>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="/signup">Register</a></li>
                    <li><a href="/student-login">Login</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="/admin-login">Admin</a></li>
                </ul>
            </nav>

            {/* 🔷 Hero Section */}
            <section className="hero">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1>Smart Institute Smart Communication</h1>
                    <p>
                        Ask college-related questions instantly, get accurate answers,
                        access study materials, stay updated with notices, and interact with an chatbot anytime.
                    </p>

                    <div className="buttons">
                        <button
                            className="btn primary"
                            onClick={() => navigate("/home")}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </section>

            {/* 🔷 System Modules */}
            <section className="modules">
                <h1>System Modules</h1> <br />

                <div className="card-container">

                    <div className="card">
                        <h2>Student Module</h2> <br />
                        <p>
                            Students can ask queries, access study materials, view notices,
                            and interact with the AI chatbot.
                        </p>
                    </div>

                    <div className="card">
                        <h2>Admin Module</h2> <br />
                        <p>
                            Admin can manage FAQs, upload study resources,
                            post notices, and control chatbot responses.
                        </p>
                    </div>

                    <div className="card">
                        <h2>Chatbot Module</h2> <br />
                        <p>
                            Provides instant answers to student queries using
                            keyword matching processing.
                        </p>
                    </div>

                    <div className="card">
                        <h2>Knowledge Base</h2><br />
                        <p>
                            Stores academic data like syllabus, timetable,
                            and FAQs for quick retrieval by the chatbot.
                        </p>
                    </div>

                    <div className="card">
                        <h2>Notification System</h2><br />
                        <p >
                            Displays latest college announcements, events,
                            and important updates for students.
                        </p>
                    </div>

                    <div className="card">
                        <h2>User Authentication</h2> <br />
                        <p>
                            Secure login and registration system for students
                            and admin with role-based access.
                        </p>
                    </div>

                </div>
            </section>
            {/* 🔷 Working Process */}
            <section className="process">
                <h1>Working Process</h1> <br />

                <div className="steps">
                    <div className="step">1. User Login</div>
                    <div className="step">2. Access Chatbot</div>
                    <div className="step">3. Enter Query</div>
                    <div className="step">4. keyword macthes Processing</div>
                    <div className="step">5. Knowledge Base Search</div>
                    <div className="step">6. chatbot Response Generation</div>
                    <div className="step">7. Display Result</div>
                </div>
            </section>


        </div>
    );
}