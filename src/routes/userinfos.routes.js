// src/routes/userInfos.routes.js
const express = require("express");
const router = express.Router();
const userInfoController = require("../controllers/userInfos.controller");

// Routes
router.get("/", userInfoController.getAllUsers);
// router.get("/:id", userInfoController.getUserById);
// router.post("/", userInfoController.createUser);
// router.put("/:id", userInfoController.updateUser);


module.exports = router;
