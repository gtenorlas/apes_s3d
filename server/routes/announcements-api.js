const express = require('express');
const AnnouncementsDAO = require('../db/dao/DAO'); // Path to your AnnouncementsDAO module
const router = express.Router();

// POST route to CREATE a new announcement
router.post('/', async (req, res) => {
  try {
    const newAnnouncement = await AnnouncementsDAO.createAnnouncement(req.body);
    res.status(201).json(newAnnouncement);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET route to READ all announcements
router.get('/', async (req, res) => {
  try {
    const allAnnouncements = await AnnouncementsDAO.getAllAnnouncements();
    res.json(allAnnouncements);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET route to READ a single announcement by ID
router.get('/:id', async (req, res) => {
  try {
    const announcement = await AnnouncementsDAO.getAnnouncementById(req.params.id);
    if (!announcement) {
      return res.status(404).send('Announcement not found');
    }
    res.json(announcement);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// PUT route to UPDATE an announcement
router.put('/:id', async (req, res) => {
  try {
    const updatedAnnouncement = await AnnouncementsDAO.updateAnnouncement(req.params.id, req.body);
    if (!updatedAnnouncement) {
      return res.status(404).send('Announcement not found');
    }
    res.json(updatedAnnouncement);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// DELETE route for soft DELETING an announcement
router.delete('/:id', async (req, res) => {
  try {
    const deletedAnnouncement = await AnnouncementsDAO.deleteAnnouncement(req.params.id);
    if (!deletedAnnouncement) {
      return res.status(404).send('Announcement not found');
    }
    res.json({ message: 'Announcement deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
