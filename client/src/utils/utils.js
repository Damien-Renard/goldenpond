function Cell(x, y) {
  this.x = x;
  this.y = y;
  this.coords = `${x} ${y}`;
}

export function PondGrid(size) {
  const [sizeX, sizeY] = size;
  this.grid = [];
  this.sizeX = sizeX;
  this.sizeY = sizeY;
  for (let y = sizeY - 1; y >= 0; y--) {
    const row = [];
    for (let x = 0; x < sizeX; x++) {
      row.push(new Cell(x, y));
    }
    this.grid.push(row);
  }
}

export function Duck(x, y, heading, pondId) {
  this.x = x;
  this.y = y;
  this.heading = heading;
  this.className = `ducks-icon-${heading}`;
  this.pondId = pondId;
}

export function getPondValues(min, max) {
  const valArr = [];
  for (let i = min; i < max; i++) {
    valArr.push({ value: i, label: i });
  }
  return valArr;
}

export function returnHeading(heading, spin) {
  switch (heading) {
    case 'N':
      return spin === 'P' ? 'W' : spin === 'S' ? 'E' : 'N';
    case 'E':
      return spin === 'P' ? 'N' : spin === 'S' ? 'S' : 'E';
    case 'S':
      return spin === 'P' ? 'E' : spin === 'S' ? 'W' : 'S';
    case 'W':
      return spin === 'P' ? 'S' : spin === 'S' ? 'N' : 'W';
    default:
      return heading;
  }
}

export function getPossibleDucksCoords(sizeX, sizeY) {
  const allPossibleCoords = [];
  for (let y = sizeY - 1; y >= 0; y--) {
    for (let x = 0; x < sizeX; x++) {
      allPossibleCoords.push(`${x}-${y}`);
    }
  }
  return allPossibleCoords;
}

export function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getCurrentDucksCoordsList(currentDucksArray) {
  return currentDucksArray.map(duck => `${duck.x}-${duck.y}`);
}

export function getNewDuckCoords(sizeX, sizeY, currentDucksArray) {
  const currentDucksCoords = getCurrentDucksCoordsList(currentDucksArray);
  const possibleCoords = getPossibleDucksCoords(sizeX, sizeY)
    .filter(coord => !currentDucksCoords.includes(coord));
  const length = possibleCoords.length;
  const randomIdx = getRandomInt(length);
  return possibleCoords[randomIdx].split('-');
}

export function getNewDuckHeading() {
  const headings = ['N', 'S', 'E', 'W'];
  const randomIdx = getRandomInt(4);
  return headings[randomIdx];
}
