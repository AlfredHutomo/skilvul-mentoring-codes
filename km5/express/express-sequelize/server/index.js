const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
// db.sequelize untuk sync database pada saat server di mulai
db.sequelize.sync();

const bookingRouter = require("./routers/booking.router");
const userRouter = require("./routers/user.router");

app.use("/api/booking", bookingRouter);
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
