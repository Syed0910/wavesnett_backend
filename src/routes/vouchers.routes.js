const express = require("express");
const router = express.Router();
const voucherController = require("../controllers/vouchers.controller");

console.log("voucherController:", voucherController);
console.log("voucherController.getAll:", voucherController.getAll);


// CRUD
router.get("/", voucherController.getAll);
// router.get("/:id", voucherController.getById);
// router.post("/", voucherController.create);
// router.put("/:id", voucherController.update);
// router.delete("/:id", voucherController.remove);

// Custom
//router.get("/user/:userId", voucherController.getByUser);



module.exports = router;
