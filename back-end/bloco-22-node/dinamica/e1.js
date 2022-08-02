const validateEmail = (req, res) => {
  const {email} = req.body;
  if (!(email.includes('@') && email.includes('.com')))
    return res.status(400).json({message: 'email or password is incorrect'});
};

const validePassword = (req, res) => {
  const {password} = req.body;
  if (!(password.length >= 4 && password.length <= 8))
    return res.status(400).json({message: 'email or password is incorrect'});
};

const validateInputs = (req, res, next) => {
  validateEmail(req, res);
  validePassword(req, res);

  next();
};

module.exports = validateInputs;
