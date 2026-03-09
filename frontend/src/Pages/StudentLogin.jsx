import { useState } from "react";
import axios from "axios";
import "../Style/StudentLogin.css";

const StudentLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/students/login",
        { username, password }
      );

      if (res.data.success) {
        window.location.href = "/chatbot";
      }
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-center">
      <div className="login-card">
        <div className="login-header">
          <h3>Student Login</h3>
        </div>

        <div className="login-body">
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
