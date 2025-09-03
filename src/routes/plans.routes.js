// routes/plans.routes.js

const express = require('express');
const router = express.Router();

const plansController = require('../controllers/plans.controller');

router.get('/', plansController.getAll);
router.get('/:id', plansController.getById);
router.post('/', plansController.create);
router.put('/:id', plansController.update);
router.delete('/:id', plansController.delete);

module.exports = router;
