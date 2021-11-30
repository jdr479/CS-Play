import {PythonShell} from 'python-shell';
import {fs} from 'fs';

const filepath = 'level0101.py';
let pshell = new PythonShell(filepath);

const help_button = document.getElementById('help-button');
const instructions_button = document.getElementById('instructions-button');
const run_button = document.getElementById('run-button');
const window = document.getElementById('window');
const editor_text = document.getElementById('editor-text');
const console_text = document.getElementById('console-text');

let board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
const NULL_ELEMENT = -1;
const X_ELEMENT = 0;
const O_ELEMENT = 1;

help_button.addEventListener('onclick', openHelp());
instructions_button.addEventListener('onclick', openInstructions());
run_button.addEventListener('onclick', runCode());

function setup() {
    // choose random x position
    let position = getRandInteger(0, 9);
    board[position] = X_ELEMENT;

    // export board to python
    pshell.stdout.on('data', (data) => {
        console.log(String.fromCharCode.apply(null, data));
    });

    let data = JSON.stringify(board);
    pshell.stdin.write(data);
    pshell.stdin.end();
    
    displayBoard();
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
                window.children[row].children[col].firstChild.setAttribute("src", "images/x_png.png");
                break;
            case O_ELEMENT:
                window.children[row].children[col].firstChild.setAttribute("src", "images/o_png.png");
                break;
            default:
                window.children[row].children[col].firstChild.setAttribute("src", "");
                break;
        }
    }
}

function checkPlacement()

function findRowIndex(index) {
    return (index % 3);
}

function findColIndex(index) {
    return index - findRowIndex(index);
}

function runCode() {
    let code = editor_text.innerHTML;
    fs.writeFile(filepath, code);
    pshell.run();
    displayBoard();
}

function openInstructions() {

}

function openHelp() {

}