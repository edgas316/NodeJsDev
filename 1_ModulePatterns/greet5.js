// the revealing module pattern
var greeting = 'Hello world!!!!'; // private

function greet() {
	console.log(greeting);// private...
}

module.exports = {
	greet: greet
} // public...