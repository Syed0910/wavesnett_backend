// controllers/subscriber.controller.js
const Subscriber = require('../models/subscriber');

// ✅ Create subscriber
exports.createSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.create(req.body);
    res.status(201).json(subscriber);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all subscribers
exports.getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.findAll();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get subscriber by ID
exports.getSubscriberById = async (req, res) => {
  try {
    const subscriber = await Subscriber.findByPk(req.params.id);
    if (!subscriber) return res.status(404).json({ error: 'Subscriber not found' });
    res.json(subscriber);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update subscriber
exports.updateSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.findByPk(req.params.id);
    if (!subscriber) return res.status(404).json({ error: 'Subscriber not found' });

    await subscriber.update(req.body);
    res.json(subscriber);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete subscriber
exports.deleteSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.findByPk(req.params.id);
    if (!subscriber) return res.status(404).json({ error: 'Subscriber not found' });

    await subscriber.destroy();
    res.json({ message: 'Subscriber deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
