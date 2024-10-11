import express from 'express';
import { createUser } from '../models/users';

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const {username, password} = req.body;

    const user = createUser(username, password)
      if(user) {
        res.status(201).json({message: 'user created', user});
      } else {
        res.status(400).json({message: 'user already exist'});
      }
  } catch (error) {
    res.status(500).json({message:'Error  creating user', error});
  }
});

export default router;