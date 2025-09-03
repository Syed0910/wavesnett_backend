// controllers/documentController.js
const  Document  = require('../models/documents');

// Get all documents
exports.getAllDocuments = async (req, res) => {
  try {
    const docs = await Document.findAll();
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// // Get single document
// exports.getDocumentById = async (req, res) => {
//   try {
//     const doc = await Document.findByPk(req.params.id);
//     if (!doc) return res.status(404).json({ message: "Document not found" });
//     res.json(doc);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Create document
// exports.createDocument = async (req, res) => {
//   try {
//     const doc = await Document.create(req.body);
//     res.status(201).json(doc);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Update document
// exports.updateDocument = async (req, res) => {
//   try {
//     const [updated] = await Document.update(req.body, {
//       where: { id: req.params.id },
//     });
//     if (!updated) return res.status(404).json({ message: "Document not found" });
//     const updatedDoc = await Document.findByPk(req.params.id);
//     res.json(updatedDoc);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Delete document
// exports.deleteDocument = async (req, res) => {
//   try {
//     const deleted = await Document.destroy({ where: { id: req.params.id } });
//     if (!deleted) return res.status(404).json({ message: "Document not found" });
//     res.json({ message: "Document deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
