import { getRandom } from "../../util/mod.ts";

import {
  after,
  alphabet,
  consonants,
  dontEnd,
  vowels,
} from "../../../db/constants.ts";

/**
 * Generate a random name. The name is just a normal word that can be pronounced.
 * @param lenn Length of the name to generate.
 * @returns Random name that actually makes sense.
 */
export function generateName(lenn?: number): string {
  if (!lenn) lenn = 4 + Math.floor(Math.random() * 5);
  let name: string = getRandom(alphabet);
  for (let mmm = 0; mmm < lenn - 1; ++mmm) {
    if (mmm === lenn - 2) {
      if (
        dontEnd.includes(name.charAt(name.length - 1)) &&
        consonants.includes(name.charAt(name.length - 2))
      ) {
        name = name.slice(0, name.length - 1) + getRandom(vowels);
      }
      name += getRandom(
        after.find((x) =>
          x.letter === name.charAt(name.length - 1).toUpperCase()
        )?.possible ?? vowels,
      );
    } else {
      if (
        consonants.includes(name.charAt(name.length - 1)) &&
        consonants.includes(name.charAt(name.length - 2))
      ) {
        name += getRandom(vowels);
      } else if (
        vowels.includes(name.charAt(name.length - 1)) &&
        vowels.includes(name.charAt(name.length - 2)) &&
        vowels.includes(name.charAt(name.length - 3))
      ) {
        name += getRandom(consonants);
      } else {
        name += getRandom(
          after.find((x) =>
            x.letter === name.charAt(name.length - 1).toUpperCase()
          )?.possible ?? vowels,
        );
      }
    }
  }
  return name;
}
