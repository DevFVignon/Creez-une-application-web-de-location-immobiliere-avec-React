import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccommodationPage from '../pages/AccommodationPage/AccommodationPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';

function Rooter(){
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<AccommodationPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    );
  }

export default Rooter