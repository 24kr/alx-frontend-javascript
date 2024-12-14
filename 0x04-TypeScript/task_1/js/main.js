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
    numberOfReports: 17,
};
var teachersList = [teacher1, teacher2, teacher3];
var table = document.createElement('table');
var tableBody = document.createElement('tbody');
teachersList.forEach(function (teacher) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    firstNameCell.textContent = teacher.firstName;
    row.appendChild(firstNameCell);
    var locationCell = document.createElement('td');
    locationCell.textContent = teacher.location;
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});
// Implement the printTeacher function
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
// Example usage
console.log(printTeacher("John", "Doe"));
