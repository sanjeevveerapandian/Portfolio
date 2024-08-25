import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="p-8 bg-background dark:bg-gray-800 dark:text-white">
      <div className="space-y-8">
        {/* Expertise Section */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Expertise</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Full-Stack Development:</strong> Proficient in both front-end and back-end technologies to build dynamic, responsive web applications.</li>
            <li><strong>Front-End Design:</strong> Skilled in creating intuitive and engaging user interfaces with HTML, CSS, JavaScript, and React.js.</li>
            <li><strong>Back-End Development:</strong> Experienced in developing robust server-side applications using PHP, Laravel, and managing databases with MySQL.</li>
            <li><strong>API Integration:</strong> Expertise in integrating third-party services and APIs to enhance application functionality.</li>
            <li><strong>Responsive Design:</strong> Capable of designing web applications that provide a seamless experience across various devices and screen sizes.</li>
            <li><strong>React Native Development:</strong> Experience in building cross-platform mobile applications using React Native, delivering native performance and look-and-feel.</li>
            <li><strong>Version Control:</strong> Proficient in using Git for version control and collaboration in development projects.</li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Panimalar Engineering College</h3>
              <p>Bachelor of Engineering in Computer Science</p>
              <p>Grade: 7 CGPA (2022 - 2026)</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Zion Matric Hr Sec School</h3>
              <p>High School Diploma</p>
              <ul>
                <li>10th Grade: 88.4%</li>
                <li>12th Grade: 78.6%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-primary text-white p-2 rounded-md text-center">JavaScript</div>
            <div className="bg-primary text-white p-2 rounded-md text-center">React.js</div>
            <div className="bg-primary text-white p-2 rounded-md text-center">React Native</div>
            <div className="bg-primary text-white p-2 rounded-md text-center">Tailwind CSS</div>
            <div className="bg-primary text-white p-2 rounded-md text-center">Node.js</div>
            <div className="bg-primary text-white p-2 rounded-md text-center">Express.js</div>
            <div className="bg-primary text-white p-2 rounded-md text-center">PHP</div>
            <div className="bg-primary text-white p-2 rounded-md text-center">Laravel</div>
            <div className="bg-primary text-white p-2 rounded-md text-center">MySQL</div>
            <div className="bg-primary text-white p-2 rounded-md text-center">Python</div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-primary text-white p-2 rounded-md text-center">Tamil</div>
            <div className="bg-primary text-white p-2 rounded-md text-center">English</div>
            <div className="bg-primary text-white p-2 rounded-md text-center">Hindi</div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <a
          href="/Resume_Sanjeev.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-primary text-black px-6 py-3 rounded-md shadow-md hover:bg-secondary transition duration-300"
          style={{color:'black'}}
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
