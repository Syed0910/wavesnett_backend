// routes/netdiags.routes.js
const express = require('express');
const router = express.Router();

const netdiagsController = require('../controllers/netdiags.controller');

router.get('/', netdiagsController.getAll);
router.get('/:id', netdiagsController.getById);
router.post('/', netdiagsController.create);
router.put('/:id', netdiagsController.update);
router.delete('/:id', netdiagsController.delete);

module.exports = router;
