const MarsRover = require("../components/marsRover");

describe("MarsRover Class", () => {
  it("Correct starting position of the rover x=0 y=5", () => {
    const rover2022 = new MarsRover(0, 5, "E");

    expect(rover2022.position.x).toBe(0);
    expect(rover2022.position.y).toBe(5);
  });
  it("Correct starting direction of the rover direction: 'E'", () => {
    const rover2022 = new MarsRover(0, 5, "E");

    expect(rover2022.orientation).toBe("E");
  });
  it("Correct first roverLogs after passing parameters x=0 x=5 direction: 'E'", () => {
    const rover2022 = new MarsRover(0, 5, "E");

    expect(rover2022.roverLogs[0].position.x).toBe(0);
    expect(rover2022.roverLogs[0].position.y).toBe(5);
    expect(rover2022.roverLogs[0].orientation).toBe("E");
  });

  it("Status of rover 'active' after creation of the new object", () => {
    const rover2022 = new MarsRover(0, 5, "E");

    expect(rover2022.status).toBe("active");
  });
});
