const express = require('express');
const ScoresDAO = require('./DAO'); // Path to your ScoresDAO module
const router = express.Router();

// POST route to CREATE a new score
router.post('/', async (req, res) => {
  try {
    const newScore = await ScoresDAO.createScore(req.body);
    res.status(201).json(newScore);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET route to READ all scores
router.get('/', async (req, res) => {
  try {
    const allScores = await ScoresDAO.getAllScores();
    res.json(allScores);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET route to READ a single score by ID
router.get('/:id', async (req, res) => {
  try {
    const score = await ScoresDAO.getScoreById(req.params.id);
    if (!score) {
      return res.status(404).send('Score not found');
    }
    res.json(score);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// PUT route to UPDATE a score
router.put('/:id', async (req, res) => {
  try {
    const updatedScore = await ScoresDAO.updateScore(req.params.id, req.body);
    if (!updatedScore) {
      return res.status(404).send('Score not found');
    }
    res.json(updatedScore);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// DELETE route for soft DELETING a score
router.delete('/:id', async (req, res) => {
  try {
    const deletedScore = await ScoresDAO.deleteScore(req.params.id);
    if (!deletedScore) {
      return res.status(404).send('Score not found');
    }
    res.json({ message: 'Score deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
