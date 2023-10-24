let peopleNames = ["Alfred", "Wesly", "Viona", "Krista", "Gilang", "Angga"];

let indexWhile = 0;

let elementName = "air";

console.log("Start Of While Loop");
while (indexWhile < peopleNames.length) {
  const elementInWhile = peopleNames[indexWhile];
  console.log(elementInWhile);
  indexWhile++;
}
console.log("End Of While Loop");

console.log("Start Of For Loop");
for (let indexFor = 0; indexFor < peopleNames.length; indexFor++) {
  const elementInFor = peopleNames[indexFor];
  console.log(elementInFor);
}
console.log("End Of For Loop");

let lastIndex = peopleNames.length - 1;

// Reverse Array
console.log("Start Of For Loop");
for (let indexFor = lastIndex; indexFor >= 0; indexFor--) {
  const element = peopleNames[indexFor];
  console.log(element);
}
console.log("End Of For Loop");

let nama = "";
let umur = 0;
let masihSekolah = false;

const constantNama = "Alfred";
const constantUmur = 18;
const constantWorking = true;

// NOTE: Assignment to constant variable is not allowed (all type )
// Penggunaan '=' di variable yang kita define dengan const akan membuat error
// constantNama = "Viona";
// constantUmur = 25;
// constantWorking = false;

const user = {
  name: "",
};
const usersName = ["Alfred", "Wesly"];

console.log(user);
user.name = "Viona";
console.log(user);

console.log(usersName);
usersName.push("Angga");
console.log(usersName);
