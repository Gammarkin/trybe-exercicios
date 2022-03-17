const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui

  const names = species.find((element) => animal === element.name);
  const { residents } = names;
  return residents.every((element) => element.age > age);
}

module.exports = getAnimalsOlderThan;
