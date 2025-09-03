// routes/backprocesses.routes.js
const express = require('express');
const router = express.Router();

const backprocessesController = require('../controllers/backprocesses.controller');

router.get('/', backprocessesController.getAll);
router.get('/:id', backprocessesController.getById);
router.post('/', backprocessesController.create);
router.put('/:id', backprocessesController.update);
router.delete('/:id', backprocessesController.delete);

module.exports = router;
