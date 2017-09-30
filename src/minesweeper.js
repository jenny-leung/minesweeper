/*const printBoard = board => {
  console.log('Current Board: ');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
printBoard(board);
board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);*/
// -----------------------------------------------------------
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for (var colIndex = 0; colIndex < numberOfColumns; colIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for (var colIndex = 0; colIndex < numberOfColumns; colIndex++) {
      row.push(null);
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    /*
     while loop has the potential to place bombs
     on top of already existing bombs.
     This will be fixed when you learn about control flow.
    */
    numberOfBombsPlaced++;
  }
  return board;
};
const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
