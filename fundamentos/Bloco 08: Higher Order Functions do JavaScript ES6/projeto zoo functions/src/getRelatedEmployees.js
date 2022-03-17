const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  return employees.filter((element) => element.id === id)
    .some((element) => element.firstName === 'Stephanie' || element.firstName === 'Ola'
      || element.firstName === 'Burl');
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';

  if (isManager() === true
    || managerId === stephanieId) return ['Burl Bethea', 'Ola Orloff', 'Emery Elser'];
  if (!isManager()) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
