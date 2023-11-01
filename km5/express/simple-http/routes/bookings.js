const express = require("express");
const router = express.Router();

let idCounter = 1;
let bookings = [];

router.get("/bookings", (req, res) => {
  res.send(bookings);
});

router.post("/bookings", (req, res) => {
  const payload = req.body;

  if (!payload.dokterId || payload.dokterId === "") {
    res.status(403).send({ message: "Dokter harus ada" });
    return;
  }

  if (!payload.pasienId || payload.pasienId === "") {
    res.status(403).send({ message: "Pasien harus ada" });
    return;
  }

  const newBooking = {
    id: idCounter,
    ...payload,
  };

  // Nanti di ganti dengan koneksi ke database
  bookings.push(newBooking);

  idCounter += 1;

  res.sendStatus(200);
});

router.get("/bookings/:id", (req, res) => {
  const params = req.params;

  const booking = bookings.find((b) => {
    return b.id === +params.id;
  });

  if (!booking) {
    res.status(404).send({ message: "Booking not found" });
    return;
  }

  res.send(booking);
});

module.exports = router;
