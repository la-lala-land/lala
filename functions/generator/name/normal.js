import getRandom from '../../util/getRandom.js';

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
// const doubleConsonants = ["S", "T", "H", "Y", "C"];
// const superDoubleConsonants = ["H", "Y"]

const after = {
  A: alphabet,
  B: [...vowels, "H", "Y", "R", "W"],
  C: [...vowels, "H", "Y", "R", "W"],
  D: [...vowels, "H", "Y", "R", "W"],
  E: alphabet,
  F: [...vowels, "H", "Y", "R", "W"],
  G: [...vowels, "H", "Y", "R", "W"],
  H: [...vowels, "Y", "W"],
  I: alphabet,
  J: [...vowels, "H", "Y"],
  K: [...vowels, "H", "Y", "R", "W"],
  L: [...vowels, "Y"],
  M: [...vowels, "H", "Y"],
  N: [...vowels, "H", "Y", "W"],
  O: alphabet,
  P: [...vowels, "H", "Y", "R", "S", "W"],
  Q: [...vowels],
  R: [...vowels, "H", "Y", "W"],
  S: alphabet,
  T: [...vowels, "H", "Y", "R", "S", "W"],
  U: alphabet,
  V: [...vowels, "H", "Y", "R"],
  W: [...vowels, "H", "Y", "R"],
  X: [...vowels, "H"],
  Y: alphabet.filter((x) => x !== "Y"),
  Z: [...vowels, "H"],
};

const dontEnd = ["W", "V"];

export default (lenn) => {
  if (!lenn) lenn = 4 + Math.floor(Math.random() * 5);
  let name = getRandom(alphabet);
  for (let mmm = 0; mmm < lenn - 1; ++mmm) {
    if (mmm === lenn - 2) {
      if (
        dontEnd.includes(name.charAt(name.length - 1)) &&
        consonants.includes(name.charAt(name.length - 2))
      ) {
        name = name.slice(0, name.length - 1) + getRandom(vowels);
      } 
      name += getRandom(after[name.charAt(name.length - 1)]);
    } else {
      if (
        consonants.includes(name.charAt(name.length - 1)) &&
        consonants.includes(name.charAt(name.length - 2))
      ) {
        name += getRandom(vowels);
      } else if (
        vowels.includes(name.charAt(name.length - 1)) &&
        vowels.includes(name.charAt(name.length - 2)) &&
        vowels.includes(name.charAt(name.length - 3))
      ) {
        name += getRandom(consonants);
      } else name += getRandom(after[name.charAt(name.length - 1)]);
    }
  }
  return name;
};

/*
export default (lenn) => {
  if(!lenn) lenn = 4 + Math.floor(Math.random() * 5)
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
*/
