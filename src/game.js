// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`



/*
Delete minesweeper.js, fix neighborBomb count - check part 4
check this._variable, could use getter instead?
change while loop to for loop

Below is a list of some potential features to add to your Minesweeper game:

Add validation to ensure that board dimensions make sense. For example, a board should not be able to be created with more bombs than it has tiles.
Add a timer which lets players know how long it took them to win (or lose).
Add recursive flipping, when a tile is flipped that isn't touching a bomb (would have the number zero printed on it), all adjacent tiles additionally flip over.
Add a method to place flags at a tile instead of flipping that tile. If a square has a flag on it, it can't be flipped over.


*/



import {
  Board
} from './board';

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    // not in instructions, for Debug
    //this._numberOfColumns = numberOfColumns;
    //this._numberOfRows = numberOfRows;
  }
  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Game over!');
      this._board.print();
    } else if (!this._board.hasSafeTiles()) {
      /*
      because this._board.hasSafeTiles is defined, you're just not calling the function itself, for example if you used:
console.log(this._board.hasSafeTiles()); //the result would be the output of calling the function
however if you used:
console.log(this._board.hasSafeTiles); //you are not calling the function, but the function definition itself would be logged
      */
      console.log('Congradulations! You\'ve won!');
      this._board.print();
    } else {
      console.log('Current Board:');
      this._board.print();
    }
    // Debug
    //this._board.printBombBoard();
  }
  // not in instructions, for Debug
  // get numberOfRows, get numberOfColumns;
  /*get numberOfRows() {
    return this._numberOfRows;
  }
  get numberOfColumns() {
    return this._numberOfColumns;
  }*/
}
