const car = {
  brand: "Honda",
  model: "Civic",
  year: 2022,
};

const carArray = [
  {
    brand: "Honda",
    model: "Civic",
    year: 2022,
  },
  {
    brand: "Honda",
    model: "Brio",
    year: 2022,
  },
  {
    brand: "Honda",
    model: "HR-V",
    year: 2022,
  },
];

// For Loop
console.log("For loop biasa");
for (let i = 0; i < carArray.length; i++) {
  const carObject = carArray[i];
  console.log(carObject.model);
}

// For-of Loop
console.log("For loop with of");
for (const carObject of carArray) {
  console.log(carObject.model);
}

function normalFunction(param1) {
  console.log(param1);
  //...
}

const arrowFunction = (param1) => {
  console.log(param1);
  //...
};

console.log("For loop with forEach function dari Array");
carArray.forEach((carObject) => {
  console.log(carObject.model);
});
