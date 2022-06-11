const gridGenerator = require("../components/gridGenerator");

describe("Grid Generator", () => {
  it("Returns grid 5x6 when x=5 and y=6", () => {
    const grid = gridGenerator(5, 6);

    expect(grid[0].length).toBe(5);
    expect(grid.length).toBe(6);
  });
  it("Returns default grid 10x8 when no input provided", () => {
    const grid = gridGenerator();

    expect(grid[0].length).toBe(10);
    expect(grid.length).toBe(8);
  });
  it("Returns default grid 10x8 when both provided inputs are characters ", () => {
    const grid = gridGenerator("a", "b");

    expect(grid[0].length).toBe(10);
    expect(grid.length).toBe(8);
  });
});
