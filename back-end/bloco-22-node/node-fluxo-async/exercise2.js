// Gere um número aleatório de 1 a 100 para cada parâmetro que a
// função recebe. Para gerar um número aleatório,
// utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1).

const returnPromise = require('./exercise1');

const MAX_RANDOM_NUMBER = 100;
const MIN_RANDOM_NUMBER = 1;

const generateRandomNumber = () =>
  Math.floor(Math.random() * MAX_RANDOM_NUMBER + MIN_RANDOM_NUMBER);

try {
  console.log(
    returnPromise(
      generateRandomNumber(),
      generateRandomNumber(),
      generateRandomNumber()
    )
  );
} catch ({message}) {
  console.log(message);
}
