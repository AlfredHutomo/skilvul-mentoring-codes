const db = require("../models");
const Booking = db.booking;

// CREATE: untuk enambahkan data kedalam tabel booking
exports.create = (req, res) => {
  // validasi request body
  if (!req.body.description) {
    return res.status(400).send({
      message: "Decription can not be empty",
    });
  }

  if (!req.body.date) {
    return res.status(400).send({
      message: "Date can not be empty",
    });
  }

  if (!req.body.userId) {
    return res.status(400).send({
      message: "UserId can not be empty",
    });
  }

  // initialisasi object booking baru
  const newBooking = {
    date: req.body.date,
    description: req.body.description,
    userId: req.body.userId,
  };

  // proses menyimpan kedalam database
  Booking.create(newBooking)
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
exports.findAll = (req, res) => {
  Booking.findAll()
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

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params
exports.update = (req, res) => {
  const id = req.params.id;
  Booking.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Booking updated successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot update booking with id=${id}. Maybe booking was not found or req.body is empty!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while updating the booking.",
        data: null,
      });
    });
};

// DELETE: Menghapus data sesuai id yang dikirimkan
exports.delete = (req, res) => {
  const id = req.params.id;
  Booking.destroy({
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Booking deleted successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot delete booking with id=${id}. Maybe booking was not found!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while deleting the booking.",
        data: null,
      });
    });
};

// BONUS ===> Mengambil data sesuai id yang dikirimkan
exports.findOne = (req, res) => {
  Booking.findByPk(req.params.id)
    .then((booking) => {
      res.json({
        message: "Booking retrieved successfully.",
        data: booking,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving booking.",
        data: null,
      });
    });
};
