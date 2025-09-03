// routes/receipts.routes.js

const express = require('express');
const router = express.Router();

const receiptsController = require('../controllers/receipts.controller');

router.get('/', receiptsController.getAll);
router.get('/:id', receiptsController.getById);
router.post('/', receiptsController.create);
router.put('/:id', receiptsController.update);
router.delete('/:id', receiptsController.delete);

module.exports = router;
