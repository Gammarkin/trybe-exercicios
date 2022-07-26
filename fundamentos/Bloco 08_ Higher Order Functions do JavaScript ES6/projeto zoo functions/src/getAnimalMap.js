const data = require('../data/zoo_data');

const { species } = data;

const alocation = () => {
  const animals = {};
  species.forEach((animal) => {
    if (!animals[animal.location]) animals[animal.location] = [];
    animals[animal.location].push(animal.name);
  });
  return animals;
};

const animalSex = (sorted, sex) => {
  const obj = {};
  species.forEach((element) => {
    if (!obj[element.location]) obj[element.location] = [];

    let spreadResidents = [...element.residents];
    if (sex) spreadResidents = spreadResidents.filter((animal) => animal.sex === sex);

    spreadResidents = spreadResidents.map((animal) => animal.name);

    if (sorted) spreadResidents.sort();
    obj[element.location].push({ [element.name]: spreadResidents });
  });
  return obj;
};

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  if (includeNames) return animalSex(sorted, sex);
  return alocation();
}

module.exports = getAnimalMap;
