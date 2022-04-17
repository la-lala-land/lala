import getRandom from "../../util/get_random.ts";
import {
  adjectives,
  level,
  levels,
  thirdperson,
} from "../../../db/constants.ts";

export default (): string => {
  return `${
    Math.random() < 0.9
      ? Math.random() > 0.3
        ? `${getRandom(adjectives)} `
        : `${getRandom(level)} ${getRandom(levels)} `
      : ""
  }${getRandom(thirdperson)}`;
};
