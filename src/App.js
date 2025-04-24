import React from 'react';

import './App.css';
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About.js';
import Error from './Components/Error.js';
import Housing from './Components/Housing.js';
import Home from './Components/Home.js';
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>




function App() {

  return (
    <Router>
    <div className='Body'>
      <Header/>
     
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/housing/:id" element={<Housing/>} />
      <Route path="*" element={<Error />} />
      </Routes>
    
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
