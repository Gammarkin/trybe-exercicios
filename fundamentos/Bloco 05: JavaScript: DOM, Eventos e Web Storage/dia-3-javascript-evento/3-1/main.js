const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const listItem = document.querySelectorAll('li')

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function liClick(event) {


    for (let i = 0; i < listItem.length; i++) {
        if (listItem[i].className === 'tech') {
            document.querySelectorAll('li')[i].className = '';
            break;
        }
    }
    event.target.className = 'tech'
}

for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].addEventListener('click', liClick)
}
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function textChanger() {
    let tech = document.querySelector('.tech');

    tech.innerText = input.value
}

input.addEventListener('change', textChanger)

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

function link() {
    window.location.assign('https://google.com', '_blank');
}

myWebpage.addEventListener('dblclick', link)

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function over(event) {
    event.target.style.color = 'lime'
}

function out() {
    document.getElementById('my-spotrybefy').style.color = 'white';
}
myWebpage.addEventListener('mousemove', over)
myWebpage.addEventListener('mouseleave', out)

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
    // O Event é passado como um parâmetro para a função.
    event.target.innerText = 'Opção reiniciada';
    // O event possui várias propriedades, porém a mais usada é o event.target,
    // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.