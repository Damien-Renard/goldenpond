export default function Duck(x, y, heading, pondId) {
  this.x = x;
  this.y = y;
  this.heading = heading;
  this.className = `ducks-icon-${this.heading}`;
  this.pondId = pondId;
}
