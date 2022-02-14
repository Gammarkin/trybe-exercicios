function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//ex 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criaDia() {
    const dias = document.querySelector('#days')

    for (let i = 0; i < dezDaysList.length; i++) {
        const dezD = dezDaysList[i];
        const dezDListItem = document.createElement('li');
        dezDListItem.innerHTML = dezD;
        dezDListItem.className = 'day';

        dias.append(dezDListItem);

        if (dezDaysList[i] === 23) {
            dezDListItem.className = 'day holiday';
        } if (dezDaysList[i] === 25) {
            dezDListItem.className = 'day friday holiday';
        } if (dezDaysList[i] === 31) {
            dezDListItem.className = 'day holiday';
        } if (dezDaysList[i] === 4) {
            dezDListItem.className = 'day friday';
        } if (dezDaysList[i] === 11) {
            dezDListItem.className = 'day friday';
        } if (dezDaysList[i] === 18) {
            dezDListItem.className = 'day friday';
        }
    }
}
criaDia();

//ex 2
function holidayButtom(Feriados) {
    let botao = document.querySelector('.buttons-container');
    Feriados = document.createElement('button');
    Feriados.innerText = 'Feriados';
    Feriados.className = 'btn-holiday';

    botao.appendChild(Feriados);
}
holidayButtom();

//ex 3
function feriadosClick() {
    let button = document.querySelector('.btn-holiday');

    button.addEventListener('click', function () {
        let holiday = document.querySelectorAll('.holiday');
        for (i = 0; i < holiday.length; i += 1) {
            if (holiday[i].style.backgroundColor === 'rgb(238, 238, 238)') {
                holiday[i].style.backgroundColor = 'green';
                holiday[i].style.color = 'black'
            } else {
                holiday[i].style.backgroundColor = 'rgb(238, 238, 238)';
                holiday[i].style.color = '#777';
            }
        }
    });
}
feriadosClick();

//ex 4
function fridayButtom(SextaFeira) {
    let botao = document.querySelector('.buttons-container');
    SextaFeira = document.createElement('button');
    SextaFeira.innerText = 'Sexta-Feira';
    SextaFeira.className = 'btn-friday';

    botao.appendChild(SextaFeira);
}
fridayButtom();

//ex 5
function sexta(fridaysArray) {
    let button = document.querySelector('.btn-friday');
    button.addEventListener('click', function () {
        let friday = document.querySelectorAll('.day.friday');
        let text = 'sextou';
        for (i = 0; i < friday.length; i++) {
            if (friday[i] !== text) {
                friday[i].innerHTML = text

            }
            else {
                friday[i].innerHTML = fridaysArray[i];
            }
        }
    });
}
let dezFridays = [4, 11, 18, 25];
sexta(dezFridays);

//ex 6
//tentei, mas função n deu. Usei css
/*let a = document.getElementsByClassName('days');
a.addEventListener('mouseenter', hover)

function hover() {
    a.innerText = 'teste'
}
*/

//ex 7

