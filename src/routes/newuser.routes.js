// routes/users.routes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/newuser.controller");

// User CRUD operations
router.post("/", controller.createUser);           // POST /api/users
router.get("/", controller.getUsers);              // GET /api/users  
router.get("/:id", controller.getUserById);        // GET /api/users/:id

// Data for dropdowns
router.get("/data/plans", controller.getPlans);         // GET /api/users/data/plans
router.get("/data/nas", controller.getNas);             // GET /api/users/data/nas  
router.get("/data/plangroups", controller.getPlanGroups); // GET /api/users/data/plangroups
router.get("/zones", controller.getZones);        // GET /zones

module.exports = router;