// routes/phpnastasks.routes.js
const express = require('express');
const router = express.Router();

const phpnastasksController = require('../controllers/phpnastasks.controller');

router.get('/', phpnastasksController.getAll);
router.get('/:id', phpnastasksController.getById);
router.post('/', phpnastasksController.create);
router.put('/:id', phpnastasksController.update);
router.delete('/:id', phpnastasksController.delete);

module.exports = router;
