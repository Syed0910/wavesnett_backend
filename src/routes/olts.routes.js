// routes/olts.routes.js
const express = require("express");
const router = express.Router();
const oltsController = require("../controllers/olts.controller");

// CRUD
router.get("/", oltsController.getAll);
// router.get("/:id", oltsController.getById);
// router.post("/", oltsController.create);
// router.put("/:id", oltsController.update);
// router.delete("/:id", oltsController.remove);

module.exports = router;
