// src/routes/online.routes.js
const express = require("express");
const router = express.Router();
const onlineUsersController = require("../controllers/onlineusers.controller");

// GET /api/online-users
router.get("/users", onlineUsersController.getOnlineUsers);

module.exports = router;
