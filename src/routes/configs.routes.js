// routes/configs.routes.js
const express = require('express');
const router = express.Router();

const configsController = require('../controllers/configs.controller');

// CRUD routes
router.get('/', configsController.getAll);
router.get('/:id', configsController.getById);
router.post('/', configsController.create);
router.put('/:id', configsController.update);
router.delete('/:id', configsController.delete);

// Special configs
router.get('/mail/config', configsController.getMailConfig);

// Tax config
router.get('/tax/config', configsController.getTaxConfig);
router.put('/tax/config', configsController.updateTaxConfig);

// KYC config
router.get('/kyc/config', configsController.getKycConfig);
router.put('/kyc/config', configsController.updateKycConfig);

module.exports = router;
