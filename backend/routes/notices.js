const express = require("express");
const router = express.Router();
const Notice = require("../models/Notice");

// GET
router.get("/", async (req, res) => {
  const data = await Notice.find();
  res.json(data);
});

// POST
router.post("/", async (req, res) => {
  const newNotice = new Notice(req.body);
  await newNotice.save();
  res.json(newNotice);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Notice.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;