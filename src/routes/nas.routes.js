const express = require("express");
const router = express.Router();
const nasController = require("../controllers/nas.controller"); // 👈 must exist

// CRUD routes
router.post("/", nasController.createNas);
router.get("/", nasController.getAllNas);
router.get("/:id", nasController.getNasById);
router.put("/:id", nasController.updateNas);
router.delete("/:id", nasController.deleteNas);

module.exports = router;
