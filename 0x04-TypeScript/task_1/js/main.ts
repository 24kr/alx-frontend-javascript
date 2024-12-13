interface teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee:boolean;
    yearsOfExperience: number;
    location: string;
    contact:boolean;
}

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
}

const teachersList: teacher[] = [teacher1, teacher2, teacher3];

const table = document.createElement('table');
const tableBody = document.createElement('tbody');

teachersList.forEach(teacher => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = teacher.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = teacher.location;
    row.appendChild(locationCell);

    tableBody.appendChild(row);
});