export default function getPossibleDucksCoords(sizeX, sizeY) {
  const allPossibleCoords = [];
  for (let y = sizeY - 1; y >= 0; y--) {
    for (let x = 0; x < sizeX; x++) {
      allPossibleCoords.push(`${x}-${y}`);
    }
  }
  return allPossibleCoords;
}
