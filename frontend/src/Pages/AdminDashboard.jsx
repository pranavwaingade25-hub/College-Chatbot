import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../Style/adminDashboard.css";
import Footer from "../components/Footer";

const AdminDashboard = () => {
  const [view, setView] = useState("students");

  // DATA STATES
  const [students, setStudents] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [events, setEvents] = useState([]);
  const [notices, setNotices] = useState([]);
  const [timetable, setTimetable] = useState([]);

  // FORM STATES
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [keywords, setKeywords] = useState("");

  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDesc, setEventDesc] = useState("");

  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeContent, setNoticeContent] = useState("");

  const [day, setDay] = useState("");
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");

  // ================= FETCH FUNCTIONS =================
  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/api/students");
    setStudents(res.data);
  };

  const fetchQuestions = async () => {
    const res = await axios.get("http://localhost:5000/api/questions");
    setQuestions(res.data);
  };

  const fetchEvents = async () => {
    const res = await axios.get("http://localhost:5000/api/events");
    setEvents(res.data);
  };

  const fetchNotices = async () => {
    const res = await axios.get("http://localhost:5000/api/notices");
    setNotices(res.data);
  };

  const fetchTimetable = async () => {
    const res = await axios.get("http://localhost:5000/api/timetable");
    setTimetable(res.data);
  };

  // ================= VIEW CHANGE =================
  useEffect(() => {
    if (view === "students") fetchStudents();
    if (view === "questions") fetchQuestions();
    if (view === "events") fetchEvents();
    if (view === "notices") fetchNotices();
    if (view === "timetable") fetchTimetable();
  }, [view]);

  // ================= AUTO REFRESH =================
  useEffect(() => {
    const interval = setInterval(() => {
      if (view === "students") fetchStudents();
      if (view === "questions") fetchQuestions();
      if (view === "events") fetchEvents();
      if (view === "notices") fetchNotices();
      if (view === "timetable") fetchTimetable();
    }, 5000);

    return () => clearInterval(interval);
  }, [view]);

  // ================= HANDLERS =================
  const addQuestion = async () => {
    if (!question || !answer || !keywords) return;
    await axios.post("http://localhost:5000/api/questions", {
      question,
      answer,
      keywords,
    });
    fetchQuestions();
    setQuestion(""); setAnswer(""); setKeywords("");
  };

  const deleteQuestion = async (id) => {
    await axios.delete(`http://localhost:5000/api/questions/${id}`);
    fetchQuestions();
  };

  const addEvent = async () => {
    if (!eventTitle || !eventDate) return;
    await axios.post("http://localhost:5000/api/events", {
      title: eventTitle,
      date: eventDate,
      description: eventDesc,
    });
    fetchEvents();
    setEventTitle(""); setEventDate(""); setEventDesc("");
  };

  const deleteEvent = async (id) => {
    await axios.delete(`http://localhost:5000/api/events/${id}`);
    fetchEvents();
  };

  const addNotice = async () => {
    if (!noticeTitle || !noticeContent) return;
    await axios.post("http://localhost:5000/api/notices", {
      title: noticeTitle,
      content: noticeContent,
    });
    fetchNotices();
    setNoticeTitle(""); setNoticeContent("");
  };

  const deleteNotice = async (id) => {
    await axios.delete(`http://localhost:5000/api/notices/${id}`);
    fetchNotices();
  };

  const addTimetable = async () => {
    if (!day || !subject || !time) return;
    await axios.post("http://localhost:5000/api/timetable", {
      day, subject, time,
    });
    fetchTimetable();
    setDay(""); setSubject(""); setTime("");
  };

  const deleteTimetable = async (id) => {
    await axios.delete(`http://localhost:5000/api/timetable/${id}`);
    fetchTimetable();
  };

  // ================= UI =================
  return (
    <>
      <Navbar />
      <div className="admin-center">
        <div className="admin-card">

          <h2>Admin Dashboard</h2>

          <div className="admin-nav">
            <button onClick={() => setView("students")}>Students</button>
            <button onClick={() => setView("questions")}>Questions</button>
            <button onClick={() => setView("events")}>Events</button>
            <button onClick={() => setView("notices")}>Notices</button>
            <button onClick={() => setView("timetable")}>Timetable</button>
          </div>

          {/* STUDENTS */}
          {view === "students" && (
            <table>
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

          {/* QUESTIONS */}
          {view === "questions" && (
            <>
              <div className="form-section">
                <input
                  type="text"
                  placeholder="Enter question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Enter answer"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Enter keywords (comma separated)"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                />

                <button onClick={addQuestion}>Add Question</button>
              </div>

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
                        <button onClick={() => deleteQuestion(q._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {/* EVENTS */}
          {view === "events" && (
            <>
              <div className="form-section">
                <input
                  placeholder="Title"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                />
                <input
                  placeholder="Date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                />
                <input
                  placeholder="Description"
                  value={eventDesc}
                  onChange={(e) => setEventDesc(e.target.value)}
                />
                <button onClick={addEvent}>Add Event</button>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((e, i) => (
                    <tr key={e._id}>
                      <td>{i + 1}</td>
                      <td>{e.title}</td>
                      <td>{e.date}</td>
                      <td>{e.description}</td>
                      <td>
                        <button onClick={() => deleteEvent(e._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {/* NOTICES */}
          {view === "notices" && (
            <>
              <div className="form-section">
                <input
                  placeholder="Title"
                  value={noticeTitle}
                  onChange={(e) => setNoticeTitle(e.target.value)}
                />

                <textarea
                  placeholder="Content"
                  value={noticeContent}
                  onChange={(e) => setNoticeContent(e.target.value)}
                />

                <button onClick={addNotice}>Add Notice</button>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {notices.map((n, i) => (
                    <tr key={n._id}>
                      <td>{i + 1}</td>
                      <td>{n.title}</td>
                      <td>{n.content}</td>
                      <td>
                        <button onClick={() => deleteNotice(n._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {/* TIMETABLE */}
          {view === "timetable" && (
            <>
              <div className="form-section">
                <select
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                >
                  <option value="">Select Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                </select>

                <input
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />

                <input
                  placeholder="Time (10:00 - 11:00)"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />

                <button onClick={addTimetable}>Add</button>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Day</th>
                    <th>Subject</th>
                    <th>Time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {timetable.map((t, i) => (
                    <tr key={t._id}>
                      <td>{i + 1}</td>
                      <td>{t.day}</td>
                      <td>{t.subject}</td>
                      <td>{t.time}</td>
                      <td>
                        <button onClick={() => deleteTimetable(t._id)}>
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
      <Footer />
    </>
  );
};

export default AdminDashboard;