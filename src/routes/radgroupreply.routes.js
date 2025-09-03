// routes/radgroupreply.routes.js
const express = require('express');
const router = express.Router();
const radgroupreplyController = require('../controllers/radgroupreply.controller');

// CRUD routes
router.post('/', radgroupreplyController.createRadGroupReply);
router.get('/', radgroupreplyController.getAllRadGroupReplies);
router.get('/:id', radgroupreplyController.getRadGroupReplyById);
router.put('/:id', radgroupreplyController.updateRadGroupReply);
router.delete('/:id', radgroupreplyController.deleteRadGroupReply);

module.exports = router;
