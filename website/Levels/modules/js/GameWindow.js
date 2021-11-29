export default class GameWindow {

    constructor(window) {
        this.frame = window;
    }

    displayAssets() {
    }

    addAssetToDocument(asset) {
        let assetE = document.createElement('img');
        assetE.setAttribute('src', asset.image);
        assetE.setAttribute('position', 'absolute');
        document.createElement();
        this.frame.appendChild(assetE);
    }
}