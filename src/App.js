import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Bookview from './pages/BookView';
import ContactUs from './pages/ContactUs';
import Footer from './pages/ContactFooter';
import ContactFooter from './pages/ContactFooter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/book" element={<Bookview />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/footer" element={<ContactFooter />} />
      </Routes>
    </Router>
  );
}

export default App;
