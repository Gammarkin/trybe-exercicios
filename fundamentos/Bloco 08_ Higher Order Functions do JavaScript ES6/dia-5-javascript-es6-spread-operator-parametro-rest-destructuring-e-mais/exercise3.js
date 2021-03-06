const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
// Escreva uma função filterPeople que, dada uma lista de pessoas,
// retorna todas as pessoas australianas que nasceram no século 20.
const filterPeople = (arr) => arr.filter((people) =>
  people.nationality === 'Australian' && people.bornIn >= 1901 && people.bornIn <= 2000)

const myList = [1, 2, 3];

// escreva swap abaixo

const swap = ([one, two, three]) => [three, two, one]



const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo 
const toObject = ([carName, Brand, releaseYear]) => {
  return { carName, Brand, releaseYear }
}
