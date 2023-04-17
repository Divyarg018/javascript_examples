/*
console.log("Hello World");
console.log('My name is Divya');
console.log(1987)
console.log(true)
console.log(false)
*/
/*console.log('Hello World'); // single line comment
There are 6 primary data-types in Javascript
a)number b)string c)boolean d)null e)undefined f)object
console.log(5); // number data type
console.log(25.69); 
 console.log('Javascript'); // string datatype
 console.log('My name is Divya!! I love #Jscript');

 console.log(5>6); // result is boolean
 console.log(5 <= 25);*/
/*
 var a = null; // assigning null
 console.log(a); // output is null

 var b; // not defining anything
 console.log(b); //output is undeifined
 */

/*Arithmetic operations
console.log(65 + 55); // addition
console.log(65 - 55); // subtraction
console.log(65 * 55); // multiplication
console.log(65 / 55); // division - quotient
console.log(65 % 55); // modulo - remainder
*/
/*
console.log('Hello' + 'World');
console.log('Hello' + '' + 'World');

console.log('Hello' .length); //5
console.log('My name is Anthony Gonsalvis' .length); // 28
*/
/*
console.log('Hello'. toLowerCase()); 
console.log('VAnakkam'. toUpperCase());
console.log('Super Ranga'. startsWith('S'));
console.log('Super Ranga'. startsWith('R'));
console.log('     No Space Please       '.trim());
*/

/* Built-in objects
console.log (Math.random()); // generates random number between 0-1
console.log(Math.floor(46.7));
console.log(Math.ceil(46.7));
console.log(Number.isInteger(75));
console.log(Number.isInteger(75.33));
*/
// generate a random number between 0-75
//console.log(Math.random() * 75);

/* generate a dice program between 1-6
let num = Math.random() * 7;
let rou = Math.floor(num);
if (rou === 0) {
    console.log("try again");
}
else{
    console.log(rou);
}
*/
/*
var myName = 'Balaji';
var age = 35;

console.log(myName);
console.log(age);
console.log('My name is ' + myName + ' & my age is ' + age);
*/

/*
let myName = "Kishan";
let age = 3;

console.log(myName);
console.log(age);
console.log('My name is ' + myName + ' & my age is ' + age);
*/
/*
const myWife = "Seema";
const age = 30;
console.log('My wife is ' + myWife + ' & her age is ' + age);
*/
// In programming when the operator has two operands it is called Binary operator
// eg. var a = 5 + 6; var b = 7 -4; var c = a * b;
// When an operator has three operands it is called Ternary operator
// eg. var c = (condition) ? 55 : 65;
// when an operator has only one operand it is called unary operator.

// var num = 55; // assigment operator

// num += 10; // 65 | Equivalent: num = num + 10;
// num -= 20; // 45 | Equivalent: num = num - 20;
// num *= 100; // 4500 | Equivalent: num = num * 100;
// num /= 50; //90 | Equivalent: num = num / 50;
// num %= 4; // 2 | Equivalent: num = num % 4;

// Increment and Decrement operator
/*
let year = 1987;
year++;
console.log(year);
year--;
year--;
year--;
console.log(year);
*/

// string concatenation vs Interpolation
/*
let myName = 'Balaji';
let age = 35;

console.log('My name is ' + myName + ' & my age is '+ age);
console.log(`My name is ${myName} & my age is : ${age}`);
*/

// typeof is a keyword used to know the type of the variable present
// js is  ot a strictly type checked language like Java
// any type of vale can fit into any variable present

let foo = " Super Man";
console.log(typeof foo);
foo = 1975;
console.log(typeof foo);
foo = 55.78;
console.log(typeof foo);
foo =100 > 200;
console.log(typeof foo);








