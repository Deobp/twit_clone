import { connectDB } from "../config/db";
import bcrypt from "bcrypt";
import { User } from "../interfaces/UserInterface";
import uuidv4 from 'uuid';



export const createUser = async (username: string, password: string): Promise<UserInterface> => {
  const db = await connectDB();
  const existingUser = await db.get<User>('SELECT * FROM users where username = ?', username);

  if (existingUser) {
    console.log('User already exist');
    return null;
  }


  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser: User = {
    id: uuidv4(),
      username: username,
      password: hashedPassword
  }
  const result =  await db.run('INSERT INTO users (id, username, password) VALUES (?, ?, ?)', [
        newUser.id,
        newUser.username,
        newUser.password,
    ]);
  return result;
}