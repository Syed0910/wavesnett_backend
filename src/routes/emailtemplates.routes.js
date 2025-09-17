// src/routes/emailtemplates.routes.js
const express = require('express');
const router = express.Router();
const emailTemplatesController = require('../controllers/emailtemplates.controller');

router.get('/', emailTemplatesController.getAll);
router.get('/byName/:notifyName', emailTemplatesController.getByNotifyName); // 👈 NEW route
router.get('/:id', emailTemplatesController.getById);
router.post('/', emailTemplatesController.create);
router.put('/:id', emailTemplatesController.update);
router.delete('/:id', emailTemplatesController.delete);

module.exports = router;
