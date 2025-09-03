const Userpgs = require('../models/userpgs');
// getall userpgs function 
exports.getUserpgs = async (req, res) => {
  try {
    const userpgs = await Userpgs.findAll();

    console.log('Userpgs fetched:', userpgs.length);

    // Convert to plain objects if needed for response
    const result = userpgs.map(record => record.toJSON());

    res.json(result);
  } catch (error) {
    console.error('Error fetching userpgs:', error);

    const message = (error && error.message) ? error.message.toLowerCase() : '';
    const parentCode =
      (error && (error.parent || error.original) && (error.parent.code || error.original.code)) || null;

    const isTimeout = message.includes('etimedout') || parentCode === 'ETIMEDOUT';
    const isRefused = message.includes('refused') || parentCode === 'ECONNREFUSED';
    const isAuth = message.includes('password') || message.includes('authentication') || parentCode === '28P01';

    if (isTimeout || isRefused) {
      return res.status(503).json({
        error: 'Database unreachable',
        details: 'Could not connect to the database (ETIMEDOUT/ECONNREFUSED).',
        action: 'Check DB_HOST, DB_PORT, database server status, firewall/security groups, and DB_SSL if remote.',
      });
    }

    if (isAuth) {
      return res.status(401).json({
        error: 'Database authentication failed',
        details: 'Check DB_USER and DB_PASSWORD in .env, and ensure the DB user has access rights.',
      });
    }

    res.status(500).json({
      error: 'Database error occurred',
      details: error.message,
    });
  }
};


// // Get a single userpg record by ID
// exports.getUserpgById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const record = await Userpgs.findByPk(id);
//     if (!record) {
//       return res.status(404).json({ error: 'Userpg record not found' });
//     }
//     res.json(record);
//   } catch (error) {
//     console.error('Error fetching userpg by ID:', error);
//     res.status(500).json({ error: 'Database error occurred', details: error.message });
//   }
// };

// // Create a new userpg record
// exports.createUserpg = async (req, res) => {
//   try {
//     const newRecord = await Userpgs.create(req.body);
//     res.status(201).json(newRecord);
//   } catch (error) {
//     console.error('Error creating userpg record:', error);
//     res.status(400).json({ error: 'Failed to create record', details: error.message });
//   }
// };

// // Update a userpg record by ID
// exports.updateUserpg = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const [updated] = await Userpgs.update(req.body, { where: { id } });
//     if (!updated) {
//       return res.status(404).json({ error: 'Userpg record not found' });
//     }
//     const updatedRecord = await Userpgs.findByPk(id);
//     res.json(updatedRecord);
//   } catch (error) {
//     console.error('Error updating userpg record:', error);
//     res.status(400).json({ error: 'Failed to update record', details: error.message });
//   }
// };

// // Delete a userpg record by ID
// exports.deleteUserpg = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = await Userpgs.destroy({ where: { id } });
//     if (!deleted) {
//       return res.status(404).json({ error: 'Userpg record not found' });
//     }
//     res.json({ message: 'Record deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting userpg record:', error);
//     res.status(500).json({ error: 'Failed to delete record', details: error.message });
//   }
// };
