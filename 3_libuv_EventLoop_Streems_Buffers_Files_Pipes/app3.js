var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
// This is sinconouse which means the application will wait 
// untill this be loaded then it will move forward...
console.log(greet)


// this one is asincronouse;
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function (err, data) {
    console.log(data)
});
// this aproach is using a buffer 
// which can really slow down your application...!!!
// solve this problem we need to use streams...
// chank is a piece of data being sent through a stream...

console.log("Done!")