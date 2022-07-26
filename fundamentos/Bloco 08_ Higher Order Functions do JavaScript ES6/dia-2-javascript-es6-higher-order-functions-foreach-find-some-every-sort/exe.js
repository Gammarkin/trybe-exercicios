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

// Adicione o código do exercício aqui:

function authorBornIn1947() {
    // escreva aqui o seu código
    return books.find((element) => element.author.birthYear === 1947)
}

function smallerName() {
    let nameBook;
    // escreva aqui o seu código
    nameBook = books.reduce((a, b) => a.name.length <= b.name.length ? a : b);

    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
}

function getNamedBook() {
    // escreva seu código aqui
    return books.find((element) => element.name.length === 26)
}

function booksOrderedByReleaseYearDesc() {
    // escreva aqui seu código
    return books.sort((a, b) => b.releaseYear - a.releaseYear)
}

function everyoneWasBornOnSecXX() {
    // escreva seu código aqui
    return books.every((element) => element.author.birthYear > 1901)
}

function someBookWasReleaseOnThe80s() {
    // escreva seu código aqui
    return books.find((element) => element.releaseYear >= 1980 && element.releaseYear < 1990)
}

function authorUnique() {
    return books.every(() =>
        books.some((element) =>
            (element.author.birthYear === this && element.author.name === this)));
}
console.log(authorUnique());
