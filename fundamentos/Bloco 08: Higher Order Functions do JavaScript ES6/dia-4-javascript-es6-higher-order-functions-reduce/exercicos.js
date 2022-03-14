const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
    // escreva seu código aqui
    return [].concat.apply([], arrays);
    // com reduce ficaria algo como arrays.reduce((acc, current) => acc.concat(current), []);
}

const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

function reduceNames() {
    // escreva seu código aqui
    return books.reduce((acc, book) => `${acc} ${book.author.name},`, '');
}

function averageAge() {
    // escreva seu código aqui
    return books.reduce((acc, book) =>
        acc += (book.releaseYear - book.author.birthYear), 0) / books.length
}

function longestNamedBook() {
    // escreva seu código aqui
    return books.reduce((acc, book) => acc > book.name.length ? book : acc)
}

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    // escreva seu código aqui
    return names.reduce((acc, name) =>
        acc + name.split('').reduce((acc, letter) =>
            (letter === 'a' || letter === 'A') ? acc + 1 : acc, 0), 0);
}


const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
    // escreva seu código aqui
    return students.map((name, i) => ({
        name: name,
        average: (grades[i].reduce((acc, grade) => acc + grade, 0) / grades[i].length),
    }));
}
console.log(studentAverage());