export default (txt: string) => {
  if (!txt) return "";
  return txt
    .replace(/(?:l)/g, "r")
    .replace(/(?:L)/g, "R")
    .replace(/cute/ig, "kawaii")
    .replace(/wife/ig, "waifu")
    .replace(/husband/ig, "husbando");
};
