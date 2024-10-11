import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const connectDB = async () => {
  try {
    const db = await open({
      filename: "./db.sqlite",
      driver: sqlite3.Database,
    });

    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY AUTOINCREMENT,
        name UNIQUE TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
      )
    `);

    console.log("Connected to the SQLite database");
    return db;
  } catch (error) {
    console.log('Error to connection to th SQLite db: ', error);
    
  }
};
