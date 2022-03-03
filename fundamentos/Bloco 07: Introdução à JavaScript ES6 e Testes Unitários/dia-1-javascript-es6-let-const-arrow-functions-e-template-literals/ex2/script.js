// fatorial, função 1

const fatorial = (n) => (n > 1) ? n * fatorial(n - 1) : n;
console.log(fatorial(4));

// maior palavra, função 2

const longestWord = (string) => {
    let str = string.split(' ');
    let wrd;
    for (let i = 0; i < str.length; i++) {
        wrd = str[i];
    }
    return wrd
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// botão, função 3

let clicks = 0;
let clickAtual = document.querySelector('.clickAtual');

let botao = document.getElementById('button');
botao.addEventListener('click', () => clickAtual.innerText = clicks++);

// repõe x, função 4

const skillsArr = ['git', 'gitHub', 'js', 'css', 'html'];

const repoeX = (string, par) => {
    let str = string.split(' ');
    let isX;
    for (let i = 0; i < str.length; i++) {
        isX = str[i];
    }
    return string.replace('x', par);
}

// funçao 5
let sortedArr = skillsArr.sort();
const concatena = () => `${repoeX('Tryber x aqui!', 'Markin')} minhas skills são ${sortedArr}. `;
console.log(concatena());