const getRandom = require("./getRandom");

const vowels = ["A", "E", "I", "O", "U"];
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const consonants = alphabet.filter((x) => !vowels.includes(x));
const doubleConsonants = ["S", "T", "H", "C"];
const afterZ = ["H", "T"];

module.exports = (lenn) => {
  let name = getRandom(alphabet);
  for (let mmm = 0; mmm < lenn - 1; ++mmm) {
    if (name.charAt(name.length - 1) == "Z")
      name += getRandom(afterZ);
    else if (!consonants.includes(name.charAt(name.length - 1)))
      name += getRandom(alphabet);
    else if (consonants.includes(name.charAt(name.length - 2)))
      name += getRandom(vowels);
    else
      name +=
        Math.random() > 0.5
          ? getRandom(vowels)
          : getRandom(doubleConsonants)
  }
  return name;
};
