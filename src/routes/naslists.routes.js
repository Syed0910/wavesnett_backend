// routes/naslists.routes.js

const express = require('express');
const router = express.Router();

const naslistsController = require('../controllers/naslists.controller');

router.get('/', naslistsController.getAll);
router.get('/:id', naslistsController.getById);
router.post('/', naslistsController.create);
router.put('/:id', naslistsController.update);
router.delete('/:id', naslistsController.delete);

module.exports = router;
