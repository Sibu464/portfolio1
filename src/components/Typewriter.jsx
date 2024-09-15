import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex += 1;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [text, speed]);

  return <div>{displayedText}</div>;
};

export default Typewriter;
