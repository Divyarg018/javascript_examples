// let balajiBath = function() {
//     console.log(`\nBalji woke up`);
//     console.log(`Balji is Bathing`);
//     console.log(`Balji is Ready`);
// }

// let kishanBath = function() {
//     console.log(`\nKishan woke up`);
//     console.log(`Kishan is Bathing`);
//     console.log(`Kishan is Ready`);
// }

// balajiBath();
// kishanBath();

// kishanBath();
// balajiBath();


// let balajiBath = function () {
//     console.log(`\nBalji woke up`);
//     console.log(`Balji is Bathing`);
//     console.log(`Balji is Ready`);
// }

// let kishanBath = function () {
//     setTimeout(() => { console.log(`\nKishan woke up`) }, 2000);
//     setTimeout(() => { console.log(`Kishan is Bathing`) }, 3000);
//     setTimeout(() => { console.log(`Kishan is Ready`) }, 5000);
// }

// kishanBath();
// setTimeout(balajiBath, 7000);




// let balajiBath = function () {
//     console.log(`\nBalji woke up`);
//     console.log(`Balji is Bathing`);
//     console.log(`Balji is Ready`);
// }

// let kishanBath = function (signalHim) {
//     setTimeout(() => { console.log(`\nKishan woke up`) }, 2000);
//     setTimeout(() => { console.log(`Kishan is Bathing`) }, 3000);
//     setTimeout(() => { console.log(`Kishan is Ready`) }, 5000);
// }

// setTimeout(signalHim, 7000);

// kishanBath(balajiBath);// previously balaji taking bath was optional

/* why call back fucntion?

1.Js is an event driven language.
2.Instaed of waiting for a response from a pending event, before movong on,js will keep ececuting other events.
3.In the meantime js will keeo watch on previous pending events, and will ec=xecute the same at an appropriate time.

taht si why: call back functions are a way to make sure certain code doesnt execute until other has already finished execution.(programmers juagad)

In Ashynchronous programing language like js: callBack functions are absolute necessity*/


// const profiles = {
//     'balaji': {
//         fullname: 'Balaji KR',
//         age: 35,
//         married: true,
//         hobbies: ['Defence', 'Finance', 'Foreign Affairs']
//     },

//     'seema': {
//         fullname: 'Seema H',
//         age: 30,
//         married: true,
//         hobbies: ['Cooking', 'Painting', 'Art & Craft']
//     },

//     'kishan': {
//         fullname: 'Kishan KB',
//         age: 3,
//         married: false,
//         hobbies: ['football', 'video games']
//     },

//     'rajeev': {
//         fullname: 'Rajeevalochana KV',
//         age: 70,
//         married: true,
//         hobbies: ['watching Tv']
//     }

// }

/* Requirement:
1) Display keys of all profiles after 2 seconds.
2) Display profile of kishan agter 3 seconds(from one).
3) Display kishan's age after 2 seconds(from two).
4) Display kishan's hobbies after 4 seconds(from three).
*/

// function goToHell(pros) {
//     setTimeout((objs) => {
//         let keys = Object.keys(objs);
//         console.log(keys);

//         setTimeout((key,objs) => {
//             console.log(objs[key]);
//             setTimeout((sub) => {
//                 console.log(`Age of Kishan is: ${sub.age}`);
//                 setTimeout((sub)=> {
//                     console.log(`Hobbies of Kishan are: ${sub.hobbies}`)
//                 }, 4000, sub);
//             }, 2000, objs[`kishan`]);
//         }, 3000, 'kishan', objs)
//     }, 2000, pros);
// }

// goToHell(profiles);


/* Promises in Js

1. Promises in Js are used to handle Asynchronous operations.
2. A promise is an object that keep track about whether a certain event has happened already or not. It alsodetermines what will happen after the event.
3. promise has three stages: prnding, completed and rejected.*/

// const bringChocolates = function() {

//     let didIBringTheChocolates = false; //stage-1
//     // console.log("Getting ready to go to market");
//     // console.log("Booking a cab to the store");
//     // console.log("Selecting the chocolate");
//     // console.log("Making the payment");

//     didIBringTheChocolates = false;//stage-2

//     if(didIBringTheChocolates == true){
//         console.log(`Kishan says: Thank you appa!!`);

//     }
//     else{
//         console.log(`Kishan is crying: I hate you!!`);
//     }
// }

// bringChocolates();

/* Handling Promises:

1. Promises have a structured way to handle different conditions.
2. Plain if/else conditions does not give us the ability to handle things in a structured way.
3. If promises carefully executed: resolve() method is executed.
4. If promises have failed in executing: reject() method will be executed.
5. In the meantime, the browser will be continuing other work pending in its hands.

To craete a promise we write:
let anyPromise = newPromise(resolve, reject);

To execute a promise we write:
anyPromise.then(resolve-fun).catch(reject-fun);*/


/*const tryTobringChocolates = function(resolve, reject) {

    let didIBringTheChocolates = false; //stage-1
    setTimeout(() => {console.log("Getting ready to go to market")}, 2000);
    setTimeout(() => {console.log("Booking a cab to the store")}, 4000);
    setTimeout(() => {console.log("Selecting the chocolate")}, 6000);
    setTimeout(() => {console.log("Making the payment")}, 8000);

    setTimeout(() => {didIBringTheChocolates = true;

    if(didIBringTheChocolates == true){
        resolve();
    
    }
    else{
        reject();
    }
}, 12000);
}

function eatTheChocolates(){
    console.log(`Kishan says: Thank you appa!!`);
}

function cryInCorner(){
    console.log(`Kishan is crying: I hate you!!`);
}

let iPromiseToBringChocolates = new Promise(tryTobringChocolates);
iPromiseToBringChocolates.then(eatTheChocolates).catch(cryInCorner);*/

const profiles = {
    'balaji': {
        fullname: 'Balaji KR',
        age: 35,
        married: true,
        hobbies: ['Defence', 'Finance', 'Foreign Affairs']
    },

    'seema': {
        fullname: 'Seema H',
        age: 30,
        married: true,
        hobbies: ['Cooking', 'Painting', 'Art & Craft']
    },

    'kishan': {
        fullname: 'Kishan KB',
        age: 3,
        married: false,
        hobbies: ['football', 'video games']
    },

    'rajeev': {
        fullname: 'Rajeevalochana KV',
        age: 70,
        married: true,
        hobbies: ['watching Tv']
    }

}

//     /* Requirement:
//     1) Display keys of all profiles after 2 seconds.
//     2) Display profile of kishan agter 3 seconds(from one).
//     3) Display kishan's age after 2 seconds(from two).
//     4) Display kishan's hobbies after 4 seconds(from three).
//  */



let goToHell = new Promise(keysPromiseFucntion);

function keysPromiseFucntion(resolve, reject) {
    setTimeout((objs) => {
        let keys = Object.keys(objs);
        (keys.length > 0) ? resolve(keys) : reject(`Error while passing keys from object`);
    }, 2000, profiles)
}

function profilePromiseFunction(resolve, reject) {
    setTimeout((key, objs) => {
        (objs.hasOwnProperty(key)) ?
            resolve({ key, objs }) :
            reject(`object by name ${key} does not exisit`);

    }, 3000, 'kishan', profiles);
}

function agePromiseFunction(resolve, reject) {
    setTimeout((obj) => {
        (obj.hasOwnProperty('age')) ?
            resolve(obj) :
            reject(`Property by name age does not exisit`);

    }, 2000, profiles[`kishan`]);
}

function hobbiesPromiseFunction(resolve, reject)
setTimeout((obj) => {
    (obj.hasOwnProperty('hobbies'))?
    resolve(obj):
    reject(`Property by name hobbies does not exisit`);
}, 4000, profiles[`kishan`]);

function displayKeys(keys) {
    console.log(keys);
    return new Promise(profilePromiseFunction);
}

function displayProfile({ key, objs }) {
    console.log(objs[key]);
    return new Promise(agePromiseFunction);
}

function displayAge(obj) {
    console.log(`Age of kishan is: ${obj['age']}`);
}

function displayAge(obj){
    console.log(`Age of kishan are: ${obj['age']}`);
    return new Promise(hobbiesPromiseFunction);
}

function displayHobbies(obj){
    console.log(`Hobbies of kishan are: ${obj['hobbies']}`)
}


function error(msg) {
    console.log(msg);
}
goToHell.then(displayKeys).then(displayProfile).then(displayAge).then(displayHobbies).catch(error);

