import * as Subjects from './Subject';
import { Cpp } from './Cpp';
import { Java } from './Java';
import { React } from './React';

// Export constants for subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create and export a Teacher object
export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Cpp Subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java Subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React Subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
