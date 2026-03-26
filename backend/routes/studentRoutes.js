const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

/* REGISTER */
router.post("/register", async (req, res) => {
  const { fullName, std, email, contact, username, password } = req.body;

  const exists = await Student.findOne({ username });
  if (exists) {
    return res.status(400).json({ message: "Username already exists" });
  }

  const student = new Student({
    fullName,
    std,
    email,
    contact,
    username,
    password,
  });

  await student.save();
  res.json({ message: "Student registered" });
});

/* LOGIN */
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const student = await Student.findOne({ username, password });
  if (!student) {
    return res.status(401).json({ success: false });
  }

  res.json({ success: true, student });
});

/* GET ALL STUDENTS */
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

module.exports = router;
