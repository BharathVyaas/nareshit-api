const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("test", "SA", "Rbharathvyaas2", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
