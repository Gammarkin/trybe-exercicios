const myFizzBuzz = require('./fizzbuzz.js');

describe('Teste um de fizzbuzz', () => {
    it('expects fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('expects fizz', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });
    it('expects buzz', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });
    it('expects false', () => {
        expect(myFizzBuzz('a')).toBe(false);
    });
    it('expects num', () => {
        expect(myFizzBuzz(1)).toBe(1);
    });
});
