import { getRandom } from "../../util/mod.ts";

import { alphabet, consonants, vowels } from "../../../data/alphabet.ts";
import after from "../../../data/nameRules.ts"

/**
 * Generate a random name. The name is just a normal word that can be pronounced.
 * @param length Length of the name to generate.
 * @returns Random name that actually makes sense.
 */
export function generateName(length?: number): string {
  if (!length) length = 4 + Math.floor(Math.random() * 5);
  let name: string = getRandom(alphabet);
  for (let pointer = 0; pointer < length - 1; ++pointer) {
    if (pointer === length - 2) {
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
  return name.toLowerCase();
}
