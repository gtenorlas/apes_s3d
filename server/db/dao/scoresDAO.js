// Assuming we have a database module for connection
const db = require('../connection');

const ScoresDAO = {
  // Create a new score
  async createScore({ profile_id, war_id, score }) {
    const { rows } = await db.query(
      `INSERT INTO scores (profile_id, war_id, score)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [profile_id, war_id, score]
    );
    return rows[0];
  },

  // Read all scores
  async getAllScores() {
    const { rows } = await db.query(
      `SELECT * FROM scores WHERE deleted_at IS NULL`
    );
    return rows;
  },

  // Get a single score by ID
  async getScoreById(id) {
    const { rows } = await db.query(
      `SELECT * FROM scores WHERE id = $1 AND deleted_at IS NULL`,
      [id]
    );
    return rows[0];
  },

  // Update a score
  async updateScore(id, { profile_id, war_id, score }) {
    const { rows } = await db.query(
      `UPDATE scores
       SET profile_id = $1, war_id = $2, score = $3, updated_at = NOW()
       WHERE id = $4 AND deleted_at IS NULL
       RETURNING *`,
      [profile_id, war_id, score, id]
    );
    return rows[0];
  },

  // Soft delete a score by setting the deleted_at timestamp
  async deleteScore(id) {
    const { rows } = await db.query(
      `UPDATE scores SET deleted_at = NOW() WHERE id = $1 RETURNING *`,
      [id]
    );
    return rows[0];
  }
};

module.exports = ScoresDAO;
