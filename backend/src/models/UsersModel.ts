import { DataTypes, Model, Optional } from 'sequelize';
import { db } from '../config/db'; // Import the initialized db object
import { UserInterface } from '../interfaces/UserInterface';

interface UserCreationAttributes extends Optional<UserInterface, 'id'> {}

export const User  = db.define<Model<UserInterface, UserCreationAttributes>>('User', {
  id: {
    type: DataTypes.UUID,
    toDefaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  
  usernames: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

});

// OLD VERSION --->
// import { db } from "../config/db";
// import bcrypt from "bcrypt";
// import { UserInterface } from "../interfaces/UserInterface";
// import { v4 as uuidv4 } from 'uuid';

// export const createUser = async (
//   username: string,
//   password: string
// ): Promise<UserInterface> => {
//   try {

//     const existingUser = await db.get<UserInterface>(
//       "SELECT * FROM users where username = ?",
//       username
//     );

//     if (existingUser) {
//       console.log("User already exist");
//       return null;
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser: UserInterface = {
//       id: uuidv4(),
//       username: username,
//       password: hashedPassword,
//     };

//     const result = await db.run(
//       "INSERT INTO users (id, username, password) VALUES (?, ?, ?)",
//       [newUser.id, newUser.username, newUser.password]
//     );

//     return newUser;

//   } catch (error) {
//     console.error('Error creating user:', error);
//     return null;
//   }
// };
