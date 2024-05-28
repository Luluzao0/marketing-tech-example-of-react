
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => (
  <Router>
    <CssBaseline />
    <Header />
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/features" element={<Features />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
