import Cell from './cell';

export default function PondGrid(size) {
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
