import { Request, Response, NextFunction } from 'express';
const { User } = require('../models/UsersModel');

export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log('request body from createUser:', req.body);
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ message: 'Username and password are required' });
      return;
    }

    const newUser = await User.create({ username, password });
    if (!newUser) {
      res.status(400).json({ message: 'Problem creating user' });
      return;
    }
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    next(error);
  }
};