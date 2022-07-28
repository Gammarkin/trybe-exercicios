const fs = require('fs').promises;
const sinon = require('sinon');
const {expect} = require('chai');

const writeInFiles = require('../funcs/writeInFiles');

const FILE_PATH = './new-file.txt';
const FILE_CONTENT = 'oi, eu sou um arquivo.';
const EXPECTED_SUCESS = 'ok';

describe('escrevendo em arquivos', () => {
  before(() => {
    sinon.stub(fs, 'writeFile');
  });

  after(() => {
    fs.writeFile.restore();
  });

  describe('caso a função consiga escrever', () => {
    it('espera que retorne uma mensagem de sucesso.', async () => {
      expect(await writeInFiles(FILE_PATH, FILE_CONTENT)).to.equal(
        EXPECTED_SUCESS
      );
    });
  });
});
