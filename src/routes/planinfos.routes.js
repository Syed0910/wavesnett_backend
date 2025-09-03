// routes/planinfos.routes.js
const express = require("express");
const router = express.Router();
const planInfosController = require("../controllers/planinfos.controller");

// ✅ CRUD Routes
router.get("/", planInfosController.getAllPlans);
router.get("/:id", planInfosController.getPlanById);
router.post("/", planInfosController.createPlan);
router.put("/:id", planInfosController.updatePlan);
router.delete("/:id", planInfosController.deletePlan);

module.exports = router;
