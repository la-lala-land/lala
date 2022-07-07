import {getRandom} from "../../util/mod.ts";
import {
  adjectives,
  level,
  levels,
  thirdperson,
} from "../../../db/constants.ts";

/**
 * Generate a random fantasy character.
 * @returns A random character
 */
export const generateCharacter = (): string => {
  return `${
    Math.random() < 0.9
      ? Math.random() > 0.3
        ? `${getRandom(adjectives)} `
        : `${getRandom(level)} ${getRandom(levels)} `
      : ""
  }${getRandom(thirdperson)}`;
};
