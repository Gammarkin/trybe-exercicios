// peso / altura em metros ^ 2 = imc

const imcFunc = () => {
  const QUESTIONS = [
    'Qual seu peso? (em kilos)',
    'Qual sua altura? (em metros)',
  ];

  const printImcCategory = (imc) => {
    if (imc < 18.5) {
      return 'Abaixo do peso (magreza)';
    }
    if (imc >= 18.5 && imc <= 24.9) {
      return 'Peso normal';
    }
    if (imc >= 25 && imc <= 29.9) {
      return 'Acima do peso (sobrepeso)';
    }
    if (imc >= 30 && imc <= 34.9) {
      return 'Obesidade grau I';
    }
    if (imc >= 35 && imc <= 39.9) {
      return 'Obesidade grau II';
    }
    if (imc >= 40) {
      return 'Obesidade graus III e IV';
    }
    return 'Não foi possível calcular o IMC';
  };

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
        process.stdout.write(
          `Você está na categoria ${printImcCategory(imc)}.\n`
        );
        process.exit();
      }
    }
  });
};

module.exports = imcFunc;
