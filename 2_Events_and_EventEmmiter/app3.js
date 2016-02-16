var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
    console.log('Something happened')
});

emtr.on(eventConfig.GREET, function(){
    console.log('One more greeting happened')
});

emtr.emit(eventConfig.GREET)