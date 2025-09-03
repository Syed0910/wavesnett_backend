// routes/staticips.routes.js
const express = require('express');
const router = express.Router();
const staticipsController = require('../controllers/staticips.controller');

// CRUD routes
router.post('/', staticipsController.createStaticIp);
router.get('/', staticipsController.getAllStaticIps);
router.get('/:id', staticipsController.getStaticIpById);
router.put('/:id', staticipsController.updateStaticIp);
router.delete('/:id', staticipsController.deleteStaticIp);

module.exports = router;
