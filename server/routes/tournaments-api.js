const express = require('express');
const TournamentsDAO = require('../db/dao/tournamentsDAO'); // Path to your TournamentsDAO module
const router = express.Router();

// POST route to CREATE a new tournament
router.post('/', async (req, res) => {
  try {
    const newTournament = await TournamentsDAO.createTournament(req.body);
    res.status(201).json(newTournament);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET route to READ all tournaments
router.get('/', async (req, res) => {
  try {
    const allTournaments = await TournamentsDAO.getAllTournaments();
    res.json(allTournaments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET route to READ a single tournament by ID
router.get('/:id', async (req, res) => {
  try {
    const tournament = await TournamentsDAO.getTournamentById(req.params.id);
    if (!tournament) {
      return res.status(404).send('Tournament not found');
    }
    res.json(tournament);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// PUT route to UPDATE a tournament
router.put('/:id', async (req, res) => {
  try {
    const updatedTournament = await TournamentsDAO.updateTournament(req.params.id, req.body);
    if (!updatedTournament) {
      return res.status(404).send('Tournament not found');
    }
    res.json(updatedTournament);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// DELETE route for soft DELETING a tournament
router.delete('/:id', async (req, res) => {
  try {
    const deletedTournament = await TournamentsDAO.deleteTournament(req.params.id);
    if (!deletedTournament) {
      return res.status(404).send('Tournament not found');
    }
    res.json({ message: 'Tournament deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
