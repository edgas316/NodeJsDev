var a = 1
var b =2
var c = a+b
console.log(c)

// Modules in Node.js
// Commonjs modules - is a standard for how code modules should be structured

// First class fucnctions and function expressions

// First class functuin - everything yo can do with other types you can do with functions
// you can use functions like strings, numbers, set variables equal to them, put them in array, and more...

// Function expression - is a block of code that results in a value
// and it is possible becase functions are first-class
//=========================================================================

//function statement
function greet(){
    console.log("hi")
}
greet()

// functions are first-class
function logGreeting(fn){
    fn()
}
logGreeting(greet)

// function expression
var greetMe = function(){
    console.log("Hi Edwin")
}
greetMe()
// and is is still fist-class
logGreeting(greetMe)

logGreeting(function(){
    console.log("Hello Edwin")
})

var greet = require('./greet');
greet();

var person = {
    firstname:"Edwin",
    lastname:"Gasparian",
    greet:function(){
        console.log("Hello, " + this.firstname + " " + this.lastname)
    }
}

console.log(person)
console.log(person['firstname'])

// pass by value
function change(b){
    b =2
}
var a =1 
change(a)
console.log(a)// 1

// pass by reference 
function changeObj(d){
    d.prop1 = function(){}
    d.prop2 = {}
}

var c = {}
c.prop1 = {}
changeObj(c)
console.log(c)