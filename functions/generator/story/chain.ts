import { capitalize, getRandom } from "../../util/mod.ts";
import { generateName } from "../name/mod.ts";

import relation from "../../../data/relation.ts";
import taken from "../../../data/death.ts";

import Synonyms from "../../../data/synonyms.ts";

const { death, forward, intro, message } = Synonyms;

export const generateChainMail = (name?: string): string => {
  return `${getRandom(intro)} ${
    name ? name : capitalize(generateName(4 + Math.floor(Math.random() * 5)))
  }. ${
    Math.random() > 0.5
      ? `${Math.floor(Math.random() * 52)} years ago,`
      : `When I was ${5 + Math.floor(Math.random() * 12)}${
        Math.random() > 0.5 ? ` years old` : ""
      },`
  } I was ${getRandom(taken)} and ${getRandom(death)}. ${
    capitalize(
      getRandom(forward),
    )
  } this ${getRandom(message)} to ${
    5 + Math.floor(Math.random() * 5) * 10
  } people or ${
    Math.random() > 0.5 ? `you` : `your ${getRandom(relation)}`
  } will be ${getRandom(taken)}.`;
};
