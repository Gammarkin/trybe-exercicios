const returnPromise = require('./exercise1');

const MAX_RANDOM_NUMBER = 100;
const MIN_RANDOM_NUMBER = 1;

const generateRandomNumber = () =>
  Math.floor(Math.random() * MAX_RANDOM_NUMBER + MIN_RANDOM_NUMBER);

try {
  const resolvingPromise = async () => {
    const resolvedPromise = await returnPromise(
      generateRandomNumber(),
      generateRandomNumber(),
      generateRandomNumber()
    );

    console.log(resolvedPromise);
  };

  resolvingPromise();
} catch ({message}) {
  console.log(message);
}
