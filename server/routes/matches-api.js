const express = require('express');
const MatchesDAO = require('../db/dao/matchesDAO'); // Path to your MatchesDAO module
const router = express.Router();

// POST route to CREATE a new match
router.post('/', async (req, res) => {
  try {
    const newMatch = await MatchesDAO.createMatch(req.body);
    res.status(201).json(newMatch);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET route to READ all matches
router.get('/', async (req, res) => {
  try {
    const allMatches = await MatchesDAO.getAllMatches();
    res.json(allMatches);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET route to READ a single match by ID
router.get('/:id', async (req, res) => {
  try {
    const match = await MatchesDAO.getMatchById(req.params.id);
    if (!match) {
      return res.status(404).send('Match not found');
    }
    res.json(match);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// PUT route to UPDATE a match
router.put('/:id', async (req, res) => {
  try {
    const updatedMatch = await MatchesDAO.updateMatch(req.params.id, req.body);
    if (!updatedMatch) {
      return res.status(404).send('Match not found');
    }
    res.json(updatedMatch);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// DELETE route for soft DELETING a match
router.delete('/:id', async (req, res) => {
  try {
    const deletedMatch = await MatchesDAO.deleteMatch(req.params.id);
    if (!deletedMatch) {
      return res.status(404).send('Match not found');
    }
    res.json({ message: 'Match deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
