import getRandom from "../../util/get_random.ts";
import namer from "./normal.ts";
import { suffix } from "../../../db/constants.ts";
export default (): string => {
  return `${namer(3 + Math.floor(Math.random() * 5)).toLowerCase()}${
    getRandom(suffix)
  }`;
};
