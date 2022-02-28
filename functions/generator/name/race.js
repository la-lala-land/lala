import fantasy from "../../../db/creatures/fantasy.js";
import capitalize from "../../util/capitalize.js";
import getRandom from "../../util/getRandom.js";
import genMonster from "./monster.js";

class Race {
  constructor() {
    const { body, similarities } = run();
    this.name = capitalize(genMonster());
    this.body = {
      tail: {},
      head: {},
      wings: {},
      hands: {},
      legs: {},
      fingers: {},
      toes: {},
      horns: {},
      animal_ears: {},
    };
    Object.keys(this.body).forEach((x) => {
      this.body[x] = { exists: body[x], similarities: similarities[x] };
    });
    this.affiliation = getRandom(fantasy).affiliation;
    this.intelligence = getRandom(fantasy).intelligence;
    this.size = getRandom(fantasy).size;
    this.magical = getRandom(fantasy).magical;
    this.appearance = getRandom(fantasy).size;
  }
  get human() {
    if (this.head && this.hands && this.legs && this.fingers && this.toes)
      return true;
    return false;
  }
}

const rate = {
    size: ["very small", "small", "medium-sized", "somewhat large", "large", "giant"],
    strength: ["very weak", "weak", "strong", "somewhat strong", "formidable", "extremely powerful", "invincible", "godly"],
    intelligence: ["brainless", "unintelligent", "somewhat intelligent", "intelligent", "highly intelligent", "most intelligent"],
    appearance: ["disgusting", "unsettling", "average", "beautiful", "splendid", "indescribable"]
}

function run() {
  const body = {
    tail: false,
    head: false,
    wings: false,
    hands: false,
    legs: false,
    fingers: false,
    toes: false,
    horns: false,
    animal_ears: false,
  };

  Object.keys(body).forEach((x) => {
    body[x] = getRandom(fantasy).body_parts[x];
  });
  const similarities = {
    tail: false,
    head: false,
    wings: false,
    hands: false,
    legs: false,
    fingers: false,
    toes: false,
    horns: false,
    animal_ears: false,
  };
  Object.keys(similarities).forEach((x) => {
    similarities[x] = getRandom(fantasy.filter(y => y.body_parts[x])).name;
  });
  return { body, similarities };
}

export default (text = false) => {
  const race = new Race();
  if (text) {
    return `${race.name}${
      race.affiliation === 0
        ? ` ${getRandom(["is a neutral race", "do not take sides"])}`
        : race.affiliation === 1
        ? ` ${getRandom([
            "is a race that walks the righteous path",
            "are self-proclaimed messengers of justice",
            "is a race that proclaims to work towards the absolute good",
          ])}`
        : ` ${getRandom([
            "is a chaotic race",
            "live in the darkness",
            "serve the demons",
          ])}`
    }. ${
      race.body.head.exists
        ? `${getRandom([
            `Their head looks similar to that of a ${race.body.head.similarities}`,
            `They possess facial features that remind one of a ${race.body.head.similarities}`,
            `Their head is akin to that of a ${race.body.head.similarities}`,
          ])}${
            race.body.animal_ears.exists
              ? race.body.animal_ears.similarities ===
                race.body.head.similarities
                ? ""
                : ` but with ears that look like a ${race.body.animal_ears.similarities}`
              : ""
          }`
        : `${getRandom([
            "They possess no head",
            "They lack a head",
            "They are headless",
          ])}`
    } and ${
      race.magical
        ? "possess a spiritual body"
        : `${getRandom([
            "possess a material body",
            "have a living, organic body",
            "have a normal body",
          ])}`
    }. ${race.body.wings.exists ? `They possess wings that look like that of a ${race.body.wings.similarities}${Math.random() < 0.5 ? ' but are actually flightless' : ''}. ` : ''}They are ${rate.size[race.size]} in size and ${rate.intelligence[race.intelligence]}. ${race.body.legs.exists ? `${getRandom([`Their legs look like a ${race.body.legs.similarities}'s legs`, `Their legs are similar to a ${race.body.legs.similarities} with small differences`])}${!race.body.toes.exists ? " and a notable absence of toes" : ""}` : getRandom(["They possess no feet", "They lack legs"])}. ${race.body.hands.exists ? (race.body.legs.exists && (race.body.hands.similarities === race.body.legs.similarities)) ? "The same could be said for their hands" : `However, they possess hands like that of a ${race.body.hands.similarities}${!race.body.fingers.exists ? "with no fingers" : ""}` : `They possess no ${!race.body.legs.exists ? "hands either" : "modified forearms"}.`} ${race.body.horns.exists ? `They sport ${Math.random() < 0.5 ? "a wonderful horn" : `${1 + Math.ceil(Math.random() * 3)} horns`} which distantly resemble that of a ${race.body.horns.similarities}. ` : ""}On the whole, they are said to be ${rate.appearance[race.appearance]} in appearance.`;
  } else return race;
};

export { Race };
