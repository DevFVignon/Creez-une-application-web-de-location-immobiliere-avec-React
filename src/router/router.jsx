import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home/'
import Card from '../pages/Card'
import Error from '../pages/ErrorPage'


 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
            <Routes>
                <Route path="/card" element={<Card />} />
                <Route path="/erropage" element={<Error />} />
            </Routes>
                  </Router>
  </React.StrictMode>
);