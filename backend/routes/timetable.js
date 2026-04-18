const express = require("express");
const router = express.Router();
const Timetable = require("../models/Timetable");

// ✅ GET ALL
router.get("/", async (req, res) => {
  const data = await Timetable.find();
  res.json(data);
});

// ✅ GET BY STD
router.get("/:std", async (req, res) => {
  const data = await Timetable.find({ std: req.params.std });
  res.json(data);
});

// ✅ ADD
router.post("/", async (req, res) => {
  const newData = new Timetable(req.body);
  await newData.save();
  res.json(newData);
});

// ✅ DELETE
router.delete("/:id", async (req, res) => {
  await Timetable.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// 🔥 IMPORTANT → ADD THIS (for update)
router.put("/:id", async (req, res) => {
  const updated = await Timetable.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

module.exports = router;