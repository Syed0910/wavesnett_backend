// controllers/planinfos.controller.js
const PlanInfo = require("../models/planinfos");

// ✅ Get all plans
exports.getAllPlans = async (req, res) => {
  try {
    const plans = await PlanInfo.findAll();
    res.json(plans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get single plan by ID
exports.getPlanById = async (req, res) => {
  try {
    const plan = await PlanInfo.findByPk(req.params.id);
    if (!plan) return res.status(404).json({ message: "Plan not found" });
    res.json(plan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Create new plan
exports.createPlan = async (req, res) => {
  try {
    const newPlan = await PlanInfo.create(req.body);
    res.status(201).json(newPlan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ Update plan
exports.updatePlan = async (req, res) => {
  try {
    const plan = await PlanInfo.findByPk(req.params.id);
    if (!plan) return res.status(404).json({ message: "Plan not found" });

    await plan.update(req.body);
    res.json(plan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ Delete plan
exports.deletePlan = async (req, res) => {
  try {
    const plan = await PlanInfo.findByPk(req.params.id);
    if (!plan) return res.status(404).json({ message: "Plan not found" });

    await plan.destroy();
    res.json({ message: "Plan deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
