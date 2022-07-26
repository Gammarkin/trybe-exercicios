// v = d / t

const calcualteVelocity = () => {
  const QUESTIONS = [
    'Qual a distância percorrida? (em kilometros)',
    'Qual o tempo gasto? (em horas)',
  ];

  const askQuestion = (i = 0) => {
    process.stdout.write(`\n${QUESTIONS[i]} \n`);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write('   > ');
  };

  askQuestion();

  const answers = [];

  process.stdin.on('data', (data = 0) => {
    if (isNaN(Number(data)) || data === '\n') {
      process.stdout.write('Digite um número\n');
    } else {
      answers.push(Number(data));
      if (answers.length < QUESTIONS.length) {
        askQuestion(answers.length);
      } else {
        const [distance, time] = answers;
        const velocity = distance / time;

        process.stdout.write(
          `\n\nA velocidade é de ${velocity.toFixed(2)} km/h.\n`
        );
        process.exit();
      }
    }
  });
};

module.exports = calcualteVelocity;
