const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  // host: process.env.DB_CONNECTION_STRING,
  dialect: "sqlite",
  storage: "./temp/data.sqlite",
});

// define semua models yang ada pada aplikasi
const Booking = require("./booking.model")(sequelize);
const User = require("./user.model")(sequelize);

// define relasi antar model
User.hasMany(Booking);
Booking.belongsTo(User);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.booking = Booking;
db.user = User;

module.exports = db;
