/* Object in js

let dog = {
    breed: 'Golden retriver',
    color: 'white',
    weight: '20',
    'responds to': ['clap', 'whistle'],
    tag_no: 110
}

let dogColor = dog.color;
console.log(`dog color is: ${dogColor}`);
console.log(`dog breed is: ${dog.breed}`);
// we cannot write 'dog.responds to' for a multiword key, as it has a space
let action = dog['responds to'];
console.log(`dog responds to: ${action}`);
console.log(dog.tag_no);
*/
/*
let baby ={
    cat: 'kitten',
    dog: 'puppy',
    kangroo: "fawn",
    'horse baby': 'zoey',
    'baby duck': 'duckling',
    'lion': 'cub',
    sheep: 'lamb'

}
console.log(baby);

console.log(baby.cat);
console.log(baby.dog);
console.log(baby.kangroo);
console.log(baby['horse baby']);
console.log(baby['baby duck']);
console.log(baby.lion);
console.log(baby.sheep);
*/
/* property assignments
let baby ={
    cat: 'kitten',
    dog: 'puppy',
    kangroo: "fawn",
    'horse baby': 'zoey',
    'baby duck': 'duckling',
    'lion': 'cub',
    sheep: 'lamb'

}

baby.cow = 'calf';
baby ['baby monkey'] = 'infant';

delete baby.dog;
delete baby.lion;

console.log(baby);

*/

/* function expressions as properties

const actions = {
    sayHello: function(){
        console.log('Hello Everyone');
    },
    sayNamaste: function(person){
        console.log(`Namaste ${person}, How are you?`);
    },
    add: function(num1, num2){
        return num1 + num2;
    }
}

actions.sayHello();
actions.sayNamaste("Divya");
console.log(`result is: ${actions.add(5,6)}`);
*/

// pass by reference
// we can pass an objects reference as an argument of a method call(function).
//this process is called pass by reference
/*
let profile ={
    fullName: 'Divya R',
    status: 'Single',
    children: 0,
    parents: ['Rajshekar', 'Savita'],
    Salaried: true,
}

const modifyName = function(obj, changedName){
    obj.fullName = changedName;
}

const addChild = (obj) =>{
    obj.children = obj.children + 1;
}


modifyName(profile, 'DR');
console.log(profile);

addChild(profile);
console.log(profile);

*/
/*
// Ilterate using for...in
let baby ={
    cat: 'kitten',
    dog: 'puppy',
    kangroo: "fawn",
    'horse baby': 'zoey',
    'baby duck': 'duckling',
    'lion': 'cub',
    sheep: 'lamb'

}

for(let key in baby){
    console.log(`child of ${key} is called: ${baby[key]}`);
}
*/

/* using for..of
let fruits = ['apple', 'pinapple', 'orange', 'kiwi', 'mango'];

for(let i of fruits){
    console.log(`Welcome ${i}`);
}
*/

/*Hybrid objects(Advanced objects)

let dog = {
    breed: 'Golden Retriever',
    color: 'orange',
    weight: 18,

    hungry() {
        console.log('Wagging the tail');
    },
    getInfo() {
        return `My dog is a ${this.breed}, is ${this.color} in color and weight is ${this.weight} kilos`;
    }
}
dog.hungry();
console.log(dog.getInfo());
*/
/* worng way of representing methods
let dog = {
    breed: 'Golden Retriever',
    color: 'orange',
    weight: 18,

    hungry:() => {
        console.log('Wagging the tail');
    },
    getInfo:() => {
        return `My dog is a ${this.breed}, is ${this.color} in color and weight is ${this.weight} kilos`;
    }
}
dog.hungry();
console.log(dog.getInfo());
*/

/* Get Methods

let dog ={
    _breed: 'Golden Retiever',
    _weight: 18,
    color: 'orange',
    get breed(){
        return this._breed;
    },
    get weight(){
        return this._weight;
    },
    hungry(){
        console.log('Start wagging the tail');
    },
    showInfo(){
        return `My dog is a ${this._breed}, is ${this.color} in color and weighs ${this._weight} kilos`;
    }
}
 console.log(dog.breed);
 console.log(dog.weight);
 console.log(dog.color);

 dog.hungry();
 console.log(dog.showInfo());
*/
/*Set Methods
let dog = {
    _breed: 'Golden Retiever',
    _weight: 18,
    color: 'orange',
    get breed() {
        return this._breed;
    },
    get weight() {
        return this._weight;
    },
    set breed(newBreed) {
        if (typeof newBreed === 'string') {
            this._breed = newBreed;
        }
    },
    set weight(num) {
        if (typeof num == 'number' && num > 0) {
            this._weight = num;
        }
        else {
            console.log('Please enter a valid number above 0');
        }
    }
}
console.log(`Dog breed before: ${dog.breed}`);
console.log(`Dog weight before: ${dog.weight}`);
console.log(`Dog color before: ${dog.color}`);

dog.breed = 'German Sheperd';
dog.weight = 25;
dog.color = 'Blackish brown';

console.log(`Dog breed after: ${dog.breed}`);
console.log(`Dog weight after: ${dog.weight}`);
console.log(`Dog color after: ${dog.color}`);
*/

/* Factory

const dogFactory = (breed, weight, color, violent) => {
    return {
        _breed: breed,
        _weight: weight,
        _color: color,
        _violent: violent,

        showInfo() {
            console.log(`My dog is a ${this._breed}, whose color is ${this._color} and it weighs ${this._weight} kilos`);

            this._violent ? console.log("It is Ferocius \n") : console.log('It is sweet \n');
        },
        get breed() {
            return this._breed;
        },
        get weight() {
            return this._weight;
        },
        get color() {
            return this._color;
        },
        get violent() {
            return this._violent;
        },
        set breed(br) {
            if (typeof br == 'string') {
                this._breed = br;
            }
            else {
                console.log('Please enter a valid value');
            }
        },
        set weight(wei) {
            (typeof wei == 'number && wei > 0') ?
                this._weight = wei : console.log('Please enter a valid number');
        },
        set color(col) {
            (typeof col == 'string') ? this._color = col : console.log('Please enter a valid value');
        },
        set violent(vio) {
            (typeof vio == 'boolean') ?
                this._violent = vio : console.log('Enter a valid Boolean true or false');
        },
    }
}

let d1 = dogFactory('Larbrador', 18, 'orange', false);
d1.showInfo();

let d2 = dogFactory('German Sheperd', 22, 'Black', true);
//d2.showInfo();

// built in object methods
// three commonly used object method are: object.keys(); object.entries(); object.assign();
const dogKeys = Object.keys(d1);
console.log(dogKeys);


const dogEntries = Object.entries(d1);
console.log(dogEntries);


const modifiedDog = Object.assign({tail: 'Long and Furry', response_time: 2}, d1);
//console.log(modifiedDog);

const modEnt = Object.entries(modifiedDog);
console.log(modEnt);
*/

// Spread operator

const profile = {
    firstName: 'Divya',
    lastName: 'R'
};

const address = {
    country: 'India',
    city: 'Bengaluru'
};

const user ={
    ... profile,
    gender: 'female',
    ... address
}

console.log(user);