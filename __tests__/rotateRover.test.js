const {
  rotateRoverToRight,
  rotateRoverToLeft,
} = require("../components/rotateRover");
const MarsRover = require("../components/marsRover");

describe("MarsRover rotationing an orientation to right", () => {
  it.each`
    fromDirection | toDirection
    ${"N"}        | ${"E"}
    ${"E"}        | ${"S"}
    ${"S"}        | ${"W"}
    ${"W"}        | ${"N"}
  `(
    "Rotating Rover from direction to $fromDirection to direction to $toDirection",
    ({ fromDirection, toDirection }) => {
      const rover2022 = new MarsRover(0, 5, fromDirection);
      rotateRoverToRight(rover2022);
      expect(rover2022.orientation).toBe(toDirection);
    }
  );
});

describe("MarsRover rotationing an orientation to left", () => {
  it.each`
    fromDirection | toDirection
    ${"N"}        | ${"W"}
    ${"W"}        | ${"S"}
    ${"S"}        | ${"E"}
    ${"E"}        | ${"N"}
  `(
    "Rotating Rover from direction to $fromDirection to direction to $toDirection",
    ({ fromDirection, toDirection }) => {
      const rover2022 = new MarsRover(0, 5, fromDirection);
      rotateRoverToLeft(rover2022);
      expect(rover2022.orientation).toBe(toDirection);
    }
  );
});
