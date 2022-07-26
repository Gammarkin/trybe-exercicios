const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return species.reduce((acc, element) => {
      const newObj = {}; newObj[element.name] = element.residents.length;
      return Object.assign(acc, newObj);
    }, {});
  }
  if (animal.sex) {
    return species.find((element) => element.name === animal.specie)
      .residents.reduce((accDois, current) => {
        let acc = accDois; if (current.sex === animal.sex) acc += 1;
        return acc;
      }, 0);
  }
  return species.filter((element) => element.name === animal.specie)
    .reduce((acc, element) => acc + element.residents.length, 0);
}

module.exports = countAnimals;
