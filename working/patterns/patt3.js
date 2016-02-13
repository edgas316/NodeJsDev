function HeyThere(){
    this.hellothere = "hello everyone"
    this.hey = function () {
        console.log(this.hellothere)
    }
}

module.exports = new HeyThere()