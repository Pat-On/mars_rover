const {
  moveRoverForward,
  validateMovement,
  roverParametersUpdate,
} = require("../components/moveRoverForward");
const {
  rotateRoverToRight,
  rotateRoverToLeft,
} = require("../components/rotateRover");
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

describe("Moving the rover on the grid", () => {
  it("Rover did move and got lost", () => {
    const rover2022 = new MarsRover(0, 0, "E");
    const grid = gridGenerator(3, 6);

    rotateRoverToRight(rover2022);
    const finalPosition = moveRoverForward(rover2022, grid);

    expect(finalPosition).toBe(
      "Rover is lost. Last known position: {X: 0, Y: 0, Direction: S}"
    );
  });
  it("Rover did move and is online", () => {
    const rover2022 = new MarsRover(0, 0, "N");
    const grid = gridGenerator(3, 6);

    const finalPosition = moveRoverForward(rover2022, grid);

    expect(finalPosition).toBe(
      "Rover current position: {X:0 Y:1, Direction: N }"
    );
  });

  it("Rover from position X:0 Y:0 after changing direction from East to North, should go to North and Get Lost after 6 movements", () => {
    const rover2022 = new MarsRover(0, 0, "E");
    const grid = gridGenerator(3, 6);

    const afterRotation = rotateRoverToLeft(rover2022);

    moveRoverForward(rover2022, grid);
    moveRoverForward(rover2022, grid);
    moveRoverForward(rover2022, grid);
    moveRoverForward(rover2022, grid);
    moveRoverForward(rover2022, grid);
    const finalPosition = moveRoverForward(rover2022, grid);

    expect(afterRotation).toBe(
      "Rover current position: { X:0 Y:0, Direction:N }"
    );
    expect(finalPosition).toBe(
      "Rover is lost. Last known position: {X: 0, Y: 5, Direction: N}"
    );
  });

  it("Rover from position X:0 Y:0 after changing direction from Nort to East, should go to East and Get Lost after 3 movements", () => {
    const rover2022 = new MarsRover(0, 0, "N");
    const grid = gridGenerator(3, 6);

    const afterRotation = rotateRoverToRight(rover2022);

    moveRoverForward(rover2022, grid);
    moveRoverForward(rover2022, grid);
    const finalPosition = moveRoverForward(rover2022, grid);

    expect(afterRotation).toBe(
      "Rover current position: {X:0 Y:0, Direction:E }"
    );
    expect(finalPosition).toBe(
      "Rover is lost. Last known position: {X: 2, Y: 0, Direction: E}"
    );
  });

  it("Rover from position X:2 Y:5 after changing direction from West to South, should go to South and Get Lost after 6 movements", () => {
    const rover2022 = new MarsRover(2, 5, "W");
    const grid = gridGenerator(3, 6);

    const afterRotation = rotateRoverToLeft(rover2022);

    moveRoverForward(rover2022, grid);
    moveRoverForward(rover2022, grid);
    moveRoverForward(rover2022, grid);
    moveRoverForward(rover2022, grid);
    moveRoverForward(rover2022, grid);
    const finalPosition = moveRoverForward(rover2022, grid);

    expect(afterRotation).toBe(
      "Rover current position: { X:2 Y:5, Direction:S }"
    );
    expect(finalPosition).toBe(
      "Rover is lost. Last known position: {X: 2, Y: 0, Direction: S}"
    );
  });

  it("Rover from position X:2 Y:5 after changing direction from South to West, should go to West and Get Lost after 3 movements", () => {
    const rover2022 = new MarsRover(2, 5, "S");
    const grid = gridGenerator(3, 6);

    const afterRotation = rotateRoverToRight(rover2022);

    moveRoverForward(rover2022, grid);
    moveRoverForward(rover2022, grid);
    const finalPosition = moveRoverForward(rover2022, grid);

    expect(afterRotation).toBe(
      "Rover current position: {X:2 Y:5, Direction:W }"
    );
    expect(finalPosition).toBe(
      "Rover is lost. Last known position: {X: 0, Y: 5, Direction: W}"
    );
  });
});
