// Crie uma função que receba três parâmetros e retorna uma Promise.
// Caso algum dos parâmetros recebidos não seja um número,
// rejeite a Promise com o motivo "Informe apenas números"
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

const returnPromise = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (
      typeof num1 !== 'number' ||
      typeof num2 !== 'number' ||
      typeof num3 !== 'number'
    ) {
      return reject('Informe apenas números');
    }

    const result = (num1 + num2) * num3;

    if (result < 50) {
      return reject('Valor muito baixo');
    }
    resolve(result);
  });
};

module.exports = returnPromise;
