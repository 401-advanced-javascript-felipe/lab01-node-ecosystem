'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(args) {
  console.log(args);
  if( typeof args[0] !== "number" || typeof args[1] !== "number" ) { return null; }

  return args.reduce((acc,cv) => acc + cv);
};

arithmetic.subtract = function (args) {

  if( args.includes(""))


  return args.reduce((acc,cv) => acc =- cv,0);
};

arithmetic.multiply = function(a,b) {
  if( typeof a !== "number" || typeof b !== "number" ) { return null; }
  return a * b;
};

arithmetic.divide = function(a,b) {
  if( typeof a !== "number" || typeof b !== "number" ) { return null; }
  if(b == 0) {return null;}

  return a/b;
};

