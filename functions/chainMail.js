const capitalize = require("./capitalize");
const getRandom = require("./getRandom");
const namer = require("./namer");

const forward = ["forward", "send", "show", "copy/paste"];
const message = ["message", "story", "text"];
const taken = [
  "kidnapped",
  "hacked",
  "stabbed",
  "pushed from a cliff",
  "mutilated",
  "eaten alive",
  "possessed by an evil spirit",
  "spirited away",
  "hit by a car",
  "hit by a truck",
  "hit by a train",
  "thrown away from a flying airplane",
  "abducted by aliens",
  "burned alive",
  "caught in an explosion",
  "mauled by a bear",
  "mugged",
  "bitten by a snake",
  "poisoned",
  "crushed by an elevator",
  "caught in a stampede",
  "starved to death",
  "hit by lightning",
  "stabbed by a killer",
  "eaten by a shark",
  "caught in a tsunami",
  "stuck in an elevator",
  "shot by a stray bullet",
  "buried alive",
  "caught off-guard by the sleep paralysis demon",
  "eaten by monsters",
  "tossed from a cliff",
  "tied up and tossed into the Atlantic ocean",
  "tied up and tossed into the Pacific ocean",
  "tied up and tossed into the Indian ocean",
  "taken to Brazil",
  "thrown into gulag",
  "bonked by cheems",
  "killed by the imposter",
  "impaled by an umbrella",
];
const intro = [
  "I am",
  "My name is",
  "I'm",
  "I am called",
  "I was known as",
  "I used to be called",
  "I was once called",
  "When I was alive, they called me",
  "Once upon a time, I was called",
  "I think my name was",
  "I am not sure if my name was"
];
const relation = [
  "friends",
  "family",
  "best friend",
  "parents",
  "mother",
  "father",
  "grandparents",
  "classmates",
  "grandpa",
  "grandma",
  "lonely ass",
  "tamagotchi",
  "pokemon",
  "favorite streamer",
  "college professor",
  "imaginary friend",
  "air friend",
  "sleep paralysis demon",
  "in-game character",
  "most important person",
  "school principal",
  "teacher from kindergarten",
  "pet spider",
  "loved ones",
];
const death = [
  "died",
  "got killed",
  "ended up dying",
  "passed away",
  "lost my life",
];
module.exports = (name) => {
  return `${getRandom(intro)} ${capitalize(
    name ? name : namer(4 + Math.floor(Math.random() * 5))
  )}. ${
    Math.random() > 0.5
      ? `${Math.floor(Math.random() * 52)} years ago,`
      : `When I was ${5 + Math.floor(Math.random() * 12)}${
          Math.random() > 0.5 ? ` years old` : ""
        },`
  } I was ${getRandom(taken)} and ${getRandom(death)}. ${capitalize(
    getRandom(forward)
  )} this ${getRandom(message)} to ${
    5 + Math.floor(Math.random() * 5) * 10
  } people or ${
    Math.random > 0.5 ? `you` : `your ${getRandom(relation)}`
  } will be ${getRandom(taken)}.`;
};
