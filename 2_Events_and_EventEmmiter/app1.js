var Emitter = require('./emitterCustom')

var emtr = new Emitter()

emtr.on('greet', function () {
    console.log("Somewhere, something happened")
})

emtr.on('greet', function () {
    console.log('Greetings from Emitter!')
})

console.log("Hello")
emtr.emit('greet')