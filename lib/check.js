'use strict';

let check = module.exports = {};

check.type = function(args) {
  if (args.map(element => typeof element).includes('string')) {
    return false;
  }
};


