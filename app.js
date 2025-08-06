const moves = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];

function isValid(x, y) {
  return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}
