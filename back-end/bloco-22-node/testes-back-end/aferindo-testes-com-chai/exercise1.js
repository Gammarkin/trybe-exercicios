const {expect} = require('chai');

const calculaSituacao = require('./calculaSituacao'); //função exemplo

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovacao"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).equals('reprovacao');
  });
});
