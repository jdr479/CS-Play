import ActorList from './ActorList';

export default class GameState {
    assets:ActorList;
    score:number;

    constructor(assets:ActorList, score:number) {
        this.assets = assets;
        this.score = score;
    }

    public loadGameState():boolean {
        return;
    }
}