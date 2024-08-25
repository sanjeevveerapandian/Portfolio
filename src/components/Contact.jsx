import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-background dark:bg-gray-800 dark:text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <div className="text-center mb-6">
        <p className="text-lg">
          Email: <a href="mailto:sanjeevveerapandian@gmail.com" className="text-primary dark:text-secondary">sanjeevveerapandian@gmail.com</a>
        </p>
        <p className="text-lg">
          Phone: <a href="tel:+919840427250" className="text-primary dark:text-secondary">+91 9840427250</a>
        </p>
      </div>
      <div className="flex space-x-4">
        <a 
          href="https://www.linkedin.com/in/sanjeev-veerapandian-43692a243/" 
          className="text-primary dark:text-secondary hover:underline flex items-center space-x-2" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-6 h-6" />
          <span>LinkedIn</span>
        </a>
        <a 
          href="https://github.com/sanjeevveerapandian" 
          className="text-primary dark:text-secondary hover:underline flex items-center space-x-2" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub className="w-6 h-6" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
