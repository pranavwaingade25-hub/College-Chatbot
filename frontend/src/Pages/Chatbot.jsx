import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../Style/Chatbot.css";
import Footer from "../components/Footer";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 Ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  const sendMessage = async () => {
    if (!input) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const res = await axios.post("http://localhost:5000/api/chatbot/chat", {
      message: input,
    });

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: res.data.reply }]);
    }, 600);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
   <>
    <Navbar/>
    <div className="chat-center">
      <div className="chat-card">
        <div className="chat-header">
          <h3>College Chatbot</h3>
          <button onClick={() => (window.location.href = "/student-dashboard")}>Back</button>
        </div>

        <div className="chat-body">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`msg ${m.from === "user" ? "user" : "bot"}`}
            >
              {m.text}
            </div>
          ))}
          <div ref={endRef}></div>
        </div>

        <div className="chat-input">
          <input
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default Chatbot;
