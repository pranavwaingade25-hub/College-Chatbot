import { useState } from "react";
import axios from "axios";
import '../Style/Adminlogin.css';
import Navbar from "../components/Navbar";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        { username, password }
      );

      if (res.data.success) {
        window.location.href = "/admin-dashboard";
      }
    } catch {
      setError("Invalid admin credentials");
    }
  };

  return (
  <>
  <Navbar/>
    <div className="login-center">
      <div className="login-card">
        <h3>Admin Login</h3>

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
    <section className="process">
  <h2>Admin Workflow</h2>

  <div className="steps">
    <div className="step">1. Secure Login 🔐</div>
    <div className="step">2. Dashboard Access 📊</div>
    <div className="step">3. Student Management 👨‍🎓</div>
    <div className="step">4. Notices Control 📢</div>
    <div className="step">5. Timetable Updates 📅</div>
    <div className="step">6. Event Management 🎉</div>
    <div className="step">7. System Monitoring ⚙️</div>
  </div>
</section>
  </>
  );
};

export default AdminLogin;
