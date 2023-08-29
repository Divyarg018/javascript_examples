//let arr = ["Balaji", "Seema"];

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// alert (rabbit.eats);
// alert (rabbit.jumps);


// let animal = {
//     eats: true,
//     walk() {
//         alert("Animal walk");
//     }
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// let animal = {
//     eats: true,
//     walk() {
//         alert("Animal walk");
//     }
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// let longEar = {
//     earLength: 10,
//     __proto__: rabbit
// };



// let animal = {
//     eats: true,
//     walk() {

//     }
// };

// let rabbit = {
//     __proto__: animal
// };

// rabbit.walk =function() {
//     alert("Rabbit! Bounce-bounce");

// };


// let user = {
//     name: "John",
//     surname: "Smith",

//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     },

//     get fullName() {
//         return `${this.name} ${this.surname}`;

// }
// };

// let admin = {
//     __proto__: user,
//     isAdmin: true
// };


// admin fullName = "Alice Cooper";


// let father = {
//     name: "Ramesh",
//     city: "Vijaynagar",
//     showInfo: function () {
//         console.log(`My name is ${this.name} from ${this.city}`);
//     }

//    /* showInfo() {
//     console.log(`My name is ${this.name} from ${this.city}`);
//     } */

// }

// let son = {
//     name: "Suresh"
// }

// // never do this
// son.__proto__ = father;

// let animal = {
//         eats: true
//     };

//     let rabbit = {
//         jumps: true,
//         __proto__:animal
//     };



// alert(Object.keys(rabbit)); // jumps

// for(let prop in rabbit) alert(prop);// jumps, then eats


let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);
    if(isOwn){
        alert(`Our: ${prop}`);
    }
    else{
        (`Inheritance: ${prop}`);
    }
}
