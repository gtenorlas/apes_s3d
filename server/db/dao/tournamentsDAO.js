// Assuming we have a database module for connection
const db = require('../connection');

const TournamentsDAO = {
  // Create a new tournament
  async createTournament({ start_date, end_date, description, title, prizes, sponsors, tournament_type_id, thumbnail, winner, runner_up }) {
    const { rows } = await db.query(
      `INSERT INTO tournaments (start_date, end_date, description, title, prizes, sponsors, tournament_type_id, thumbnail, winner, runner_up)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       RETURNING *`,
      [start_date, end_date, description, title, prizes, sponsors, tournament_type_id, thumbnail, winner, runner_up]
    );
    return rows[0];
  },

  // Read all tournaments
  async getAllTournaments() {
    const { rows } = await db.query(
      `SELECT * FROM tournaments WHERE deleted_at IS NULL`
    );
    return rows;
  },

  // Get a single tournament by ID
  async getTournamentById(id) {
    const { rows } = await db.query(
      `SELECT * FROM tournaments WHERE id = $1 AND deleted_at IS NULL`,
      [id]
    );
    return rows[0];
  },

  // Update a tournament
  async updateTournament(id, { start_date, end_date, description, title, prizes, sponsors, tournament_type_id, thumbnail, winner, runner_up }) {
    const { rows } = await db.query(
      `UPDATE tournaments
       SET start_date = $1, end_date = $2, description = $3, title = $4, prizes = $5, sponsors = $6, tournament_type_id = $7, thumbnail = $8, winner = $9, runner_up = $10, updated_at = NOW()
       WHERE id = $11 AND deleted_at IS NULL
       RETURNING *`,
      [start_date, end_date, description, title, prizes, sponsors, tournament_type_id, thumbnail, winner, runner_up, id]
    );
    return rows[0];
  },

  // Soft delete a tournament by setting the deleted_at timestamp
  async deleteTournament(id) {
    const { rows } = await db.query(
      `UPDATE tournaments SET deleted_at = NOW() WHERE id = $1 RETURNING *`,
      [id]
    );
    return rows[0];
  }
};

module.exports = TournamentsDAO;
