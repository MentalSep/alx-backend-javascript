export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) {
    return '';
  }

  const cleanValues = [...set]
    .filter((value) => (value ? value.startsWith(startString) : ''))
    .map((value) => (value ? value.slice(startString.length) : ''));

  return cleanValues.join('-');
}
