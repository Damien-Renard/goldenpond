import getCurrentDucksCoordsList from './get.current.ducks.coords.list';
import getPossibleDucksCoords from './get.possible.ducks.coords';
import getRandomInt from './get.random.integer';

export default function getNewDuckCoords(sizeX, sizeY, currentDucksArray) {
  const currentDucksCoords = getCurrentDucksCoordsList(currentDucksArray);
  const possibleCoords = getPossibleDucksCoords(sizeX, sizeY)
    .filter(coord => !currentDucksCoords.includes(coord));
  const length = possibleCoords.length;
  const randomIdx = getRandomInt(length);
  return possibleCoords[randomIdx].split('-');
}
