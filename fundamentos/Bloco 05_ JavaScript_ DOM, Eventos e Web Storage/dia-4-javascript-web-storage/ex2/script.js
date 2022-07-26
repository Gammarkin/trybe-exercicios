//botao de cor de fundo
function blueBot(colorBlue) {
    let botao = document.querySelector('h1');
    colorBlue = document.createElement('button');
    colorBlue.innerText = 'Interruptor';
    colorBlue.className = 'btn-color';

    botao.appendChild(colorBlue);
}
blueBot();

function corAll(botao) {
    let cor = document.querySelector('body')
    botao = document.querySelector('button');
    botao.addEventListener('click', function () {
        if (cor.style.backgroundColor === 'white') {
            cor.style.backgroundColor = 'black'
        } else {
            cor.style.backgroundColor = 'white'
        }

    });
}
corAll();
//fim do botao

//botao de cor de texto
function textLoki(kor) {
    let botao = document.querySelector('h1');
    kor = document.createElement('button');
    kor.innerText = 'aquarela';
    kor.className = 'btn-text';

    botao.appendChild(kor);
}
textLoki();

function corButton(korButton) {
    let cor = document.querySelector('body')
    korButton = document.querySelector('.btn-text');
    korButton.addEventListener('click', function () {
        if (cor.style.color == 'black') {
            cor.style.color = 'red'
        } else {
            cor.style.color = 'black'
        }

    });
}
corButton();
//final do botao

//inicio do botao tamanho
function textLokia(tam) {
    let botao = document.querySelector('h1');
    tam = document.createElement('button');
    tam.innerText = 'tamanho';
    tam.className = 'btn-tamanho';

    botao.appendChild(tam);
}
textLokia();

function fonteTamanho(tamanho) {
    let cor = document.querySelector('body')
    tamanho = document.querySelector('.btn-tamanho');
    tamanho.addEventListener('click', function () {
        if (cor.style.fontSize !== '37px') {
            cor.style.fontSize = '20px'
        }
    });
}
fonteTamanho();

//final do botao

//inicio do botao espaço

function TextEspa(esp) {
    let botao = document.querySelector('h2');
    esp = document.createElement('button');
    esp.innerText = 'espaço';
    esp.className = 'btnEsp';

    botao.appendChild(esp);
}
TextEspa();

function fonteEspa(espa) {
    let cor = document.querySelector('body')
    espa = document.querySelector('.btnEsp');
    espa.addEventListener('click', function () {
        if (cor.style.letterSpacing !== '37px') {
            cor.style.letterSpacing = '20px'
        }
    });
}
fonteEspa();

//final do botao

function TextFont(font) {
    let botao = document.querySelector('h2');
    font = document.createElement('button');
    font.innerText = 'fonte';
    font.className = 'btnFont';

    botao.appendChild(font);
}
TextFont();

function fonteFont(fon) {
    let cor = document.querySelector('body')
    fon = document.querySelector('.btnFont');
    fon.addEventListener('click', function () {
        if (cor.style.fontFamily === 'arial') {
            cor.style.fontFamily = 'fantasy'
        } else {
            cor.style.fontFamily = 'arial'
        }
    });
}
fonteFont();
