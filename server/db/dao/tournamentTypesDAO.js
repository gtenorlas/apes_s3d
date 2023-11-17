// Assuming we have a database module for connection
const db = require('../connection');

const TournamentTypesDAO = {
  // Create a new tournament type
  async createTournamentType({ title, description }) {
    const { rows } = await db.query(
      `INSERT INTO tournament_types (title, description)
       VALUES ($1, $2)
       RETURNING *`,
      [title, description]
    );
    return rows[0];
  },

  // Read all tournament types
  async getAllTournamentTypes() {
    const { rows } = await db.query(
      `SELECT * FROM tournament_types WHERE deleted_at IS NULL`
    );
    return rows;
  },

  // Get a single tournament type by ID
  async getTournamentTypeById(id) {
    const { rows } = await db.query(
      `SELECT * FROM tournament_types WHERE id = $1 AND deleted_at IS NULL`,
      [id]
    );
    return rows[0];
  },

  // Update a tournament type
  async updateTournamentType(id, { title, description }) {
    const { rows } = await db.query(
      `UPDATE tournament_types
       SET title = $1, description = $2, updated_at = NOW()
       WHERE id = $3 AND deleted_at IS NULL
       RETURNING *`,
      [title, description, id]
    );
    return rows[0];
  },

  // Soft delete a tournament type by setting the deleted_at timestamp
  async deleteTournamentType(id) {
    const { rows } = await db.query(
      `UPDATE tournament_types SET deleted_at = NOW() WHERE id = $1 RETURNING *`,
      [id]
    );
    return rows[0];
  }
};

module.exports = TournamentTypesDAO;
