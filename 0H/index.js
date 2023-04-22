/* Inheritance in js using extends keyword

class Alpha {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    showAlpha(){
        console.log('Value of x : this.x');
        console.log('Value of y : this.y');
    }
}
class Beta extends Alpha{
    constructor(x, y, z){
        super(x, y);
        this.z = z;
    }

    showBeta(){
        console.log('\nValue of x : ' + this.x);
        console.log('\nValue of y : ' + this.y);
        console.log('\nValue of z : ' + this.z);
    }

    sum(){
        return this.x + this.y + this.z;
    }
}

let a = new Alpha(10, 20);
a.showAlpha();

let b = new Beta(1, 2, 3);
b.showAlpha();
b.showBeta();
console.log(`sum of object members is ${b.sum()}`);

*/
//a.showBeta();

/*
Static methods

1)suppose we do not want to create an instance every time to time to invoke a method, we mark that method as static.

2)nstatic methods can be accessed only using class names and not by any reference variables(unlike java)
*/

class Alpha {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    showAlpha() {
        console.log("Value of x: " + this.x);
        console.log("value of y: " + this.y);
    }

    static sayHello() {
        console.log('Hello Everyone!!');
    }
}

class Beta extends Alpha {

    static sayNamaste(person) {
        console.log(`Nmasate ${person}, Welcome to India`);
    }

    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }

    showBeta() {
        console.log("\nValue of x: " + this.x);
        console.log("\nValue of y: " + this.y);
        console.log("\nValue of z: " + this.z);
    }

    sum() {
        return this.x + this.y + this.z;
    }

}

Alpha.sayHello();
Beta.sayNamaste('Seema');

let a = new Alpha(10, 20);
let b = new Beta(1, 2, 3);
//a.sayHello();
//b.sayNamaste();

