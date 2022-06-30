# LaLa
A collection of random useful (probably) javascript functions. Mostly generates random text. No it wasn't named after Lala Satalin Deviluke (or it probably was, idk).

## Node

### Installation

```bash
$ npm i --save @nekooftheabyss/lala # with NPM
$ pnpm i @nekooftheabyss/lala # with PNPM
```
Or you can clone the repo:

```bash
$ git clone https://github.com/NekoOfTheAbyss/lala
```

### Examples

#### Import
```js
import lala from '@nekooftheabyss/lala' 
console.log(lala.generateName(5)) // MOYAI
```
or
```js
import { generateName } from '@nekooftheabyss/lala'
console.log(generateName(5)) // MOYAI
```

## Deno
```ts
import lala from "https://deno.land/x/lala/mod.ts"
console.log(lala.generateName(5)) // MOYAI
```
or
```ts
import { generateName } from "https://deno.land/x/lala/mod.ts"
console.log(generateName(5)) // MOYAI
```

## Classes
`Time` has been moved to https://github.com/nekooftheabyss/duration.js
`Gacha` has been moved to https://github.com/queenochaos/fortuna

-------------

Oh of course, check the official documentation for more examples.

## Documentation
[Check out the official documentation](https://docs.nekooftheabyss.moe/lala)
