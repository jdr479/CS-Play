import Actor from './Actor'

// Note on Colliders: bounding geometry is always the same as the Actor's geometry
export default interface Collider {
    width:number;
    height:number;
    checkCollision: (one: Actor, two: Actor) => boolean;
}