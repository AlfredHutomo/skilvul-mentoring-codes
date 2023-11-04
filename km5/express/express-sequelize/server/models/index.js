const dbConfig = require("../config/db.config.js");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: dbConfig.HOST,
  dialect: "sqlite",
  storage: dbConfig.storage,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// define semua models yang ada pada aplikasi
db.booking = require("./booking.model")(sequelize);
db.user = require("./user.model")(sequelize);

module.exports = db;
