import express from 'express';
import dotenv from 'dotenv';
import axios from "axios";
import cors from "cors"

// router
import indexRouter from './routes/index.js';

const app = express();
dotenv.config();

// middleware area
app.use(cors())
app.use(express.json());
app.use('/api/', indexRouter);

// error handling middleware
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'something wrong in server side';
  const data = error.data || 'something wrong';
  res.status(status).json({
    success: false, message, data, stack: error.stack,
  });
});

app.listen(8800, () => {
  console.log('make server backend');
});

