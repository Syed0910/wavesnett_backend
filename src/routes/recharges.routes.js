// routes/recharges.routes.js

const express = require('express');
const router = express.Router();

const rechargesController = require('../controllers/recharges.controller');

router.get('/', rechargesController.getAll);
router.get('/:id', rechargesController.getById);
router.post('/', rechargesController.create);
router.put('/:id', rechargesController.update);
router.delete('/:id', rechargesController.delete);

module.exports = router;
