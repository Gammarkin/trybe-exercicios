// peso / altura em metros ^ 2 = imc

const imcFunc = () => {
  const QUESTIONS = [
    'Qual seu peso? (em kilos)',
    'Qual sua altura? (em metros)',
  ];

  const ask = (i = 0) => {
    process.stdout.write(`\n\n${QUESTIONS[i]} \n`);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write('   > ');
  };

  ask();

  const answers = [];

  process.stdin.on('data', (data = 0) => {
    if (isNaN(Number(data)) || data === '\n') {
      process.stdout.write('Digite um número\n');
      ask(answers.length);
    } else {
      answers.push(Number(data));
      if (answers.length < QUESTIONS.length) {
        ask(answers.length);
      } else {
        const [peso, altura] = answers;
        const imc = peso / (altura * altura);

        process.stdout.write(`\n\nSeu IMC é ${imc.toFixed(2)}.\n`);
        process.exit();
      }
    }
  });
};

imcFunc();

module.exports = imcFunc;
