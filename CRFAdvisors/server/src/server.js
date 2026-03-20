import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import contactRoutes from '../routes/contactRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Route Handlers
app.use(contactRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});