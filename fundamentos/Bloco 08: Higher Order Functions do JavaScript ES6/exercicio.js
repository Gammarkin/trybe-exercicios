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

console.log(newEmployees(nameAndEmail));