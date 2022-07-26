// Faça uma lista com as suas frutas favoritas
const specialFruit = ['sasas', 'sas', 'asa'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['dad', 'daa', 'aad'];

const fruitSalad = (fruit, additional) => {
    // Esreva sua função aqui
    return [...fruit, ...additional]
};

function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
}


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const fullUser = { ...user, ...jobInfos };

const printFullUserMessage = ({ name, age, nationality, profession, squad, squadInitials }) =>
    `Hi, i'm ${name}. Ages ${age}. I'm ${nationality}, and work as a ${profession}.
    my squad is ${squad}. AKA ${squadInitials}.`;

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [saudacao, fun] = saudacoes
// fun(saudacao)
// Produza o mesmo resultado acima, porém utilizando array destructuring

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const thing = [comida, animal, bebida];
[animal, bebida, comida] = thing
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[, , , ...numerosPares] = numerosPares

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude
});

const multiply = (number, value = 1) => {
    // Escreva aqui a sua função
    return number * value
};

console.log(multiply(8));