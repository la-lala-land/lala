import { getRandom } from "../../util/mod.ts";
import { generateName } from "./normal.ts";

import Suffix from "../../../data/suffixesForFantasy.ts";
/**
 * Generate a fantasy name like the stuff in RPGs.
 * @returns Fantasy name
 */
export const generateFantasyName = (
  length = 3 + Math.floor(Math.random() * 5),
): string => {
  const suffix = getRandom(Suffix);
  return `${
    generateName(length).slice(0, length - suffix.length).toLowerCase()
  }${suffix}`;
};
