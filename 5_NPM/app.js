// Dependency - code that another set of code depends on to function.
// Versioning - specifying what version of a set of cde this is...
// Semantic Versioning - 1.7.2 = (Major.Minor.Patch) - each number means something
// Use npm init to initialise package.json
// Use "npm install name --save" to install package
// "dependencies": {
//     "moment": "^2.11.2"  // ^ means update the package if minor and patch updates are relesed but not major
//   }                      // ~ means only patch should be updated...

// Use "npm install name --save-dev" ti install development dependencyes
// "devDependencies": {
//     "jasmine-node": "^1.14.5"
//  }

// Use "npm install -g nodemon(or other)" to install node modules globally on your machine
// Then you can use "nodemon app.js" so you don't have to restart 
// your app every time you make any changes

// Use "npm update" to update ter version of all my dependencies

var moment = require('moment');
console.log(moment().format())// 2016-02-23T13:52:23-08:00
console.log(moment().format("ddd, hA"))// Tue, 1PM