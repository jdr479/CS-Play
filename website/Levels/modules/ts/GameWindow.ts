import Actor from "./Actor";

export default class GameWindow {
    id:string;

    constructor(elementID:string) {
        this.id = elementID;
    }

    addAssetToDocument(asset:Actor) {
        let assetE = document.createElement('img');
        assetE.setAttribute('src', asset.image.imgSrc);
        assetE.setAttribute('position', 'absolute');
        document.getElementById(this.id).appendChild(assetE);
    }
}