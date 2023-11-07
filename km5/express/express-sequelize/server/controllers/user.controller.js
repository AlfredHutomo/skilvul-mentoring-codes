const db = require("../models");
const User = db.user;
const Booking = db.booking;

// REGISTER: untuk menambahkan user kedalam tabel booking
exports.reqister = (req, res) => {
  // validasi request body
  if (!req.body.email) {
    return res.status(400).send({
      message: "Email can not be empty",
    });
  }

  if (!req.body.password) {
    return res.status(400).send({
      message: "Password can not be empty",
    });
  }

  if (!req.body.username) {
    return res.status(400).send({
      message: "Username can not be empty",
    });
  }

  // initialisasi object booking baru
  const newUser = {
    dob: req.body.dob,
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
  };

  // proses menyimpan kedalam database
  User.create(newUser)
    .then((data) => {
      res.json({
        message: "User created successfully.",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while creating new user.",
        data: null,
      });
    });
};

// LOGIN: cari user dengan email dan password yang sesuai
exports.login = (req, res) => {
  if (!req.body.email) {
    return res.status(400).send({
      message: "Email can not be empty",
    });
  }

  if (!req.body.password) {
    return res.status(400).send({
      message: "Password can not be empty",
    });
  }

  User.findOne({
    where: { email: req.body.email, password: req.body.password },
  })
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          message: "User not found, please try a correct credentials",
        });
      }

      return res.json({
        message: "User successfully login.",
        data: user,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while logging in user.",
        data: null,
      });
    });
};

// USER_BOOKINGS: cari bookings yang berhubungan dengan user
exports.userBookings = (req, res) => {
  if (!req.params.id) {
    return res.status(400).send({
      message: "UserId can not be empty",
    });
  }

  User.findOne({
    where: { id: req.params.id },
    include: Booking,
  })
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          message: "User not found",
        });
      }

      return res.json({
        message: "User bookings successfully retreived",
        data: user,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while logging in user.",
        data: null,
      });
    });
};
