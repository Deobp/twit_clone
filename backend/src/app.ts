import express from 'express';
import cors from 'cors';
import db from './config/db';
import userRoutes from './routes/userRoutes';


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

db.sync({ force: true })
  .then(() => {
    console.log('db sync');
    app.listen(PORT)
  })
  .then(() => console.log('server listening on port:', PORT))
  .catch((error) => {
    console.log(error);
  });