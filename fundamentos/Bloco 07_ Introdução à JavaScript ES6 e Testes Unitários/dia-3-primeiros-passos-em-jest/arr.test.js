const myRemove = require('./arr.js');

describe('Teste um', () => {
    it('verifica se o retorno de myRemove([1, 2, 3, 4], 3) retorna o arr esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
    });
});

describe('Teste dois', () => {
    it('verifica se o retorno de myRemove([1,2,3,4],3) não retorna [1,2,3,4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
    });
});

describe('Teste três', () => {
    it('verifica se o retorno de myRemove([1,2,3,4],5)retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
    });
});