const MarsRover = require("./components/marsRover");
const gridGenerator = require("./components/gridGenerator");
const {
  rotateRoverToRight,
  rotateRoverToLeft,
} = require("./components/rotateRover");
const { moveRoverForward } = require("./components/moveRoverForward");

const rover2022 = new MarsRover(2, 3, "N");
const grid = gridGenerator(4, 8);
moveRoverForward(rover2022, grid);
rotateRoverToLeft(rover2022);
rotateRoverToLeft(rover2022);
moveRoverForward(rover2022, grid);
console.log(rotateRoverToRight(rover2022));
