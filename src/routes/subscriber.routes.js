// routes/subscriber.routes.js
const express = require('express');
const router = express.Router();
const subscriberController = require('../controllers/subscriber.controller');

// CRUD routes
router.post('/', subscriberController.createSubscriber);
router.get('/', subscriberController.getAllSubscribers);
router.get('/:id', subscriberController.getSubscriberById);
router.put('/:id', subscriberController.updateSubscriber);
router.delete('/:id', subscriberController.deleteSubscriber);

module.exports = router;
