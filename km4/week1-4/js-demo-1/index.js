const studentObject = {
  firstName: "",
  lastName: "",
  age: 0,
};

studentObject.firstName = "Bayu";
studentObject.lastName = "Seto";
studentObject.age = 21;

const studentArray = [
  {
    firstName: "Syifa",
    lastName: "Hadiarti Aulia",
    age: 21,
  },
  {
    firstName: "Rafai",
    lastName: "Muhammad",
    age: 21,
  },
  {
    firstName: "Alfito",
    lastName: "Santosa",
    age: 21,
  },
];

const studentArray2 = [
  {
    firstName: "Syifa",
    lastName: "Hadiarti Aulia",
    age: 21,
  },
  {
    firstName: "Alfito",
    lastName: "Santosa",
    age: 21,
  },
];

console.log(studentArray);
studentArray.push(studentObject);
console.log(studentArray);

const studentListElement = document.getElementById("students-list");
const studentTableElement = document.getElementById("students-table");

let studentsHTML = "";

for (let i = 0; i < studentArray.length; i++) {
  const student = studentArray[i];
  studentsHTML += `<li>${student.firstName} ${student.lastName} Umur: ${student.age}</li>`;
}

function makeStudentTableHTML(array) {
  let studentsTableHTML = "";
  studentsTableHTML += `
      <tr>
          <th>Nama Depan</th>
          <th>Nama Belakang</th>
          <th>Umur</th>
      </tr>`;
  array.forEach((student) => {
    studentsTableHTML += `
      <tr>
          <td>${student.firstName}</td>
          <td>${student.lastName}</td>
          <td>${student.age}</td>
      </tr>`;
  });
  return studentsTableHTML;
}

const tableHTML = makeStudentTableHTML(studentArray);

studentListElement.innerHTML = studentsHTML;
studentTableElement.innerHTML = tableHTML;

console.log("studentList pake Id", studentListElement);
