const express = require('express');
const User = require('../models/User');
const router = express.Router();


// api/users
// Public
router.post('/', (req, res) => {
  res.send(req.body);
});

module.exports = router;
