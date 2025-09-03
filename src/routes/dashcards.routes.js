// routes/dashcards.routes.js
const express = require('express');
const router = express.Router();

const dashcardsController = require('../controllers/dashcards.controller');

router.get('/', dashcardsController.getAll);
router.get('/:id', dashcardsController.getById);
router.post('/', dashcardsController.create);
router.put('/:id', dashcardsController.update);
router.delete('/:id', dashcardsController.delete);

module.exports = router;
