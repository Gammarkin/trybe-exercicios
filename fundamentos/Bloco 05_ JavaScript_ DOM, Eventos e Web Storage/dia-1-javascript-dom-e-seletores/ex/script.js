/*
         Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
         - document.getElementById()
         - document.getElementsByClassName()
         - document.getElementsByTagName()
  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
  Crie uma função que mude a cor do quadrado vermelho para branco.
  Crie uma função que corrija o texto da tag <h1>.
  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
  Crie uma função que exiba o conteúdo de todas as tags <p> no console.
         */


//ex1
function textChange(id, texto) {
    let text = document.querySelector(id);
    return text.innerText = texto;
}

textChange('p', 'working full time as a dev');


//ex2
function colorChanger(x, y) {
    let z = document.getElementsByClassName(x);
    for (let i = 0; i < z.length; i++) {
        return z[0].style.backgroundColor = y;
    }
}

colorChanger('main-content', 'rgb(76,164,109)');


//ex3
colorChanger('center-content', 'white');

//ex4
textChange('.title', 'Exercício 5.1 - JavaScript');


//ex5
function textMa(klas, prop) {
    let kor = document.querySelector(klas);
    return kor.style.textTransform = prop;
}

textMa('p', 'uppercase')


//ex6
function logE(tag) {
    let logg = document.getElementsByTagName(tag)

    for (let i = 0; i < logg.length; i++) {
        console.log(logg[i]);
    }
}
logE('p')