export default class AssetList {
    constructor() {
        this.list = [];
        this.numAssets = 0;
    }

    appendAsset(asset) {
        list[numAssets] = asset;
        numAssets++;
        return true;
    }

    removeAsset(asset) {
        s = search(asset);
        if(s) {
            let i;
            for(i = s[2]; i < numAssets; i++) {
                swapByIndex(i, ++i);
                return true;
            }
        }
        return false;
    }

    search(asset) {
        let i;
        for(i = 0; i < this.numAssets; i++) {
            if(list[i] == asset) return asset, i;
        }
        return null;
    }

    swapByIndex(indexOne, indexTwo) {
        if(indexInBounds(indexOne) && indexInBounds(indexTwo)) {
            let hold = list[indexTwo];
            list[indexTwo] = list[indexOne];
            list[indexOne] = hold;
        }
        return false;
    }

    indexInBounds(index) {
        return index >= 0 && index < numAssets;
    }
}