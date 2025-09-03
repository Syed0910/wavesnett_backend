// routes/slastatuses.routes.js

const express = require('express');
const router = express.Router();

const slastatusesController = require('../controllers/slastatuses.controller');

router.get('/', slastatusesController.getAll);
router.get('/:id', slastatusesController.getById);
router.post('/', slastatusesController.create);
router.put('/:id', slastatusesController.update);
router.delete('/:id', slastatusesController.delete);

module.exports = router;
