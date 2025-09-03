const express = require("express");
const router = express.Router();
const statsController = require("../controllers/websockets_statistics_entries.controller");

// Routes
router.get("/", statsController.getAllEntries);
router.get("/:id", statsController.getEntryById);
router.post("/", statsController.createEntry);
router.put("/:id", statsController.updateEntry);
router.delete("/:id", statsController.deleteEntry);

module.exports = router;
