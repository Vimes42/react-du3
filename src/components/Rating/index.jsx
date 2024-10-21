import { useState } from 'react';
import { Star } from '../Star';
import './style.css';

export const Rating = () => {
  const [rating, setRating] = useState(0);
  
  return (
    <div className="rating">
      <div className="rating__value">{rating}</div>
      <div className="rating__stars">
        <Star value={1} onSelect={setRating} />
        <Star value={2} onSelect={setRating} />
        <Star value={3} onSelect={setRating} />
        <Star value={4} onSelect={setRating} />
        <Star value={5} onSelect={setRating} />
      </div>
    </div>
  );
};
