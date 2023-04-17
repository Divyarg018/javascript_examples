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
