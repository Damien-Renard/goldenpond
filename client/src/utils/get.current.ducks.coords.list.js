export default function getCurrentDucksCoordsList(currentDucksArray) {
  return currentDucksArray.map(duck => `${duck.x}-${duck.y}`);
}
