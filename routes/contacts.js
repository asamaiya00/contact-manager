const express = require('express');
const router = express.Router();

// api/contacts
// Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// api/contacts
// Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// api/contacts/:id
// Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// api/contacts/:id
// Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
