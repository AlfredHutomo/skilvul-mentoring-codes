// variables
let personName = "Alfred";
let jobCount = 2;
let isWorking = true;

personName = "Syilla";

// console.log(personName);
// console.log(jobCount);
// console.log(isWorking);

const programName = "FE";
const totalStudents = 100;
const programBySkilvul = true;

// Assignment pada suatu const variable akan membuat TypeError
// programName = "BE";

// const studentObject = {
//   firstName: "",
//   lastName: "",
//   age: 0,
// };

// console.log(studentObject);
// studentObject.firstName = "Bayu";
// studentObject.lastName = "Seto";
// studentObject.age = 21;
// console.log(studentObject);

// const studentArray = [
//   {
//     firstName: "Syifa",
//     lastName: "Hadiarti Aulia",
//     age: 21,
//   },
//   {
//     firstName: "Rafai",
//     lastName: "Muhammad",
//     age: 21,
//   },
//   {
//     firstName: "Alfito",
//     lastName: "Santosa",
//     age: 21,
//   },
// ];

// console.log(studentArray);
// studentArray.push(studentObject);
// console.log(studentArray);

// let count = 0;

// while (count < 10) {
//   console.log(count);
//   count++;
// }

const globalVariable = "";

function normalFunction(param1) {
  let variableLocal = "";
  console.log(param1);
  console.log(variableLocal);
  console.log(globalVariable);
  //...
}

function addTwoNumber(number1, number2) {
  return number1 + number2;
}

const total = addTwoNumber(100, 20);

console.log("total", total);

// normalFunction("heloo");

// const arrowFunction = (param1) => {
//   console.log(param1);
//   //...
// };
