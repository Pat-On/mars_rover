// grid generator
// [[0, 1, 2, 3],
//  [0, 1, 2, 3],
//  [0, 1, 2, 3]]

function gridGenerator(x, y) {
  const varX = +x;
  const varY = +y;

  if (isNaN(varX) || varX <= 0) {
    x = 10;
  }

  if (isNaN(varY) || varY <= 0) {
    y = 8;
  }

  const arr = Array(y)
    .fill(0)
    .map(() => Array(x).fill(0));
  return arr;
}

module.exports = gridGenerator;
