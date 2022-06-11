const {
  moveRoverForward,
  validateMovement,
  roverParametersUpdate,
} = require("../components/moveRoverForward");
const MarsRover = require("../components/marsRover");
const gridGenerator = require("../components/gridGenerator");

describe("Validate Movements - Does Rover move off the grid", () => {
  it.each`
    positionX | positionY | direction
    ${0}      | ${5}      | ${"N"}
    ${2}      | ${0}      | ${"S"}
    ${2}      | ${0}      | ${"E"}
    ${0}      | ${3}      | ${"W"}
  `(
    "Rover was lost with the postion X: $positionX Y: $positionY and direction $direction on the grid X:3 Y:6",
    ({ positionX, positionY, direction }) => {
      const rover2022 = new MarsRover(positionX, positionY, direction);
      const grid = gridGenerator(3, 6);
      const roverWasLost = validateMovement(rover2022, grid);
      expect(roverWasLost).toBe(true);
    }
  );

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
