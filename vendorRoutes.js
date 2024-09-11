// routes/vendorRoutes.js
const express = require('express');
const Vendor = require('../models/FormData');
const router = express.Router();

// Signup route
router.post('/vendor/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const vendor = new Vendor({ username, email, password });
    await vendor.save();
    res.status(201).send({ message: 'Vendor signed up successfully' });
  } catch (err) {
    res.status(400).send({ error: 'Failed to sign up vendor', details: err });
  }
});

// Login route
router.post('/vendor/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const vendor = await Vendor.findOne({ email, password });
    if (!vendor) {
      return res.status(400).send({ error: 'Invalid login credentials' });
    }
    res.send({ message: 'Vendor logged in successfully' });
  } catch (err) {
    res.status(500).send({ error: 'Login failed', details: err });
  }
});

module.exports = router;
