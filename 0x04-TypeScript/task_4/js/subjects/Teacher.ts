const cppTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 3,
};

const cpp = new Subjects.Cpp();
cpp.setTeacher = cppTeacher;

console.log(cpp.getRequirements()); // Output: Here is the list of requirements for Cpp
console.log(cpp.getAvailableTeacher()); // Output: Available Teacher: John
