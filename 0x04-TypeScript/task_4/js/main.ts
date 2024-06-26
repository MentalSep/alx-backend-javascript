export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
  firstName: "first",
  lastName: "last",
  experienceTeachingC: 10,
};

cpp.setTeacher = cTeacher;
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.setTeacher = cTeacher;
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.setTeacher = cTeacher;
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
