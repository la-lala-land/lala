/**
 * Vowels of the English language.
 */
export const vowels = ["A", "E", "I", "O", "U"];
/**
 * All alphabets of the English language.
 */
export const alphabet = [
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

/**
 * Consonants of the English alphabet.
 */
export const consonants = alphabet.filter((x) => !vowels.includes(x));
