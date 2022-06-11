// move rover forward - 1 field
//              N: y = y + 1
//      W: x= x - 1         E: x = x + 1
//              S: y = y - 1

function moveRoverForward(rover, grid) {
  // Guard statement - If the rover is lost, You can not communicate with it and update values.
  if (rover.status === "active") {
    // Validation of the move on the grid
    const roverWasLost = validateMovement(rover, grid);
    // Updating the rover parameters
    roverParametersUpdate(rover, roverWasLost);
  }
  // Condidational return - rover lost or no
  if (rover.status === "lost") {
    return "lost";
  } else {
    return "not lost";
  }
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

function roverParametersUpdate(rover, roverWasLost) {
  let roverPositionX = rover.position.x;
  let roverPositionY = rover.position.y;
  let roverOrient = rover.orientation;
  // Do movement and update: push the previous position to roverLogs && the rover's current position
  if (roverOrient === "N") {
    // add rover log
    rover.roverLogs.push({
      position: { ...rover.position },
      orientation: rover.orientation,
    });
    // update rover position
    rover.position.y = roverPositionY + 1;

    // change status if lost
    rover.status = roverWasLost ? "lost" : "active";
  } else if (roverOrient === "E") {
    // add rover log
    rover.roverLogs.push({
      position: { ...rover.position },
      orientation: rover.orientation,
    });
    // update rover position
    rover.position.x = roverPositionX + 1;

    // change status if lost
    rover.status = roverWasLost ? "lost" : "active";
  } else if (roverOrient === "S") {
    // add rover log
    rover.roverLogs.push({
      position: { ...rover.position },
      orientation: rover.orientation,
    });
    // update rover position
    rover.position.y = roverPositionY - 1;

    // change status if lost
    rover.status = roverWasLost ? "lost" : "active";
  } else if (roverOrient === "W") {
    // add rover log
    rover.roverLogs.push({
      position: { ...rover.position },
      orientation: rover.orientation,
    });
    // update rover position
    rover.position.x = roverPositionX - 1;

    // change status if lost
    rover.status = roverWasLost ? "lost" : "active";
  }
}

module.exports = { moveRoverForward, validateMovement, roverParametersUpdate };
