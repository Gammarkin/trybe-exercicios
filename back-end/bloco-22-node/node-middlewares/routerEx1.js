const express = require('express');

const router = express.Router();

const {validateInfos, validateProductName} = require('./funcsEx1');

const validateBody = (req, res, next) => {
  const {productName, infos} = req.body;

  validateProductName(res, productName);
  validateInfos(res, infos);
  next();
};

router.post('/', validateBody, (_req, res) => {
  res.status(201).json({message: 'Venda cadastrada com sucesso'});
});

module.exports = router;
