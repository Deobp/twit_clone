import { Sequelize } from 'sequelize';

const db = new Sequelize({
  dialect: 'sqlite',
  storage: "./db/databases/DB.db"
});

export default db;
