const express = require('express');
const PlayersDAO = require('../db/dao/playersDAO'); // Path to your PlayersDAO module
const router = express.Router();

// POST route to CREATE a new player
router.post('/', async (req, res) => {
  try {
    const newPlayer = await PlayersDAO.createPlayer(req.body);
    res.status(201).json(newPlayer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET route to READ all players
router.get('/', async (req, res) => {
  try {
    const allPlayers = await PlayersDAO.getAllPlayers();
    res.json(allPlayers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET route to READ a single player by ID
router.get('/:id', async (req, res) => {
  try {
    const player = await PlayersDAO.getPlayerById(req.params.id);
    if (!player) {
      return res.status(404).send('Player not found');
    }
    res.json(player);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// PUT route to UPDATE a player
router.put('/:id', async (req, res) => {
  try {
    const updatedPlayer = await PlayersDAO.updatePlayer(req.params.id, req.body);
    if (!updatedPlayer) {
      return res.status(404).send('Player not found');
    }
    res.json(updatedPlayer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// DELETE route for soft DELETING a player
router.delete('/:id', async (req, res) => {
  try {
    const deletedPlayer = await PlayersDAO.deletePlayer(req.params.id);
    if (!deletedPlayer) {
      return res.status(404).send('Player not found');
    }
    res.json({ message: 'Player deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
