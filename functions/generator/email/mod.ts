import { getRandom } from "../../util/mod.ts";
import { generateName } from "../name/mod.ts";
import { commonMails, endsWith, secondLevel } from "../../../db/constants.ts";

export function generateEmail(common = false): string {
  return `${generateName(3 + Math.floor(Math.random() * 5)).toLowerCase()}${
    Math.random() < 0.5 ? "." : Math.random() < 0.5 ? "von" : ""
  }${generateName(3 + Math.floor(Math.random() * 5)).toLowerCase()}@${
    common
      ? getRandom(commonMails)
      : `${generateName(4 + Math.floor(Math.random() * 3)).toLowerCase()}.${
        Math.random() < 0.5 ? getRandom(secondLevel) : ""
      }${getRandom(endsWith)}`
  }`;
}
