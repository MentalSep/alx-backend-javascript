export default function cleanSet(set, startString) {
  if (!set || !startString) return '';

  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  const cleanValues = filteredValues.map((value) => value.slice(startString.length));

  return cleanValues.join('-');
}
