// rover object
// Object properties:
// position (x, y)  orientation("N", "E", "S", "W")
// roverLogs - history mission [{position, orientation}]
// status - status of the rover "active" or "lost"

class MarsRover {
  constructor(x, y, orient) {
    this.position = { x: x, y: y };
    this.orientation = orient;
    this.roverLogs = [{ position: { x: x, y: y }, orientation: orient }];
    this.status = "active";
  }
}

module.exports = MarsRover;
