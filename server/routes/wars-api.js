const express = require('express');
const WarsDAO = require('../db/dao/warsDAO'); // Replace with the path to your WarsDAO module
const router = express.Router();

// POST route to CREATE a new war entry
router.post('/', async (req, res) => {
  try {
    const newWar = await WarsDAO.createWar(req.body);
    res.status(201).json(newWar);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET route to READ all war entries
router.get('/', async (req, res) => {
  try {
    const allWars = await WarsDAO.getAllWars();
    res.json(allWars);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET route to READ a single war entry by ID
router.get('/:id', async (req, res) => {
  try {
    const war = await WarsDAO.getWarById(req.params.id);
    if (!war) {
      return res.status(404).send('War not found');
    }
    res.json(war);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// PUT route to UPDATE a war entry
router.put('/:id', async (req, res) => {
  try {
    const updatedWar = await WarsDAO.updateWar(req.params.id, req.body);
    if (!updatedWar) {
      return res.status(404).send('War not found');
    }
    res.json(updatedWar);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// DELETE route for soft DELETING a war entry
router.delete('/:id', async (req, res) => {
  try {
    const deletedWar = await WarsDAO.deleteWar(req.params.id);
    if (!deletedWar) {
      return res.status(404).send('War not found');
    }
    res.json({ message: 'War deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
