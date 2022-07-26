//1
document.getElementById("elementoOndeVoceEsta");
//2
document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "blue";
//3
document.getElementById("primeiroFilhoDoFilho").innerText = "eitakkk";
//4
document.getElementById("pai").firstElementChild;
//5
document.getElementById("elementoOndeVoceEsta").parentElement.firstElementChild;
//6
document.getElementById("elementoOndeVoceEsta").nextSibling;
//7
document.getElementById("elementoOndeVoceEsta").nextElementSibling;
//8
document.getElementById("pai").lastElementChild.previousElementSibling;
//EX2
let bota =
    ["eita",
        "louka",
        "kk"];

let list = document.querySelector("#elementoOndeVoceEsta");

for (let i = 0; i < bota.lenght; i++) {
    let li = bota[i];

    let liListBota = document.createElement('h1');
    liListBota.innerText = li;

    list.appendChild(liListBota);
}