const express = require('express');
const router = express.Router();

// api/auth
// Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// api/auth
// Public
router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;
