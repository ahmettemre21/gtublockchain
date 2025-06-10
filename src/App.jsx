import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Achievements from './components/Achievements';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Team />
        <Achievements />
        <Events />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App; 