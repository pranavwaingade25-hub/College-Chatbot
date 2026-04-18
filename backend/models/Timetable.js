const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema({
  std: String,
  day: String,
  subject: String,
  time: String,
});

module.exports = mongoose.model("Timetable", timetableSchema);