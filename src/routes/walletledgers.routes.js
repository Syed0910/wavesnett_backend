// routes/walletledgers.routes.js
const express = require("express");
const router = express.Router();
const walletledgersController = require("../controllers/walletledgers.controller");

// CRUD
router.get("/", walletledgersController.getAll);
// router.get("/:id", walletledgersController.getById);
// router.post("/", walletledgersController.create);
// router.put("/:id", walletledgersController.update);
// router.delete("/:id", walletledgersController.remove);

// Custom
//router.get("/operator/:operatorId", walletledgersController.getByOperator);

module.exports = router;
