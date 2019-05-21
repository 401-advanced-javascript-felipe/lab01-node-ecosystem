'use strict';
const check = require('./check');

let arithmetic = module.exports = {};

arithmetic.add = function(args) {

  if (check.type(args) === null) {
    return null;
  } else {
    return args.reduce((acc,cv) => acc + cv);
  }
};

arithmetic.subtract = function (args) {
  if (check.type(args) === null) {
    return null;
  } else {
    return args.reduce((acc,cv) => acc =- cv,0);
  }
};

arithmetic.multiply = function(args) {
  if (check.type(args) === null) {
    return null;
  } else {
    return args.reduce((acc,cv) => acc *= cv,1);
  }

};

arithmetic.divide = function(a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  if(b == 0) {return null;}

  return a/b;
};

