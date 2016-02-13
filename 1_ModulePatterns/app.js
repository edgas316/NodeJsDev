var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet(); // Hello world!!
greet3.greeting = 'Changed hello world!';

var greet3b = require('./greet3');
greet3b.greet();// Changed hello world!

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var greet5_1 = require('./greet5').greet;
greet5_1();
// OR
var greet5_2 = require('./greet5');
greet5_2.greet();
