// const calculator = () => {
// 	const subtract = (x, y) => x - y;

// 	const multiply = (x, y) => x * y;

// 	const add = (x, y) => x + y;

// 	const divide = (x, y) => x / y;

// 	return {subtrsct, multiply, add, divide};
// };


// calculator(8, 6);

// module.exports = calculator;

const calculator = {

 add: (x, y) => {
  return x + y;
},

 subtract: (x, y) => {
  return x - y;
},

 multiply: (x, y) => {
  return x * y;
},

 divide: (x, y) => {
  return x / y;
},

};

module.exports = calculator;