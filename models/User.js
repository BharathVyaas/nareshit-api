const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize"); // Import the Sequelize instance

const User = sequelize.define("User", {
  // Define model attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = User;
