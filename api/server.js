import express from 'express';
import cors from 'cors';
import todoRoutes from './router/todoRouter.js';
import userRoutes from './router/userRouter.js';
import connectDb from './config/dbConnection.js';
import dotenv from 'dotenv';
dotenv.config();

/*global process*/

connectDb();

const app = express();
app.use(
  cors({
    origin: 'https://todolist-juju.netlify.app',
    methods: ['POST', 'GET', 'DELETE', 'PUT'],
    credentials: true,
  })
);
app.use(express.json());

app.use('/api/todo-list', todoRoutes);
app.use('/api/users', userRoutes);

if (process.env.VITE_PORT) {
  app.listen(process.env.VITE_PORT, () => {
    console.log(`Server is running on port ${process.env.VITE_PORT}.`);
  });
}

export default app;
