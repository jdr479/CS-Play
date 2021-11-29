export default class ActorImage {
    width:number;
    height:number;
    imgSrc:string;

    constructor(source:string) {
        this.width = 0;
        this.height = 0;
        this.imgSrc = source;
    }

    setImageSource(source:string):boolean {
        this.imgSrc = source;
        return true;
    }
}