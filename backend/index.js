const express = require('express')
const connectDB = require('./config/db');
//const dotenv = require("dotenv");
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');
const questionRoutes = require('./routes/questionRoutes');

const app = express()
const port = 5000

app.use(cors());
app.use(express.json());

// dotenv.config();
connectDB();

app.use("/api/students", studentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/questions", questionRoutes);

const chatbotRoutes = require('./routes/chatbotRoutes');
app.use("/api/chatbot", chatbotRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
