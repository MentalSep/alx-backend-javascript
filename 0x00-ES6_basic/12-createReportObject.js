export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesLis) {
      return Object.keys(employeesLis).length;
    },
  };
}
