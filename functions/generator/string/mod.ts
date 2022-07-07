import { getRandom } from "../../util/mod.ts";
import { alphabet } from "../../../db/constants.ts";

/**
 * Generate a random string.
 * @param {number} lenn Length of the string
 * @returns {string} Generated string
 */
export function generateString(lenn?: number): string {
  if (!lenn) lenn = 4 + Math.floor(Math.random() * 5);

  let phrase = Math.random() > 0.5
    ? `${Math.floor(Math.random() * 10)}`
    : Math.random() > 0.5
    ? getRandom(alphabet)
    : getRandom(alphabet).toLowerCase();

  //  maxlim = Math.ceil(Math.random() * limit);
  for (let mmm = 0; mmm < lenn - 1; ++mmm) {
    const chances = Math.random();
    if (chances < 0.3) phrase += getRandom(alphabet);
    else if (chances > 0.3 && chances < 0.7) {
      phrase += getRandom(alphabet).toLowerCase();
    } else phrase += Math.floor(Math.random() * 10);
  }

  return phrase;
}
