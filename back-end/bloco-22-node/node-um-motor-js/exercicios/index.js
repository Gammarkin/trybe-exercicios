const imc = require('./imc');
const sorteio = require('./sorteio');
const velocidade = require('./velocidade');

process.stdout.write('\n Escolha uma opção: \n');
process.stdout.write(' 1 - Calculadora IMC \n');
process.stdout.write(' 2 - Jogo Sorteio \n');
process.stdout.write(' 3 - Calculadora de Velocidade \n');

process.stdin.on('data', (data) => {
  switch (data.toString().trim()) {
    case '1':
      imc();
      break;
    case '2':
      sorteio();
      break;
    case '3':
      velocidade();
      break;
    default:
      process.stdout.write('Digite uma opção válida\n');
      break;
  }
});
