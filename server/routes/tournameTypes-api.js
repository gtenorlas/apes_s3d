const express = require('express');
const TournamentTypesDAO = require('../db/dao/tournamentTypesDAO'); // Path to your TournamentTypesDAO module
const router = express.Router();

// POST route to CREATE a new tournament type
router.post('/', async (req, res) => {
  try {
    const newTournamentType = await TournamentTypesDAO.createTournamentType(req.body);
    res.status(201).json(newTournamentType);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET route to READ all tournament types
router.get('/', async (req, res) => {
  try {
    const allTournamentTypes = await TournamentTypesDAO.getAllTournamentTypes();
    res.json(allTournamentTypes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET route to READ a single tournament type by ID
router.get('/:id', async (req, res) => {
  try {
    const tournamentType = await TournamentTypesDAO.getTournamentTypeById(req.params.id);
    if (!tournamentType) {
      return res.status(404).send('Tournament type not found');
    }
    res.json(tournamentType);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// PUT route to UPDATE a tournament type
router.put('/:id', async (req, res) => {
  try {
    const updatedTournamentType = await TournamentTypesDAO.updateTournamentType(req.params.id, req.body);
    if (!updatedTournamentType) {
      return res.status(404).send('Tournament type not found');
    }
    res.json(updatedTournamentType);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// DELETE route for soft DELETING a tournament type
router.delete('/:id', async (req, res) => {
  try {
    const deletedTournamentType = await TournamentTypesDAO.deleteTournamentType(req.params.id);
    if (!deletedTournamentType) {
      return res.status(404).send('Tournament type not found');
    }
    res.json({ message: 'Tournament type deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
