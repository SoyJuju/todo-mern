import express from 'express';
import cors from 'cors';
import todoRoutes from './api/todoRouter.js';
import userRoutes from './api/userRouter.js';
import connectDb from './config/dbConnection.js';
import dotenv from 'dotenv';
dotenv.config();

/*global process*/

connectDb();

const app = express();
app.use(
  cors({
    origin: ['https://todo-website-q4i27sngh-soyjuju.vercel.app'],
    methods: ['POST', 'GET', 'DELETE', 'PUT'],
    credentials: true,
  })
);
app.use(express.json());

app.use('/', (req, res) => {
  res.json('Hello');
});
app.use('/api/todo-list', todoRoutes);
app.use('/api/users', userRoutes);

if (process.env.VITE_PORT) {
  app.listen(process.env.VITE_PORT, () => {
    console.log(`Server is running on port ${process.env.VITE_PORT}.`);
  });
}

export default app;
