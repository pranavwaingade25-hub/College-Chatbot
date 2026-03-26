const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullName: String,
  std : String, 
  email: String,
  contact: String,
  username: String,
  password: String,
});

module.exports = mongoose.model("students", studentSchema);
