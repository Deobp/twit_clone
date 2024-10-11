import express from 'express';
const db = require('./config/db');
const app = express();
const PORT = 3000;
app.use(express.json());

const userRouter = require('./routes/users')

app.use('/users', userRouter);

db
  .authenticate()
  .then(() => db.sync())
  .then(() => {
    console.log('db sync');
    app.listen(PORT)
  })
  .then(() => console.log('server listening on port:', PORT))
  .catch((error) => {
    console.log(error);
  });
