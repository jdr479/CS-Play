import GameState from "./GameState";
import GameWindow from "./GameWindow";

export default interface GameCFG {
    defaultGameState : GameState;
    gameID : number;
    window : GameWindow
    checkWinCondition:() => boolean;
}