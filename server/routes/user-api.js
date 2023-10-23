/*
 * All routes for user are defined here
 */

const express = require("express");
const app = express.Router();
const userDAO = require('../db/dao/user'); // Import the module containing CRUD functions
const bcrypt = require('bcrypt');


// Create a new user
app.post('/', async (req, res) => {
  try {
    const { user_level_id, email, password, first_name, last_name, gender, line_id, fb_name } = req.body;

    // Hash the user's password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userDAO.createUser(
      user_level_id,
      email,
      hashedPassword,
      first_name,
      last_name,
      gender,
      line_id,
      fb_name
    );
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Retrieve all users
app.get('/', async (req, res) => {
  try {
    const users = await userDAO.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Retrieve a specific user by ID
app.get('/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await userDAO.getUserById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a user by ID
app.put('/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const { email, password, first_name, last_name, gender, line_id, fb_name } = req.body;

    // Hash the updated password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await userDAO.updateUser(
      userId,
      email,
      hashedPassword,
      first_name,
      last_name,
      gender,
      line_id,
      fb_name
    );

    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Soft delete a user by ID
app.delete('/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const deletedUser = await userDAO.deleteUser(userId);
    if (deletedUser) {
      res.json(deletedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// User Authentication
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Retrieve the user by email
    const user = await userDAO.getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Provide a success response or generate a token for further authentication

    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app;
