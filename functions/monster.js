const getRandom = require("./getRandom")
const namer = require("./namer")

const suffix = ["er", "ug", "ugg", "or", "in", "ius", "ion", "xion", "ixie", "ora", "ra"]
module.exports = () => {
    return `${namer(3 + Math.floor(Math.random() * 5)).toLowerCase()}${getRandom(suffix)}`
}