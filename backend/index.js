const express = require('express')
const connectDB = require('./config/db');
const dotenv = require("dotenv");
dotenv.config();

const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');
const questionRoutes = require('./routes/questionRoutes');
const eventRoutes = require("./routes/events");
const noticeRoutes = require("./routes/notices");
const timetableRoutes = require("./routes/timetable");


const app = express()
const port = 5000

app.use(cors());
app.use(express.json());


connectDB();

app.use("/api/students", studentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/timetable", timetableRoutes);

const chatbotRoutes = require('./routes/chatbotRoutes');
app.use("/api/chatbot", chatbotRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
