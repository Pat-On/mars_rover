/**
 * @constructor
 * @param {int}  x      Defining the position of the rover on the y-axis.
 * @param {int}  y      Defining the position of the rover on the y-axis.
 * @param {char} orient Defining orientation of the rover. Acceptable parameters "N", "E", "S", "W".
 * @returns {Object}
 */
class MarsRover {
  constructor(x, y, orient) {
    this.position = { x: x, y: y };
    this.orientation = orient;
    this.roverLogs = [{ position: { x: x, y: y }, orientation: orient }];
    this.status = "active";
  }
}

module.exports = MarsRover;
