import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from '../pages/Card';
import ErrorPage from '../pages/ErrorPage'; // Importez également votre page d'erreur
import About from '../pages/About';
import Home from '../pages/Home';
import Header from '../components/Header';

function Rooter(){
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/card" element={<Card />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    );
  }

export default Rooter