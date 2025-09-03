// routes/kycs.routes.js

const express = require('express');
const router = express.Router();

const kycsController = require('../controllers/kycs.controller');

router.get('/', kycsController.getAll);
router.get('/:id', kycsController.getById);
router.post('/', kycsController.create);
router.put('/:id', kycsController.update);
router.delete('/:id', kycsController.delete);

module.exports = router;
