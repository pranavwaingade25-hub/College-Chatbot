import { useNavigate } from "react-router-dom";
import "../Style/Landing.css";

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="landing">
      {/* 🔷 Navbar */}
      <nav className="navbar">
        <div className="logo">🚌 College Chatbot</div>
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
          <h1>Smart Student Bus Pass System</h1>
          <p>
            Apply for bus passes online, make payments through UPI QR,
            get a digital pass, renew passes, and manage applications.
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
        <h2>System Modules</h2>

        <div className="card-container">
          <div className="card">
            <h3>User / Student Module</h3>
            <p>Register, login, apply, track status and digital pass.</p>
          </div>

          <div className="card">
            <h3>Admin Module</h3>
            <p>Approve/reject applications and manage records.</p>
          </div>

          <div className="card">
            <h3>Payment Module</h3>
            <p>UPI QR payments (GPay, PhonePe, Paytm).</p>
          </div>

          <div className="card">
            <h3>Discount Logic</h3>
            <p>Daily, monthly and quarterly discounts.</p>
          </div>

          <div className="card">
            <h3>Digital Pass</h3>
            <p>QR-based student pass with validation.</p>
          </div>

          <div className="card">
            <h3>College-wise Admin</h3>
            <p>View students college-wise with details.</p>
          </div>
        </div>
      </section>

      {/* 🔷 Working Process */}
      <section className="process">
        <h2>Working Process</h2>

        <div className="steps">
          <div className="step">1. Register</div>
          <div className="step">2. Login</div>
          <div className="step">3. Select Plan</div>
          <div className="step">4. Fill Details</div>
          <div className="step">5. Generate QR</div>
          <div className="step">6. Payment</div>
          <div className="step">7. Approval</div>
          <div className="step">8. Get Pass</div>
        </div>
      </section>
            

        </div>
    );
}