/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
/* eslint-disable no-empty-pattern */
// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  if (val1 && val2 === true) {
    return true;
  } if (val1 || val2 === false) {
    return false;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  // eslint-disable-next-line no-mixed-operators
  return (base * height / 2);
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  // str == string, trim remove espaço entre as palavras,
  // split(/\s+/) faz com que existam varios espaços, não só um!
  return str.trim().split(/\s+/);
}

// Desafio 4
function concatName(newArr) {
  // seu código aqui
  return `${newArr[newArr.length - 1]}, ${newArr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  // vitórias == 3pts, empate == 1pt
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(arrHi) {
  // seu código aqui
  let count = 0;
  let x = arrHi.sort((a, b) => a - b);
  for (let key of arrHi) {
    if (x[x.length - 1] === key) count += 1;
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // consultei o codigo de [Guilherme Pavinato] turma 17
  if (Math.abs((cat1 - mouse)) < Math.abs((cat2 - mouse))) {
    return 'cat1';
  }
  if (Math.abs((cat1 - mouse)) === Math.abs((cat2 - mouse))) {
    return 'os gatos trombam e o rato foge';
  } return 'cat2';
}

// Desafio 8
function fizzBuzz(_arrInt) {
  // seu código aqui
  // consultei o codigo de [Renata Araujo] turma 17
  function isDiv(num1, num2) {
    return num1 % num2;
  }
  function whoIsWho(num1) {
    let who = 'bug!';
    let div3 = isDiv(num1, 3);
    let div5 = isDiv(num1, 5);

    if (div3 === 0 && div5 === 0) {
      who = 'fizzBuzz';
    } else if (div3 === 0) {
      who = 'fizz';
    } else if (div5 === 0) {
      who = 'buzz';
    } return who;
  }
  let result = [];
  for (let i = 0; i < _arrInt.length; i += 1) {
    let who = whoIsWho(_arrInt[i]);
    result.push(who);
  }
  return result;
}
// Desafio 9
function encode(arr0) {
  // seu código aqui
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  let arr1 = arr0.replace(/[a]/g, '1');
  let arr2 = arr1.replace(/[e]/g, '2');
  let arr3 = arr2.replace(/[i]/g, '3');
  let arr4 = arr3.replace(/[o]/g, '4');
  let arr5 = arr4.replace(/[u]/g, '5');
  return arr5;
}

function decode(arrZ) {
  // seu código aqui
  let arr1 = arrZ.replace(/[1]/g, 'a');
  let arr2 = arr1.replace(/[2]/g, 'e');
  let arr3 = arr2.replace(/[3]/g, 'i');
  let arr4 = arr3.replace(/[4]/g, 'o');
  let arr5 = arr4.replace(/[5]/g, 'u');
  return arr5;
}

// Desafio 10
function techList(tiArr, name) {
  // seu código aqui
  let arr = [];
  for (let key of tiArr.sort()) {
    arr.push({ tech: key, name });
  }
  if (arr.length === 0) return 'Vazio!';
  return arr;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
