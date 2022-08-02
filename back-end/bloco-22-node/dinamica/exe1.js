const express = require('express');
const crypto = require('crypto');

const router = express.Router();

function generateToken() {
  return crypto.randomBytes(12).toString('hex');
}

const validateInputs = require('./validationsEx1');
const validateInputs2 = require('./e1');

router.post('/register', validateInputs, (_req, res) => {
  res.status(201).json({message: 'user created'});
});

router.post('/login', validateInputs2, (_req, res) => {
  const randomToken = generateToken();
  res.status(200).json({token: randomToken});
});

module.exports = router;
