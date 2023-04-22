/* Two ways of object creation

// instant object creation

let dog = {
    _breed: 'Golden Retrevier',
    _weight: 18,
    _color: 'Orange',

    //Getters
    //Setters
    //methods
}

// Factory object creation

const dogFactory = (breed, weight, color) => {
    return {
        _breed: breed,
        _weight: weight,
        _color: color,

        //Getters
        // setters
        //methods
    }
}
let d1 = dogFactory('Labrador', 18, 'Orange');


// this keyword

// 'this keyword' in js is used to remove the conflict between the local variables and object level variables.

//'this keyword holds the reference of currently executing object.


class IceCream {

    constructor(flavor, size){
        this.flavor = flavor;
        this.size = sixe;
    }
}
let i = new IceCream('Strawberry', 25);
*/

/* Creating Objects

class Dog {

    constructor(breed, weight, color, violent){
        this._breed = breed;
        this._weight = weight;
        this._color = color;
        this._violent = violent;
    }

    showInfo(){
        console.log(`My Dog is a ${this._breed}),
        whose color is ${this._color}
        and it weighs ${this._weight} kilos`);
    
        this._violent ? console.log("It is Ferocious \n"): console.log('It is sweet \n');
    }

    //Getter, setters, methods
    get breed(){
        return this._breed;
    }
    get weight(){
        return this._weight;
    }
    get color(){
        return this._color;
    }
    get violent(){
        return this._violent;
    }

    set breed(newBreed){
        if (typeof newBreed == 'string'){
            this._breed = newBreed;
        }
    }
    set color(newColor){
        if (typeof newColor == 'string'){
            this._color = newColor;
        }
    }
    set weight(num){
        if (typeof num == 'number' && num > 0){
            this._weight = num;
        }
        else {
            console.log('Please enter a valid number above 0');
        }
}
set violent(nature){
    if (typeof nature == 'boolean'){
        this._violent = nature;
    }
}
}

let d1 = new Dog('Golden Retriever', 18, 'Orange', false);
let d2 = new Dog('Alestion', 12, 'Black', true);
let d3 = new Dog('Rotwiler', 18, 'Black', true);
let d4 = new Dog('Labrodor', 14, 'Cream', false);

d1.showInfo();
d2.showInfo();
d3.showInfo();
d4.showInfo();
*/

// Difference between template and object

// Template                                             //object
/*1) a template is an entity                            1)man object is one such instance(example)of that
                                                         plan which is brought to life in real time.
which describes only the plan(method)


2) a template always exists as a single entity.         2)multiple objects of a single template can be created
                                                          'n' number of times.

3) a template will not die as it does not have          3) any object that is created or given a life using
                                                          using a template dies at some point of time in programmig
any life


4) you can create any number of templates without       4) no object can be created without having an existing template.
creating objects
*/

/*

What is class template?
A class template is an entity which holds the complete information of an object.

The information includes:

1) States of an object: Defines the properties present inside the class that describes every object of this template.

2) Behaviours: Defines all the actions performed, which can be invoked inside every object of this Template.
*/

// a class template acts as a DNA that contains the complete information of an object which will come to life in near future.

// Encapsulation: the process of storing the information of an object of a class template, in the form of states and behaviors is known as encapusaltion.

/*
Convetions for a class name

1) a class name should always be a valid identifier.

2) in general a class name will be a noun.

3) a class name should always start with a capital letter followed by camel case.
Eg. TajMahal, AccountServiceBean

4) a class name should not contain any digits or special symbols unless you are forced to (very very rare).

*/

/* What is Instantiation?
the process of creating an object (instance) using a well defined class template in java.


What is initialization?
The process of assigning values to all variables present(states) after creation of the object.

*/

/* constructor working

class Box {
    constructor(l, b, h){
        this.l = l;
        this.b = b;
        this.h = h;
    }
    printVolume(){
        console.log(`Volume of the box is: ${this.l * this.b * this.h}`);
    }
    fecthSurfaceArea(){
        return2 * (this.l * this.b + this.b * this.h + this.h * this.l);
    }
    setBowSize(l, b, h){
        this.l =l;
        this.b = b;
        this.h = h;
    }
}



let b = new Box(5, 5, 5);

b.printVolume();
b.setBoxSize(10, 11, 12);
b.printVolume();

*/

/* 
confusion alert

1) a constructor in java will be executed only once during creation of an object and not after that.

2) a construtor in java can only be invoked using only new keyword and not with the help of a dot operator.

3) you call the acrhitect during construction of a house. after one year if you call him for some patch work he will never come.
*/

