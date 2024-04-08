export default function createIteratorObject(report) {
  const arr = [];
  for (const emps of Object.values(report.allEmployees)) {
    arr.push(...emps);
  }
  return arr;
}
