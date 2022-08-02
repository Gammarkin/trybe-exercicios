const valideUserName = (req, res) => {
  const {userName} = req.body;
  if (userName.length < 3)
    return res.status(400).json({message: 'invalid data'});
};

const validateEmail = (req, res) => {
  const {email} = req.body;
  if (!(email.includes('@') && email.includes('.com')))
    return res.status(400).json({message: 'invalid data'});
};

const validePassword = (req, res) => {
  const {password} = req.body;
  if (!(password.length >= 4 && password.length <= 8))
    return res.status(400).json({message: 'invalid data'});
};

const validateInputs = (req, res, next) => {
  valideUserName(req, res);
  validateEmail(req, res);
  validePassword(req, res);

  next();
};

module.exports = validateInputs;
