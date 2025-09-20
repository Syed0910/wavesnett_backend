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

// POST add a user
exports.addUser = async (req, res) => {
  try {
    console.log('Received user data:', req.body); // Debug log

    const {
      username,
      password,
      zone,
      discount,
      nasList,
      selectPlan,
      planGroup,
      simultaneousUse,
      ipAddress,
      generateInvoice,
      userType
    } = req.body;

    // Validate required fields
    if (!username || !username.trim()) {
      return res.status(400).json({ 
        error: 'Username is required' 
      });
    }

    if (!password || !password.trim()) {
      return res.status(400).json({ 
        error: 'Password is required' 
      });
    }

    // Check if username already exists
    const checkUserQuery = 'SELECT id FROM users WHERE username = ?';
    const [existingUsers] = await db.query(checkUserQuery, [username.trim()]);
    
    if (existingUsers.length > 0) {
      return res.status(400).json({ 
        error: 'Username already exists' 
      });
    }

    // Map userType to numeric value
    let userTypeValue = 1;
    switch (userType) {
      case 'User':
        userTypeValue = 1;
        break;
      case 'Mac / Static IP':
        userTypeValue = 2;
        break;
      case 'Multiple Static IP':
        userTypeValue = 3;
        break;
      default:
        userTypeValue = 1;
    }

    // Prepare user data for database
    const userData = {
      username: username.trim(),
      password: password,
      zoneName: zone || 'admin',
      discount: discount || '0',
      simUse: parseInt(simultaneousUse) || 1,
      userType: userTypeValue,
      portalLogin: true,
      autoInvoice: generateInvoice === true,
      status: false, // Default to disabled
      suspend: false,
      operator_id: 1, // You may need to get this from session/auth
      created_at: new Date(),
      updated_at: new Date()
    };

    // Handle MAC/IP address based on user type
    if (userType === 'Mac / Static IP' && ipAddress) {
      userData.mac = ipAddress.trim();
    }

    // Add plan information if provided
    if (selectPlan && selectPlan.trim()) {
      userData.planName = selectPlan.trim();
      // You might want to fetch plan_id from plans table based on selectPlan
      // const planQuery = 'SELECT id FROM plans WHERE name = ?';
      // const [planResult] = await db.query(planQuery, [selectPlan]);
      // if (planResult.length > 0) userData.plan_id = planResult[0].id;
    }

    if (planGroup && planGroup.trim()) {
      userData.planGroup = planGroup.trim();
      // You might want to fetch plangroup_id from plangroups table based on planGroup
      // const groupQuery = 'SELECT id FROM plangroups WHERE name = ?';
      // const [groupResult] = await db.query(groupQuery, [planGroup]);
      // if (groupResult.length > 0) userData.plangroup_id = groupResult[0].id;
    }

    console.log('Prepared user data for database:', userData); // Debug log

    // Insert user into database
    const insertQuery = 'INSERT INTO users SET ?';
    const [result] = await db.query(insertQuery, userData);

    console.log('User created with ID:', result.insertId); // Debug log

    // If you need to handle IP addresses separately (for Multiple Static IP case)
    if (userType === 'Multiple Static IP' && ipAddress) {
      // You might want to insert multiple IP addresses into a separate table
      const ipList = ipAddress.split(',').map(ip => ip.trim()).filter(ip => ip);
      // Insert logic for multiple IPs if needed
      console.log('Multiple IPs to handle:', ipList);
    }

    res.status(201).json({ 
      success: true,
      message: 'User added successfully', 
      user: {
        id: result.insertId,
        username: username.trim(),
        userType: userType,
        zone: zone
      }
    });

  } catch (err) {
    console.error('Error adding user:', err);
    res.status(500).json({ 
      error: 'Failed to add user', 
      details: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
};