const express = require("express");
const router = express.Router();
const invoiceUserpgController = require("../controllers/invoiceUserpgController");

// New Tax Summary endpoint
router.get("/", invoiceUserpgController.getTaxSummary);

module.exports = router;
