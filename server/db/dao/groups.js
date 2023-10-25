const db=require('../connection');

// Create
const createGroup = async (name, description) => {
  const query = {
    text: 'INSERT INTO groups (name, description) VALUES ($1, $2) RETURNING *',
    values: [name, description],
  };

  const { rows } = await db.query(query);
  return rows[0];
};

// Read (Retrieve all groups)
const getAllGroups = async () => {
  const query = 'SELECT * FROM groups WHERE deleted_at IS NULL';
  const { rows } = await db.query(query);
  return rows;
};

// Read (Retrieve a specific group by ID)
const getGroupById = async (id) => {
  const query = {
    text: 'SELECT * FROM groups WHERE id = $1 AND deleted_at IS NULL',
    values: [id],
  };

  const { rows } = await db.query(query);
  return rows[0];
};

// Update
const updateGroup = async (id, name, description) => {
  const query = {
    text: 'UPDATE groups SET name = $2, description = $3, updated_at = NOW() WHERE id = $1 AND deleted_at IS NULL RETURNING *',
    values: [id, name, description],
  };

  const { rows } = await db.query(query);
  return rows[0];
};

// Soft Delete (Update the 'deleted_at' column)
const deleteGroup = async (id) => {
  const query = {
    text: 'UPDATE groups SET deleted_at = NOW() WHERE id = $1 AND deleted_at IS NULL RETURNING *',
    values: [id],
  };

  const { rows } = await db.query(query);
  return rows[0];
};

module.exports = {
  createGroup,
  getAllGroups,
  getGroupById,
  updateGroup,
  deleteGroup,
};
