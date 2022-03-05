const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// exercício 1
const modifyObj = (modifiedObj, key, value) => modifiedObj[key] = value;
modifyObj(lesson2, 'turno', 'noite');

// exercício 2
const listObjKeys = (obj) => Object.keys(obj);
// console.log(listObjKeys(lesson2));

// exercício 3
const showObjSize = (obj) => Object.entries(obj);
// console.log(showObjSize(lesson3));

// exercício 4
const listObjValues = (obj) => Object.values(obj);
// console.log(listObjValues(lesson2));

// exercício 5
const allLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });
// console.log(allLessons);

// exercício 6
const sumThreeInObj = (obj, key1, key2, key3, keyFinal) => {
    const number1 = obj[key1][keyFinal];
    const number2 = obj[key2][keyFinal];
    const number3 = obj[key3][keyFinal];
    const total = number1 + number2 + number3;
    return total;
}
// console.log(sumThreeInObj(allLessons, 'lesson1', 'lesson2', 'lesson3', 'numeroEstudantes'));

// exercício 7
const getValueByNumber = (obj, index) => Object.values(obj)[index];
// console.log(getValueByNumber(lesson1, 0));

// exercício 8
const verifyPair = (obj, key, value) => {
    if (key in obj && obj[key] === value) {
        return true
    }
    return false
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
