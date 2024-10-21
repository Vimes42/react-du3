import { useState } from 'react';
import './style.css';

export const Star = ({ value, onSelect }) => {
  const [glowing, setGlowing] = useState(false);
  
  const starClass = glowing
    ? 'rating__star rating__star--on'
    : 'rating__star';

    const handleClick = () => {
      setGlowing(true);
      onSelect(value);
    }
  return (
    <div className={starClass} onClick={handleClick} ></div>
  );
};

