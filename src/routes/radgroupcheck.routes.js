// routes/radgroupcheck.routes.js
const express = require('express');
const router = express.Router();
const radgroupcheckController = require('../controllers/radgroupcheck.controller');

// CRUD routes
router.post('/', radgroupcheckController.createRadGroupCheck);
router.get('/', radgroupcheckController.getAllRadGroupChecks);
router.get('/:id', radgroupcheckController.getRadGroupCheckById);
router.put('/:id', radgroupcheckController.updateRadGroupCheck);
router.delete('/:id', radgroupcheckController.deleteRadGroupCheck);

module.exports = router;
