// src/routes/activeRecords.routes.js
const express = require("express");
const router = express.Router();
const activeRecordsController = require("../controllers/activeRecords.controller");

router.get("/", activeRecordsController.getActiveRecords);

module.exports = router;
