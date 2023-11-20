// Assuming we have a database module for connection
const db = require('../connection');

const MatchesDAO = {
  // Create a new match
  async createMatch({ tournament_id, player1, player2, war_id, round, winner, loser }) {
    const { rows } = await db.query(
      `INSERT INTO matches (tournament_id, player1, player2, war_id, round, winner, loser)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [tournament_id, player1, player2, war_id, round, winner, loser]
    );
    return rows[0];
  },

  // Read all matches
  async getAllMatches() {
    const { rows } = await db.query(
      `SELECT * FROM matches WHERE deleted_at IS NULL`
    );
    return rows;
  },

  // Get a single match by ID
  async getMatchById(id) {
    const { rows } = await db.query(
      `SELECT * FROM matches WHERE id = $1 AND deleted_at IS NULL`,
      [id]
    );
    return rows[0];
  },

  // Update a match
  async updateMatch(id, { tournament_id, player1, player2, war_id, round, winner, loser }) {
    const { rows } = await db.query(
      `UPDATE matches
       SET tournament_id = $1, player1 = $2, player2 = $3, war_id = $4, round = $5, winner = $6, loser = $7, updated_at = NOW()
       WHERE id = $8 AND deleted_at IS NULL
       RETURNING *`,
      [tournament_id, player1, player2, war_id, round, winner, loser, id]
    );
    return rows[0];
  },

  // Soft delete a match by setting the deleted_at timestamp
  async deleteMatch(id) {
    const { rows } = await db.query(
      `UPDATE matches SET deleted_at = NOW() WHERE id = $1 RETURNING *`,
      [id]
    );
    return rows[0];
  }
};

module.exports = MatchesDAO;
