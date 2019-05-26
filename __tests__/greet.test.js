'use strict';

const greet = require('../lib/greet');
const faker = require('faker');

function getName() {
  return faker.name.findName();
}

describe('greet', () => {
  it('should return null if argument is not a string', () => {
    expect(greet(401)).toEqual(null);
  });

  it('should return \'hello world\'', () => {
    expect(greet('world')).toEqual('hello world');
  });

  it('should return \'hello\'', () => {
    let name = getName();
    expect(greet(name)).toEqual(`hello ${name}`);
  });

});

