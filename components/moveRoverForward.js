// move rover forward - 1 field
//              N: y = y + 1
//      W: x= x - 1         E: x = x + 1
//              S: y = y - 1

function moveRoverForward(rover, grid) {
  // Guard statement - If the rover is lost, You can not communicate with it and update values.
  // Validation of the move on the grid
  // Updating the rover parameters
  // Condidational return - rover lost or no
}

function validateMovement(rover, grid) {
  const roverPositionX = rover.position.x;
  const roverPositionY = rover.position.y;
  const roverOrient = rover.orientation;

  const gridLengthY = grid.length;
  const gridLengthX = grid[0].length;

  // validate if a robot moves off the grid
  if (roverOrient === "N" && roverPositionY + 1 >= gridLengthY) {
    return true;
  } else if (roverOrient === "S" && roverPositionY - 1 < 0) {
    return true;
  } else if (roverOrient === "E" && roverPositionX + 1 >= gridLengthX) {
    return true;
  } else if (roverOrient === "W" && roverPositionX - 1 < 0) {
    return true;
  }
  return false;
}

function roverParametersUpdate(rover, roverWasLost) {}

module.exports = { moveRoverForward, validateMovement, roverParametersUpdate };
