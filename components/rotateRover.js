// rotate to left
//     <- N <-
//     W     E
//     -> S ->
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

// rotate to right
//     -> N ->
//     W     E
//     <- S <-
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
