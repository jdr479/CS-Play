import ActorImage from './ActorImage';
import Collider from './Collider';

export default class Actor {
    x:number;
    y:number;
    width:number;
    height:number;
    image: ActorImage;
    collision: Collider;

    constructor(sprite:ActorImage, collision: Collider) {
        this.x = 0;
        this.y = 0;
        this.width = sprite.width;
        this.height = sprite.height;
        this.image = sprite;
        this.collision = collision;
    }

    getXPos():number {
        return this.x;
    }

    getYPos():number {
        return this.y;
    }

    setXPos(percent:number):boolean {
        if(percent >= 0 && percent <= 100) {
            this.x = percent;
            return true;
        }

        return false;
    }

    setYPos(percent:number):boolean {
        if(percent >= 0 && percent <= 100) {
            this.y = percent;
            return true;
        }

        return false;
    }
}