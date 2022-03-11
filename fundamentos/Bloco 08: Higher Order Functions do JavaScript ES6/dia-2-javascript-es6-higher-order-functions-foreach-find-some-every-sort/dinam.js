
const arrayIdades = [23, 32, 17, 16, 34];
const arrayIdades2 = [23, 32, 27, 46, 34];

const verifyIdade = arrayIdades.every((element) => element > 18);
const verifyIdade2 = arrayIdades2.every((element) => element > 18);

const logMessage = (func) => {
    if (func) return 'Beba Trybeer, suave como um log de erro vazio'
    return 'ChocoTrybe, melhor que console.log'
}

const estudantes = [
    {
        nome: 'Joel',
        Projeto: 'Trybewarts',
        status: 98,
    },
    {
        nome: 'Mica',
        Projeto: 'Trybewarts',
        status: 100,
    },
    {
        nome: 'Hugonardo',
        Projeto: 'Trybewarts',
        status: 97,
    },
    {
        nome: 'Aninha',
        Projeto: 'Trybewarts',
        status: 100,
    },
    {
        nome: 'Joicy',
        Projeto: 'Trybewarts',
        status: 100,
    },
    {
        nome: 'Ronald',
        Projeto: 'Trybewarts',
        status: 75,
    },
];

const didItPass = estudantes.every((element) => element.status >= 75)

const msg = (func) => (func) ? 'Bora pra mentoria de projetos!' : 'Pode abrir o suco de laranja que temos 100% de aprovação!'