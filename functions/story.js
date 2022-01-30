
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
const person = require("./person");

module.exports = (name) => {
  const ml = person()
  const fl = person()
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

  return `${name ? name : `The ${ml}`} ${
    rand > 0.5 ? `and the ${fl} ${getRandom(joins)} to ` : ``
  }${
    Math.random() < 0.5
      ? rand > 0.5
        ? getRandom(action)
        : getRandom(actions)
      : `${getRandom(fight)}${rand > 0.5 ? `` : `s`}`
  } the${Math.random() < 0.5 ? ` ${evil()}` : ``} ${
    Math.random() < 0.5 ? person() : evilcreature.name
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
      ? (rand > 0.5 ? ` and save the world` : ` and saves the world`)
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
      ? ` to avenge the ${person()}`
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
