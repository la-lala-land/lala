const mtraits = [
  {
    name: "leader",
    reliance: "group",
    strength: 5,
    optimism: 4,
    adjective: "cool",
    description: "alpha male",
  },
  {
    name: "loner",
    reliance: "self",
    strength: 5,
    optimism: "low-medium",
    adjective: "loner",
    description: "loner",
  },
  {
    name: "adventurous",
    reliance: "group",
    strength: 5,
    optimism: 5,
    adjective: "adventurous",
    description: "adventurous guy",
  },
  {
    name: "nerd",
    reliance: "self",
    strength: 3,
    optimism: 4,
    adjective: "nerdy",
    description: "nerd",
  },
  {
    name: "mob",
    reliance: "group",
    strength: 5,
    optimism: 4,
    adjective: "background",
    description: "average guy",
  },
  {
    name: "femboy",
    reliance: "self",
    strength: 1,
    optimism: 1,
    adjective: "feminine",
    description: "femboy",
  },
  {
    name: "macho",
    reliance: "love",
    strength: 5,
    optimism: 1,
    adjective: "macho",
    description: "macho guy",
  },
];
const ftraits = [
  {
    name: "gal",
    reliance: "group",
    strength: 5,
    optimism: 4,
    adjective: "cool gal",
    description: "gal",
  },
  {
    name: "loner",
    reliance: "self",
    strength: 5,
    optimism: "low-medium",
    adjective: "loner",
    description: "loner",
  },
  {
    name: "adventurous",
    reliance: "group",
    strength: 5,
    optimism: 5,
    adjective: "adventurous",
    description: "adventurous girl",
  },
  {
    name: "nerd",
    reliance: "self",
    strength: 3,
    optimism: 4,
    adjective: "nerdy",
    description: "nerd",
  },
  {
    name: "mob",
    reliance: "group",
    strength: 5,
    optimism: 4,
    adjective: "background",
    description: "average girl",
  },
  {
    name: "yandere",
    reliance: "love",
    strength: 5,
    optimism: 1,
    adjective: "yandere",
    description: "yandere",
  },
  {
    name: "tsundere",
    reliance: "love",
    strength: 5,
    optimism: 3,
    adjective: "tsundere",
    description: "tsundere",
  },
  {
    name: "tomboy",
    reliance: "self",
    strength: 5,
    optimism: 3,
    adjective: "tomboyish",
    description: "tomboy",
  },
  {
    name: "karen",
    reliance: "self",
    strength: 5,
    optimism: 5,
    adjective: "karen",
    description: "karen",
  },
  {
    name: "cool",
    reliance: "self",
    strength: 5,
    optimism: 5,
    adjective: "cool",
    description: "cool girl",
  },
];
const joins = [
  "band together",
  "join hands",
  "compete with each other",
  "form an alliance",
  "form a truce",
  "become allies",
  "forget their differences",
];
const powers = [
  "friendship",
  "training",
  "cheats",
  "darkness",
  "light",
  "flames",
  "wind",
  "laziness",
  "technology",
  "science",
  "religion",
  "outsmarting",
  "workout",
];
const fight = ["fight", "challenge", "battle", "duel", "attack"];
const actions = [
  "defends against",
  "negotiates with",
  "holds out against",
  "runs from",
  "strives to survive",
];
const action = [
  "defend against",
  "negotiate with",
  "hold out against",
  "run from",
  "survive",
];
const directions = ["north", "east", "west", "south"];
const fantasyCreatures = require("../db/creatures/fantasy.json");
const realCreatures = require("../db/creatures/reality.json");

const creatures = fantasyCreatures.concat(realCreatures);

const capitalize = require("./capitalize");

const getRandom = require("./getRandom");
const monster = require("./monster");
const namer = require("./namer");

module.exports = () => {
  const ml = Math.random() > 0.4 ? getRandom(mtraits) : getRandom(ftraits);
  const fl = Math.random() < 0.4 ? getRandom(mtraits) : getRandom(ftraits);
  const goodcreature = getRandom(
    creatures.filter((x) => x.affiliation === 1 || x.affiliation === 0)
  );
  const evilcreature = getRandom(
    creatures.filter((x) => x.affiliation === -1 || x.affiliation === 0)
  );
  const evilcreature2 = getRandom(
    creatures.filter(
      (x) => (x.affiliation === -1 || x.affiliation === 0) && x !== evilcreature
    )
  );

  const rand = Math.random();

  return `The ${ml.description} ${
    rand > 0.5 ? `and the ${fl.description} band together to ` : ``
  }${
    Math.random() < 0.5
      ? rand > 0.5
        ? getRandom(action)
        : getRandom(actions)
      : `${getRandom(fight)}${rand > 0.5 ? `` : `s`}`
  } the${Math.random() < 0.5 ? ` ${evil()}` : ``} ${
    evilcreature.name
  }, ${capitalize(monster())},${
    Math.random() < 0.5
      ? ` with the help of the ${goodcreature.plural}${
          Math.random() < 0.5
            ? ` of ${
                Math.random() < 0.5
                  ? `the ${getRandom(directions)}`
                  : capitalize(namer(4 + Math.floor(Math.random() * 3)))
              }`
            : ``
        }`
      : Math.random() < 0.5
      ? ` facing powerful enemies from the ${evilcreature2.name} clan`
      : Math.random() < 0.5
      ? ` using the power of ${getRandom(powers)}`
      : ``
  }${
    Math.random() < 0.5
      ? ` and save the world`
      : Math.random() < 0.5
      ? ` for the sake of their peaceful life`
      : Math.random() < 0.5
      ? ` to reach the final treasure`
      : Math.random() < 0.5
      ? ` to protect what is important to them`
      : Math.random() < 0.5
      ? ` to protect the smiles of innocent children`
      : Math.random() < 0.5
      ? ` to commit war crimes`
      : Math.random() < 0.5
      ? ` to avenge the ${(Math.random() > 0.4 ? getRandom(mtraits) : getRandom(ftraits)).description}`
      : Math.random() < 0.5
      ? ` for world peace`
      : Math.random() < 0.5
      ? ` but end up forming a truce instead`
      : Math.random() < 0.5
      ? ` but end up with a crushing defeat`
      : ` but tragically die`
  }.`;
};

function evil() {
  const evilstuff = [
    "demonic",
    "vile",
    "evil",
    "merciless",
    "greedy",
    "ambitious",
    "giant",
    "mecha",
    "divine",
    "almighty",
    "godly",
    "corrupt",
    "angelic",
  ];

  return getRandom(evilstuff);
}
