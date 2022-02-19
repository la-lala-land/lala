class Collection extends Map {

    constructor(name) {
        super();
        this.name = name ? name : "unidentified objects"
    }
    toString() {
        return `<Collection of ${this.name}>`;
    }
    array() {
        return this.map(x => x)
    }
    every(fn) {
        for(const stuff of this.values()) {
            if(!fn(stuff)) {
                return false;
            }
        }
        return true;
    }
    filter(fn) {
        const arr = [];
        for(const stuff of this.values()) {
            if(fn(stuff)) {
                arr.push(stuff);
            }
        }
        return arr;
    }
    find(fn) {
        for(const stuff of this.values()) {
            if(fn(stuff)) {
                return stuff;
            }
        }
        return undefined;
    }
    first() {
        return this.values().next().value;
    }
    map(fn) {
        const arr = [];
        for(const stuff of this.values()) {
            arr.push(fn(stuff));
        }
        return arr;
    }
    random() {
        const index = Math.floor(Math.random() * this.size);
        const iter = this.values();
        for(let i = 0; i < index; ++i) {
            iter.next();
        }
        return iter.next().value;
    }
    reduce(fn, init) {
        const iter = this.values();
        let val;
        let res = init === undefined ? iter.next().value : init;
        while((val = iter.next().value) !== undefined) {
            res = fn(res, val);
        }
        return res;
    }
    some(fn) {
        for(const stuff of this.values()) {
            if(fn(stuff)) {
                return true;
            }
        }
        return false;
    }
}

export default Collection;