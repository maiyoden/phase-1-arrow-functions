// a function expression called 'divide'
// it divides 2000 by 100 and returns the result
const divide = function() {
    return 2000 / 100;
  };
  
  // an arrow function called 'square'
  // it takes one parameter and returns its square
  const square = num => num * num;
  
  // the add arrow function (already passing your tests)
  // it takes two parameters and returns their sum
  const add = (a, b) => a + b;
  
  // Export the functions so that the tests can access them
  module.exports = { divide, square, add };
  