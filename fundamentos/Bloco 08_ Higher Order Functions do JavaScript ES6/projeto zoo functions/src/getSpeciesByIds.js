const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((item) => species.find((element) => element.id === item));
}

module.exports = getSpeciesByIds;
