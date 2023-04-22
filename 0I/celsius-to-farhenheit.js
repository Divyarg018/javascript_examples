// dynamic 
function celsiusToFarhenheit(celsius){
    return celsius * (9/5) + 32;
}

const celsiusInput = process.argv[2];
const farhenheitValue = celsiusToFarhenheit(celsiusInput);

console.log(`${celsiusInput} degrees celsius = ${farhenheitValue} degrees Farhenheit`);