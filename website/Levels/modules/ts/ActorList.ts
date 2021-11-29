import Actor from './Actor'

export default class ActorList {
    list: Actor[];
    numAssets: number;

    constructor() {
        this.list = new Array();
        this.numAssets = 0;
    }

    appendToAsset(asset:Actor):boolean {
        this.list[this.numAssets] = asset;
        this.numAssets++;
        return true;
    }

    removeAsset(asset:Actor):boolean {
        let s:number = this.search(asset);
        if(s) {
            let i:number;
            for(i = s[2]; i < this.numAssets; i++) {
                this.swapByIndex(i, ++i);
                return true;
            }
        }
        return false;
    }

    search(asset:Actor):number {
        let i: number;
        for(i = 0; i < this.numAssets; i++) {
            if(this.list[i] == asset) return i;
        }
        return null;
    }

    swapByIndex(indexOne:number, indexTwo:number):boolean {
        if(this.indexInBounds(indexOne) && this.indexInBounds(indexTwo)) {
            let hold:Actor = this.list[indexTwo];
            this.list[indexTwo] = this.list[indexOne];
            this.list[indexOne] = hold;
            return true;
        }
        return false;
    }

    private indexInBounds(index:number):boolean {return index >= 0 && index < this.numAssets}
 }