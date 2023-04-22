//water-limits.js

const { celsiusToFarhenheit, farhenheitToCelsius } = require('./converters.js');


const freezingPointF = celsiusToFarhenheit(0);
const boilingPointF = celsiusToFarhenheit(100);

console.log(`The freezing point of water in Farhenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Farhenheit is ${boilingPointF}`);

console.log(`The freezing point of water in celsius is ${farhenheitToCelsius(32)}`);
console.log(`The boiling point of water in celsius is ${farhenheitToCelsius(212)}`);


