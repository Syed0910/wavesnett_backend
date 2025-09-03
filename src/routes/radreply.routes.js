// routes/radreply.routes.js

const express = require('express');
const router = express.Router();

const radreplyController = require('../controllers/radreply.controller');

router.get('/', radreplyController.getAll);
router.get('/:id', radreplyController.getById);
router.post('/', radreplyController.create);
router.put('/:id', radreplyController.update);
router.delete('/:id', radreplyController.delete);

module.exports = router;
