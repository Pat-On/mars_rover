const { moveRoverForward } = require("../components/moveRoverForward");
const {
  rotateRoverToRight,
  rotateRoverToLeft,
} = require("../components/rotateRover");
const MarsRover = require("../components/marsRover");
const gridGenerator = require("../components/gridGenerator");

describe("Tests done base on the input and output from the exercise description", () => {
  it("Grid x: 4 y:8, Rover: x:2 y:3 direction E, Commands: L -> F -> R -> F -> F ", () => {
    const rover2022 = new MarsRover(2, 3, "E");
    const grid = gridGenerator(4, 8);

    rotateRoverToLeft(rover2022); // L
    moveRoverForward(rover2022, grid); // F
    rotateRoverToRight(rover2022); // R
    const finalPosition = moveRoverForward(rover2022, grid); //F

    expect(finalPosition).toBe(
      "Rover current position: {X:3 Y:4, Direction: E }"
    );
  });

  it("Grid x: 4 y:8, Rover: x:0 y:2 direction N, Commands: F -> F -> L -> F -> R -> F -> F", () => {
    const rover2022 = new MarsRover(0, 2, "N");
    const grid = gridGenerator(4, 8);

    moveRoverForward(rover2022, grid); // F
    moveRoverForward(rover2022, grid); // F
    rotateRoverToLeft(rover2022); // L
    moveRoverForward(rover2022, grid); // F
    rotateRoverToRight(rover2022); // R
    moveRoverForward(rover2022, grid); // F
    const finalPosition = moveRoverForward(rover2022, grid); // F

    expect(finalPosition).toBe(
      "Rover is lost. Last known position: {X: 0, Y: 4, Direction: W}"
    );
  });

  it("Grid x: 4 y:8, Rover: x:2 y:3 direction N, Commands: F -> L -> L -> F -> R", () => {
    const rover2022 = new MarsRover(2, 3, "N");
    const grid = gridGenerator(4, 8);

    moveRoverForward(rover2022, grid); // F
    rotateRoverToLeft(rover2022); // L
    rotateRoverToLeft(rover2022); // L
    moveRoverForward(rover2022, grid); // F
    const finalPosition = rotateRoverToRight(rover2022); // R

    expect(finalPosition).toBe(
      "Rover current position: {X:2 Y:3, Direction:W }"
    );
  });

  it("Grid x: 4 y:8, Rover: x:1 y:0 direction S, Commands: F -> F -> R -> L -> F ", () => {
    const rover2022 = new MarsRover(1, 0, "S");
    const grid = gridGenerator(4, 8);

    moveRoverForward(rover2022, grid); // F
    moveRoverForward(rover2022, grid); // F
    rotateRoverToRight(rover2022);
    rotateRoverToLeft(rover2022); // L
    const finalPosition = moveRoverForward(rover2022, grid); // F

    expect(finalPosition).toBe(
      "Rover is lost. Last known position: {X: 1, Y: 0, Direction: S}"
    );
  });
});
