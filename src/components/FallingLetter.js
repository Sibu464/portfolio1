import React, { useEffect, useState } from 'react';
import './FallingLetter.css';

const FallingLetter = ({ letter, delay }) => {
  const [falling, setFalling] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFalling(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={`letter ${falling ? 'falling' : ''}`}>
      {letter === ' ' ? '\u00A0' : letter} {/* Handle space as non-breaking space */}
    </span>
  );
};

export default FallingLetter;
