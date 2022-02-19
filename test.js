import mod from './index.js';

/*
let time = new mod.Time()
console.log(time)
console.log(time.array)
console.log(time.stringify())
console.log(time.stringify(null, true))
console.log(time.stringify(["m", "ms"], false))
console.log(time.stringify(["m", "ms"], true))
*/

// console.log(mod.random.string(Math.floor(Math.random() * 12)))
console.log(mod.random.genString(7));
const lenn = 5 + Math.floor(Math.random() * 5);
console.log(mod.random.genName(lenn));
console.log(lenn);
console.log(mod.random.genStory());
for(let i = 0; i < 100; ++i) {
    console.log(mod.random.genName(5))
}