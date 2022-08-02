const err = (_req, res) => {
  return res.status(400).json({message: 'invalid data'});
};

module.exports = err;
