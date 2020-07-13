const express = require('express');
const router = express.Router();

// api/users
// Public
router.post('/', (req, res) => {
  res.send('Register a User');
});

module.exports = router;
