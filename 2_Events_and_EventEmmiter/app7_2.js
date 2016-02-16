var util = require('util');

function Person() {
	this.firstname = 'Edwin';
	this.lastname = 'Gasparian';
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
	Person.call(this);// without this line the result will be "Hello undefined undefined"
	this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();