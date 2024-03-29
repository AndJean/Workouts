import dotenv from 'dotenv';
import server from './config/server.js';
import mongoose from 'mongoose';

dotenv.config();

const port = process.env.PORT1 || process.env.PORT2;

server.listen(port, () => {
  console.log("Server is running on port " + port);
});