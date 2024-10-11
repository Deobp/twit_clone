import { connectDB } from "../config/db";
import bcrypt from "bcrypt";
import { UserInterface } from "../interfaces/UserInterface";
import { v4 as uuidv4 } from 'uuid';

export const createUser = async (
  username: string,
  password: string
): Promise<UserInterface> => {
  try {
    const db = await connectDB();

    const existingUser = await db.get<UserInterface>(
      "SELECT * FROM users where username = ?",
      username
    );

    if (existingUser) {
      console.log("User already exist");
      return null;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: UserInterface = {
      id: uuidv4(),
      username: username,
      password: hashedPassword,
    };

    const result = await db.run(
      "INSERT INTO users (id, username, password) VALUES (?, ?, ?)",
      [newUser.id, newUser.username, newUser.password]
    );

    return newUser;

  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  }
};
