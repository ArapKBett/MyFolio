const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const emailjs = require('emailjs');

router.post('/', async (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  try {
    const newContact = await contact.save();
    const templateParams = {
      from_name: req.body.name,
      from_email: req.body.email,
      message: req.body.message,
    };
    emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.EMAILJS_USER_ID
    );
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
