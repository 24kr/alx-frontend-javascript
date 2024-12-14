// Define DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Define the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Type predicate to check if an employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// String literal type for Subjects
type Subjects = "Math" | "History";

// Function to teach a class
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// console.log(executeWork(createEmployee(200)));
// console.log(executeWork(createEmployee(1000)));
// console.log(teachClass("Math")); 
// console.log(teachClass("History")); 


/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create a RowElement object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert the row into the database
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Row inserted with ID: ${newRowID}`);

// Update the row with a new age field
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Row updated with ID: ${newRowID}`);

// Delete the row
CRUD.deleteRow(newRowID);
console.log(`Row with ID ${newRowID} deleted`);
