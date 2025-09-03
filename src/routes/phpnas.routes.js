// routes/phpnas.routes.js
const express = require('express');
const router = express.Router();

const phpnasController = require('../controllers/phpnas.controller');

router.get('/', phpnasController.getAll);
router.get('/:id', phpnasController.getById);
router.post('/', phpnasController.create);
router.put('/:id', phpnasController.update);
router.delete('/:id', phpnasController.delete);

module.exports = router;
