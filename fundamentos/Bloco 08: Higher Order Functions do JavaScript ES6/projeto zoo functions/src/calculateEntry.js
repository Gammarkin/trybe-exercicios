const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  // seu código aqui
  const pessoas = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((person) => {
    if (person.age < 18) pessoas.child += 1;
    if (person.age >= 18 && person.age < 50) pessoas.adult += 1;
    if (person.age >= 50) pessoas.senior += 1;
  });
  return pessoas;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.values(entrants).length === 0) return 0;
  const group = countEntrants(entrants);
  let sum = 0;
  sum += group.child * prices.child;
  sum += group.adult * prices.adult;
  sum += group.senior * prices.senior;
  return sum;
}

module.exports = { calculateEntry, countEntrants };
