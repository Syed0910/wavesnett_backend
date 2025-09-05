// routes/userDetails.routes.js
const express = require("express");
const router = express.Router();
const userDetailsController = require("../controllers/userDetails.controller");

// GET all users
router.get("/", userDetailsController.getAllUserDetails);

// GET userdetails by ID
router.get("/:id", userDetailsController.getUserDetailsById);

module.exports = router;
