/*
 * All routes for user levels are defined here
 */

const express = require("express");
const app = express.Router();
const userLevelDao = require('./userLevelDao'); // Import the module containing CRUD functions


// Create a new user level
app.post('/api/userlevels', async (req, res) => {
  try {
    const { name, description } = req.body;
    const newUserLevel = await userLevelDao.createUserLevel(name, description);
    res.json(newUserLevel);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Retrieve all user levels
app.get('/api/userlevels', async (req, res) => {
  try {
    const userLevels = await userLevelDao.getAllUserLevels();
    res.json(userLevels);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Retrieve a specific user level by ID
app.get('/api/userlevels/:id', async (req, res) => {
  try {
    const userLevelId = parseInt(req.params.id);
    const userLevel = await userLevelDao.getUserLevelById(userLevelId);
    if (userLevel) {
      res.json(userLevel);
    } else {
      res.status(404).json({ error: 'User Level not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a user level by ID
app.put('/api/userlevels/:id', async (req, res) => {
  try {
    const userLevelId = parseInt(req.params.id);
    const { name, description } = req.body;
    const updatedUserLevel = await userLevelDao.updateUserLevel(userLevelId, name, description);
    if (updatedUserLevel) {
      res.json(updatedUserLevel);
    } else {
      res.status(404).json({ error: 'User Level not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Soft delete a user level by ID
app.delete('/api/userlevels/:id', async (req, res) => {
  try {
    const userLevelId = parseInt(req.params.id);
    const deletedUserLevel = await userLevelDao.deleteUserLevel(userLevelId);
    if (deletedUserLevel) {
      res.json(deletedUserLevel);
    } else {
      res.status(404).json({ error: 'User Level not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app;
