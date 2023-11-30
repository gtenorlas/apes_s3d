// Assuming we have a database module for connection
const db = require('../connection');

const AnnouncementsDAO = {
  // Create a new announcement
  async createAnnouncement({ users_id, userlevels_id, message }) {
    const { rows } = await db.query(
      `INSERT INTO announcements (users_id, userlevels_id, message)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [users_id, userlevels_id, message]
    );
    return rows[0];
  },

  // Read all announcements
  async getAllAnnouncements() {
    const { rows } = await db.query(
      `SELECT * FROM announcements WHERE deleted_at IS NULL`
    );
    return rows;
  },

  // Get a single announcement by ID
  async getAnnouncementById(id) {
    const { rows } = await db.query(
      `SELECT * FROM announcements WHERE id = $1 AND deleted_at IS NULL`,
      [id]
    );
    return rows[0];
  },

  // Update an announcement
  async updateAnnouncement(id, { users_id, userlevels_id, message }) {
    const { rows } = await db.query(
      `UPDATE announcements
       SET users_id = $1, userlevels_id = $2, message = $3, updated_at = NOW()
       WHERE id = $4 AND deleted_at IS NULL
       RETURNING *`,
      [users_id, userlevels_id, message, id]
    );
    return rows[0];
  },

  // Soft delete an announcement by setting the deleted_at timestamp
  async deleteAnnouncement(id) {
    const { rows } = await db.query(
      `UPDATE announcements SET deleted_at = NOW() WHERE id = $1 RETURNING *`,
      [id]
    );
    return rows[0];
  }
};

module.exports = AnnouncementsDAO;
