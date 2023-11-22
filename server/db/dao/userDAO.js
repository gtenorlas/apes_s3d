const db=require('../connection');

// Create
const createUser = async (user_level_id, email, password, preferred_alias, first_name, last_name, gender, line_id, fb_name) => {
  const query = {
    text:
      'INSERT INTO users (user_level_id, email, password, preferred_alias, first_name, last_name, gender, line_id, fb_name) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
    values: [user_level_id, email, password, preferred_alias, first_name, last_name, gender, line_id, fb_name],
  };

  const { rows } = await db.query(query);
  return rows[0];
};

// Read (Retrieve all users)
const getAllUsers = async () => {
  const query = 'SELECT * FROM users WHERE deleted_at IS NULL';
  const { rows } = await db.query(query);
  return rows;
};

// Read (Retrieve a specific user by ID)
const getUserById = async (id) => {
  const query = {
    text: 'SELECT * FROM users WHERE id = $1 AND deleted_at IS NULL',
    values: [id],
  };

  const { rows } = await db.query(query);
  return rows[0];
};

// Update
const updateUser = async (id, email, password, preferred_alias, first_name, last_name, gender, line_id, fb_name) => {
  const query = {
    text:
      'UPDATE users SET email = $2, password = $3, preferred_aliast = $4, first_name = $5, last_name = $6, gender = $7, line_id = $8, fb_name = $9, updated_at = NOW() WHERE id = $1 AND deleted_at IS NULL RETURNING *',
    values: [id, email, password, preferred_alias, first_name, last_name, gender, line_id, fb_name],
  };

  const { rows } = await db.query(query);
  return rows[0];
};

// Soft Delete (Update the 'deleted_at' column)
const deleteUser = async (id) => {
  const query = {
    text: 'UPDATE users SET deleted_at = NOW() WHERE id = $1 AND deleted_at IS NULL RETURNING *',
    values: [id],
  };

  const { rows } = await db.query(query);
  return rows[0];
};

// Read (Retrieve a user by email)
const getUserByEmail = async (email) => {
  const query = {
    text: 'SELECT * FROM users WHERE email = $1 AND deleted_at IS NULL',
    values: [email],
  };

  const { rows } = await db.query(query);
  return rows[0];
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByEmail, // Added getUserByEmail function
  updateUser,
  deleteUser,
};
