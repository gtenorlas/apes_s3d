// Assuming we have a database module for connection
const db = require('../connection');

const PlayersDAO = {
  // Create a new player
  async createPlayer({ tournament_id, user_id, profile_id }) {
    const { rows } = await db.query(
      `INSERT INTO players (tournament_id, user_id, profile_id)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [tournament_id, user_id, profile_id]
    );
    return rows[0];
  },

  // Read all players
  async getAllPlayers() {
    const { rows } = await db.query(
      `SELECT * FROM players WHERE deleted_at IS NULL`
    );
    return rows;
  },

  // Get a single player by ID
  async getPlayerById(id) {
    const { rows } = await db.query(
      `SELECT * FROM players WHERE id = $1 AND deleted_at IS NULL`,
      [id]
    );
    return rows[0];
  },

  // Update a player
  async updatePlayer(id, { tournament_id, user_id, profile_id }) {
    const { rows } = await db.query(
      `UPDATE players
       SET tournament_id = $1, user_id = $2, profile_id = $3, updated_at = NOW()
       WHERE id = $4 AND deleted_at IS NULL
       RETURNING *`,
      [tournament_id, user_id, profile_id, id]
    );
    return rows[0];
  },

  // Soft delete a player by setting the deleted_at timestamp
  async deletePlayer(id) {
    const { rows } = await db.query(
      `UPDATE players SET deleted_at = NOW() WHERE id = $1 RETURNING *`,
      [id]
    );
    return rows[0];
  }
};

module.exports = PlayersDAO;
