// routes/oltpons.routes.js
const express = require("express");
const router = express.Router();
const oltponsController = require("../controllers/oltpons.controller");

// CRUD
router.get("/", oltponsController.getAll);
// router.get("/:id", oltponsController.getById);
// router.post("/", oltponsController.create);
// router.put("/:id", oltponsController.update);
// router.delete("/:id", oltponsController.remove);

module.exports = router;
