const Voucher = require("../models/vouchers");

module.exports = {
  async getAll(req, res) {
    try {
      const vouchers = await Voucher.findAll();
      res.json(vouchers);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // Uncomment these when you’re ready to use them 👇
  // async getById(req, res) {
  //   try {
  //     const voucher = await Voucher.findByPk(req.params.id);
  //     if (!voucher) return res.status(404).json({ message: "Voucher not found" });
  //     res.json(voucher);
  //   } catch (err) {
  //     res.status(500).json({ error: err.message });
  //   }
  // },

  // async create(req, res) {
  //   try {
  //     const voucher = await Voucher.create(req.body);
  //     res.status(201).json(voucher);
  //   } catch (err) {
  //     res.status(400).json({ error: err.message });
  //   }
  // },

  // async update(req, res) {
  //   try {
  //     const voucher = await Voucher.findByPk(req.params.id);
  //     if (!voucher) return res.status(404).json({ message: "Voucher not found" });
  //     await voucher.update(req.body);
  //     res.json(voucher);
  //   } catch (err) {
  //     res.status(400).json({ error: err.message });
  //   }
  // },

  // async remove(req, res) {
  //   try {
  //     const voucher = await Voucher.findByPk(req.params.id);
  //     if (!voucher) return res.status(404).json({ message: "Voucher not found" });
  //     await voucher.destroy();
  //     res.json({ message: "Voucher deleted" });
  //   } catch (err) {
  //     res.status(500).json({ error: err.message });
  //   }
  // },

  // async getByUser(req, res) {
  //   try {
  //     const vouchers = await Voucher.findAll({ where: { user_id: req.params.userId } });
  //     res.json(vouchers);
  //   } catch (err) {
  //     res.status(500).json({ error: err.message });
  //   }
  // },
};
