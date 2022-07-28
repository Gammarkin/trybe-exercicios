// const fs = require('fs').promises;
// const sinon = require('sinon');
const {expect} = require('chai');

const numberType = require('../funcs/numberType');

const EXPECTED_NEUTRAL = 'neutro';
const EXPECTED_POSITIVE = 'positivo';
const EXPECTED_NEGATIVE = 'negativo';

const NEUTRAL_EXAMPLE = 0;
const POSITIVE_EXAMPLE = 5;
const NEGATIVE_EXAMPLE = -5;

describe('retorna o tipo de numero', () => {
  describe('quando o numero for 0', () => {
    it('espera que a resposta seja neutro', () => {
      expect(numberType(NEUTRAL_EXAMPLE)).to.equal(EXPECTED_NEUTRAL);
    });
  });

  describe('quando o numero for menor que zero', () => {
    it('espera que a resposta seja negativo', () => {
      expect(numberType(NEGATIVE_EXAMPLE)).to.equal(EXPECTED_NEGATIVE);
    });
  });

  describe('quando o numero for maior que zero', () => {
    it('espera que a resposta seja positivo', () => {
      expect(numberType(POSITIVE_EXAMPLE)).to.equal(EXPECTED_POSITIVE);
    });
  });
});
