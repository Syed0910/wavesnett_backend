// routes/plangroups.routes.js

const express = require('express');
const router = express.Router();

const plangroupsController = require('../controllers/plangroups.controller');

router.get('/', plangroupsController.getAll);
router.get('/:id', plangroupsController.getById);
router.post('/', plangroupsController.create);
router.put('/:id', plangroupsController.update);
router.delete('/:id', plangroupsController.delete);

module.exports = router;
