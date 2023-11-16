// Assuming we have a database module for connection
const db = require('./connection');

const WarsDAO = {
  // Create a new war entry
  async createWar({ group_id, start_date, end_date, number_of_days, month, thumbnail }) {
    const { rows } = await db.query(
      `INSERT INTO wars (group_id, start_date, end_date, number_of_days, month, thumbnail)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [group_id, start_date, end_date, number_of_days, month, thumbnail]
    );
    return rows[0];
  },

  // Read all war entries
  async getAllWars() {
    const { rows } = await db.query(
      `SELECT * FROM wars WHERE deleted_at IS NULL`
    );
    return rows;
  },

  // Get a single war by ID
  async getWarById(id) {
    const { rows } = await db.query(
      `SELECT * FROM wars WHERE id = $1 AND deleted_at IS NULL`,
      [id]
    );
    return rows[0];
  },

  // Update a war entry
  async updateWar(id, { group_id, start_date, end_date, number_of_days, month, thumbnail }) {
    const { rows } = await db.query(
      `UPDATE wars
       SET group_id = $1, start_date = $2, end_date = $3, number_of_days = $4, month = $5, thumbnail = $6, updated_at = NOW()
       WHERE id = $7 AND deleted_at IS NULL
       RETURNING *`,
      [group_id, start_date, end_date, number_of_days, month, thumbnail, id]
    );
    return rows[0];
  },

  // Soft delete a war entry by setting the deleted_at timestamp
  async deleteWar(id) {
    const { rows } = await db.query(
      `UPDATE wars SET deleted_at = NOW() WHERE id = $1 RETURNING *`,
      [id]
    );
    return rows[0];
  }
};

module.exports = WarsDAO;
