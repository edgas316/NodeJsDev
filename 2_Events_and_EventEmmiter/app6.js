var obj = {
    name:"Edwin Gasparian",
    greet:function () {
        console.log(`Hello ${ this.name }`)
    }
}

obj.greet();
obj.greet.call({name:"Marine Gasbrielyan"})
obj.greet.apply({name:"David Gasparyan"})