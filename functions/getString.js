const getRandom = require("./getRandom");

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

// Generate alphanumeric string

module.exports = (lenn) => {
  if(!lenn) lenn = 4 + Math.floor(Math.random() * 5)

  let phrase =
    Math.random() > 0.5
      ? Math.floor(Math.random() * 10)
      : Math.random() > 0.5
      ? getRandom(alphabet)
      : getRandom(alphabet).toLowerCase();

  //  maxlim = Math.ceil(Math.random() * limit);
  for (let mmm = 0; mmm < lenn - 1; ++mmm) {
    const chances = Math.random();
    if (chances < 0.3) phrase += getRandom(alphabet);
    else if (chances > 0.3 && chances < 0.7)
      phrase += getRandom(alphabet).toLowerCase();
    else phrase += Math.floor(Math.random() * 10);
  }

  return phrase;
};
