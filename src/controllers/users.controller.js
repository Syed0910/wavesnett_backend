const db = require('../config/database'); // your MySQL connection

// GET all users with userinfos
exports.getUsers = async (req, res) => {
  try {
    const query = `
      SELECT u.id, u.username, u.planName AS plan, u.startDate AS createdAt, u.expiryDate AS expiry,
             u.bill, u.status,
             ui.email, ui.phone, ui.alternatPhone, ui.contactPerson
      FROM users u
      LEFT JOIN userinfos ui ON u.id = ui.user_id
    `;

    const [rows] = await db.query(query);

    // Transform for frontend
    const formattedUsers = rows.map(user => ({
      id: user.id,
      username: user.username || 'N/A',
      name: user.username || 'N/A',
      plan: user.plan || 'No Plan',
      createdAt: user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A',
      expiry: user.expiry ? new Date(user.expiry).toLocaleDateString() : 'N/A',
      bill: user.bill || '₹0.00',
      status: user.status ? 'Enable' : 'Disable',
      email: user.email || 'N/A',
      phone: user.phone || 'N/A',
      alternatePhone: user.alternatePhone || 'N/A',
      contactPerson: user.contactPerson || 'N/A',
      account: 'Active',
      type: 'User',
      planGroup: ''
    }));

    res.json(formattedUsers);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Database error', details: err.message });
  }
};

// POST add a user (optional, unchanged)
exports.addUser = async (req, res) => {
  try {
    const data = req.body;
    const [result] = await db.query("INSERT INTO users SET ?", data);
    res.json({ message: 'User added', userId: result.insertId });
  } catch (err) {
    console.error('Error adding user:', err);
    res.status(500).json({ error: 'Failed to add user', details: err.message });
  }
};
