const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("user", {
    dob: {
      type: DataTypes.DATE,
    },
    email: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
  });
  return User;
};
