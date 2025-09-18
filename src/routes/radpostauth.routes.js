// routes/radpostauth.routes.js
const express = require("express");
const router = express.Router();
const radpostauthController = require("../controllers/radpostauth.controller");

// List all connection attempts
router.get("/", radpostauthController.getAllRadPostAuth);

// CRUD
router.get("/:id", radpostauthController.getRadPostAuthById);
router.post("/", radpostauthController.createRadPostAuth);
router.put("/:id", radpostauthController.updateRadPostAuth);
router.delete("/:id", radpostauthController.deleteRadPostAuth);

module.exports = router;
