// routes/parentchilds.routes.js

const express = require('express');
const router = express.Router();

const parentchildsController = require('../controllers/parentchilds.controller');

router.get('/', parentchildsController.getAll);
router.get('/:id', parentchildsController.getById);
router.post('/', parentchildsController.create);
router.put('/:id', parentchildsController.update);
router.delete('/:id', parentchildsController.delete);

module.exports = router;
