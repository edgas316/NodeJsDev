var greet = function(){
    console.log("hello")
}
//greet()

module.exports = greet;// this makes the module evailable in app.js
// module.exports is what the require function returns

// node js wrapping this module into the function
/*
    (function(exports, reqire, module, __filename, __dirname) {
        var greet = function () {
            console.log('Hello')
        }
    });

    fn(module.exports, require, module, filename, dirname)
    return module.exorts;
*/