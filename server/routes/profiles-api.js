const express = require('express');
const ProfilesDAO = require('../dao/DAO'); // Path to your ProfilesDAO module
const router = express.Router();

// POST route to CREATE a new profile
router.post('/', async (req, res) => {
  try {
    const newProfile = await ProfilesDAO.createProfile(req.body);
    res.status(201).json(newProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET route to READ all profiles
router.get('/', async (req, res) => {
  try {
    const allProfiles = await ProfilesDAO.getAllProfiles();
    res.json(allProfiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET route to READ a single profile by ID
router.get('/:id', async (req, res) => {
  try {
    const profile = await ProfilesDAO.getProfileById(req.params.id);
    if (!profile) {
      return res.status(404).send('Profile not found');
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// PUT route to UPDATE a profile
router.put('/:id', async (req, res) => {
  try {
    const updatedProfile = await ProfilesDAO.updateProfile(req.params.id, req.body);
    if (!updatedProfile) {
      return res.status(404).send('Profile not found');
    }
    res.json(updatedProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// DELETE route for soft DELETING a profile
router.delete('/:id', async (req, res) => {
  try {
    const deletedProfile = await ProfilesDAO.deleteProfile(req.params.id);
    if (!deletedProfile) {
      return res.status(404).send('Profile not found');
    }
    res.json({ message: 'Profile deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
