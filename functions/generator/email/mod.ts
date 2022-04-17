import getRandom from "../../util/get_random.ts";
import namer from "../name/normal.ts";
import { commonMails, endsWith, secondLevel } from "../../../db/constants.ts";

export function generateEmail(common = false): string {
  return `${namer(3 + Math.floor(Math.random() * 5)).toLowerCase()}${
    Math.random() < 0.5 ? "." : Math.random() < 0.5 ? "von" : ""
  }${namer(3 + Math.floor(Math.random() * 5)).toLowerCase()}@${
    common
      ? getRandom(commonMails)
      : `${namer(4 + Math.floor(Math.random() * 3)).toLowerCase()}.${
        Math.random() < 0.5 ? getRandom(secondLevel) : ""
      }${getRandom(endsWith)}`
  }`;
}
