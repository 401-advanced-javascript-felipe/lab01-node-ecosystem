'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
const faker = require('../node_modules/faker');


// faker.number();


console.log(math.add([1,3,5,8])); // 17
console.log(math.add([1,3,5,'hi'])); // 17

