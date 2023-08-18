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



let animal = {
    eats: true,
    walk() {
    
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.walk =function() {
    alert("Rabbit! Bounce-bounce");
    
};
