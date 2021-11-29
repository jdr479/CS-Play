export default class Asset {
    constructor(imageFile) {
        this.x = 0;
        this.y = 0;
        this.image = imageFile;
    }

    getXPos() {
        return this.x;
    }

    setXPos(percent) {
        if(percent >= 0 && percent <= 100) {
            this.x = percent;
        }
    }
}