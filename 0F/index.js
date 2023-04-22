/* Call, Apply and Bind

let personOne ={
    firstName: 'Balaji',
    lastName: 'KR',

printName(){
    console.log(this.firstName + ' ' + this.lastName);
}
}

let personTwo = {
    firstName: 'Mahindra',
    lastName: 'Dhoni',


printName(){
    console.log(this.firstName + ' ' + this.lastName);
}
}

personOne.printName();
personTwo.printName();
*/

/*Function Borrowing

let personOne ={
    firstName: 'Balaji',
    lastName: 'KR',

printName(){
    console.log(this.firstName + ' ' + this.lastName);
}
}

let personTwo = {
    firstName: 'Mahindra',
    lastName: 'Dhoni',
}

personOne.printName.call(personTwo);
*/

/*Approach no.2(Aam zindagi)

let printName = function(obj){
    console.log(obj.firstName + ' ' + obj.lastName);
}
let personOne ={
    firstName: 'Balaji',
    lastName: 'KR',
}

let personTwo ={
    firstName: 'Sachin',
    lastName: 'Tendulkar',
}

printName(personOne);
printName(personTwo);
*/
/* Approach no.2 (mentos zindagi)
let printName = function(){
    console.log(this.firstName + ' ' + this.lastName);
}
let personOne ={
    firstName: 'Balaji',
    lastName: 'KR',
}

let personTwo ={
    firstName: 'Sachin',
    lastName: 'Tendulkar',
}

printName.call(personOne);
printName.call(personTwo);
*/
/* Approach no.3 (mentos zindagi)
let personOne ={
    firstName: 'Balaji',
    lastName: 'KR',
}

let personTwo ={
    firstName: 'Sachin',
    lastName: 'Tendulkar',
}
let printName = function (hometown, state){
    console.log(`\n ${this.firstName} ${this.lastName} From ${hometown}, ${state}`);
}

printName.call(personOne, 'Bengaluru', 'Karnataka');
printName.call(personTwo, 'Mumbai');
*/
/* using apply method
let personOne ={
    firstName: 'Balaji',
    lastName: 'KR',
}

let personTwo ={
    firstName: 'Sachin',
    lastName: 'Tendulkar',
}
let printName = function (hometown, state){
    console.log(`\n ${this.firstName} ${this.lastName} From ${hometown}, ${state}`);
}

printName.apply(personOne, ['Bengaluru', 'Karnataka']);
printName.apply(personTwo, ['Mumbai']);
*/

// Call and Apply

// call() method is using 'pass by reference' as we pass the object on which the method is to be called(with some additional parameters: comma separated).

// apply() method is using 'pass by reference' as we pass the object on which the method is to be called(with some additional parameters: as an array).

//  bind function execution
let personOne ={
    firstName: 'Balaji',
    lastName: 'KR',
}

let personTwo ={
    firstName: 'Sachin',
    lastName: 'Tendulkar',
}
let printName = function (hometown, state){
    console.log(`\n ${this.firstName} ${this.lastName} From ${hometown}, ${state}`);
}
let f1 = printName.bind(personOne, 'Bengaluru', 'Karnataka').call();
let f2 = printName.bind(personTwo, "Mumbai").call();

console.log(f1);
console.log(f2);

//f1();
//f2();
