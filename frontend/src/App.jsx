import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import StudentLogin from "./Pages/StudentLogin";
import AdminLogin from "./Pages/AdminLogin";
import Register from "./Pages/Register";
import Chatbot from "./Pages/Chatbot";
import AdminDashboard from "./Pages/AdminDashboard";
import Signup from "./Pages/Signup";
import Landing from "./Pages/landing";
import StudentDashboard from "./Pages/StudentDashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
