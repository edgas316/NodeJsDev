// object properties and methods
var obj = {
    greet:'Hello'
}
console.log(obj.greet)
console.log(obj['greet'])
var prop = 'greet'
console.log(obj[prop])

// functions and arrays
var arr = []
arr.push(function () {
    console.log("Hello world")
})

arr.push(function () {
    console.log("Hello one more time")
})

arr.forEach(function (item) {
    item()
})
console.log(arr)// [function function, function function]