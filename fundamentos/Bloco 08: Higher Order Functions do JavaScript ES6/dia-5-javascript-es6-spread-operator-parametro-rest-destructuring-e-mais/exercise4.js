const ships = [
    {
        name: 'Titanic',
        length: 269.1,
        measurementUnit: 'meters',
    },
    {
        name: 'Queen Mary 2',
        length: 1132,
        measurementUnit: 'feet',
    },
    {
        name: 'Yamato',
        length: 256,
        measurementUnit: 'meters',
    },
];

// escreva shipLength abaixo
const shipLength = ({ name, length, measurementUnit }) => `${name} is ${length} ${measurementUnit} long`

// escreva greet abaixo
const greet = (personName, saluteMessage = 'Hi') => `${saluteMessage}, ${personName}`


const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
};

const { spring, summer, autumn, winter } = yearSeasons;
const yearMonths = [...winter, ...spring, ...summer, ...autumn]
console.log(yearMonths);