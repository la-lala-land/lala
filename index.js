// This is not TypeScript. Passing "true" instead of true would be considered "false" in any functions. Likewise with any other parameter.

import Time from "./classes/Time.js";
import Collection from "./classes/Collection.js";
import Decider from "./classes/Decider.js";
import owoify from "./functions/converter/owoify.js";
import capitalize from "./functions/util/capitalize.js";
import randomFromArr from "./functions/util/getRandom.js";
import reverseString from "./functions/util/reverse.js";
import genString from "./functions/generator/string/index.js";
import genName from "./functions/generator/name/normal.js";
import genEmail from "./functions/generator/email/index.js";
import genMonster from "./functions/generator/name/monster.js";
import genChain from "./functions/generator/story/chain.js";
import genStory from "./functions/generator/story/index.js";
import genCharacter from "./functions/generator/name/character.js";

const util = { capitalize, randomFromArr, reverseString };
const random = {
  genString,
  genName,
  genEmail,
  genMonster,
  genChain,
  genStory,
  genCharacter,
};

export default {Time, Collection, util, random}

export {
  Time,
  Collection,
  Decider,
  capitalize,
  reverseString,
  randomFromArr,
  owoify,
  genString,
  genName,
  genEmail,
  genMonster,
  genChain,
  genStory,
  genCharacter,
};

// You feel like the project is too big to import into your project?
// Let's do the magic called "copy/paste".
// Copy whatever code you want and paste it in yer project
