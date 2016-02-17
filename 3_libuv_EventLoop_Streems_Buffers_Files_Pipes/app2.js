// callback functions
function greet(callback){
    console.log('hello');
    var data = {
        name:"Edwin Gasparian"
    }
    callback(data)
}

greet(function(data){
    console.log('The callback was invoked!');
    console.log(data)
})

greet(function(data){
    console.log('A different callback was invoked!');
    console.log(data.name)
})
