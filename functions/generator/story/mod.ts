import penance from './penance.ts'
import romcom from './romcom.ts'

export {default as generateChainMail} from "./chain.ts"

export function generateStory (mc?: string): string {
    return Math.random() > 0.5 ? penance(mc || "") : romcom(mc || "")
}