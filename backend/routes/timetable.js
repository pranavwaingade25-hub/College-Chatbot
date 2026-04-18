const express = require("express");
const router = express.Router();
const Timetable = require("../models/Timetable");

// GET
router.get("/", async (req, res) => {
  const data = await Timetable.find();
  res.json(data);
});

// POST
router.post("/", async (req, res) => {
  const newData = new Timetable(req.body);
  await newData.save();
  res.json(newData);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Timetable.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;