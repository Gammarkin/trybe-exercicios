const nameAndEmail = (fullName) => {
    const splitName = fullName.replaceAll(' ', '_');
    const newEmployee = { Nome: fullName, Email: `${splitName}@trybe.com` };
    return newEmployee;
}

const newEmployees = (func) => {
    const employees = {
        id1: func('Pedro Guerra'),
        id2: func('Luiza Drumond'),
        id3: func('Carla Paiva'),
    }
    return employees;
};

// console.log(newEmployees(nameAndEmail));

const randomNumber = () => Math.round(Math.random() * 100);
const didItWin = (fun) => fun();
const checkIfWon = (num) => {
    const result = didItWin(randomNumber);
    return (num === result) ? 'Parabéns, você ganhou!' : 'Tente novamente!';
}

// console.log(checkIfWon(8));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answerScore = (rightAnswer, studentAnswer) => {
    if (rightAnswer === studentAnswer) return 1;
    if (studentAnswer === 'N.A') return 0;
    return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, func) => {
    let score = 0;
    for (let index = 0; index < studentAnswers.length; index += 1) {
        const returnFunc = func(rightAnswers[index], studentAnswers[index]);
        score += returnFunc;
    }
    return `Nota: ${score}`;
};

// console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, answerScore));
