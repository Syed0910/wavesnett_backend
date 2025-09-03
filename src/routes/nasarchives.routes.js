// routes/nasarchives.routes.js

const express = require('express');
const router = express.Router();

const nasarchivesController = require('../controllers/nasarchives.controller');

router.get('/', nasarchivesController.getAll);
router.get('/:id', nasarchivesController.getById);
router.post('/', nasarchivesController.create);
router.put('/:id', nasarchivesController.update);
router.delete('/:id', nasarchivesController.delete);

module.exports = router;
