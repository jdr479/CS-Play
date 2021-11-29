import Actor from "./Actor";
import Collider from "./Collider";

/*
AABB Collision detection class
*/
export default class BoxCollider implements Collider {
    width:number;
    height:number;

    constructor(width:number, height:number) {
        this.width = width;
        this.height = height;
    }

    public checkCollision(one: Actor, two: Actor):boolean {
        let x_collision:boolean = one.x + one.width >= two.x && two.x + two.width >= one.x;
        let y_collision:boolean = one.y + one.height >= two.y && two.y + two.height >= one.y;
        return x_collision && y_collision;
    }
}