// routes/documentRoutes.js
const express = require("express");
const router = express.Router();
const documentController = require("../controllers/documents.controller");

router.get("/", documentController.getAllDocuments);
// router.get("/:id", documentController.getDocumentById);
// router.post("/", documentController.createDocument);
// router.put("/:id", documentController.updateDocument);
// router.delete("/:id", documentController.deleteDocument);

module.exports = router;
