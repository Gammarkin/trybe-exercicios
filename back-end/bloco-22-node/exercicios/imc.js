// peso / altura em metros ^ 2 = imc

const imcFunc = () => {
  const QUESTIONS = [
    'Qual seu peso? (em kilos)',
    'Qual sua altura? (em metros)',
  ];

  const ask = (i = 0) => {
    process.stdout.write(`\n\n${QUESTIONS[i]} \n`);
    process.stdout.write('   > ');
  };

  ask();

  const answers = [];

  process.stdin.on('data', (data) => {
    answers.push(data.toString().trim());
    if (answers.length < QUESTIONS.length) {
      ask(answers.length);
    } else {
      const [peso, altura] = answers;
      const imc = peso / (altura * altura);

      process.stdout.write(`\n\nSeu IMC é ${imc}.\n`);
      process.exit();
    }
  });
};

module.exports = imcFunc;
