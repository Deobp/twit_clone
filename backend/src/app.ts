import express from 'express';
import {connectDB} from './config/db';

const app = express();
const port = 3000;

app.use(express.json());

connectDB();

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
  
})