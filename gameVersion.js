const prompt = require("prompt-sync")({ sigint: true });

const MarsRover = require("./components/marsRover");
const gridGenerator = require("./components/gridGenerator");
const {
  rotateRoverToRight,
  rotateRoverToLeft,
} = require("./components/rotateRover");
const { moveRoverForward } = require("./components/moveRoverForward");

const gameInstruction = `
Instructions:
Rotate Rover to Left: 'L'
Rotate Rover to Right:'R'
Move Forward: 'F'

Restart Game: 'RESTART'
Finish Game: 'END'

Your input: `;

let playGame = true;
let restart = false;
let gameReady = false;

let grid = [];
let rover2022 = {};

while (playGame) {
  if (!gameReady || restart) {
    const gridX = +prompt("Provide value of X of the grid: ");
    const gridY = +prompt("Provide value of Y of the grid: ");
    grid = gridGenerator(gridX, gridY);

    const startingXPostion = +prompt(
      `Provide starting position X of rover. Number between 0 and ${gridX}: `
    );
    const startingYPostion = +prompt(
      `Provide starting position Y of rover. Number between 0 and ${gridY}: `
    );
    const directionOfTheRover = prompt(
      "Chose in which direction rover need to be directed: 'N', 'E', 'S' or 'W': "
    );

    rover2022 = new MarsRover(
      startingXPostion,
      startingYPostion,
      directionOfTheRover
    );

    gameReady = true;
    restart = false;
  }

  let userAction = prompt(gameInstruction);

  switch (userAction) {
    // FINISH GAME
    case "END":
      playGame = false;
      break;
    //ROTATE TO LEFT
    case "L":
      console.log(rotateRoverToLeft(rover2022));

      break;
    // ROTATE TO RIGHT
    case "R":
      console.log(rotateRoverToRight(rover2022));

      break;
    // MOVE FORWARD
    case "F":
      console.log(moveRoverForward(rover2022, grid));
      break;
    // RESTART GAME
    case "RESTART":
      restart = true;
      break;
    default:
      console.log("Wrong Input");
  }
}
