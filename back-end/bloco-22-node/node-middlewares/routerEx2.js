const express = require('express');
const {v4: uuidv4} = require('uuid');

const router = express.Router();

const validateUser = require('./funcsEx2');

router.post('/', validateUser, (_req, res) => {
  const randomToken = uuidv4();
  const trimmedRandomToken = randomToken.slice(0, 16);

  return res.status(200).json({token: trimmedRandomToken});
});

module.exports = router;
