const express = require("express");
const router = express.Router();

const invoicesController = require("../controllers/invoices.controller");

router.get("/", invoicesController.getAll);
router.get("/:id", invoicesController.getById);
router.post("/", invoicesController.create);
router.put("/:id", invoicesController.update);
router.delete("/:id", invoicesController.delete);

module.exports = router;
