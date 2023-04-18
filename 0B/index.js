/*let flag = true;
if (flag){
    console.log("Salute, Salute, Salute");
}
*/
/*
if (5 > 6) {
    console.log(" Do Something!");
}
else if (7 < 9) {
    console.log('Do something something!');
}
else {
    console.log("Dont do anything");
}
*/
/*
let flag = 55.5; // 45, 0, -5, "Super Man", "", " ", '', ' ', '0', null, undefined

if (flag){
 console.log("Flag is Truthy;")
}
else{
    console.log('Flag is Falsy');

}
*/

// short circuit assignment
/*
let myName = "Balaji";
let person = myName || 'Nobody';
console.log(`You know, ${person} is a good boy`);

let myName = '';
let person = myName || 'Nobody';
console.log(`You know, ${person} is a good boy`);
*/
/*
let condition = 0; // it can be false, 0, "", '', null, any number, any string
(condition) ? (console.log("First Statement")) : (console.log("Second Statement"));
// var c = (condition) ? 55 : 65;
*/


// Switch case

/*let position = "Fisrt Place";

if (position === 'First Place') {
    console.log('You will get gold medal');
}
else if (position === 'Second Place') {
    console.log('You will get silver medal');
}
else if (position === 'Third Place') {
    console.log('You will get bronze medal');
}
else {
    console.log('You will get nothing');
} */
/*
let position = "Second Place";

switch (position) {
    case 'First Place':
        console.log('You will get gold medal');
        break;

    case 'Second Place':
        console.log('You will get silver medal');
        break;

    case 'Third Place':
        console.log('You will get bronze medal');
        break;

    default:
        console.log('you will get nothing');
        break;
}
*/

// functions are block of code with a name(identifier), which when invoked performs 
/*
function sayHello(){
    console.log("Hello Everyone!");
    console.log('My name is Divya');

}

function remindMe(){
    console.log('water the plants');
}
sayHello();
sayHello();
remindMe();
remindMe();
*/

// parameters and arguments

// inputs defined at start of the function is known as parameters.
//  input values we pass while we invoke the function are known as arguments

/*
function sayHello(myName){
    console.log('Hello Mr.' + myName + '!how are you?');
}
function sayNamaste(myName){
    console.log (`Namaste ${myName}! welcome home`);
}
function areaOfRectangle(length, breath){
    let area = length * breath;
    console.log(`Area of the rectangle is: ${area}`);
}
function areaOfTriangle(b, h){
    let area = 0.5 * b * h;
    console.log('Area of triangle is:' + area);
}
sayHello();
sayNamaste();
areaOfRectangle();
areaOfTriangle();

sayHello("Kishan");
sayNamaste('Seema');
areaOfRectangle(20, 10);
areaOfTriangle(20, 30);
*/

// while declaring a function parameters, we can even declare its default value.
// in case the user forgets to pass the arguments, default arguments will be considered for processing.
/*
function sayNamaste(myName ='Random Person'){
    console.log(`Namaste ${myName}! Welcome Home!`);
}

function areaOfRectangle(length=10, breath=10){
    let area = length * breath;
    console.log(`Area of the rectangle is: ${area}`);
}

function areaOfTriangle(b=5, h=5){
    let area =0.5 * b * h;
    console.log('Area of triangle is:' + area);
}

sayNamaste();
areaOfRectangle();
areaOfTriangle(10);
*/
/*
// Return statement

function areaOfRectangle(length = 10, breadth = 10) {
    let area = length * breadth;
    console.log(`Area of the rectangle is: ${area}`);
}
function areaOfTriangle(b, h) {
    let area = 0.5 * b * h;
    return area;
}

areaOfRectangle(15, 20);

var triangleArea = areaOfTriangle(10, 15);
console.log(`Area of the triangle is: ${triangleArea}`);
*/

// Helper functions
// onvoking one function inside another function is a common practice. such functions area called helper functions.
/*
function mangoWeight(count){
    return count * 0.25;
}

function mangoCost(count){
    return mangoWeight(count) * 175;
}

var costOfMangoes = mangoCost(25);
console.log(`Cost of 25 mangoes is: Rs.${costOfMangoes} only/-`);
console.log('Cost of 35 mangoes is: Rs.' + mangoCost(35) + ' only/- ');
console.log(`Cost of 45 mangoes is: Rs.${mangoCost(45)} only/-`);
*/

// Function expression(anonymous functions)
/*
Function expression is nothing but a function object referred by a variable
as we dont name anything it is called Anonymous functions
with the this we can transfer the function object to some other varibale and start invoking the function by that name.
*/
/*
function areaOfTriangle(b, h);{
    let area = 0.5 * b * h;
    return area;
}

var triangleArea = function(b, h){
    let area = 0.5 * b * h;
    return area;
}

console.log(`area using function: ${areaOfTriangle(10, 15)}`);
console.log(`area using function expression: ${triangleArea(5, 7)}`);
*/

/*Transferring function expression

var triangleArea = function(b, h){
    let area = 0.5 * b * h;
    return area;
}

var area = triangleArea;

triangleArea = null;

console.log (`using 'area' variable: $(area(5, 7)})`);
console.log(`using 'triangleArea' varibale: ${triangleArea(5, 7)}`);
*/

/* Arrow head functions

var triangleArea = (base, height)=>{
    let area = 0.5 * base * height;
    return area;
}

var sayHello = () =>{
    console.log('Hello Everyone');
}

var sayNamaste = myName =>{
    console.log(`Namaste ${myName}! Welcome Home!`);
}

//console.log(`Area of the triangle is: ${triangleArea(5, 8)}`);
sayHello();
sayNamaste('Seema');
*/

/* Concise body(arrow function)

var triangleArea = (base, height) => {
    let are = 0.5 * base * height;
    return triangleArea;
}

var triangleArea = (base, height) => 0.5 * base * height;
console.log(`area of triangle is: ${triangleArea(5, 7)}`);
*/

/* 
Scope
{...} demacrates scope in js
variables created inside a method or a if else blovks, or the arameters inside a function(created using let keyword) live and die after the scope ends.
Global scope area variables created outside any scope can be accessible till the end of the program.
Local scope are avriables craeted inside thsoe above mentioned blocks.
*/
/*
var valueOne = 10; // global scope(line number 1 to end)
var valueTwo = 20; // global scope(line number 1 to end)
var valueThree = 30; // global scope(line number 1 to end)

function funA(){
    {
    var valueFour = 40; // function scope(Line number 5 to 20)
    let valueFive = 50; // function scope(Line number 7 to 10)
    const valueSix = 60; // function scope(Line number 7 to 10)
}

console.log(valueOne); // Accessing Global variable inside function
console.log(valueTwo); // Accessing Global variable inside function
console.log(valueThree); // Accessing Global variable inside function

console.log(valueFour); // Accessing function level variable inside a function
console.log(valueFive); // Error: valueFive is not defined
console.log(valueSix); // Error: valueSix is not defined
}

funA();

console.log(valueOne);
console.log(valueTwo);
console.log(valueThree);
console.log(valueFour); // Error valueFour is not defined
console.log(valueFive); // Error valueFive is not defined
console.log(valueSix); // Error valueSix is not defined
*/

// Scope of local variable(var and let)

for (var i = 1; i<=5; i++){
    console.log('Hello World');
}

console.log(i); // i is accessible even outside.

for (let j = 1; j<= 5; j++){
    console.log("Saranghae");
}
console.log(j); // j is not accessible outside the block