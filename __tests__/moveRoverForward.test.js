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

describe("Rover Parameters update after succesfull movement", () => {
  it("Rover moved from X:0 Y:5 Direction S to X:0 Y:4 ", () => {
    const rover2022 = new MarsRover(0, 5, "S");
    const grid = gridGenerator(3, 6);

    const roverWasLost = validateMovement(rover2022, grid);
    roverParametersUpdate(rover2022, roverWasLost);

    expect(rover2022.position.x).toBe(0);
    expect(rover2022.position.y).toBe(4);
  });
  it("Rover moved from X:0 Y:5 Direction E to X:0 Y:4 ", () => {
    const rover2022 = new MarsRover(0, 5, "E");
    const grid = gridGenerator(3, 6);

    const roverWasLost = validateMovement(rover2022, grid);
    roverParametersUpdate(rover2022, roverWasLost);

    expect(rover2022.position.x).toBe(1);
    expect(rover2022.position.y).toBe(5);
  });

  it("Rover moved from X:0 Y:5 Direction E to X:0 Y:4. Last position in rover logs", () => {
    const rover2022 = new MarsRover(0, 5, "E");
    const grid = gridGenerator(3, 6);

    const roverWasLost = validateMovement(rover2022, grid);
    roverParametersUpdate(rover2022, roverWasLost);
    expect(rover2022.roverLogs[rover2022.roverLogs.length - 2].position.x).toBe(
      0
    );
    expect(rover2022.roverLogs[rover2022.roverLogs.length - 2].position.y).toBe(
      5
    );
  });

  it("Rover has 'active' status after valid move", () => {
    const rover2022 = new MarsRover(1, 1, "W");
    const grid = gridGenerator(3, 6);
    const roverWasLost = validateMovement(rover2022, grid);
    roverParametersUpdate(rover2022, roverWasLost);
    expect(rover2022.status).toBe("active");
  });

  it("Rover has 'lost' status after invalid move", () => {
    const rover2022 = new MarsRover(0, 5, "N");
    const grid = gridGenerator(3, 6);
    const roverWasLost = validateMovement(rover2022, grid);
    roverParametersUpdate(rover2022, roverWasLost);
    expect(rover2022.status).toBe("lost");
  });
});
