const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_secret_key';


router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await User.registerUser(name, email, password);
    res.status(201).json({ message: 'Регистрация успешна' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await User.loginUser(email, password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
