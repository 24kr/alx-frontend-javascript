interface teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee:boolean;
    yearsOfExperience: number;
    location: string;
    contact:boolean;
};

const teacher1: teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    yearsOfExperience: 5,
    location: 'New York',
    contact: false,
};

const teacher2: teacher = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: false,
    yearsOfExperience: 3,
    location: 'Los Angeles',
    contact: true,
};

const teacher3: teacher = {
    firstName: 'Mark',
    lastName: 'Johnson',
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: 'Chicago',
    contact: false,
};

interface Directors extends teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  yearsOfExperience: 8,
  contact: true,
  fullTimeEmployee: true,
  numberOfReports: 32,
};

const director2: Directors = {
  firstName: 'Mary',
  lastName: 'Jane',
  location: 'Doha',
  yearsOfExperience: 5,
  contact: true,
  fullTimeEmployee: false,
  numberOfReports: 25,
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));



//class studentclassconstructor
interface StudentClassConstructor
 {
  new (firstName: string, lastName: string): StudentClassInterface;
 }

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("Mary", "Johnson");
console.log(student.workOnHomework()); 
console.log(student.displayName());    
