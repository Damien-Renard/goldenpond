export default function getHeadingAfterSpin(heading, spin) {
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
