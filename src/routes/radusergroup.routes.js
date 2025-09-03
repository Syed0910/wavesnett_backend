// routes/radusergroup.routes.js
const express = require('express');
const router = express.Router();
const radusergroupController = require('../controllers/radusergroup.controller');

// CRUD routes
router.post('/', radusergroupController.createRadUserGroup);
router.get('/', radusergroupController.getAllRadUserGroups);
router.get('/:id', radusergroupController.getRadUserGroupById);
router.put('/:id', radusergroupController.updateRadUserGroup);
router.delete('/:id', radusergroupController.deleteRadUserGroup);

module.exports = router;
