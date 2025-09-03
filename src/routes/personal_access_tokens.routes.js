// routes/personal_access_tokens.routes.js

const express = require('express');
const router = express.Router();

const personalAccessTokensController = require('../controllers/personal_access_tokens.controller');

router.get('/', personalAccessTokensController.getAll);
router.get('/:id', personalAccessTokensController.getById);
router.post('/', personalAccessTokensController.create);
router.put('/:id', personalAccessTokensController.update);
router.delete('/:id', personalAccessTokensController.delete);

module.exports = router;
