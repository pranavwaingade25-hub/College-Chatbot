import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

import "../Style/Signup.css";

const Signup = () => {
  const [form, setForm] = useState({
    fullName: "",
    std:"",
    email: "",
    contact: "",
    username: "",
    password: ""
  });
  const [msg, setMsg] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg("");
    try {
      const res = await axios.post(
        "http://localhost:5000/api/students/register",
        form
      );
      setMsg(res.data.message || "Registered successfully");
      setForm({
        fullName: "",
        std:"",
        email: "",
        contact: "",
        username: "",
        password: ""
      });
    } catch (err) {
      setMsg(err.response?.data?.message || "Registration failed");
    }
  };

  return (
  <>
     <Navbar/>
    <div className="signup-center">
      <div className="signup-card">
        <h3>Create Student Account</h3>

        <form onSubmit={handleSubmit}>
          <input
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          <input
            name="std"
            type="std"
            placeholder="Year"
            value={form.std}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="contact"
            placeholder="Contact Number"
            value={form.contact}
            onChange={handleChange}
            required
          />
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign up</button>
        </form>

        {msg && <p className="msg">{msg}</p>}

        <a href="/">Back to Home</a>
      </div>
    </div>
  
  </>
  );
};

export default Signup;
