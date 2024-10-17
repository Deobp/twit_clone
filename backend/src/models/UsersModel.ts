import { useState } from 'react';
import { DataTypes, Optional } from 'sequelize';
import  db  from '../config/db';
import { UserInterface } from '../interfaces/UserInterface';

interface UserCreationAttributes extends Optional<UserInterface, 'id'> {}

export const User = db.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  
  username: {
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
