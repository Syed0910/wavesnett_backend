const express = require("express");
const router = express.Router();
const tr069Controller = require("../controllers/tr069diags.controller");

// Routes
router.get("/", tr069Controller.getAllDiags);
router.get("/:id", tr069Controller.getDiagById);
router.post("/", tr069Controller.createDiag);
router.put("/:id", tr069Controller.updateDiag);
router.delete("/:id", tr069Controller.deleteDiag);

module.exports = router;
