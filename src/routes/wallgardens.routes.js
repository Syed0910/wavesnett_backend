const express = require("express");
const router = express.Router();
const wallgardensController = require("../controllers/wallgardens.controller");

// Routes
router.get("/", wallgardensController.getAllWallGardens);
router.get("/:id", wallgardensController.getWallGardenById);
router.post("/", wallgardensController.createWallGarden);
router.put("/:id", wallgardensController.updateWallGarden);
router.delete("/:id", wallgardensController.deleteWallGarden);

module.exports = router;
