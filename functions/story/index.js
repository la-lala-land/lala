const penance = require("./penance")
const romcom = require("./romcom")

module.exports = (mc = false) => {
    return Math.random > 0.5 ? penance(mc) : romcom(mc)
}