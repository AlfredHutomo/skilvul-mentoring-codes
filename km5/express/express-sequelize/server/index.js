require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

// Setup Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
// db.sequelize untuk sync database pada saat server di mulai
// Jika kita buat force: true data di dalam database akan di override untuk melakukan update db
// Jika server sudah di deploy ke production matikan force: true agar tidak kehilangan data
db.sequelize.sync({ force: false });

const bookingRouter = require("./routers/booking.router");
const userRouter = require("./routers/user.router");
// Setup Routing
app.use("/api/booking", bookingRouter);
app.use("/api/user", userRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
