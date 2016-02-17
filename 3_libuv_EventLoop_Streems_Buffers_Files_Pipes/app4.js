// Streems in Node.js
// are abstract (base) class:
// a type of constructor you never work derectly with
// but inherit from...!!!

// Stream.Readable  - read only
// Stream.Writable  - write only
// Stream.Duplex    - read and write
// Stream.Transform - change the data
// Stream.PassThrough 

// the prototype chane of stream...
// EventEmitter.prototype  <= Stream.prototype <= Stream.Readable.prototype <= Custom Stream

var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/text.txt', {encoding:'utf8', highWaterMark: 16 * 1024});

var writable = fs.createWriteStream(__dirname + '/text.1.txt')

readable.on('data', function (chunk) {
    console.log(chunk.length);
    writable.write(chunk + " === END OF THE CHUNK === ")
});
