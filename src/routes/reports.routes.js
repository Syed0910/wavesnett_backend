// src/routes/reports.routes.js
const express = require("express");
const router = express.Router();
const reportsController = require("../controllers/reports.controller");

// GET /api/reports/online-users
router.get("/online-users", reportsController.getOnlineUsers);

module.exports = router;
