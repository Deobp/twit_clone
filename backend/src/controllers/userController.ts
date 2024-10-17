import { Request, Response, NextFunction } from 'express';
const { User } = require('../models/UsersModel');

export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log('request body from createUser:', req.body);
    const { userName, password } = req.body;
    if (!userName || !password) {
      res.status(400).json({ message: 'Username and password are required' });
      return;
    }

    const newUser = await User.create({ userName, password });
    if (!newUser) {
      res.status(400).json({ message: 'Problem creating user' });
      return;
    }
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    next(error);
  }
};