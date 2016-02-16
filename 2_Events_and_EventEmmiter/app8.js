// ES6 classes... Syntactic sugar
'use strict';

class Person {
    // Constructor part
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    // Prototype part
    greet(){
        console.log(`Hello ${this.firstname} ${this.lastname}`)
    }
}

var edwin = new Person("Edwin", "Gasparian");
edwin.greet()

var marine = new Person("Marine", "Gabrielyan")
marine.greet();

console.log(edwin.__proto__)
console.log(marine.__proto__)
console.log(edwin.__proto__ === marine.__proto__)