// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const __default = (arr)=>Array.isArray(arr) ? arr[Math.floor(Math.random() * arr.length)] : arr
;
const vowels = [
    "A",
    "E",
    "I",
    "O",
    "U"
];
const alphabet = [
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
const consonants = alphabet.filter((x)=>!vowels.includes(x)
);
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
    "artist",
    "gacha gamer",
    "game developer",
    "Florida man",
    "pokemon master",
    "narcissist",
    "programmer",
    "web developer",
    "yankee",
    "yakuza",
    "ying-yang master",
    "taoist",
    "archangel",
    "baiter",
    "investigator",
    "king",
    "magician",
    "eggman",
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
const adjectives = [
    "Chinese",
    "Indian",
    "Japanese",
    "Russian",
    "German",
    "accurate",
    "adventurous",
    "aggressive",
    "agoraphobic",
    "alien",
    "alpha",
    "amazing",
    "ancient",
    "angelic",
    "average",
    "avian",
    "awesome",
    "bad",
    "beefy",
    "belligerent",
    "betrayed",
    "bipedal",
    "bitter",
    "black",
    "blind",
    "boisterous",
    "brilliant",
    "bronze",
    "canine",
    "certified",
    "charitable",
    "charming",
    "cheeky",
    "cheerful",
    "childish",
    "chivalrous",
    "clever",
    "clueless",
    "clumsy",
    "comical",
    "complex",
    "confident",
    "cool",
    "crybaby",
    "cuddly",
    "cunning",
    "curious",
    "cute",
    "dangerous",
    "dark",
    "decent",
    "delicious",
    "delusional",
    "dense",
    "desperate",
    "diabetic",
    "divine",
    "dominant",
    "dragon",
    "dramatic",
    "drunk",
    "dwarven",
    "eerie",
    "egghead",
    "electric",
    "elegant",
    "elemental",
    "elven",
    "enchanting",
    "faithful",
    "famous",
    "fantastic",
    "feline",
    "female",
    "feminine",
    "friendly",
    "funny",
    "gallant",
    "gay",
    "generous",
    "gentle",
    "geographic",
    "giant",
    "godlike",
    "gold",
    "good",
    "grand",
    "great",
    "gruesome",
    "gullible",
    "harsh",
    "high",
    "holy",
    "hostile",
    "humble",
    "hypersonic",
    "idiotic",
    "immortal",
    "inferior",
    "innocent",
    "invincible",
    "iron",
    "jazzy",
    "jinxed",
    "jittery",
    "kidney-shaped",
    "kindhearted",
    "lackadaisical",
    "lackluster",
    "large",
    "lawful",
    "legendary",
    "lemon-like",
    "listless",
    "lively",
    "lowly",
    "malnourished",
    "masculine",
    "massive",
    "matchless",
    "meek",
    "merciless",
    "mindless",
    "monstrous",
    "mythical",
    "naive",
    "naked",
    "nerdy",
    "noble",
    "nocturnal",
    "notorious",
    "novel",
    "obsessive",
    "omnipotent",
    "omniscient",
    "optimistic",
    "outstanding",
    "overpowered",
    "overweight",
    "peaceful",
    "pessimistic",
    "popular",
    "powerful",
    "powerless",
    "pretty",
    "proud",
    "pure",
    "rabid",
    "reincarnated",
    "repugnant",
    "repulsive",
    "rich",
    "rotten",
    "round",
    "rowdy",
    "royal",
    "rude",
    "rugged",
    "ruthless",
    "sacred",
    "sassy",
    "selfish",
    "selfless",
    "shiny",
    "short",
    "silver",
    "skinny",
    "spirit",
    "steel",
    "stereotypical",
    "strong",
    "successful",
    "summoned",
    "super",
    "sweet",
    "talkative",
    "tall",
    "timid",
    "tiny",
    "trashy",
    "tyrannical",
    "ultimate",
    "underweight",
    "unmatched",
    "upbeat",
    "valiant",
    "verbose",
    "villainous",
    "viscous",
    "voracious",
    "warlord",
    "weak",
    "weary",
    "wheezy",
    "whiny",
    "wholesome",
    "wicked",
    "wise",
    "witty",
    "world-class",
    "xenophobic",
    "young",
    "zazzy",
    "zen", 
];
const level = [
    "level",
    "lv",
    "lvl",
    "tier",
    "stage",
    "rank",
    "class"
];
const levels = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    20,
    30,
    40,
    50,
    60,
    69,
    70,
    80,
    90,
    99,
    100,
    101,
    200,
    420,
    500,
    666,
    999,
    1000,
    9999,
    10000,
    99999,
    100000,
    1000000
];
const after = [
    {
        letter: "A",
        possible: [
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
        ]
    },
    {
        letter: "B",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U",
            "H",
            "Y",
            "R",
            "W", 
        ]
    },
    {
        letter: "C",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U",
            "H",
            "Y",
            "R",
            "W", 
        ]
    },
    {
        letter: "D",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U",
            "H",
            "Y",
            "R",
            "W", 
        ]
    },
    {
        letter: "E",
        possible: [
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
        ]
    },
    {
        letter: "F",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U",
            "H",
            "Y",
            "R",
            "W", 
        ]
    },
    {
        letter: "G",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U",
            "H",
            "Y",
            "R",
            "W", 
        ]
    },
    {
        letter: "H",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U",
            "Y",
            "W", 
        ]
    },
    {
        letter: "I",
        possible: [
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
        ]
    },
    {
        letter: "J",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U",
            "H",
            "Y", 
        ]
    },
    {
        letter: "K",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U",
            "H",
            "Y",
            "R",
            "W", 
        ]
    },
    {
        letter: "L",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U",
            "Y"
        ]
    },
    {
        letter: "M",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U",
            "H",
            "Y", 
        ]
    },
    {
        letter: "N",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U",
            "H",
            "Y",
            "W", 
        ]
    },
    {
        letter: "O",
        possible: [
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
        ]
    },
    {
        letter: "P",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U",
            "H",
            "Y",
            "R",
            "S",
            "W", 
        ]
    },
    {
        letter: "Q",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U"
        ]
    },
    {
        letter: "R",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U",
            "H",
            "Y",
            "W", 
        ]
    },
    {
        letter: "S",
        possible: [
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
        ]
    },
    {
        letter: "T",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U",
            "H",
            "Y",
            "R",
            "S",
            "W", 
        ]
    },
    {
        letter: "U",
        possible: [
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
        ]
    },
    {
        letter: "V",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U",
            "H",
            "Y",
            "R", 
        ]
    },
    {
        letter: "W",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U",
            "H",
            "Y",
            "R", 
        ]
    },
    {
        letter: "X",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U",
            "H"
        ]
    },
    {
        letter: "Y",
        possible: [
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
            "Z", 
        ]
    },
    {
        letter: "Z",
        possible: [
            "A",
            "E",
            "I",
            "O",
            "U",
            "H"
        ]
    }, 
];
const dontEnd = [
    "W",
    "V"
];
const suffix = [
    "er",
    "ug",
    "ugg",
    "or",
    "in",
    "ius",
    "ion",
    "xion",
    "ixie",
    "ora",
    "ra", 
];
const commonMails = [
    "gmail.com",
    "yahoo.com",
    "mail.com",
    "email.com",
    "hotmail.com",
    "aol.com", 
];
const endsWith = [
    "com",
    "net",
    "co",
    "to",
    "tk",
    "ml",
    "ga",
    "gg",
    "cc",
    "de",
    "in",
    "jp",
    "cr",
    "me",
    "life",
    "moe",
    "us",
    "uk", 
];
const secondLevel = [
    "co",
    "org",
    "edu"
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
    "dancing",
    "math",
    "eighth grade syndrome",
    "edginess",
    "cringe",
    "technology",
    "science",
    "religion",
    "outsmarting",
    "workout", 
];
const fight = [
    "fight",
    "challenge",
    "battle",
    "duel",
    "attack"
];
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
const directions = [
    "north",
    "east",
    "west",
    "south"
];
const __default1 = (lenn)=>{
    if (!lenn) lenn = 4 + Math.floor(Math.random() * 5);
    let name = __default(alphabet);
    for(let mmm = 0; mmm < lenn - 1; ++mmm){
        if (mmm === lenn - 2) {
            if (dontEnd.includes(name.charAt(name.length - 1)) && consonants.includes(name.charAt(name.length - 2))) {
                name = name.slice(0, name.length - 1) + __default(vowels);
            }
            name += __default(after.find((x)=>x.letter === name.charAt(name.length - 1).toUpperCase()
            )?.possible ?? vowels);
        } else {
            if (consonants.includes(name.charAt(name.length - 1)) && consonants.includes(name.charAt(name.length - 2))) {
                name += __default(vowels);
            } else if (vowels.includes(name.charAt(name.length - 1)) && vowels.includes(name.charAt(name.length - 2)) && vowels.includes(name.charAt(name.length - 3))) {
                name += __default(consonants);
            } else {
                name += __default(after.find((x)=>x.letter === name.charAt(name.length - 1).toUpperCase()
                )?.possible ?? vowels);
            }
        }
    }
    return name;
};
function generateEmail(common = false) {
    return `${__default1(3 + Math.floor(Math.random() * 5)).toLowerCase()}${Math.random() < 0.5 ? "." : Math.random() < 0.5 ? "von" : ""}${__default1(3 + Math.floor(Math.random() * 5)).toLowerCase()}@${common ? __default(commonMails) : `${__default1(4 + Math.floor(Math.random() * 3)).toLowerCase()}.${Math.random() < 0.5 ? __default(secondLevel) : ""}${__default(endsWith)}`}`;
}
export { generateEmail as generateEmail };
const __default2 = ()=>{
    return `${Math.random() < 0.9 ? Math.random() > 0.3 ? `${__default(adjectives)} ` : `${__default(level)} ${__default(levels)} ` : ""}${__default(thirdperson)}`;
};
const __default3 = ()=>{
    return `${__default1(3 + Math.floor(Math.random() * 5)).toLowerCase()}${__default(suffix)}`;
};
const Creatures = [
    {
        name: "imp",
        plural: "imps",
        level: 2,
        affiliation: -1,
        intelligence: 3,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: true,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: true,
            animal_ears: false
        },
        magical: true,
        appearance: 1
    },
    {
        name: "fairy",
        plural: "faries",
        level: 3,
        affiliation: 1,
        intelligence: 5,
        size: 1,
        body_parts: {
            tail: false,
            head: true,
            wings: true,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: true,
        appearance: 6
    },
    {
        name: "dragon",
        plural: "dragons",
        level: 7,
        affiliation: 0,
        intelligence: 7,
        size: 5,
        body_parts: {
            tail: true,
            head: true,
            wings: true,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: true,
            animal_ears: true
        },
        magical: true,
        appearance: 5
    },
    {
        name: "elf",
        plural: "elves",
        level: 5,
        affiliation: 0,
        intelligence: 5,
        size: 3,
        body_parts: {
            tail: false,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: true,
        appearance: 6
    },
    {
        name: "angel",
        plural: "angels",
        level: 7,
        affiliation: 1,
        intelligence: 7,
        size: 3,
        body_parts: {
            tail: false,
            head: true,
            wings: true,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: true,
        appearance: 7
    },
    {
        name: "giant",
        plural: "giants",
        level: 5,
        affiliation: 0,
        intelligence: 3,
        size: 5,
        body_parts: {
            tail: false,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: true,
            animal_ears: false
        },
        magical: true,
        appearance: 1
    },
    {
        name: "skeleton",
        plural: "skeletons",
        level: 1,
        affiliation: -1,
        intelligence: 0,
        size: 3,
        body_parts: {
            tail: false,
            head: false,
            wings: false,
            hands: false,
            legs: false,
            fingers: false,
            toes: false,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 0
    },
    {
        name: "undead",
        plural: "undead",
        level: 1,
        affiliation: -1,
        intelligence: 0,
        size: 3,
        body_parts: {
            tail: false,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 0
    },
    {
        name: "succubus",
        plural: "succubi",
        level: 3,
        affiliation: -1,
        intelligence: 5,
        size: 3,
        body_parts: {
            tail: true,
            head: true,
            wings: true,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: true,
            animal_ears: false
        },
        magical: true,
        appearance: 6
    },
    {
        name: "incubus",
        plural: "incubi",
        level: 3,
        affiliation: -1,
        intelligence: 5,
        size: 3,
        body_parts: {
            tail: true,
            head: true,
            wings: true,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: true,
            animal_ears: false
        },
        magical: true,
        appearance: 6
    },
    {
        name: "demon",
        plural: "demons",
        level: 3,
        affiliation: -1,
        intelligence: 3,
        size: 3,
        body_parts: {
            tail: true,
            head: true,
            wings: true,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: true,
            animal_ears: true
        },
        magical: true,
        appearance: 3
    },
    {
        name: "slime",
        plural: "slimes",
        level: 1,
        affiliation: -1,
        intelligence: 3,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: true,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: true,
            animal_ears: true
        },
        magical: true,
        appearance: 0
    },
    {
        name: "wisp",
        plural: "wisps",
        level: 1,
        affiliation: 0,
        intelligence: 0,
        size: 1,
        body_parts: {
            tail: false,
            head: false,
            wings: false,
            hands: false,
            legs: false,
            fingers: false,
            toes: false,
            horns: false,
            animal_ears: false
        },
        magical: true,
        appearance: 0
    },
    {
        name: "harpy",
        plural: "harpies",
        level: 1,
        affiliation: 0,
        intelligence: 3,
        size: 3,
        body_parts: {
            tail: true,
            head: true,
            wings: true,
            hands: false,
            legs: true,
            fingers: false,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "bat",
        plural: "bats",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: true,
            hands: false,
            legs: true,
            fingers: false,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: false,
        appearance: 1
    },
    {
        name: "orc",
        plural: "orcs",
        level: 3,
        affiliation: -1,
        intelligence: 3,
        size: 4,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: true,
            animal_ears: true
        },
        magical: false,
        appearance: 1
    },
    {
        name: "goblin",
        plural: "goblins",
        level: 1,
        affiliation: -1,
        intelligence: 3,
        size: 1,
        body_parts: {
            tail: false,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 1
    },
    {
        name: "kobold",
        plural: "kobolds",
        level: 5,
        affiliation: 0,
        intelligence: 3,
        size: 4,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: false,
        appearance: 1
    },
    {
        name: "dark elf",
        plural: "dark elves",
        level: 5,
        affiliation: -1,
        intelligence: 5,
        size: 3,
        body_parts: {
            tail: false,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: true,
        appearance: 6
    },
    {
        name: "golem",
        plural: "golems",
        level: 5,
        affiliation: 0,
        intelligence: 1,
        size: 0,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: true,
            animal_ears: false
        },
        magical: true,
        appearance: 0
    },
    {
        name: "dragonewt",
        plural: "dragonewts",
        level: 5,
        affiliation: 0,
        intelligence: 5,
        size: 3,
        body_parts: {
            tail: true,
            head: true,
            wings: true,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: true,
            animal_ears: true
        },
        magical: false,
        appearance: 5
    },
    {
        name: "sandworm",
        plural: "sandworms",
        level: 6,
        affiliation: -1,
        intelligence: 0,
        size: 5,
        body_parts: {
            tail: false,
            head: false,
            wings: false,
            hands: false,
            legs: false,
            fingers: false,
            toes: false,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 1
    },
    {
        name: "werewolf",
        plural: "werewolves",
        level: 3,
        affiliation: 0,
        intelligence: 3,
        size: 4,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: false,
        appearance: 3
    },
    {
        name: "vampire",
        plural: "vampires",
        level: 5,
        affiliation: -1,
        intelligence: 5,
        size: 3,
        body_parts: {
            tail: false,
            head: true,
            wings: true,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 5
    },
    {
        name: "lamia",
        plural: "lamia",
        level: 1,
        affiliation: -1,
        intelligence: 3,
        size: 3,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: false,
            fingers: true,
            toes: false,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 5
    },
    {
        name: "ogre",
        plural: "ogres",
        level: 3,
        affiliation: -1,
        intelligence: 3,
        size: 4,
        body_parts: {
            tail: false,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: true,
            animal_ears: false
        },
        magical: false,
        appearance: 1
    },
    {
        name: "oni",
        plural: "oni",
        level: 3,
        affiliation: -1,
        intelligence: 3,
        size: 4,
        body_parts: {
            tail: false,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: true,
            animal_ears: false
        },
        magical: false,
        appearance: 1
    },
    {
        name: "siren",
        plural: "sirens",
        level: 3,
        affiliation: -1,
        intelligence: 3,
        size: 3,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: false,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: true,
        appearance: 5
    },
    {
        name: "griffon",
        plural: "griffons",
        level: 5,
        affiliation: 1,
        intelligence: 5,
        size: 4,
        body_parts: {
            tail: true,
            head: true,
            wings: true,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: true,
            animal_ears: true
        },
        magical: false,
        appearance: 5
    },
    {
        name: "manticore",
        plural: "manticores",
        level: 5,
        affiliation: -1,
        intelligence: 3,
        size: 4,
        body_parts: {
            tail: true,
            head: true,
            wings: true,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: true,
            animal_ears: true
        },
        magical: false,
        appearance: 1
    },
    {
        name: "hippogriff",
        plural: "hippogriff",
        level: 5,
        affiliation: 1,
        intelligence: 5,
        size: 4,
        body_parts: {
            tail: true,
            head: true,
            wings: true,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: true,
            animal_ears: true
        },
        magical: false,
        appearance: 1
    },
    {
        name: "drake",
        plural: "drakes",
        level: 5,
        affiliation: 0,
        intelligence: 5,
        size: 5,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: true,
            animal_ears: true
        },
        magical: true,
        appearance: 5
    },
    {
        name: "wyvern",
        plural: "wyverns",
        level: 3,
        affiliation: -1,
        intelligence: 1,
        size: 4,
        body_parts: {
            tail: true,
            head: true,
            wings: true,
            hands: false,
            legs: false,
            fingers: false,
            toes: false,
            horns: true,
            animal_ears: true
        },
        magical: false,
        appearance: 1
    },
    {
        name: "wraith",
        plural: "wraiths",
        level: 3,
        affiliation: -1,
        intelligence: 1,
        size: 3,
        body_parts: {
            tail: false,
            head: false,
            wings: false,
            hands: false,
            legs: false,
            fingers: false,
            toes: false,
            horns: false,
            animal_ears: false
        },
        magical: true,
        appearance: 1
    },
    {
        name: "gashadokuro",
        plural: "gashadokuro",
        level: 5,
        affiliation: -1,
        intelligence: 1,
        size: 5,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: true,
        appearance: 1
    },
    {
        name: "lich",
        plural: "lich",
        level: 5,
        affiliation: -1,
        intelligence: 5,
        size: 3,
        body_parts: {
            tail: false,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: true,
        appearance: 1
    },
    {
        name: "monstrous mushroom",
        plural: "monstrous mushrooms",
        level: 3,
        affiliation: -1,
        intelligence: 5,
        size: 3,
        body_parts: {
            tail: false,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 1
    },
    {
        name: "mycelium",
        plural: "mycelium",
        level: 1,
        affiliation: -1,
        intelligence: 3,
        size: 1,
        body_parts: {
            tail: false,
            head: true,
            wings: false,
            hands: false,
            legs: false,
            fingers: false,
            toes: false,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 1
    }, 
];
const __default4 = (s = "s", titlecase = false)=>s.charAt(0).toUpperCase() + `${titlecase ? s.slice(1).toLowerCase() : s.slice(1)}`
;
class Race {
    name;
    body;
    affiliation;
    intelligence;
    size;
    magical;
    appearance;
    constructor(){
        const { body , similarities  } = run();
        this.name = __default4(__default3());
        this.body = {
            tail: {},
            head: {},
            wings: {},
            hands: {},
            legs: {},
            fingers: {},
            toes: {},
            horns: {},
            animal_ears: {}
        };
        Object.keys(this.body).forEach((x)=>{
            this.body[x] = {
                exists: body[x],
                similarities: similarities[x]
            };
        });
        this.affiliation = __default(Creatures).affiliation;
        this.intelligence = __default(Creatures).intelligence;
        this.size = __default(Creatures).size;
        this.magical = __default(Creatures).magical;
        this.appearance = __default(Creatures).size;
    }
    get human() {
        if (this.body.head?.exists && this.body.hands?.exists && this.body.legs?.exists && this.body.fingers?.exists && this.body.toes?.exists) {
            return true;
        }
        return false;
    }
}
const rate = {
    size: [
        "very small",
        "small",
        "medium-sized",
        "somewhat large",
        "large",
        "giant", 
    ],
    strength: [
        "very weak",
        "weak",
        "strong",
        "somewhat strong",
        "formidable",
        "extremely powerful",
        "invincible",
        "godly", 
    ],
    intelligence: [
        "brainless",
        "unintelligent",
        "somewhat intelligent",
        "intelligent",
        "highly intelligent",
        "most intelligent", 
    ],
    appearance: [
        "disgusting",
        "unsettling",
        "average",
        "beautiful",
        "splendid",
        "indescribable",
        "unimaginable", 
    ]
};
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
        animal_ears: false
    };
    Object.keys(body).forEach((x)=>{
        Object.defineProperty(body, x, {
            value: __default(Creatures).body_parts[x]
        });
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
        animal_ears: false
    };
    Object.keys(similarities).forEach((x)=>{
        similarities[x] = __default(Creatures.filter((y)=>y.body_parts[x]
        )).name;
    });
    return {
        body,
        similarities
    };
}
function generateRace(text) {
    const race = new Race();
    if (text) {
        return `${race.name}${race.affiliation === 0 ? ` ${__default([
            "is a neutral race",
            "do not take sides"
        ])}` : race.affiliation === 1 ? ` ${__default([
            "is a race that walks the righteous path",
            "are self-proclaimed messengers of justice",
            "is a race that proclaims to work towards the absolute good", 
        ])}` : ` ${__default([
            "is a chaotic race",
            "live in the darkness",
            "serve the demons", 
        ])}`}. ${race.body.head.exists ? `${__default([
            `Their head looks similar to that of a ${race.body.head.similarities}`,
            `They possess facial features that remind one of a ${race.body.head.similarities}`,
            `Their head is akin to that of a ${race.body.head.similarities}`, 
        ])}${race.body.animal_ears.exists ? race.body.animal_ears.similarities === race.body.head.similarities ? "" : ` but with ears that look like a ${race.body.animal_ears.similarities}` : ""}` : `${__default([
            "They possess no head",
            "They lack a head",
            "They are headless", 
        ])}`} and ${race.magical ? "possess a spiritual body" : `${__default([
            "possess a material body",
            "have a living, organic body",
            "have a normal body", 
        ])}`}. ${race.body.wings.exists ? `They possess wings that look like that of a ${race.body.wings.similarities}${Math.random() < 0.5 ? " but are actually flightless" : ""}. ` : ""}They are ${rate.size[race.size]} in size and ${rate.intelligence[race.intelligence]}. ${race.body.legs.exists ? `${__default([
            `Their legs look like a ${race.body.legs.similarities}'s legs`,
            `Their legs are similar to a ${race.body.legs.similarities} with small differences`, 
        ])}${!race.body.toes.exists ? " and a notable absence of toes" : ""}` : __default([
            "They possess no feet",
            "They lack legs"
        ])}. ${race.body.hands.exists ? race.body.legs.exists && race.body.hands.similarities === race.body.legs.similarities ? "The same could be said for their hands" : `However, they possess hands like that of a ${race.body.hands.similarities}${!race.body.fingers.exists ? "with no fingers" : ""}` : `They possess no ${!race.body.legs.exists ? "hands either" : "modified forearms"}.`} ${race.body.horns.exists ? `They sport ${Math.random() < 0.5 ? "a wonderful horn" : `${1 + Math.ceil(Math.random() * 3)} horns`} which distantly resemble that of a ${race.body.horns.similarities}. ` : ""}On the whole, they are said to be ${rate.appearance[race.appearance]} in appearance.`;
    } else return race;
}
export { __default2 as generateCharacter };
export { __default1 as generateName };
export { __default3 as generateFantasyName };
export { generateRace as generateRace };
const Creatures1 = [
    {
        name: "cat",
        plural: "cats",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: false,
        appearance: 3
    },
    {
        name: "kitten",
        plural: "kittens",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: false,
        appearance: 3
    },
    {
        name: "watermelon",
        plural: "watermelons",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: false,
            head: false,
            wings: false,
            hands: false,
            legs: false,
            fingers: false,
            toes: false,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "project manager",
        plural: "project managers",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: false,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: true,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "nokia",
        plural: "nokia",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: false,
            head: false,
            wings: false,
            hands: false,
            legs: false,
            fingers: false,
            toes: false,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "cock",
        plural: "cocks",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: true,
            hands: false,
            legs: true,
            fingers: false,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: false,
        appearance: 3
    },
    {
        name: "chicken",
        plural: "chickens",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: true,
            hands: false,
            legs: true,
            fingers: false,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "sheep",
        plural: "sheeps",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: false,
        appearance: 3
    },
    {
        name: "mule",
        plural: "mules",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: false,
        appearance: 3
    },
    {
        name: "horse",
        plural: "horses",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: false,
        appearance: 3
    },
    {
        name: "grizzly",
        plural: "grizzlies",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: false,
        appearance: 3
    },
    {
        name: "leopard",
        plural: "leopards",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: false,
        appearance: 3
    },
    {
        name: "spider",
        plural: "spiders",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: false,
            head: true,
            wings: false,
            hands: false,
            legs: true,
            fingers: false,
            toes: false,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "fly",
        plural: "flies",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: false,
            head: true,
            wings: true,
            hands: false,
            legs: true,
            fingers: false,
            toes: false,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "crocodile",
        plural: "crocodiles",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "gorilla",
        plural: "gorillas",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "fox",
        plural: "foxes",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: false,
        appearance: 3
    },
    {
        name: "puppy",
        plural: "puppies",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: false,
        appearance: 3
    },
    {
        name: "dog",
        plural: "dogs",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: false,
        appearance: 3
    },
    {
        name: "chimpanzee",
        plural: "chimpanzees",
        level: 1,
        affiliation: 0,
        intelligence: 3,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "polar bear",
        plural: "polar bears",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: false,
        appearance: 3
    },
    {
        name: "wolf",
        plural: "wolves",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: false,
        appearance: 3
    },
    {
        name: "snake",
        plural: "snakes",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: false,
            legs: false,
            fingers: false,
            toes: false,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "ant",
        plural: "ants",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "serial killer",
        plural: "serial killers",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: false,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "catfood",
        plural: "catfood",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: false,
            head: false,
            wings: false,
            hands: false,
            legs: false,
            fingers: false,
            toes: false,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "pumpkin",
        plural: "pumpkins",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: false,
            head: true,
            wings: false,
            hands: false,
            legs: false,
            fingers: false,
            toes: false,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "spider",
        plural: "spiders",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: false,
            head: true,
            wings: false,
            hands: false,
            legs: true,
            fingers: false,
            toes: false,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "centipede",
        plural: "centipedes",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: false,
            legs: true,
            fingers: false,
            toes: false,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "clown",
        plural: "clowns",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: false,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "godzilla",
        plural: "godzillas",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: false,
        appearance: 3
    },
    {
        name: "villager",
        plural: "villagers",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: false,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "yakuza",
        plural: "yakuza",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: false,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: false
        },
        magical: false,
        appearance: 3
    },
    {
        name: "lion",
        plural: "lions",
        level: 1,
        affiliation: 0,
        intelligence: 1,
        size: 1,
        body_parts: {
            tail: true,
            head: true,
            wings: false,
            hands: true,
            legs: true,
            fingers: true,
            toes: true,
            horns: false,
            animal_ears: true
        },
        magical: false,
        appearance: 3
    }, 
];
const creatures = Creatures.concat(Creatures1);
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
    return __default(evilstuff);
}
const __default5 = (name)=>{
    const ml = __default2();
    const fl = __default2();
    const goodcreature = __default(creatures.filter((x)=>x.affiliation === 1 || x.affiliation === 0
    ));
    const evilcreature = __default(creatures.filter((x)=>x.affiliation === -1 || x.affiliation === 0
    ));
    const evilcreature2 = __default(creatures.filter((x)=>(x.affiliation === -1 || x.affiliation === 0) && x !== evilcreature
    ));
    const rand = Math.random();
    return `${name ? name : `The ${ml}`} ${rand > 0.5 ? `and the ${fl} ${__default(joins)} to ` : ``}${Math.random() < 0.5 ? rand > 0.5 ? __default(action) : __default(actions) : `${__default(fight)}${rand > 0.5 ? `` : `s`}`} the${Math.random() < 0.5 ? ` ${evil()}` : ``} ${Math.random() < 0.5 ? __default2() : evilcreature.name}${Math.random() < 0.5 ? `, ${__default4(__default3())},` : ``}${Math.random() < 0.5 ? ` with the help of the ${goodcreature.plural}${Math.random() < 0.5 ? ` of ${Math.random() < 0.5 ? `the ${__default(directions)}` : __default4(__default1(4 + Math.floor(Math.random() * 3)))}` : ``}` : Math.random() < 0.5 ? ` facing powerful enemies from the ${evilcreature2.name} clan` : Math.random() < 0.5 ? ` using the power of ${__default(powers)}` : ``}${Math.random() < 0.5 ? rand > 0.5 ? ` and save the world` : ` and saves the world` : Math.random() < 0.5 ? ` for the sake of their peaceful life` : Math.random() < 0.5 ? ` to reach the final treasure` : Math.random() < 0.5 ? ` to protect what is important to them` : Math.random() < 0.5 ? ` to protect the smiles of innocent children` : Math.random() < 0.5 ? ` to commit war crimes` : Math.random() < 0.5 ? ` to avenge the ${__default2()}` : Math.random() < 0.5 ? ` for world peace` : Math.random() < 0.5 ? ` but end up forming a truce instead` : Math.random() < 0.5 ? ` but end up with a crushing defeat` : ` but tragically die`}.`;
};
const creatures1 = Creatures.concat(Creatures1);
function evil1() {
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
    return __default(evilstuff);
}
const __default6 = (name)=>{
    const ml = __default2();
    const fl = __default2();
    const goodcreature = __default(creatures1.filter((x)=>x.affiliation === 1 || x.affiliation === 0
    ));
    const evilcreature = __default(creatures1.filter((x)=>x.affiliation === -1 || x.affiliation === 0
    ));
    const evilcreature2 = __default(creatures1.filter((x)=>(x.affiliation === -1 || x.affiliation === 0) && x !== evilcreature
    ));
    const rand = Math.random();
    return `${name ? name : `The ${ml}`} ${rand > 0.5 ? `and the ${fl} ${__default(joins)} to ` : ``}${Math.random() < 0.5 ? rand > 0.5 ? __default(action) : __default(actions) : `${__default(fight)}${rand > 0.5 ? `` : `s`}`} the${Math.random() < 0.5 ? ` ${evil1()}` : ``} ${Math.random() < 0.5 ? __default2() : evilcreature.name}${Math.random() < 0.5 ? `, ${__default4(__default3())},` : ``}${Math.random() < 0.5 ? ` with the help of the ${goodcreature.plural}${Math.random() < 0.5 ? ` of ${Math.random() < 0.5 ? `the ${__default(directions)}` : __default4(__default1(4 + Math.floor(Math.random() * 3)))}` : ``}` : Math.random() < 0.5 ? ` facing powerful enemies from the ${evilcreature2.name} clan` : Math.random() < 0.5 ? ` using the power of ${__default(powers)}` : ``}${Math.random() < 0.5 ? rand > 0.5 ? ` and save the world` : ` and saves the world` : Math.random() < 0.5 ? ` for the sake of their peaceful life` : Math.random() < 0.5 ? ` to reach the final treasure` : Math.random() < 0.5 ? ` to protect what is important to them` : Math.random() < 0.5 ? ` to protect the smiles of innocent children` : Math.random() < 0.5 ? ` to commit war crimes` : Math.random() < 0.5 ? ` to avenge the ${__default2()}` : Math.random() < 0.5 ? ` for world peace` : Math.random() < 0.5 ? ` but end up forming a truce instead` : Math.random() < 0.5 ? ` but end up with a crushing defeat` : ` but tragically die`}.`;
};
function generateStory(mc) {
    return Math.random() > 0.5 ? __default5(mc || "") : __default6(mc || "");
}
export { generateStory as generateStory };
function generateString(lenn) {
    if (!lenn) lenn = 4 + Math.floor(Math.random() * 5);
    let phrase = Math.random() > 0.5 ? `${Math.floor(Math.random() * 10)}` : Math.random() > 0.5 ? __default(alphabet) : __default(alphabet).toLowerCase();
    for(let mmm = 0; mmm < lenn - 1; ++mmm){
        const chances = Math.random();
        if (chances < 0.3) phrase += __default(alphabet);
        else if (chances > 0.3 && chances < 0.7) {
            phrase += __default(alphabet).toLowerCase();
        } else phrase += Math.floor(Math.random() * 10);
    }
    return phrase;
}
export { generateString as generateString };
const __default7 = (str)=>str.split("").reverse().join()
;
export { __default4 as capitalize };
export { __default as getRandom };
export { __default7 as reverse };
const __default8 = (txt)=>{
    if (!txt) return "";
    return txt.replace(/(?:r|l)/g, "w").replace(/(?:R|L)/g, "W").replace(/n([aeou])/g, "ny$1").replace(/N([aeou])/g, "Ny$1").replace(/N([AEOU])/g, "Ny$1").replace(/nyny/g, "nny").replace(/NyNy/g, "NNy");
};
const __default9 = (txt)=>{
    if (!txt) return "";
    return txt.replace(/(?:l)/g, "r").replace(/(?:L)/g, "R").replace(/cute/ig, "kawaii").replace(/wife/ig, "waifu").replace(/husband/ig, "husbando");
};
export { __default8 as owoify };
export { __default9 as weebify };
const mod = {
    capitalize: __default4,
    getRandom: __default,
    reverse: __default7,
    owoify: __default8,
    weebify: __default9,
    generateStory,
    generateCharacter: __default2,
    generateName: __default1,
    generateFantasyName: __default3,
    generateRace,
    generateEmail,
    generateString
};
export { mod as default };
