'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');

function getRandomNumber() {
  return faker.random.number();
}

describe('arithmetic.add', () => {
  it('should be able to add only numbers', () => {
    let firstNum = getRandomNumber();
    let secondNum = getRandomNumber();
    let thirdNum = getRandomNumber();

    let result = arithmetic.add([firstNum, secondNum, thirdNum]);
    expect(result).toEqual(firstNum + secondNum + thirdNum);
  });

  it('should be able to only add numbers', () => {
    expect(arithmetic.add(['45',75])).toEqual(null);
  });
});

describe('arithmetic.subtract', () => {
  it('should be able to subtract only numbers', () => {
    let firstNum = getRandomNumber();
    let secondNum = getRandomNumber();
    let thirdNum = getRandomNumber();
    let result = arithmetic.subtract([firstNum, secondNum, thirdNum]);
    expect(result).toEqual(firstNum - secondNum - thirdNum);
  });

  it('should be able to only subtract numbers', () => {
    expect(arithmetic.subtract(['45',75])).toEqual(null);
  });
});

describe('arithmetic.multiply', () => {
  it('should be able to multiply only numbers', () => {
    let firstNum = getRandomNumber();
    let secondNum = getRandomNumber();
    let thirdNum = getRandomNumber();
    let result = arithmetic.multiply([firstNum, secondNum, thirdNum]);
    expect(result).toEqual(firstNum * secondNum * thirdNum);
  });

  it('should be able to only multiply only numbers', () => {
    expect(arithmetic.multiply(['45',75])).toEqual(null);
  });
});

describe('arithmetic.divide', () => {
  it('should be able to divide only numbers', () => {
    let firstNum = getRandomNumber();
    let secondNum = getRandomNumber();
    let result = arithmetic.divide(firstNum, secondNum);
    expect(result).toEqual(firstNum / secondNum);
  });

  it('should return null if numerator is 0', () => {
    expect(arithmetic.divide([2,0])).toEqual(null);
  });
});