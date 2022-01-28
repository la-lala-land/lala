const getRandom = require("./getRandom");
const capitalize = require("./capitalize");

const thirdperson = [
  "hero",
  "mage",
  "wizard",
  "sage",
  "monk",
  "NEET",
  "dragon",
  "hunter",
  "salesman",
  "salaryman",
  "digital artist",
  "weeb",
  "gacha gamer",
  "game developer",
  "narcissist",
  "programmer",
  "web developer",
  "yankee",
  "yakuza",
  "investigator",
  "king",
  "magician",
  "lancer",
  "archer",
  "berserker",
  "rider",
  "athlete",
  "master",
  "martial artist",
  "demon",
  "god",
  "zombie",
  "skeleton",
  "vampire",
  "undead",
  "lich",
  "golem",
  "swordsman",
  "sword saint",
  "shielder",
  "spearmaster",
  "gunslinger",
  "cowboy",
  "karen",
  "tomboy",
  "femboy",
  "gal",
  "nerd",
];

const questions = ["if", "do", "did", "what if", "but then", "and"];

const adjectives = [
  "great",
  "legendary",
  "trashy",
  "reincarnated",
  "summoned",
  "mythical",
  "divine",
  "dark",
  "black",
  "holy",
  "chivalrous",
  "powerful",
  "invincible",
  "unmatched",
  "matchless",
  "merciless",
  "ruthless",
  "gullible",
  "naive",
  "weak",
  "friendly",
  "crybaby",
  "giant",
  "short",
  "tall",
  "dwarven",
  "elven",
  "monstrous",
  "dragon",
  "steel",
  "iron",
  "warlord",
  "royal",
  "spirit",
  "elemental",
  "gold",
  "silver",
  "bronze",
  "overpowered",
  "meek",
  "betrayed",
  "adventurous",
  "cool",
  "confident",
  "alpha",
];

const level = ["level", "lv", "lvl", "tier", "stage", "rank"];
const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 69, 70, 80, 90, 99, 100, 101, 200, 420, 500, 666, 999]

/*
module.exports = () => {
  const person = Math.ceil(Math.random() * 3);
  return `${
    person === 1
      ? "I"
      : person === 2
      ? `${
          Math.random() < 0.5
            ? `${capitalize(getRandom(questions))} you`
            : "You"
        }`
      : `The ${
          Math.random() < 0.5
            ? Math.random() < 0.5
              ? `${getRandom(adjectives)} `
              : `${getRandom(level)} ${getRandom(levels)} `
            : ""
        }${getRandom(thirdperson)}`
  }`;
};
*/

module.exports = () => {
  return `${
    Math.random() < 0.5
      ? Math.random() > 0.3
        ? `${getRandom(adjectives)} `
        : `${getRandom(level)} ${getRandom(levels)} `
      : ""
  }${getRandom(thirdperson)}`
}