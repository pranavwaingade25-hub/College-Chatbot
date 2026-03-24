import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import '../Style/adminDashboard.css';
 
const AdminDashboard = () => {
  const [view, setView] = useState("students");
  const [students, setStudents] = useState([]);
  const [questions, setQuestions] = useState([]);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    if (view === "students") {
      axios
        .get("http://localhost:5000/api/students")
        .then((res) => setStudents(res.data));
    }

    if (view === "questions") {
      axios
        .get("http://localhost:5000/api/questions")
        .then((res) => setQuestions(res.data));
    }
  }, [view]);

  const handleAddQuestion = async () => {
    if (!question || !answer || !keywords) return;

    const res = await axios.post("http://localhost:5000/api/questions", {
      question,
      answer,
      keywords,
    });

    setQuestions([...questions, res.data]);
    setQuestion("");
    setAnswer("");
    setKeywords("");
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/questions/${id}`);
    setQuestions(questions.filter((q) => q._id !== id));
  };

  return (
   <>
   <Navbar/>
    <div className="admin-center">
      <div className="admin-card">
        <div className="admin-header">
          <h3>Admin Dashboard</h3>
          <button onClick={() => (window.location.href = "/")}>Logout</button>
        </div>

        <div className="admin-nav">
          <button onClick={() => setView("students")}>Students</button>
          <button onClick={() => setView("questions")}>Questions</button>
        </div>

        <div className="admin-content">
          {view === "students" && (
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, i) => (
                  <tr key={s._id}>
                    <td>{i + 1}</td>
                    <td>{s.fullName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {view === "questions" && (
            <>
              <input
                placeholder="Question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <input
                placeholder="Answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <input
                placeholder="Keywords"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
              <button onClick={handleAddQuestion}>Add</button>

              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Keywords</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {questions.map((q, i) => (
                    <tr key={q._id}>
                      <td>{i + 1}</td>
                      <td>{q.question}</td>
                      <td>{q.answer}</td>
                      <td>{q.keywords}</td>
                      <td>
                        <button onClick={() => handleDelete(q._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
   </>
  );
};

export default AdminDashboard;
