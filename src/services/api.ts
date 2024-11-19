import axios from 'axios';

const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://nailcare-pro-api.onrender.com/api'  // Update this with your Render URL
  : 'http://localhost:5000/api';

export interface WaitlistFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  careType: string;
  referralSource: string;
  additionalInfo: string;
}

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const waitlistService = {
  async submit(data: WaitlistFormData) {
    try {
      const response = await api.post('/waitlist', data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.error || 'Failed to submit waitlist form');
      }
      throw new Error('An unexpected error occurred');
    }
  },

  async getCount() {
    try {
      const response = await api.get('/waitlist/count');
      return response.data.count;
    } catch (error) {
      console.error('Error fetching waitlist count:', error);
      return 0;
    }
  },
};