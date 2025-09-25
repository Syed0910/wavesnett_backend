const express = require("express");
const router = express.Router();   // ✅ define router first

const invoicesController = require("../controllers/invoices.controller");

// Routes
router.get("/", invoicesController.getAll);
router.get("/:id", invoicesController.getById);
router.post("/", invoicesController.create);
router.put("/:id", invoicesController.update);
router.delete("/:id", invoicesController.delete);

module.exports = router;
