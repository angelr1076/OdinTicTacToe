// Create a player factory function
const playerFactory = function (name, playerMarker) {
  const attributes = {
    name,
    playerMarker,
  };
  const getAttributes = () => attributes;

  // Return the player index on the board
  const playTurn = (board, cell) => {
    const getIndex = board.cells.findIndex(position => position === cell);
    if (board.boardArray[getIndex] === '') {
      return getIndex;
    }
    return null;
  };

  return { attributes, getAttributes, playTurn };
};

// Create a gameBoard object
const gameBoardModule = (function () {
  // Create a gameBoard array inside of the gameBoard object
  let boardArray = ['', '', '', '', '', '', '', '', ''];
  const gameBoard = document.querySelector('#gameBoard');
  const cells = Array.from(document.querySelectorAll('[data-cell]'));
  let winner = null;

  const render = () =>
    boardArray.forEach(
      (playerMarker, index) => cells[index].textContent === boardArray[index],
    );

  const reset = () => (boardArray = ['', '', '', '', '', '', '', '', '']);

  const checkWin = () => {
    // board:
    // [0, 1, 2],
    // [3, 4, 5],
    // [6, 7, 8],
    const winningCombos = [
      // WINNING COMBOS IS NOT DEFINED IN THE CONSOLE
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['0', '4', '8'],
      ['2', '4', '6'],
    ];
  };
  return { boardArray, gameBoard, cells, winner, render, reset, checkWin };
})();

// // Create game flow
const gamePlay = (function () {
  const turn = () => {};

  const gameRound = () => {};

  const initGame = () => {};
  return {
    initGame,
    gameRound,
    turn,
  };
})();

gamePlay.initGame();
