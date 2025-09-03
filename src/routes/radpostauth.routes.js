// routes/radpostauth.routes.js
const express = require('express');
const router = express.Router();
const radpostauthController = require('../controllers/radpostauth.controller');

// CRUD routes
router.post('/', radpostauthController.createRadPostAuth);
router.get('/', radpostauthController.getAllRadPostAuth);
router.get('/:id', radpostauthController.getRadPostAuthById);
router.put('/:id', radpostauthController.updateRadPostAuth);
router.delete('/:id', radpostauthController.deleteRadPostAuth);

module.exports = router;
