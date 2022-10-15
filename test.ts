import commonEmail from "./data/commonEmail.ts";

import {
  capitalize,
  generateChainMail,
  generateCharacter,
  generateEmail,
  generateFantasyName,
  generateName,
  generateRace,
  generateStory,
  generateString,
  getRandom,
  owoify,
  weebify,
} from "./mod.ts";

import { Race } from "./functions/generator/name/race.ts";

import {
  assert,
  assertEquals,
  assertExists,
  assertInstanceOf,
  assertStringIncludes,
} from "https://deno.land/std@0.159.0/testing/asserts.ts";

Deno.test({
  name: "Generator functions are defined.",
  fn() {
    assertExists(generateChainMail);
    assertExists(generateCharacter);
    assertExists(generateEmail);
    assertExists(generateFantasyName);
    assertExists(generateName);
    assertExists(generateRace);
    assertExists(generateStory);
    assertExists(generateString);
  },
});

Deno.test({
  name: "Util functions are defined.",
  fn() {
    assertExists(capitalize);
    assertExists(getRandom);
    assertExists(weebify);
    assertExists(owoify);
  },
});

Deno.test({
  name: "generateChainMail generates a valid, non-empty string.",
  fn() {
    const chainMail = generateChainMail();
    console.debug(`\t${chainMail}`);
    assert(Boolean(chainMail?.length));
  },
});

Deno.test({
  name:
    "generateChainMail, when supplied a custom name, includes that name in the result.",
  fn() {
    const chainMail = generateChainMail("Lala");
    console.debug(`\t${chainMail}`);
    assertStringIncludes(chainMail, "Lala");
  },
});

Deno.test({
  name: "generateCharacter generates a valid, non-empty string",
  fn() {
    const character = generateCharacter();
    console.debug(`\t${character}`);
    assert(Boolean(character?.length));
  },
});

Deno.test({
  name: "generateEmail generates a valid, non-empty string",
  fn() {
    const email = generateEmail();
    console.debug(`\t${email}`);
    assert(Boolean(email?.length));
  },
});

Deno.test({
  name:
    "generateEmail generates an email from a popular service when parameter passed is true.",
  fn() {
    const email = generateEmail(true);
    console.debug(`\t${email}`);
    assert(commonEmail.some((x) => email.split("@")[1] === x));
  },
});

Deno.test({
  name: "generateFantasyName generates a valid, non-empty string",
  fn() {
    const name = generateFantasyName();
    console.debug(`\t${name}`);
    assert(Boolean(name?.length));
  },
});

Deno.test({
  name:
    "generateFantasyName generates a name equal in length to supplied parameter",
  fn() {
    const length = 6 + Math.floor(Math.random() * 17);
    const name = generateFantasyName(length);
    console.debug(
      `\tName:\t\t${name}\n\tLength Passed:\t${length}\n\tLength Got:\t${name.length}`,
    );
    assertEquals(name.length, length);
  },
});

Deno.test({
  name: "generateName generates a valid, non-empty string",
  fn() {
    const name = generateName();
    console.debug(`\t${name}`);
    assert(Boolean(name?.length));
  },
});

Deno.test({
  name: "generateName generates a name equal in length to supplied parameter",
  fn() {
    const length = 6 + Math.floor(Math.random() * 17);
    const name = generateName(length);
    console.debug(
      `\tName:\t\t${name}\n\tLength Passed:\t${length}\n\tLength Got:\t${name.length}`,
    );
    assertEquals(name.length, length);
  },
});

Deno.test({
  name: "generateRace generates an instance of Race",
  fn() {
    const race = generateRace();
    console.debug(
      `\t${race.description}`,
    );
    assertInstanceOf(race, Race);
  },
});

Deno.test({
  name: "generateRace, when supplied a custom name, uses that name.",
  fn() {
    const race = generateRace("Lala");
    console.debug(`\t${race.description}`);
    assertEquals(race.name, "Lala");
  },
});

Deno.test({
  name: "generateStory generates a valid, non-empty string.",
  fn() {
    const story = generateStory();
    console.debug(`\t${story}`);
    assert(Boolean(story?.length));
  },
});

Deno.test({
  name:
    "generateStory, when supplied a custom name, includes that name in the result.",
  fn() {
    const story = generateStory("Lala");
    console.debug(`\t${story}`);
    assertStringIncludes(story, "Lala");
  },
});

Deno.test({
  name: "generateString generates a valid, non-empty string",
  fn() {
    const str = generateString();
    console.debug(`\t${str}`);
    assert(Boolean(str?.length));
  },
});

Deno.test({
  name:
    "generateString generates a string equal in length to supplied parameter",
  fn() {
    const length = 6 + Math.floor(Math.random() * 17);
    const str = generateString(length);
    console.debug(
      `\String:\t\t${str}\n\tLength Passed:\t${length}\n\tLength Got:\t${str.length}`,
    );
    assertEquals(str.length, length);
  },
});

Deno.test({
  name: "generateString generates a purely alphanumeric string.",
  fn() {
    const str = generateString(99);
    console.debug(`\t${str}`);
    assert(/^[a-zA-Z0-9]+$/.test(str));
  },
});
