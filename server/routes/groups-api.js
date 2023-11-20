const express = require('express');

const groupsDAO = require('../db/dao/groupsDAO'); // Import the module containing CRUD functions

const app = express();


// Create a new group
app.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;
    const newGroup = await groupsDAO.createGroup(name, description);
    res.json(newGroup);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Retrieve all groups
app.get('/', async (req, res) => {
  try {
    const groups = await groupsDAO.getAllGroups();
    res.json(groups);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Retrieve a specific group by ID
app.get('/:id', async (req, res) => {
  try {
    const groupId = parseInt(req.params.id);
    const group = await groupsDAO.getGroupById(groupId);
    if (group) {
      res.json(group);
    } else {
      res.status(404).json({ error: 'Group not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a group by ID
app.put('/:id', async (req, res) => {
  try {
    const groupId = parseInt(req.params.id);
    const { name, description } = req.body;
    const updatedGroup = await groupsDAO.updateGroup(groupId, name, description);
    if (updatedGroup) {
      res.json(updatedGroup);
    } else {
      res.status(404).json({ error: 'Group not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Soft delete a group by ID
app.delete('/:id', async (req, res) => {
  try {
    const groupId = parseInt(req.params.id);
    const deletedGroup = await groupsDAO.deleteGroup(groupId);
    if (deletedGroup) {
      res.json(deletedGroup);
    } else {
      res.status(404).json({ error: 'Group not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app;
