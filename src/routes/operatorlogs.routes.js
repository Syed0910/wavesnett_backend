// routes/operatorlogs.routes.js

const express = require('express');
const router = express.Router();

const operatorlogsController = require('../controllers/operatorlogs.controller');

router.get('/', operatorlogsController.getAll);
router.get('/:id', operatorlogsController.getById);
router.post('/', operatorlogsController.create);
router.put('/:id', operatorlogsController.update);
router.delete('/:id', operatorlogsController.delete);

module.exports = router;
