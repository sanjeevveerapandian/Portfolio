import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-[50vh] bg-background text-secondary dark:bg-gray-800 dark:text-white flex items-center justify-center overflow-hidden"
    >
      <img
        src="/Portfolio/public/banner.jpg" // Include the base path here
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
        <div className="mb-16">
          <h1 className="text-4xl">Hello, I am</h1>
          <h2 className="text-6xl font-bold mt-2">Sanjeev Veerapandian</h2>
          <p className="text-2xl mt-2">Full-Stack Developer</p>
        </div>
        <div className="absolute bottom-[1%] flex items-center justify-center w-full z-20">
          <img
            src="/Portfolio/public/profilepic.jpg" // Include the base path here
            alt="Profile"
            className="w-42 h-40 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
