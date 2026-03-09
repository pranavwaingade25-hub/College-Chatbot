const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

/* ADD */
router.post("/", async (req, res) => {
  const q = new Question(req.body);
  await q.save();
  res.json(q);
});

/* GET */
router.get("/", async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
});

/* DELETE */
router.delete("/:id", async (req, res) => {
  await Question.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
