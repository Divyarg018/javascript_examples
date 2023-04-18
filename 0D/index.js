/* Higher order functions

const addTwoNumbers = (a, b) =>{
    console.log(`Sum of two numbers:${a + b}`);
}

addTwoNumbers(7, 8);

let addMethod = addTwoNumbers;

addTwoNumbers(5, 6);
addMethod(5,6);

// Printing function name

console.log(addTwoNumbers);

console.log(addMethod);

console.log(addTwoNumbers.name);
console.log(addMethod.name);
*/

/* Call back functions

const sum =(param) => {
    param(5, 6);
    console.log(`Finished adding two numbers`);
}

const add = (x, y) => {
    console.log(`Sum of two numbers: ${ x + y}`);
}

sum(add); //mentos zindagi
add(5,6); // aam zindagi
*/

/*mentos zindagi with a twist
const sum =(param, a, b) => {
    param(a, b);
    console.log(`Finished adding two numbers`);
}

const add = (x, y) => {
    console.log(`Sum of two numbers: ${ x + y}`);
}

sum(add, 10, 15); 
*/

// Iterators
// Iterators are methods used on arrays to work on the same.
// some of the coomon iterators are forEach(), map(), filter()
/*
const fruitSalad = ['apple', 'pineapple', 'banana', 'orange', 'kiwi', 'custard'];

let itrFruit = function(fruit){
    console.log(`10 gms of ${fruit}`);
}

fruitSalad.forEach(itrFruit);
*/
/*Mentos zindagi
const fruitSalad = ['apple', 'pineapple', 'banana', 'orange', 'kiwi', 'custard'];


fruitSalad.forEach(function(fruit){
    console.log(`10 gms of ${fruit}`);
});
*/

// mentos zindagi with arrow function
const fruitSalad = ['apple', 'pineapple', 'banana', 'orange', 'kiwi', 'custard'];


fruitSalad.forEach(fruit=>{
    console.log(`10 gms of ${fruit}`);
});