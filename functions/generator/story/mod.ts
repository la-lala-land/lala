import { penance } from "./penance.ts";
//import romcom from "./romcom.ts";

export { generateChainMail } from "./chain.ts";

/**
 * Generate a random story.
 * @param mc Main character's name.
 * @returns Random story.
 */
export function generateStory(mc?: string): string {
  //return Math.random() > 0.5 ? penance(mc || "") : romcom(mc || "");
  return penance(mc || "");
}
