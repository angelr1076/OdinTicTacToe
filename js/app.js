// Create player factory functions
const playerFactory = name => {
  const attributes = {
    name,
    isActive: false,
    turn: false,
    isWinner: false,
  };
  const getAttributes = () => attributes;
  const getName = () => attributes.name;
  const sayName = () => console.log(`${getName()} has been created}.`);

  return { attributes, getAttributes, getName, sayName };
};

// Create a gameBoard object
const gameModule = (function () {
  // Create a gameBoard array inside of the gameBoard object
  const game = {
    xTurn: true, // Sets turns
    xState: new Array(), // Player 1 moves
    oState: new Array(), // Player 2 moves
    // board:
    // [0, 1, 2],
    // [3, 4, 5],
    // [6, 7, 8],
    winningCombos: [
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['0', '4', '8'],
      ['2', '4', '6'],
    ],
  };
  return { game };
})();

// // Create game flow
const gameFlow = (function () {
  const gameModuleObj = gameModule.game;
  const cells = document.querySelectorAll('[data-value]');
  let classListArray = [];

  cells.forEach(cell => {
    cell.addEventListener('click', e => {
      const target = e.target;
      const isCell = target.classList.contains('grid-cell');
      const isDisabled = target.classList.contains('disabled');

      console.log(target);
    });
  });
})();
