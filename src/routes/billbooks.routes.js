// routes/billbooks.routes.js
const express = require('express');
const router = express.Router();

const billbooksController = require('../controllers/billbooks.controller');

router.get('/', billbooksController.getAll);
router.get('/:id', billbooksController.getById);
router.post('/', billbooksController.create);
router.put('/:id', billbooksController.update);
router.delete('/:id', billbooksController.delete);

module.exports = router;
