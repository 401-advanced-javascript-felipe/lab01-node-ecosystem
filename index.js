'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');


const faker = require('./node_modules/faker');

console.log(faker.random.word());
console.log(faker.random.arrayElement());

console.log(greet('JOHN'));
console.log(math.add([1,3,5,8])); // 17
console.log(math.add([1,3,5,'hi'])); // 17

console.log(math.subtract([100,10,50,20])); // 20
console.log(math.subtract([100,10,50,'hi'])); // 20

console.log(math.multiply([2,2,2,2,2])); // 8
console.log(math.divide(8,2)); // 4