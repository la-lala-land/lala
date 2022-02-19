# LaLa
A collection of random useful (probably) javascript classes and functions. No it wasn't named after Lala Satalin Deviluke (or it probably was, idk).

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
console.log(lala.random.getName(5)) // MOYAI
```
or
```js
import { getName } from '@nekooftheabyss/lala'
console.log(getName(5)) // MOYAI
```


```js
new lala.Time(86403000) // Returns a time class instance for 24 hours and 3 seconds
```

## Deno
I don't really get how Deno works yet but you should be able to work with importing `lala.js` from the module.

-------------

Oh of course, check the official documentation for more examples.

## Documentation
[Check out the official documentation](https://docs.nekooftheabyss.xyz/lala)
