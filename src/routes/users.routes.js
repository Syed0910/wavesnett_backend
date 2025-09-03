const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');

// GET all users
router.get('/', userController.getUsers);

// POST add user (optional)
router.post('/', userController.addUser);

module.exports = router;
