const searchEmployee = require('./testes.js');

it('testa um', () => {
    expect(() => { searchEmployee(1, 'firstName') }).toThrow('');
    expect(() => { searchEmployee(1, 'firstName') }).toThrow('test');
});

it('testa dois', () => {
    expect(() => { searchEmployee('8579-6', 'age') }).toThrow();
    expect(() => { searchEmployee('8579-6', 'age') }).toThrow('teste');
});