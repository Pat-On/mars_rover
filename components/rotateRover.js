const MarsRover = require("./marsRover");

/**
 * The rotateRoverToLeft function rotates the rover 90 degrees to the left.
 * Representation of the rotation process: N -> W -> S -> E -> N.
 *
 * @param { MarsRover } rover
 * @returns { string } A string describes the current position of the rover o x-axis and y-axis with orientation
 */
function rotateRoverToLeft(rover) {
  if (rover.orientation === "N") {
    rover.orientation = "W";
    return `Rover current position: { X:${rover.position.x} Y:${rover.position.y}, Direction:${rover.orientation} }`;
  } else if (rover.orientation === "W") {
    rover.orientation = "S";
    return `Rover current position: { X:${rover.position.x} Y:${rover.position.y}, Direction:${rover.orientation} }`;
  } else if (rover.orientation === "S") {
    rover.orientation = "E";
    return `Rover current position: { X:${rover.position.x} Y:${rover.position.y}, Direction:${rover.orientation} }`;
  } else if (rover.orientation === "E") {
    rover.orientation = "N";
    return `Rover current position: { X:${rover.position.x} Y:${rover.position.y}, Direction:${rover.orientation} }`;
  }
}

/**
 * The rotateRoverToRight function rotates the rover 90 degrees to the right.
 * Representation of the rotation process: N -> E -> S -> W -> N.
 *
 * @param { MarsRover } rover
 * @returns { string } A string describes the current position of the rover o x-axis and y-axis with orientation
 */
function rotateRoverToRight(rover) {
  if (rover.orientation === "N") {
    rover.orientation = "E";
    return `Rover current position: {X:${rover.position.x} Y:${rover.position.y}, Direction:${rover.orientation} }`;
  } else if (rover.orientation === "E") {
    rover.orientation = "S";
    return `Rover current position: {X:${rover.position.x} Y:${rover.position.y}, Direction:${rover.orientation} }`;
  } else if (rover.orientation === "S") {
    rover.orientation = "W";
    return `Rover current position: {X:${rover.position.x} Y:${rover.position.y}, Direction:${rover.orientation} }`;
  } else if (rover.orientation === "W") {
    rover.orientation = "N";
    return `Rover current position: {X:${rover.position.x} Y:${rover.position.y}, Direction:${rover.orientation} }`;
  }
}

module.exports = {
  rotateRoverToRight,
  rotateRoverToLeft,
};
