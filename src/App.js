import './App.css';
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
  return (
    <div className="App"> 
    <div className='App-header'>
      <h1>Bienvenue sur mon router</h1>  
      <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/About'>A Propos</Link>
        <Link to='/Contact'>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;