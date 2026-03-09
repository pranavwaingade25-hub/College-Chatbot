const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

router.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message.toLowerCase();

    const questions = await Question.find();

    for (let q of questions) {
      const keywords = q.keywords.toLowerCase().split(",");

      for (let key of keywords) {
        if (userMessage.includes(key.trim())) {
          return res.json({ reply: q.answer });
        }
      }
    }

    res.json({ reply: "Sorry, I don't understand your question." });
  } catch (err) {
    res.status(500).json({ reply: "Server error" });
  }
});

module.exports = router;
