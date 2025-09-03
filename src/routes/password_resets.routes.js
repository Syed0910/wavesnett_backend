const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/password_resets.controller');

router.get('/', ctrl.getAll);
router.get('/:email', ctrl.getByEmail);
router.get('/:email/:token', ctrl.getOne);       // optional specific row
router.post('/', ctrl.create);
router.put('/:email/:token', ctrl.updateOne);    // update a specific row
router.delete('/:email/:token', ctrl.deleteOne); // delete a specific row

module.exports = router;
