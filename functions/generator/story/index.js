import penance from './penance.js'
import romcom from './romcom.js'

export default (mc = false) => {
    return Math.random > 0.5 ? penance(mc) : romcom(mc)
}