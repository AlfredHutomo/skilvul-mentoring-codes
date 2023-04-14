// Key yang digunakan untuk menyimpan data di localStorage, agar konsisten dan konstan
const STORAGE_KEY = "user-data";

// Mengambil element form dari DOM
const mainForm = document.querySelector(".form-utama");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const genderInput = document.querySelector("#gender");
const addressInput = document.querySelector("#address");
const userFeedbackElement = document.querySelector("#user-feedback");
const resetButton = document.querySelector("#reset-button");

// Fungsi untuk menampilkan data dari localStorage
const showUserData = () => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const dataContainer = document.querySelector("#data-localstorage");

  // Jika data ada, tampilkan data
  if (data) {
    dataContainer.innerHTML = JSON.stringify(data, null, 2);
  } else {
    dataContainer.innerHTML = "No data in localStorage";
  }
};

// Fungsi untuk mereset semua input
const resetFormFields = () => {
  // clear semua input
  firstNameInput.value = "";
  lastNameInput.value = "";
  genderInput.value = "";
  addressInput.value = "";

  // clear feedback
  userFeedbackElement.innerHTML = "";
};

// Fungsi untuk melakukan validasi data
const validasiData = (data) => {
  // Cara cepat dan singkat
  // return Object.values(data).some((value) => value === "");

  if (data.firstName === "") {
    // Kalau firstName kosong
    userFeedbackElement.innerHTML = "Nama depan masih kosong";
    return false;
  }
  if (data.lastName === "") {
    // Kalau lastName kosong
    userFeedbackElement.innerHTML = "Nama belakang masih kosong";
    return false;
  }
  if (data.gender === "") {
    // Kalau gender kosong
    userFeedbackElement.innerHTML = "Jenis kelamin masih kosong";
    return false;
  }
  if (data.address === "") {
    // Kalau address kosong
    userFeedbackElement.innerHTML = "Alamat masih kosong";
    return false;
  }

  // Kalau semua sudah terisi
  return true;
};

// Fungsi untuk menangani submit form
const handleSubmitForm = (event) => {
  event.preventDefault();

  const userData = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    gender: genderInput.value,
    address: addressInput.value,
  };

  const dataInputValid = validasiData(userData);

  if (dataInputValid) {
    const userDataInLocalStorage = JSON.parse(
      localStorage.getItem(STORAGE_KEY)
    );

    if (userDataInLocalStorage) {
      const newData = [...userDataInLocalStorage, userData];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } else {
      const newData = [userData];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    }

    resetFormFields();
    showUserData();
  }
};

// Menambahkan event listener untuk submit form
mainForm.addEventListener("submit", handleSubmitForm);

// Menangani event click untuk tombol reset
const handleResetButton = (event) => {
  event.preventDefault();

  // clear localStorage
  // localStorage.removeItem(STORAGE_KEY);

  resetFormFields();
  showUserData();
};

// Menambahkan event listener untuk tombol reset
resetButton.addEventListener("click", handleResetButton);

// Inisialisasi Webpage
showUserData();
