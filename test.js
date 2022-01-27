const mod = require('./index')

/*
let time = new mod.Time()
console.log(time)
console.log(time.array)
console.log(time.stringify())
console.log(time.stringify(null, true))
console.log(time.stringify(["m", "ms"], false))
console.log(time.stringify(["m", "ms"], true))
*/

// console.log(mod.random.string(Math.floor(Math.random() * 12)))
console.log(mod.random.string(7))
console.log((mod.random.name(5 + Math.floor(Math.random() * 5)) + " " + mod.random.name(5 + Math.floor(Math.random() * 5))))
console.log(mod.random.string(10))
console.log(mod.random.string(0))
console.log(mod.random.chain(-1))
