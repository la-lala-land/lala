// Requires GachaItem.js

const GachaItem = require("./GachaItem");

class Gacha {
    /**
     * A gacha system
     * @param {Array} items - Array of items featured in the gacha
     * @param {Array} pool - Array of tiers featured in the gacha 
     */
    constructor(items, pool) {
        this.items = null;
        this.tiers = null;
        this.pool = pool;
        this.rawItems = items;
        this.configItems(items);
        this.configTiers(items);
    }
    configItems(items) {
        if(items.some(x => !(x instanceof GachaItem))) throw new Error("Item is not an instance of a GachaItem")
        items = items.sort((a, b) => a.tier - b.tier)
        let featured = items.some(x => x.featured)
        if(featured) {
            items = items.map(x => ({chance: x.featured ? (x.chance + 1) : x.chance, result: x.result, tier: x.tier}))
        }
        this.items = items;
        return items;
    }
    configTiers(items) {
        let tiers = {};
        for (let i = 0; i < this.pool.length; ++i) {
            tiers[this.pool[i]] = {items: 0, chance: 0, tier: this.pool[i]}
        }
        for (let i = items.length; i > 0; --i) {
            if(!this.pool.includes(items[i - 1].tier)) continue;
            tiers[items[i - 1].tier].items += 1;
            tiers[items[i - 1].tier].chance += items[i - 1].chance;
        }
        let tierList = []
        for(let i in tiers) {
            tierList.push(tiers[i])
        }
        this.tiers = tierList;
        return tierList;

    }
    get(num=1) {
        let result = []
        for(let i = num; i > 0; --i) {
            result.push(this._get())
        }
        return result;
    }   
    _get() {
        let tier = this._roll(this.tiers.map(x => ({chance: x.chance, result: x.tier})))
        console.log(tier)
        let itemTier = this.items.filter(x => x.tier == tier)
        let result = this._roll(itemTier)
        console.log(result);
        return result;
    } 
    _roll(choices) {
        console.log(choices)
        let filteredChoices = [];
        let total = 0.0;
        for(let i = 0; i < choices.length; ++i) {
            if(choices[i].chance > 0.0) {
                filteredChoices.push(choices[i]);
                total += choices[i].chance;
            }
        }
        let result = Math.random() * total;
        let going = 0.0;
        for(let i = 0; i < filteredChoices.length; ++i) {
            going += filteredChoices[i].chance;
            if(result < going) {
                return filteredChoices[i].result;
            }
        }

    }
}
module.exports = Gacha