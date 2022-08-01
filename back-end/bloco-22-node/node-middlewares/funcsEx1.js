const validateDate = (date) => {
  const trimmedDade = date.split('/');
  const day = trimmedDade[0];
  const month = trimmedDade[1];
  const year = trimmedDade[2];

  const isDayInvalid =
    day.length != 2 ||
    isNaN(Number(day)) ||
    Number(day) > 31 ||
    Number(day) < 1;

  const isMonthInvalid =
    month.length != 2 ||
    isNaN(Number(month)) ||
    Number(month) > 12 ||
    Number(month) < 1;

  const isYearInvalid = year.length != 4 || isNaN(Number(year));

  if (isDayInvalid || isMonthInvalid || isYearInvalid) return false;

  return true;
};

const validateProductName = (res, productName) => {
  if (!productName)
    return res.status(400).json({
      message: 'O campo productName é obrigatório',
    });

  if (productName.length < 4)
    return res
      .status(400)
      .json({message: 'O campo productName deve ter pelo menos 4 caracteres'});
};

const validateSaleDate = (saleDate, res) => {
  if (!saleDate)
    return res.status(400).json({message: 'O campo saleDate é obrigatório'});

  const isDateValid = validateDate(saleDate);

  if (!isDateValid)
    return res
      .status(400)
      .json({message: 'O campo saleDate não é uma data válida'});
};

const validateWarranty = (warrantyPeriod, res) => {
  if (!warrantyPeriod)
    return res
      .status(400)
      .json({message: 'O campo warrantyPeriod é obrigatório'});

  if (
    typeof warrantyPeriod != 'number' ||
    warrantyPeriod > 3 ||
    warrantyPeriod < 1
  )
    return res
      .status(400)
      .json({message: 'O campo warrantyPeriod precisa estar entre 1 e 3'});
};

const validateInfos = (res, infos) => {
  if (!infos)
    return res.status(400).json({message: 'O campo infos é obrigatório'});

  const {saleDate, warrantyPeriod} = infos;

  validateSaleDate(saleDate, res);
  validateWarranty(warrantyPeriod, res);
};

module.exports = {
  validateInfos,
  validateProductName,
};
