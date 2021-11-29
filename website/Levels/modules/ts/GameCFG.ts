import GameState from "./GameState";
import GameWindow from "./GameWindow";
import Interpreter from "./Interpreter";

export default abstract class GameCFG {
    defaultGameState : GameState;
    currentGameState : GameState;
    gameID : number;
    window : GameWindow;
    score: number;
    constructor(defaultState:GameState, window:GameWindow, id:number) {
        this.defaultGameState = defaultState;
        this.window = window;
        this.gameID = id;
        this.score = 0;
        this.init();
    }
    checkWinCondition: () => boolean;
    init():void {
        // reset game state
        this.currentGameState = this.defaultGameState;

        // reset score
        
    }
    normalizeCB(cb:string):string {
        return "";
    }
    run():void {
        // Fetch code input from user
        let code: string = document.querySelector('.code_box').innerHTML;

        // Normalize input
        let normalize: string = this.normalizeCB(code);

        // Write user code to file
        let filename = 'level${gameID}_script.py';

        // Run user code

        // Display output and feedback
    }
}