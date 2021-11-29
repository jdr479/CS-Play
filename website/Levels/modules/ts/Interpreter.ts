import {PythonShell} from 'python-shell';

export default class Interpreter {
    constructor() {}

    static execute(filename:string):void {
        try {
            PythonShell.run(filename)
        } catch (err) {
            if(err.code == 'ENOENT') {
                console.log("File not found");
            }
        }
    }
}