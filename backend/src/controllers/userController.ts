import { Request, Response, NextFunction } from 'express';
const {User} = require('../models/UsersModel')

export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log('request body from createUser:', req.body);
    const {id, username, password} = req.body;
    if(!id || !username || !password) {
      res.status(400).json({message:'error with passing id / username/ pass'});
      return null;
    }

    const newUser = await User.create({username: username, password});
    if (!newUser) {
      res.status(400).json({message:'problem creating user'});
    }
    res.status(200).json({message: `user created: ${newUser}`});
  } catch (error) {
    next(error);
  }
}