'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
// console.log(greet('JOHN'));
// console.log('add', math.add([1,3,5,8])); // 17
console.log(math.subtract([100,10,50,20])); // 20
console.log(math.subtract([100,10,50,'hi'])); // 20

// console.log(math.multiply(2,4)); // 8
// console.log(math.divide(8,0)); // 4