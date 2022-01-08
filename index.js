// This is not TypeScript. Passing "true" instead of true would be considered "false" in any functions. Likewise with any other parameter.

const Time = require('./classes/Time')
const Gacha = {
    Machine: require('./classes/Gacha'),
    Item: require('./classes/GachaItem')
}
const Trash = {
    Decider: require('./classes/Decider')
}

// You feel like the project is too big to import into your project? 
// Let's do the magic called "copy/paste".
// Copy whatever code you want and paste it in yer project

module.exports = {
    Time,
    Gacha,
    Trash
}