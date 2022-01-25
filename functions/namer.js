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
      name += afterZ[Math.floor(Math.random() * afterZ.length)];
    else if (!consonants.includes(name.charAt(name.length - 1)))
      name += alphabet[Math.floor(Math.random() * alphabet.length)];
    else if (consonants.includes(name.charAt(name.length - 2)))
      name += vowels[Math.floor(Math.random() * vowels.length)];
    else
      name +=
        Math.random() > 0.5
          ? vowels[Math.floor(Math.random() * vowels.length)]
          : doubleConsonants[
              Math.floor(Math.random() * doubleConsonants.length)
            ];
  }
  return name;
};
