/*
node environment -vs- Browser environment

1) the node runtime environment and the module.exports and require() syntax.

2) the browser's runtrime environment and the ES6 we use import/export syntax.

3) by saying export { celsiusToFarhenheit, farhenheitToCelsius };

4) we can export everything by writing this single line below.
*/


//first function
export function celsiusToFarhenheit(celsius) {
    return celsius * (9 / 5) + 32;
}

//second function
export const farhenheitToCelsius = function (farhenheit) {
    return (farhenheit - 32) * (5 / 9);
};

//third function
const milliToCenti = (millimeter) => {
    return millimeter / 10;
}

//forth function
const centiToMeter = (centimeter) => {
    return centimeter * 100;
}
// A plain variable
const nanoMeter = 0.0000000001;

export default nanoMeter;
//export { nanoMeter as default};

export { milliToCenti, centiToMeter };