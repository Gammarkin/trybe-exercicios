/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
// Desafio 11
// consultei o codigo de [Eduardo Fradique] turma 17
// ref: https://github.com/tryber/sd-020-a-project-playground-functions
function generatePhoneNumber(a) {
  // seu código aqui
  let msg = 'não é possível gerar um número de telefone com esses valores';
  if (a.length !== 11) return 'Array com tamanho incorreto.';
  for (let i of a) {
    if (ZeroOuNove(i) || phoneRep(i, a)) return msg;
  }
  return `(${a[0]}${a[1]}) ${a[2]}${a[3]}${a[4]}${a[5]}${a[6]}-${a[7]}${a[8]}${a[9]}${a[10]}`;
  function ZeroOuNove(i) {
    if ((i < 0) || (i > 9)) return true;
  }

  function phoneRep(i, a) {
    let count = 0;
    for (let x of a) {
      if (x === i) count += 1;
    }
    if (count >= 3) return true;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  // o course meio que deu a resposta...
  /* "Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.
Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.
O retorno da sua função deverá ser um booleano." */
  if ((lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC))) return true;
  return false;
}

// Desafio 13
function hydrate(arr) {
  // seu código aqui
  // ref: https://stackoverflow.com/questions/48343478/what-does-mapnumber-do-here
  let array = arr.match(/\d+/g).map(Number);
  let count = 0;
  for (let key of array) {
    count += key;
  } if (count > 1) return `${count} copos de água`;
  return '1 copo de água';
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
