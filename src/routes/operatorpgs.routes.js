const express = require("express");
const router = express.Router();
const operatorpgsController = require("../controllers/operatorpgs.controller");

// CRUD Routes
router.get("/", operatorpgsController.getAll);
// router.get("/:id", operatorpgsController.getById);
// router.post("/", operatorpgsController.create);
// router.put("/:id", operatorpgsController.update);
// router.delete("/:id", operatorpgsController.remove);

module.exports = router;
