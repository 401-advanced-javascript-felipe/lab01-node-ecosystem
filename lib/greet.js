'use strict';


module.exports = exports = (...name) => {
  if (name.length > 1 ) {
    return null;
  } else if (typeof name[0] !== 'string') {    
    return null;
  } else {
    return `hello ${name}`;
  }
};
