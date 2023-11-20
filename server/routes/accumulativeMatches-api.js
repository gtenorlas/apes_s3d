const express = require('express');
const AccumulativeMatchesDAO = require('../db/dao/accumulativeMatchesDAO'); // Path to your AccumulativeMatchesDAO module
const router = express.Router();

// POST route to CREATE a new accumulative match
router.post('/', async (req, res) => {
  try {
    const newAccumulativeMatch = await AccumulativeMatchesDAO.createAccumulativeMatch(req.body);
    res.status(201).json(newAccumulativeMatch);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET route to READ all accumulative matches
router.get('/', async (req, res) => {
  try {
    const allAccumulativeMatches = await AccumulativeMatchesDAO.getAllAccumulativeMatches();
    res.json(allAccumulativeMatches);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET route to READ a single accumulative match by ID
router.get('/:id', async (req, res) => {
  try {
    const accumulativeMatch = await AccumulativeMatchesDAO.getAccumulativeMatchById(req.params.id);
    if (!accumulativeMatch) {
      return res.status(404).send('Accumulative match not found');
    }
    res.json(accumulativeMatch);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// PUT route to UPDATE an accumulative match
router.put('/:id', async (req, res) => {
  try {
    const updatedAccumulativeMatch = await AccumulativeMatchesDAO.updateAccumulativeMatch(req.params.id, req.body);
    if (!updatedAccumulativeMatch) {
      return res.status(404).send('Accumulative match not found');
    }
    res.json(updatedAccumulativeMatch);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// DELETE route for soft DELETING an accumulative match
router.delete('/:id', async (req, res) => {
  try {
    const deletedAccumulativeMatch = await AccumulativeMatchesDAO.deleteAccumulativeMatch(req.params.id);
    if (!deletedAccumulativeMatch) {
      return res.status(404).send('Accumulative match not found');
    }
    res.json({ message: 'Accumulative match deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
