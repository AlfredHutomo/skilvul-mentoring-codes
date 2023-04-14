// Penjelasan JSON.parse

const stringData = '{"nama":"alfred","umur":20}';

//tidak akan bisa di akses, karena data masih bentuk string
console.log(stringData.nama);

const parsedData = JSON.parse(stringData);

//akan bisa di akses, karena data sudah di parse menjadi object
console.log(parsedData.nama);

// Penjelasan JSON.stringify;

const userData = {
  nama: "alfito",
  matkul: "SI",
};

// userData akan masih dalam bentuk object
console.log(userData);

const stringifiedData = JSON.stringify(userData);

// userData sudah berubah menjadi string dengan menggunakan JSON.stringify
console.log(stringifiedData);

// Penjelasan localStorage.setItem

localStorage.setItem("user-data-object", userData);

// localStorage.setItem("user-data-string", JSON.stringify(userData));
localStorage.setItem("user-data-string", stringifiedData);

// Penjelasan localStorage.getItem

const userDataObject = localStorage.getItem("user-data-object");
const userDataString = localStorage.getItem("user-data-string");

console.log({ userDataObject });
console.log({ userDataString });

// localStorage.removeItem

localStorage.setItem("userId", "123456");

// akan menghapus data dengan key userId
localStorage.removeItem("userId");
