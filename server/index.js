import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { WaitlistEntry } from './models/waitlist.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nailcare-pro')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/waitlist', async (req, res) => {
  try {
    const entry = new WaitlistEntry(req.body);
    await entry.save();
    res.status(201).json({ message: 'Successfully added to waitlist', entry });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/waitlist/count', async (req, res) => {
  try {
    const count = await WaitlistEntry.countDocuments();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});