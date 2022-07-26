const body = document.body

const h1 = document.createElement("h1")
h1.innerText = "Exercício 5.2 - JavaScript DOM"
h1.className = "title"

body.append(h1)

const main = document.createElement("main")
main.className = "main-content"

body.append(main)

const section = document.createElement("section")
section.className = "center-content"

main.append(section)

const p = document.createElement("p")

section.append(p)

const sectionLeft = document.createElement("section")
sectionLeft.className = "left-content"

main.append(sectionLeft)

const sectionRight = document.createElement("section")
sectionRight.className = "right-content"
sectionRight.id = "eita"

main.append(sectionRight)

const img = document.createElement("img")
img.src = "https://picsum.photos/200"
img.className = "small-image"

sectionLeft.append(img)

const ul = document.createElement("ul")
const li = document.createElement("li")
li.appendChild(document.createTextNode("um"))

const liDois = document.createElement("li")
liDois.appendChild(document.createTextNode("dois"))

const liTres = document.createElement("li")
liTres.appendChild(document.createTextNode("três"))

const liQuatro = document.createElement("li")
liQuatro.appendChild(document.createTextNode("quatro"))

const liCinco = document.createElement("li")
liCinco.appendChild(document.createTextNode("cinco"))

const liSeis = document.createElement("li")
liSeis.appendChild(document.createTextNode("seis"))

const liSete = document.createElement("li")
liSete.appendChild(document.createTextNode("sete"))

const liOito = document.createElement("li")
liOito.appendChild(document.createTextNode("oito"))

const liNove = document.createElement("li")
liNove.appendChild(document.createTextNode("nove"))

const liDez = document.createElement("li")
liDez.appendChild(document.createTextNode("dez"))

ul.appendChild(li)
ul.appendChild(liDois)
ul.appendChild(liTres)
ul.appendChild(liQuatro)
ul.appendChild(liCinco)
ul.appendChild(liSeis)
ul.appendChild(liSete)
ul.appendChild(liOito)
ul.appendChild(liNove)
ul.appendChild(liDez)

sectionRight.appendChild(ul)

const h3 = document.createElement("h3")
h3.className = "description"

main.append(h3)

const h3Dois = document.createElement("h3")
h3Dois.className = "description"

main.append(h3Dois)

const h3Tres = document.createElement("h3")
h3Tres.className = "description"

main.append(h3Tres)

main.removeChild(sectionLeft)

document.getElementsById("eita").style.marginRight = "auto";

ul.removeChild(liOito)