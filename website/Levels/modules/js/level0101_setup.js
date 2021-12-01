const {PythonShell} = require('python-shell');
const fs = require('fs');

const help_button = document.getElementById('help-button');
const instructions_button = document.getElementById('instructions-button');
const run_button = document.getElementById('run-button');
const game_window = document.getElementById('window');
const editor_text = document.getElementById('editor-text');
const console_text = document.getElementById('console-text');

let board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
const NULL_ELEMENT = -1;
const X_ELEMENT = 0;
const O_ELEMENT = 1;
const PYTHON_PRE = "import json;";
const PYTHON_POST = "";

help_button.addEventListener('onclick', openHelp());
instructions_button.addEventListener('onclick', openInstructions());
run_button.addEventListener('onclick', runCode());

function setup() {
    // set up event listeners
    help_button.addEventListener('onclick', openHelp());
    instructions_button.addEventListener('onclick', openInstructions());
    run_button.addEventListener('onclick', runCode());
}

function resetBoard() {
    let i;
    for(i=0; i<board.length; i++) {
        board[i] = NULL_ELEMENT;
    }
}

function getRandInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function displayBoard() {
    let i;
    let row;
    let col;
    for(i=0; i<board.length;i++) {
        row = findRowIndex(i);
        col = findColIndex(i);
        switch (board[i]) {
            case X_ELEMENT:
                game_window.children[row].children[col].firstChild.setAttribute("src", "images/x_png.png");
                break;
            case O_ELEMENT:
                game_window.children[row].children[col].firstChild.setAttribute("src", "images/o_png.png");
                break;
            default:
                game_window.children[row].children[col].firstChild.setAttribute("src", "");
                break;
        }
    }
}

function findRowIndex(index) {
    return (index % 3);
}

function findColIndex(index) {
    return index - findRowIndex(index);
}

function findIndex(row, col) {
    return (row * 3) + col;
}

function accessBoardRC(row, col) {
    let index = findIndex(row, col);
    return board[index];
}

function hasWon(element) {
    //check rows
    let row, col;
    for(col=0; col<3; col++) {
        if(accessBoardRC(0, col) == accessBoardRC(1, col) == accessBoardRC(2, col) == element) {
            return true;
        }
    }

    //check cols
    for(row=0; row<board.length; row++) {
        if(accessBoardRC(row, 0) == accessBoardRC(row, 1) == accessBoardRC(row, 2) == element) {
            return true;
        }
    }

    //check diagonals
    if(accessBoardRC(0, 0) == accessBoardRC(1, 1) == accessBoardRC(2, 2) == element) {return true};
    if(accessBoardRC(0, 2) == accessBoardRC(1, 1) == accessBoardRC(2, 0) == element) {return true};

    return false;
}

function boardIsFull() {
    let i;
    for(i=0; i<board.length; i++) {
        if(board[i] == NULL_ELEMENT) {
            return true;
        }
    }
    return false;
}

function runCode() {
    if(true) {
        console_text.innerHtml = "Error: Must implement the function to properly run"
    }

    let position;
    let code = editor_text.innerHTML;
    let turn;

    // test loop for submitted code
    for(position=0; position<board.length; position++) {
        resetBoard();

        // set initial placement in position
        board[position] = X_ELEMENT;

        turn = 0;
        while(!hasWon(X_ELEMENT) && !hasWon(O_ELEMENT) && !boardIsFull() && turn < 8) {
            if(turn % 2 == 0) {
                // user's turn
            } else {
                // AI's turn
            }
            turn++;
        }
    }
}

function findBestXPlacement() {
    let moves = findAvailableMoves();
    
}

function findAvailableMoves() {
    let i;
    let turns = [];
    for(i=0; i<board.length; i++) {
        if(board[i] == NULL_ELEMENT) {
            turns += [i];
        }
    }
    return turns;
}

function openInstructions() {}

function openHelp() {}

setup();