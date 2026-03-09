const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username, password });
  if (!admin) {
    return res.status(401).json({ success: false });
  }

  res.json({ success: true });
});

module.exports = router;
