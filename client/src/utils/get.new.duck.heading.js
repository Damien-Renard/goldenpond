import getRandomInt from './get.random.integer';

export default function getNewDuckHeading() {
  const headings = ['N', 'S', 'E', 'W'];
  const randomIdx = getRandomInt(4);
  return headings[randomIdx];
}
