var greet = require('./greet');
var patterns = require('./patterns')
// require is a function, that you pass a 'path' too
// module.export is what the require function returns
// node js wrapping the module into the function
/*
    (function(exports, reqire, module, __filename, __dirname) {
        var greet = function () {
            console.log('Hello')
        }
    });

    fn(module.exports, require, module, filename, dirname)
    return module.exorts;
*/
greet.english()
greet.spanish()
patterns.patt1()
patterns.patt2.hello()



