module.exports = (txt) => {
  return txt
    .replace(/(?:r|l)/g, "w")
    .replace(/(?:R|L)/g, "W")
    .replace(/n([aeou])/g, "ny$1")
    .replace(/N([aeou])/g, "Ny$1")
    .replace(/N([AEOU])/g, "Ny$1")
    .replace(/nyny/g, "nny")
    .replace(/NyNy/g, "NNy");
};
