const Otp = require("../models/otps");

// Get all OTPs
exports.getAll = async (req, res) => {
  try {
    const data = await Otp.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get OTP by ID
// exports.getById = async (req, res) => {
//   try {
//     const item = await Otp.findByPk(req.params.id);
//     if (!item) return res.status(404).json({ error: "OTP not found" });
//     res.json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Create OTP
// exports.create = async (req, res) => {
//   try {
//     const item = await Otp.create(req.body);
//     res.status(201).json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Update OTP
// exports.update = async (req, res) => {
//   try {
//     const item = await Otp.findByPk(req.params.id);
//     if (!item) return res.status(404).json({ error: "OTP not found" });

//     await item.update(req.body);
//     res.json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Delete OTP
// exports.remove = async (req, res) => {
//   try {
//     const item = await Otp.findByPk(req.params.id);
//     if (!item) return res.status(404).json({ error: "OTP not found" });

//     await item.destroy();
//     res.json({ message: "Deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
