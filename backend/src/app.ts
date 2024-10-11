import express from 'express';
import {connectDB} from './config/db';
import router from './routes/auth';

const app = express();
const port = 3000;

app.use(express.json());

connectDB();

app.use('/api/signup', router);
app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
  
})