import React from 'react';

const About = () => {
  return (
    <section id="about" className="p-8 bg-background dark:bg-gray-800 dark:text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p>
            Hi, I'm Sanjeev Veerapandian, a third-year Computer Science Engineering student with a deep passion for full-stack development. I specialize in crafting engaging web applications, using HTML, CSS, JavaScript, and React.js for intuitive front-end experiences, and PHP, Laravel, and MySQL for robust back-end solutions.

            My experience at OGRELIX and KANINI Software Solutions has provided me with hands-on exposure to real-world projects, allowing me to refine my technical skills and collaborate effectively. I am driven by a curiosity for emerging technologies and a commitment to continuous learning and improvement.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Personal Info</h2>
          <ul className="space-y-2 text-lg">
            <li><strong>Birthdate:</strong> May 15, 2004</li>
            <li><strong>Email:</strong> <a href="mailto:sanjeevveerapandian@gmail.com" className="text-primary dark:text-secondary">sanjeevveerapandian@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+919840427250" className="text-primary dark:text-secondary">+91 9840427250</a></li>
            <li><strong>Address:</strong> Chennai, India</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className='mb-4'>
            <strong>Smart Attendance System:</strong> An innovative solution that automatically marks attendance when an employee is detected within 200 meters of the office.
          </p>
          <p>
            <strong>Rural Education Website:</strong> A dynamic platform designed to bridge the educational gap in rural areas by providing access to essential educational resources through an intuitive web interface.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
