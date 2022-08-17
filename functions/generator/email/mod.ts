import { getRandom } from "../../util/mod.ts";
import { generateName } from "../name/mod.ts";

import TLD from "../../../data/tld.ts";
import SLD from "../../../data/sld.ts";
import commonMails from "../../../data/commonEmail.ts";
import nameMiddle from "../../../data/nameMiddle.ts";

export function generateEmail(common = false): string {
  return `${generateName(3 + Math.floor(Math.random() * 5)).toLowerCase()}${
    Math.random() < 0.5 ? "." : Math.random() < 0.5 ? getRandom(nameMiddle) : ""
  }${generateName(3 + Math.floor(Math.random() * 5)).toLowerCase()}@${
    common
      ? getRandom(commonMails)
      : `${generateName(4 + Math.floor(Math.random() * 3)).toLowerCase()}.${
        Math.random() < 0.5 ? getRandom(SLD) : ""
      }${getRandom(TLD)}`
  }`;
}
