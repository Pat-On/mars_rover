const {
  moveRoverForward,
  validateMovement,
  roverParametersUpdate,
} = require("../components/moveRoverForward");
const MarsRover = require("../components/marsRover");
const gridGenerator = require("../components/gridGenerator");

describe("Validate Movements - Does Rover move off the grid", () => {
  it("Rover was lost with the postion X:0 Y:5 and direction N on the grid X:3 Y:6", () => {
    const rover2022 = new MarsRover(0, 5, "N");
    const grid = gridGenerator(3, 6);
    const roverWasLost = validateMovement(rover2022, grid);
    expect(roverWasLost).toBe(true);
  });
  it("Rover was lost with the postion X:2 Y:0 and direction S on the grid X:3 Y:6", () => {
    const rover2022 = new MarsRover(2, 0, "S");
    const grid = gridGenerator(3, 6);
    const roverWasLost = validateMovement(rover2022, grid);
    expect(roverWasLost).toBe(true);
  });
  it("Rover was lost with the postion X:2 Y:0 and direction E on the grid X:3 Y:6", () => {
    const rover2022 = new MarsRover(2, 0, "E");
    const grid = gridGenerator(3, 6);
    const roverWasLost = validateMovement(rover2022, grid);
    expect(roverWasLost).toBe(true);
  });
  it("Rover was lost with the postion X:0 Y:3 and direction W on the grid X:3 Y:6", () => {
    const rover2022 = new MarsRover(0, 3, "W");
    const grid = gridGenerator(3, 6);
    const roverWasLost = validateMovement(rover2022, grid);
    expect(roverWasLost).toBe(true);
  });

  it("Rover was not lost with the postion X:1 Y:1 and direction E on the grid X:3 Y:6", () => {
    const rover2022 = new MarsRover(1, 1, "E");
    const grid = gridGenerator(3, 6);
    const roverWasLost = validateMovement(rover2022, grid);
    expect(roverWasLost).toBe(false);
  });
  it("Rover was not lost with the postion X:1 Y:3 and direction W on the grid X:3 Y:6", () => {
    const rover2022 = new MarsRover(1, 3, "W");
    const grid = gridGenerator(3, 6);
    const roverWasLost = validateMovement(rover2022, grid);
    expect(roverWasLost).toBe(false);
  });
});
