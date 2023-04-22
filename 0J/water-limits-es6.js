import {celsiusToFarhenheit, farhenheitToCelsius} from './converters.js';
import { milliToCenti, centiToMeter } from './converters.js';
import nano from './converters.js';

const buttonElement = document.getElementById('button');
buttonElement.addEventListener('click', clickMe);

function clickMe(){
    let element = document.getElementById('container');
    element.innerHTML = `<h1>Boiling point is: ${celsiusToFarhenheit(100)}
    & Freezing point is: ${celsiusToFarhenheit(0)}, <br><br>
    100 milli meters is ${milliToCenti(100)} centi-meters, <br><br>
    10000 centi meters is ${centiToMeter(10000)} meters, <br><br>
    One nanometers is ${nano} meters. </h1>`;
}

console.log(`water boiling point is ${celsiusToFarhenheit(100)} Degree Farhenheit`);
console.log(`water boiling point is ${farhenheitToCelsius(212)} Degree celsius`);