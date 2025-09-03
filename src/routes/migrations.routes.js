// routes/migrations.routes.js

const express = require('express');
const router = express.Router();

const migrationsController = require('../controllers/migrations.controller');

router.get('/', migrationsController.getAll);
router.get('/:id', migrationsController.getById);
router.post('/', migrationsController.create);
router.put('/:id', migrationsController.update);
router.delete('/:id', migrationsController.delete);

module.exports = router;
