// src/routes/userpgs.routes.js
const express = require('express');
const router = express.Router();
const userpgsController = require('../controllers/userpgs.controller');

// -------------------- USER PGS ROUTES -------------------- //

// GET all userpgs records
router.get('/', userpgsController.getUserpgs);

// // GET a single userpg record by ID
// router.get('/:id', userpgsController.getUserpgById);

// // CREATE a new userpg record
// router.post('/', userpgsController.createUserpg);

// // UPDATE a userpg record by ID
// router.put('/:id', userpgsController.updateUserpg);

// // DELETE a userpg record by ID
// router.delete('/:id', userpgsController.deleteUserpg);

module.exports = router;
