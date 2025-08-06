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

function knightMoves(start, target) {
  const queue = [];
  const visited = new Set();
  queue.push({ position: start, path: [start] });
  visited.add(start.toString());

  while (queue.length > 0) {
    const { position, path } = queue.shift();
    const [x, y] = position;

    if (x === target[0] && y === target[1]) {
      console.log(`You made it in ${path.length} moves! Here's your path:`);
      for (const pos of path) {
        console.log(pos);
      }
      return path;
    }

    for (const [movesX, movesY] of moves) {
      const knightX = x + movesX;
      const knightY = y + movesY;
      const key = `${knightX},${knightY}`;

      if (isValid(knightX, knightY)) {
        if (!visited.has(key)) {
          queue.push({
            position: [knightX, knightY],
            path: [...path, [knightX, knightY]],
          });
          visited.add(key);
        }
      }
    }
  }
}

knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
