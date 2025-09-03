// routes/radacct.routes.js

const express = require('express');
const router = express.Router();

const radacctController = require('../controllers/radacct.controller');

router.get('/', radacctController.getAll);
router.get('/:radacctid', radacctController.getById);
router.post('/', radacctController.create);
router.put('/:radacctid', radacctController.update);
router.delete('/:radacctid', radacctController.delete);

module.exports = router;
