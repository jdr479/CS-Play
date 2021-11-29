import GameCFG from './GameCFG';
import GameState from './GameState';

class Game1 extends GameCFG {
    constructor(defaultGameState, gameID, window) {
        this.defaultGameState = defaultGameState;
        this.gameID = gameID;
        this.window = window;
    }

    checkWinCondition() {
        return true;
    }
}
