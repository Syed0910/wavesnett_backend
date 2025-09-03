// routes/ledgertypes.routes.js

const express = require('express');
const router = express.Router();

const ledgertypesController = require('../controllers/ledgertypes.controller');

router.get('/', ledgertypesController.getAll);
router.get('/:id', ledgertypesController.getById);
router.post('/', ledgertypesController.create);
router.put('/:id', ledgertypesController.update);
router.delete('/:id', ledgertypesController.delete);

module.exports = router;
