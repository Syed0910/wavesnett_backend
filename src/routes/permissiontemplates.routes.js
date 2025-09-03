// routes/permissiontemplates.routes.js

const express = require('express');
const router = express.Router();

const permissiontemplatesController = require('../controllers/permissiontemplates.controller');

router.get('/', permissiontemplatesController.getAll);
router.get('/:id', permissiontemplatesController.getById);
router.post('/', permissiontemplatesController.create);
router.put('/:id', permissiontemplatesController.update);
router.delete('/:id', permissiontemplatesController.delete);

module.exports = router;
