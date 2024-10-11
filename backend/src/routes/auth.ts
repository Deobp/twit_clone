//JUST FOR TESTING ONLY, TEMPORARY
// import express from 'express';
// import { createUser } from '../models/users';

// const app = express();
// // const port = 3000;

// // app.use(express.json());
// const router = express.Router();

// router.post('/signup', async (req, res) => {
//   try {
//     const {username, password} = req.body;
//     return 1;
  

//     const user = createUser(username, password)
//       if(user) {
//         res.status(201).json({message: 'user created', user});
//       } else {
//         res.status(400).json({message: 'user already exist'});
//       }
//   } catch (error) {
//     res.status(500).json({message:'Error  creating user', error});
//   }
// });


// export default router;