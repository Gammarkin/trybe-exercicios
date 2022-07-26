// Cria uma caixa com base nas diferentes classes
const pixelBoard = document.getElementById('pixel-board');
const allPixels = document.getElementsByClassName('pixel');
const boardSize = 'board-size';
const colorPalette = document.getElementsByClassName('color');
const generateButton = document.getElementById('generate-board');

function createBox(className) {
  const box = document.createElement('div');
  box.className = className;
  pixelBoard.appendChild(box);
  return box;
}
// faz a board
function createBoard(tam) {
  for (let i = 0; i < tam; i += 1) {
    pixelBoard.append(createBox('pixel'));
  }
}
createBoard(25);

// faz a seleção da paleta

function PaletteSelection(palette) {
  const targetPalette = palette;
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].classList.remove('selected');
  }
  targetPalette.target.classList.add('selected');
}

// escuta a pagina
function eventListeners() {
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].addEventListener('click', PaletteSelection);
  }
}
eventListeners();

// pinta o quadro
// referencia: https://stackoverflow.com/questions/5910004/how-do-i-get-a-computed-style
// https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
function paint(event) {
  const selectedColor = document.querySelector('.selected');
  const color = window.getComputedStyle(selectedColor).backgroundColor;
  const targetEvent = event;
  targetEvent.target.style.backgroundColor = color;
}

function addPaint() {
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].addEventListener('click', paint);
  }
}
addPaint();

// pinta os pixels
function paintWhiteButton() {
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].style.backgroundColor = 'white';
  }
}
// add botao
function addButton() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', paintWhiteButton);
}
addButton();

// alerta if board !== tem valor
function alertError() {
  const input = document.getElementById(boardSize);
  if (!input.value) {
    return alert('Board inválido!');
  }
}

function alertEvent() {
  generateButton.addEventListener('click', alertError);
}
alertEvent();

// tamanho max/min
function checkSize(tam) {
  let tamanho = tam;
  if (tam < 5) {
    tamanho = 5;
  } else if (tam > 50) {
    tamanho = 50;
  } return tamanho;
}
checkSize();

// gera uma paleta de cores aleatoriamente
function generateRandomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

function randomColor() {
  colorPalette[0].style.backgroundColor = 'black';

  for (let i = 1; i < colorPalette.length; i += 1) {
    colorPalette[i].style.backgroundColor = generateRandomColor();
  }
}
randomColor();

/*
consultei algumas vezes alguns repos do github. Dentre eles

[Joao Marco Matta]
[Samuel Silva]
[Rodrigo Lima]
*/
