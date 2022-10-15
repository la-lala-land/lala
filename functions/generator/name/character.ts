import { getRandom } from "../../util/mod.ts";

import Adjectives from "../../../data/adjectives.ts";
import Synonyms from "../../../data/synonyms.ts";
import Levels from "../../../data/levels.ts";
import ThirdPerson from "../../../data/characterTypes.ts";

/**
 * Generate a random fantasy character.
 * @returns A random character
 */
export const generateCharacter = (): string => {
  return `${
    Math.random() < 0.9
      ? Math.random() > 0.3
        ? `${getRandom(Adjectives)} `
        : `${getRandom(Synonyms.level)} ${getRandom(Levels)} `
      : ""
  }${getRandom(ThirdPerson)}`;
};
