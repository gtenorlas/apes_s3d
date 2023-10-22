const db=require('../connection');

// Create
const createUserLevel = async (name, description) => {
  const query = {
    text: 'INSERT INTO user_levels (name, description) VALUES ($1, $2) RETURNING *',
    values: [name, description],
  };

  const { rows } = await db.query(query);
  return rows[0];
};

// Read (Retrieve all user levels)
const getAllUserLevels = async () => {
  const query = 'SELECT * FROM user_levels';
  const { rows } = await db.query(query);
  return rows;
};

// Read (Retrieve a specific user level by ID)
const getUserLevelById = async (id) => {
  const query = {
    text: 'SELECT * FROM user_levels WHERE id = $1',
    values: [id],
  };

  const { rows } = await db.query(query);
  return rows[0];
};

// Update
const updateUserLevel = async (id, name, description) => {
  const query = {
    text: 'UPDATE user_levels SET name = $1, description = $2, updated_at = NOW() WHERE id = $3 RETURNING *',
    values: [name, description, id],
  };

  const { rows } = await db.query(query);
  return rows[0];
};

// Soft Delete (Update the 'deleted_at' column)
const deleteUserLevel = async (id) => {
  const query = {
    text: 'UPDATE user_levels SET deleted_at = NOW() WHERE id = $1 RETURNING *',
    values: [id],
  };

  const { rows } = await db.query(query);
  return rows[0];
};

// Example usage
const exampleUsage = async () => {
  try {
    const newUserLevel = await createUserLevel('Level 1', 'Description for Level 1');
    console.log('Created User Level:', newUserLevel);

    const allUserLevels = await getAllUserLevels();
    console.log('All User Levels:', allUserLevels);

    const userLevelById = await getUserLevelById(1);
    console.log('User Level with ID 1:', userLevelById);

    const updatedUserLevel = await updateUserLevel(1, 'Updated Level 1', 'Updated Description');
    console.log('Updated User Level:', updatedUserLevel);

    const deletedUserLevel = await deleteUserLevel(1);
    console.log('Soft Deleted User Level:', deletedUserLevel);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the database connection when done
    db.end();
  }
};

module.exports = {
  createUserLevel,
  getAllUserLevels,
  getUserLevelById,
  updateUserLevel,
  deleteUserLevel,
  exampleUsage
};
