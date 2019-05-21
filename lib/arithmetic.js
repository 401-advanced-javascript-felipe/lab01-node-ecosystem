'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(args) {
  if (args.map(element => typeof element).includes('string')) {
    return null;
  }

  return args.reduce((acc,cv) => acc + cv);
};

arithmetic.subtract = function (args) {
  if (args.map(element => typeof element).includes('string')) {
    return null;
  }

  return args.reduce((acc,cv) => acc =- cv,0);
};

arithmetic.multiply = function(args) {
  if (args.map(element => typeof element).includes('string')) {
    return null;
  }

  return args.reduce((acc,cv) => acc *= cv,1);
};

arithmetic.divide = function(a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  if(b == 0) {return null;}

  return a/b;
};

