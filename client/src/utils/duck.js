export default function Duck(x, y, heading, pondId) {
  this.x = x;
  this.y = y;
  this.heading = heading;
  this.pondId = pondId;
}

Duck.prototype.getClassName = () => (
  `ducks-icon-${this.heading}`
);
