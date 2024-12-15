;
var teacher1 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    yearsOfExperience: 5,
    location: 'New York',
    contact: false,
};
var teacher2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: false,
    yearsOfExperience: 3,
    location: 'Los Angeles',
    contact: true,
};
var teacher3 = {
    firstName: 'Mark',
    lastName: 'Johnson',
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: 'Chicago',
    contact: false,
};
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    yearsOfExperience: 8,
    contact: true,
    fullTimeEmployee: true,
    numberOfReports: 32,
};
var director2 = {
    firstName: 'Mary',
    lastName: 'Jane',
    location: 'Doha',
    yearsOfExperience: 5,
    contact: true,
    fullTimeEmployee: false,
    numberOfReports: 25,
};
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
console.log(printTeacher("John", "Doe"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass("Mary", "Johnson");
console.log(student.workOnHomework());
console.log(student.displayName());
