// routes/bulkLots.routes.js
const express = require("express");
const { getAllBulkLots } = require("../controllers/bulkLots.controller");

const router = express.Router();

router.get("/", getAllBulkLots);

module.exports = router;
