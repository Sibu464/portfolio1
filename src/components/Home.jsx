import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll'; // Ensure you're importing this
import Typewriter from './Typewriter';
import FallingLetter from './FallingLetter';
import './App.css';

const Home = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    // Toggle nav state
    setNav(!nav);
  };
  const text = "Sibusiso Sibiya";
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1  className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
     
      {text.split('').map((letter, index) => (
        <FallingLetter 
          key={index} 
          letter={letter} 
          delay={index * 200} // Delay each letter falling
        />
      ))}
 
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          {/* Link for smooth scroll and button toggle */}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Work Section to Scroll To */}
      <div
        name='work'
        className={`w-full h-screen bg-[#0a192f] flex justify-center items-center ${nav ? 'visible' : 'hidden'}`}
      >
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          My Work Section
        </h1>
      </div>
    </div>
  );
};

export default Home;
