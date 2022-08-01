const validateUserName = (userName, res) => {
  if (!userName) return res.status(401).json({message: 'missing fields'});
};

const validatePassword = (password, res) => {
  if (!password) return res.status(401).json({message: 'missing fields'});
};

const validateEmail = (email, res) => {
  if (!email) return res.status(401).json({message: 'missing fields'});
};

const validateUser = (req, res, next) => {
  const {userName, password, email} = req.body;

  validateEmail(email, res);
  validatePassword(password, res);
  validateUserName(userName, res);

  next();
};

module.exports = validateUser;
