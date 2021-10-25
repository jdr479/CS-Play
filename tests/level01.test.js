import { expect } from 'chai';

describe('current position check', () => {
    let x = playerPosition.x - (playerSize.width/2);
    let y = playerPosition.y - (playerSize.height/2);
    
    it('ensures that transform variable contains appropriate values for initial player position', () => {
        expect("translate(" + x + " " + y + ")").to.contain("(10 10)");
    });

    it('ensures that the transform variable contains appropriate values for when player moves left', () => {
        expect("translate(" + x + " " + y + ")").to.contain("(0 10)");
    });

    it('ensures that the transform variable contains appropriate values for when player moves right', () => {
        expect("translate(" + x + " " + y + ")").to.contain("(20 10)");
    });

    it('ensures that the transform variable contains appropriate values for when player moves up', () => {
        expect("translate(" + x + " " + y + ")").to.contain("(10 0)");
    });

    it('ensures that the transform variable contains appropriate values for when player moves down', () => {
        expect("translate(" + x + " " + y + ")").to.contain("(10 20)");
    });
});

describe('updating the move rate', () => {
    it('returns 0 when switching to the terminal window', () => {
        expect(switchOnTerminal()).to.eq(0);
    });

    it('returns 10 when switching away from the terminal window', () => {
        expect(switchOffTerminal()).to.eq(10);
    });
});

describe('level completeness check', () => {
    it('SUPPOSED TO FAIL returns whether or not the level is complete', () => {
        expect(levelComplete).to.eq(true);
    });
});