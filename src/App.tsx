import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import WaitlistPage from './pages/WaitlistPage';
import RNApplicationPage from './pages/RNApplicationPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/waitlist" element={<WaitlistPage />} />
      <Route path="/rn-application" element={<RNApplicationPage />} />
    </Routes>
  );
}

export default App;