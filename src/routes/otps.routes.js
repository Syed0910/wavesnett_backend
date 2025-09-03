const express = require("express");
const router = express.Router();
const otpsController = require("../controllers/otps.controller");

// CRUD Routes
router.get("/", otpsController.getAll);
// router.get("/:id", otpsController.getById);
// router.post("/", otpsController.create);
// router.put("/:id", otpsController.update);
// router.delete("/:id", otpsController.remove);

module.exports = router;
