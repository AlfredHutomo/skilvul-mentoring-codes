const db = require("../models");
const User = db.user;

// CREATE: untuk enambahkan data kedalam tabel booking
exports.reqister = (req, res) => {
  // validasi request body
  if (!req.body.title) {
    return res.status(400).send({
      message: "Title can not be empty",
    });
  }

  // initialisasi object booking baru
  const booking = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  // proses menyimpan kedalam database
  User.create(booking)
    .then((data) => {
      res.json({
        message: "Booking created successfully.",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the booking.",
        data: null,
      });
    });
};

// READ: menampilkan atau mengambil semua data sesuai model dari database
exports.login = (req, res) => {
  User.findOne({
    where: { email: req.body.email, password: req.body.password },
  })
    .then((books) => {
      res.json({
        message: "Booking retrieved successfully.",
        data: books,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving booking.",
        data: null,
      });
    });
};
