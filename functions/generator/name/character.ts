import { getRandom } from "../../util/mod.ts";

import adjectives from "../../../data/adjectives.ts";
import Synonyms from "../../../data/synonyms.ts";
import levels from "../../../data/levels.ts";
import thirdperson from "../../../data/characterTypes.ts";

/**
 * Generate a random fantasy character.
 * @returns A random character
 */
export const generateCharacter = (): string => {
  return `${
    Math.random() < 0.9
      ? Math.random() > 0.3
        ? `${getRandom(adjectives)} `
        : `${getRandom(Synonyms.level)} ${getRandom(levels)} `
      : ""
  }${getRandom(thirdperson)}`;
};
