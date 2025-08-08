import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGODB_URL || '';

mongoose.connect(mongoUrl, {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error: any) => {
  console.error('Error connecting to MongoDB:', error);
});

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
