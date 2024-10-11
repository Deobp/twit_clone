export const { Sequelize } = require("sequelize");

export const db = new Sequelize({
  dialect: 'sqlite',
  storage: "./db/databases/DB.db"
})