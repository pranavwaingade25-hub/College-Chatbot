const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: String,
  answer: String,
  keywords: String,
});

module.exports = mongoose.model("questions", questionSchema);
