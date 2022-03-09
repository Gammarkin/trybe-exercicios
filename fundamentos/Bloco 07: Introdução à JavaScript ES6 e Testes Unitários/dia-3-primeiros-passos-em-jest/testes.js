// Dados
const professionalBoard = [
    {
        id: '8579-6',
        firstName: 'Ana',
        lastName: 'Gates',
        specialities: ['UX', 'Design'],
    },
    {
        id: '5569-4',
        firstName: 'George',
        lastName: 'Jobs',
        specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    },
    {
        id: '4456-4',
        firstName: 'Leila',
        lastName: 'Zuckerberg',
        specialities: ['Context API', 'RTL', 'Bootstrap'],
    },
    {
        id: '1256-4',
        firstName: 'Linda',
        lastName: 'Bezos',
        specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
    },
    {
        id: '9852-2-2',
        firstName: 'Jeff',
        lastName: 'Cook',
        specialities: ['Ruby', 'SQL'],
    },
    {
        id: '4678-2',
        firstName: 'Paul',
        lastName: 'Dodds',
        specialities: ['Backend'],
    },
];

// Pesquisa

const verifyError = (info) => {
    if (info === 0) throw new Error('teste');
    if (info === undefined) throw new Error('test');
}

const searchEmployee = (id, detail) => {

    const obj = Object.values(professionalBoard);
    const length = obj.length;
    let info = 0;

    for (let x; x < length; x++) {
        obj[x].id = id ? info = obj[x][detail] : null;

    }
    verifyError(info);
}

module.exports = searchEmployee;