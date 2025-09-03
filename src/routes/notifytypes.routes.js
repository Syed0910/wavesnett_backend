// routes/notifytypes.routes.js
const express = require("express");
const router = express.Router();
const notifytypesController = require("../controllers/notifytypes.controller");

// CRUD
router.get("/", notifytypesController.getAll);
// router.get("/:id", notifytypesController.getById);
// router.post("/", notifytypesController.create);
// router.put("/:id", notifytypesController.update);
// router.delete("/:id", notifytypesController.remove);

module.exports = router;
