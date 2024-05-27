import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Card from './pages/Card';
import ErrorPage from './pages/ErrorPage'; // Importez également votre page d'erreur
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/card" element={<Card />} />
        <Route path="*" element={<ErrorPage />} />  
      </Routes>
    </Router>
  </React.StrictMode>,
  // document.getElementById('root')
);
