// routes/operators.routes.js
const express = require("express");
const router = express.Router();
const operatorsController = require("../controllers/operators.controller");

// CRUD routes
router.get("/", operatorsController.getAll);
// router.get("/:id", operatorsController.getById);
// router.post("/", operatorsController.create);
// router.put("/:id", operatorsController.update);
// router.delete("/:id", operatorsController.remove);

module.exports = router;
