// Assuming we have a database module for connection
const db=require('../connection');

const ProfilesDAO = {
  // Create a new profile
  async createProfile({ user_id, group_id, name, s3d_id, is_default }) {
    const { rows } = await db.query(
      `INSERT INTO profiles (user_id, group_id, name, s3d_id, is_default)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [user_id, group_id, name, s3d_id, is_default]
    );
    return rows[0];
  },

  // Read all profiles
  async getAllProfiles() {
    const { rows } = await db.query(
      `SELECT * FROM profiles WHERE deleted_at IS NULL`
    );
    return rows;
  },

  // Get a single profile by ID
  async getProfileById(id) {
    const { rows } = await db.query(
      `SELECT * FROM profiles WHERE id = $1 AND deleted_at IS NULL`,
      [id]
    );
    return rows[0];
  },

  // Update a profile
  async updateProfile(id, { name, group_id, s3d_id, is_default }) {
    const { rows } = await db.query(
      `UPDATE profiles
       SET name = $1, group_id = $2, s3d_id = $3, is_default = $4, updated_at = NOW()
       WHERE id = $5 AND deleted_at IS NULL
       RETURNING *`,
      [name, group_id, s3d_id, is_default, id]
    );
    return rows[0];
  },

  // Soft delete a profile by setting the deleted_at timestamp
  async deleteProfile(id) {
    const { rows } = await db.query(
      `UPDATE profiles SET deleted_at = NOW() WHERE id = $1 RETURNING *`,
      [id]
    );
    return rows[0];
  }
};

module.exports = ProfilesDAO;
