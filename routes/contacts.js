const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');

// api/contacts
// Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });

    return res.json( contacts );
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});

// api/contacts
// Private
router.post(
  '/',
  [auth, [check('name', 'Name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();

      return res.json(contact);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

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
