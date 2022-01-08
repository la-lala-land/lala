// For the Gacha class

class GachaItem {
    constructor(data) {
        if(!data) throw new Error("GachaItem needs item data.")
        this.featured = data.featured || false;
        if(data.result) {
            this.result = data.result;
        }
        else throw new Error("GachaItem received without the item data.")
        if(data.chance) {
            this.chance = data.chance;
        }
        else throw new Error("Attempted to create GachaItem without \"weight\" property.")
    }
}

module.exports = GachaItem;