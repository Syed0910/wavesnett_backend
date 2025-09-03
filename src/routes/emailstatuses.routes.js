// routes/emailstatuses.routes.js
const express = require('express');
const router = express.Router();
const emailstatusesController = require('../controllers/emailstatuses.controller');

router.get('/', emailstatusesController.getAll);
router.get('/:id', emailstatusesController.getById);
router.post('/', emailstatusesController.create);
router.put('/:id', emailstatusesController.update);
router.delete('/:id', emailstatusesController.delete);

module.exports = router;