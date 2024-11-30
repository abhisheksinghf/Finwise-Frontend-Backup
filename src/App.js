import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Bookview from './pages/BookView';
import ContactUs from './pages/ContactUs';
import ContactFooter from './pages/ContactFooter';
import Navbar from './pages/Navbar';
import Button from './pages/CallToAction';
import AboutUs from './pages/AboutUs';
import Values from './pages/Values';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cta" element={<Button />} />
        <Route path="/book" element={<Bookview />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/footer" element={<ContactFooter />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
