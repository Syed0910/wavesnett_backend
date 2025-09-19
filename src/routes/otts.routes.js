const express = require("express");
const router = express.Router();
const ottsController = require("../controllers/otts.controller");

router.get("/", ottsController.getAll);        // GET all OTTs
router.get("/:id", ottsController.getById);   // GET OTT by ID
router.post("/", ottsController.create);      // CREATE OTT
router.put("/:id", ottsController.update);    // UPDATE OTT
router.delete("/:id", ottsController.remove); // DELETE OTT

module.exports = router;
