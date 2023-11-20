// Assuming we have a database module for connection
const db = require('../connection');

const AccumulativeMatchesDAO = {
  // Create a new accumulative match
  async createAccumulativeMatch({ tournament_id, war_id, round }) {
    const { rows } = await db.query(
      `INSERT INTO accumulative_matches (tournament_id, war_id, round)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [tournament_id, war_id, round]
    );
    return rows[0];
  },

  // Read all accumulative matches
  async getAllAccumulativeMatches() {
    const { rows } = await db.query(
      `SELECT * FROM accumulative_matches WHERE deleted_at IS NULL`
    );
    return rows;
  },

  // Get a single accumulative match by ID
  async getAccumulativeMatchById(id) {
    const { rows } = await db.query(
      `SELECT * FROM accumulative_matches WHERE id = $1 AND deleted_at IS NULL`,
      [id]
    );
    return rows[0];
  },

  // Update an accumulative match
  async updateAccumulativeMatch(id, { tournament_id, war_id, round }) {
    const { rows } = await db.query(
      `UPDATE accumulative_matches
       SET tournament_id = $1, war_id = $2, round = $3, updated_at = NOW()
       WHERE id = $4 AND deleted_at IS NULL
       RETURNING *`,
      [tournament_id, war_id, round, id]
    );
    return rows[0];
  },

  // Soft delete an accumulative match by setting the deleted_at timestamp
  async deleteAccumulativeMatch(id) {
    const { rows } = await db.query(
      `UPDATE accumulative_matches SET deleted_at = NOW() WHERE id = $1 RETURNING *`,
      [id]
    );
    return rows[0];
  }
};

module.exports = AccumulativeMatchesDAO;
