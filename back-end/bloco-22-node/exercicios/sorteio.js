const MAX_RANDOM = 10;
const MIN_RANDOM = 1;
let showGame = true;

const randomNumber = () =>
  Math.floor(Math.random() * (MAX_RANDOM - MIN_RANDOM + 1)) + MIN_RANDOM;

const askQuestion = () => {
  process.stdout.write('\nEscolha um número de 1 a 10\n');
  process.stdout.write(' > ');
};

const handlePlayAgain = () => {
  process.stdout.write('\nDeseja jogar novamente? (s/n)\n');
  process.stdout.write(' > ');
};

function logResultado(numero, resposta) {
  showGame = false;
  if (numero !== resposta) {
    return console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  }
  return console.log('Parabéns, número correto!');
}

askQuestion();

let answers = [];
process.stdin.on('data', (data) => {
  if (showGame) {
    answers.push(data.toString().trim());

    let randomGeneratedNumber = String(randomNumber());
    logResultado(randomGeneratedNumber, answers[answers.length - 1]);
    handlePlayAgain();
  } else {
    if (data.toString().trim() === 's' || data.toString().trim() === 'S') {
      askQuestion();
      answers = [];
      randomGeneratedNumber = String(randomNumber());
    } else if (
      data.toString().trim() === 'n' ||
      data.toString().trim() === 'N'
    ) {
      process.exit();
    } else {
      process.stdout.write('Digite uma opção válida\n');
      handlePlayAgain();
    }
  }
});
