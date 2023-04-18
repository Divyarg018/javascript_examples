// Arrays and Loops

// Arrays ara data structures in js which will help store values of same data type in other languages but multiple object in js.

//let southAsia = ['India', 'Pakistan', 'Bangladesh'];
//console.log(southAsia); // ['India', 'Pakistan', 'Bangladesh'];
/*
let southAsia = [];
southAsia[0] ='India';
southAsia[1] ='Pakistan';
southAsia[2] ='Bangladesh';
console.log(southAsia);
*/

/* Accessing arrays

let southAsia = ['India', 'Pakistan', 'Bangladesh', 'Butan', 'Burma', 'Nepal'];

southAsia[4] = 'Mayanmar';
console.log('Burma name has changed to ' + southAsia[4] + ' recently');

let topEconomy = southAsia[0];
console.log(`Richest economy in South asia is ${topEconomy}`);

console.log(`if we try to access an array out of index we get: ${southAsia[7]}`);

*/

/*
Const arrays

const arrays can be altered from the inside. we can add new new elements using Arrays.push() method

but we cannot assign the variable to some other array or a random value. this wiil result in error.
*/
/*
const northAmerica = ['Canada', 'United States of America', 'Mexico'];

northAmerica[1] = 'USA';
console.log(northAmerica); 

northAmerica.push("Panama");
console.log(northAmerica);

northAmerica = ['Columbia', 'Brazil'];
*/

/* Length variable

let southEastAsia = ['India', 'Pakistan', 'Bangladesh'];
let southAsia = ['India', 'Pakistan', 'Bangladesh', 'Buthan', 'Burma', 'Nepal' ];

console.log(southAsia.length);
console.log(southEastAsia.length);

let str = 'My name is Antony Gonsalvis';
console.log(str.length);
*/

/* Push | Pop

let nato = ['USA', 'UK', "Germany", 'Canada', 'France', 'Italy', 'Turkey'];

nato.push('Romania', 'Greece', "Latvia", 'Lithuania', 'Estonia')
console.log(nato);

nato.pop();
nato.pop();
nato.pop();
console.log(nato);


// Unshift | shift
// methods are used to add and remove elements to an array from the start(to the start)

nato.unshift('Ukraine', 'Finland', 'Poland');
console.log(nato);

nato.shift();
nato.shift();
console.log(nato);

// Slica Arrays
// Slice() method is used to split the array based on index
// Arrays.indexOf(`element); is used to find the index of a particular element

console.log(`Initial Nato was:${nato.slice(1, 7)}`);
//Initial Nato was:USA,UK,Germany,Canada,France,Italy
console.log('New members are: ' + nato.slice(8));
//New members are: Romania,Greece
console.log(nato.slice(4,6));
//[ 'Canada', 'France' ]
console.log(nato.indexOf("Germany"));
*/

/* Loops in JavaScript
for (let i = 0; i < 5; i++){
    console.log(i);
}

for (let i = 7; i >= 0; i--){
    console.log(i);
}

let nato = ['USA', 'UK', 'Germany', 'France', 'Italy', 'Turkey'];

for( let i = 0; i < nato.length; i++){
    console.log(nato[i]);
}
*/
/*
let nato = ['USA', 'UK', 'Germany', 'France', 'Italy', 'Turkey'];

for (let i=0; i< nato.length; i++){
    console.log(`Long Live ${nato[i]}`);
}
*/

// Nested Loops

let nato = ['USA', "UK", 'Germany', 'Canada', 'France', 'Italy', 'Turkey'];
let groupEight = ['USA', 'UK', "Germany", 'Italy', 'France', 'Canada', 'Japan', 'Russia', 'European Union'];
let common = [];

for (let i = 0; i < nato.length; i++) {
    for (let j = 0; j < groupEight.length; j++) {
        if (nato[i] === groupEight[j]) {
            common.push(nato[i]);
        }
    }
}

console.log(`common members are: ${common}`);


