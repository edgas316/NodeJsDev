// ES6 Typed array

var buffer = new ArrayBuffer(8);// coming from v8 engine
var view = new Int32Array(buffer);
view[0] = 5
view[1] = 15;
console.log(view)
