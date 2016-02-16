var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = "hello world"
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(){
    console.log(this.greeting)
    this.emit('greet')
}

Greetr.prototype.greetwithdata = function(data){
    console.log(this.greeting + "; " + data)
    this.emit('greet', data)
}

var greeter1 = new Greetr()

greeter1.on('greet', function () {
    console.log('someone greeted')
});

greeter1.greet()

var greeter2 = new Greetr()

greeter2.on('greet', function (data) {
    console.log('someone greeted: ' + data)
})

greeter2.greetwithdata("Edwin")