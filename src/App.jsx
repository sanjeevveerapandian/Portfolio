import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Home />
      <About />
      <Resume />
      <Contact />
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2024 Sanjeev Veerapandian. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
