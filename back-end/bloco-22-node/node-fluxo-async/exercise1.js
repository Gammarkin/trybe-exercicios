// Crie uma função que receba três parâmetros e retorna uma Promise.
// Caso algum dos parâmetros recebidos não seja um número,
// rejeite a Promise com o motivo "Informe apenas números"

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
    resolve(result);
  });
};

console.log(returnPromise(1, 2, 3));
