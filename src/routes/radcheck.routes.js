// routes/radcheck.routes.js
const express = require('express');
const router = express.Router();
const radcheckController = require('../controllers/radcheck.controller');

router.get('/', radcheckController.getAll);
// router.get('/:id', radcheckController.getById);
// router.post('/', radcheckController.create);
// router.put('/:id', radcheckController.update);
// router.delete('/:id', radcheckController.delete);

module.exports = router;
