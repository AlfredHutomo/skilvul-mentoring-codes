const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Booking = sequelize.define("booking", {
    date: {
      type: DataTypes.DATE,
    },
    description: {
      type: DataTypes.TEXT,
    },
  });
  return Booking;
};
