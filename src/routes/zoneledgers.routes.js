// routes/zoneledgers.routes.js
const express = require('express');
const router = express.Router();
const zoneledgersController = require('../controllers/zoneledgers.controller');

router.get('/', zoneledgersController.getAll);
router.get('/:id', zoneledgersController.getById);
router.post('/', zoneledgersController.create);
router.put('/:id', zoneledgersController.update);
router.delete('/:id', zoneledgersController.delete);

module.exports = router;
