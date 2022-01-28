module.exports = (txt) => {
    return txt
      .replace(/(?:l)/g, "r")
      .replace(/(?:L)/g, "R")
      .replace(/n([ao])/g, "ny$1")
      .replace(/N([ao])/g, "Ny$1")
      .replace(/N([AO])/g, "Ny$1")
      .replace(/nyny/g, "nny")
      .replace(/NyNy/g, "NNy")
      .replace(/cute/ig, "kawaii")
      .replace(/wife/ig, "waifu")
      .replace(/husband/ig, "husbando")
  };
  