const { getBulkLots } = require("../models/bulkLots.model.js");

exports.getAllBulkLots = async (req, res) => {
  try {
    const bulkLots = await getBulkLots();
    res.json(bulkLots);
  } catch (error) {
    console.error("Error fetching bulk lots:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
