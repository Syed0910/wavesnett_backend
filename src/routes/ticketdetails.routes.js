const express = require("express");
const router = express.Router();
const ticketDetailsController = require("../controllers/ticketdetails.controller");

// Routes
router.get("/", ticketDetailsController.getAllTicketDetails);
router.get("/:id", ticketDetailsController.getTicketDetailById);
router.post("/", ticketDetailsController.createTicketDetail);
router.put("/:id", ticketDetailsController.updateTicketDetail);
router.delete("/:id", ticketDetailsController.deleteTicketDetail);

module.exports = router;
