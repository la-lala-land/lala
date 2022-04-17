// yet to start on this one

import fantasyCreatures from "../../../db/creatures/fantasy.ts";
import realCreatures from "../../../db/creatures/reality.ts";

const creatures = fantasyCreatures.concat(realCreatures);
import capitalize from "../../util/capitalize.ts";

import getRandom from "../../util/get_random.ts";
import monster from "../name/monster.ts";
import namer from "../name/normal.ts";
import person from "../name/character.ts";

import {
  action,
  actions,
  fight,
  joins,
  powers,
  directions,
} from "../../../db/constants.ts";

export default (name: string): string => {
  const ml = person();
  const fl = person();
  const goodcreature = getRandom(
    creatures.filter((x) => x.affiliation === 1 || x.affiliation === 0),
  );
  const evilcreature = getRandom(
    creatures.filter((x) => x.affiliation === -1 || x.affiliation === 0),
  );
  const evilcreature2 = getRandom(
    creatures.filter(
      (x) =>
        (x.affiliation === -1 || x.affiliation === 0) && x !== evilcreature,
    ),
  );

  const rand = Math.random();

  return `${name ? name : `The ${ml}`} ${
    rand > 0.5 ? `and the ${fl} ${getRandom(joins)} to ` : ``
  }${
    Math.random() < 0.5
      ? rand > 0.5 ? getRandom(action) : getRandom(actions)
      : `${getRandom(fight)}${rand > 0.5 ? `` : `s`}`
  } the${Math.random() < 0.5 ? ` ${evil()}` : ``} ${
    Math.random() < 0.5 ? person() : evilcreature.name
  }${Math.random() < 0.5 ? `, ${capitalize(monster())},` : ``}${
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
      ? rand > 0.5 ? ` and save the world` : ` and saves the world`
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
