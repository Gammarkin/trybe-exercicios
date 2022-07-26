const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const animalId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animals = species.find((animal) => animal.id === animalId);
  const [{ name, sex, age }] = animals.residents.sort((a, b) => b.age - a.age);
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
