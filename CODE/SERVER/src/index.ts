import path from 'node:path';
import express from 'express';
import http from 'node:http';
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import 'express-async-errors';
import dotenv from 'dotenv';

import { router } from './router';
import { handleErrors } from './app/middlewares/handleErrors';

dotenv.config(
  {
    path: process.env.NODE_ENV === 'production'
            ? '.env'
            : '.env.development'
  }
  );
const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect(process.env.MONGOOSE || '').then(() => {
  const port = process.env.PORT || 3001;

  app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    next();
  });
  app.use('/', express.static(path.join(__dirname, 'public')));
  app.use('/images', express.static(path.join(__dirname, 'public', 'uploads')));
  app.use('/doc', express.static(path.join(__dirname, 'public', 'doc')));
  app.use(express.json());
  app.use(router);
  app.use(handleErrors);
  server.listen(3001, () => {
    console.log(`Server is running on http://localhost:${port}/`);
  });
})
  .catch((err) => console.log(err));
  