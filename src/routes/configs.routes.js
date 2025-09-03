// routes/configs.routes.js
const express = require('express');
const router = express.Router();

const configsController = require('../controllers/configs.controller');

router.get('/', configsController.getAll);
router.get('/:id', configsController.getById);
router.post('/', configsController.create);
router.put('/:id', configsController.update);
router.delete('/:id', configsController.delete);

module.exports = router;
