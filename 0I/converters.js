// exporting a method as a module
function celsiusToFarhenheit(celsius){
    return celsius * (9/5) + 32;
}
// exporting old function
module.exports.celsiusToFarhenheit = celsiusToFarhenheit;


// declaring another function and exporting on the same line
module.exports.farhenheitToCelsius = function(farhenheit){
    return (farhenheit - 32) * (5/9);
};