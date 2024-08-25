import React, { useState, useEffect } from 'react';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 p-4 ${scrolled ? 'bg-primary shadow-lg' : ''} text-background transition-shadow duration-300`}>
      <div className="flex justify-between items-center">
        <div className={`flex space-x-4 ${scrolled ? 'hidden' : 'block'}`}>
          <a href="#home" className="hover:text-accent" style={{color:'#83c5be'}}>Home</a>
          <a href="#about" className="hover:text-accent" style={{color:'#83c5be'}}>About</a>
          <a href="#resume" className="hover:text-accent" style={{color:'#83c5be'}}>Resume</a>
          <a href="#contact" className="hover:text-accent" style={{color:'#83c5be'}}>Contact</a>
        </div>
        <div className={`flex-1 text-center ${scrolled ? 'block' : 'hidden'}`}>
          <h1 className="text-xl font-bold">Sanjeev Veerapandian</h1>
          <p>Full-Stack Developer</p>
        </div>
        <div className="flex items-center space-x-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={darkMode} 
              onChange={toggleDarkMode} 
              className="sr-only" 
            />
            <div 
              className={`w-11 h-6 rounded-full ${darkMode ? 'bg-accent' : 'bg-accent-light'} dark:bg-gray-600`} 
            ></div>
            <div 
              className={`dot absolute left-1 top-1 w-5 h-5 rounded-full transition-transform transform ${darkMode ? 'translate-x-full bg-primary' : 'bg-background'}`}
            ></div>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
