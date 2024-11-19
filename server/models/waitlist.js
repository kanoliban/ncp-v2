import mongoose from 'mongoose';

const waitlistSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  zipCode: {
    type: String,
    trim: true
  },
  careType: {
    type: String,
    trim: true
  },
  referralSource: {
    type: String,
    required: true,
    trim: true
  },
  additionalInfo: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const WaitlistEntry = mongoose.model('WaitlistEntry', waitlistSchema);