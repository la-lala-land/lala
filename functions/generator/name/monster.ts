import { getRandom } from "../../util/mod.ts";
import { generateName } from "./normal.ts";

import suffix from "../../../data/suffixesForFantasy.ts"
/**
 * Generate a fantasy name like the stuff in RPGs.
 * @returns Fantasy name
 */
export const generateFantasyName = (): string => {
  return `${generateName(3 + Math.floor(Math.random() * 5)).toLowerCase()}${
    getRandom(suffix)
  }`;
};
