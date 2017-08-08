export default function getPondValues(min, max) {
  const valArr = [];
  for (let i = min; i < max; i++) {
    valArr.push({ value: i, label: i });
  }
  return valArr;
}
