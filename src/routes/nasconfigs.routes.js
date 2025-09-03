// routes/nasconfigs.routes.js

const express = require('express');
const router = express.Router();

const nasconfigsController = require('../controllers/nasconfigs.controller');

router.get('/', nasconfigsController.getAll);
router.get('/:id', nasconfigsController.getById);
router.post('/', nasconfigsController.create);
router.put('/:id', nasconfigsController.update);
router.delete('/:id', nasconfigsController.delete);

module.exports = router;
