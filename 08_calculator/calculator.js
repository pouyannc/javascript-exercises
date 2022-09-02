const add = function(a,b) {
	return parseInt(a) + parseInt(b);
};

const subtract = function(a,b) {
	return parseInt(a) - parseInt(b);
};

const sum = function(numList) {
	const sum = numList.reduce((total, nextNum) => {return total + nextNum}, 0);
  return sum;
};

const multiply = function(numList) {
  const product = numList.reduce((total, nextNum) => {return total * nextNum});
  return product;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	let fac = 1;
  for (let i = 1; i <= a; i++) {
    fac *= i;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
