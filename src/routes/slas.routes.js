// routes/slas.routes.js

const express = require('express');
const router = express.Router();

const slasController = require('../controllers/slas.controller');

router.get('/', slasController.getAll);
router.get('/:id', slasController.getById);
router.post('/', slasController.create);
router.put('/:id', slasController.update);
router.delete('/:id', slasController.delete);

module.exports = router;
