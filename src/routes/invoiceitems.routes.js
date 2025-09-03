// routes/invoiceitems.routes.js

const express = require('express');
const router = express.Router();

const invoiceitemsController = require('../controllers/invoiceitems.controller');

router.get('/', invoiceitemsController.getAll);
router.get('/:id', invoiceitemsController.getById);
router.post('/', invoiceitemsController.create);
router.put('/:id', invoiceitemsController.update);
router.delete('/:id', invoiceitemsController.delete);

module.exports = router;
