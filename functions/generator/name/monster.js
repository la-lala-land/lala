import getRandom from '../../util/getRandom.js';
import namer from './normal.js'

const suffix = ["er", "ug", "ugg", "or", "in", "ius", "ion", "xion", "ixie", "ora", "ra"]
export default () => {
    return `${namer(3 + Math.floor(Math.random() * 5)).toLowerCase()}${getRandom(suffix)}`
}