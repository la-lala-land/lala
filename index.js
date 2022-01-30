// This is not TypeScript. Passing "true" instead of true would be considered "false" in any functions. Likewise with any other parameter.

const Time = require('./classes/Time')
const Gacha = {
    Machine: require('./classes/Gacha'),
    Item: require('./classes/GachaItem')
}
const Collection = require('./classes/Collection')
const Trash = {
    Decider: require('./classes/Decider')
}
const converter = {
    owo: require('./functions/owoify')
}

const random = {
    array: require('./functions/getRandom'),
    string: require('./functions/getString'),
    name: require('./functions/namer'),
    email: require('./functions/email'),
    monster: require('./functions/monster'),
    chain: require('./functions/chainMail'),
    story: require('./functions/story'),
    person: require('./functions/person')
}

// You feel like the project is too big to import into your project? 
// Let's do the magic called "copy/paste".
// Copy whatever code you want and paste it in yer project

module.exports = {
    Time,
    Gacha,
    Collection,
    Trash,
    random,
    converter,
}