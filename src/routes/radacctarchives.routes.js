// routes/radacctarchives.routes.js

const express = require('express');
const router = express.Router();

const radacctarchivesController = require('../controllers/radacctarchives.controller');

router.get('/', radacctarchivesController.getAll);
router.get('/:radacctid', radacctarchivesController.getById);
router.post('/', radacctarchivesController.create);
router.put('/:radacctid', radacctarchivesController.update);
router.delete('/:radacctid', radacctarchivesController.delete);

module.exports = router;
