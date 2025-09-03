// routes/onumacs.routes.js
const express = require("express");
const router = express.Router();
const onumacsController = require("../controllers/onumacs.controller");

// CRUD
router.get("/", onumacsController.getAll);
// router.get("/:id", onumacsController.getById);
// router.post("/", onumacsController.create);
// router.put("/:id", onumacsController.update);
// router.delete("/:id", onumacsController.remove);

module.exports = router;
